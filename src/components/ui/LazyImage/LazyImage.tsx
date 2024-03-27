import { observer } from 'mobx-react';
import * as React from 'react';

import { MetaRendererType } from 'config/components/lazyImage';
import { MetaModel } from 'models/MetaModel';
import { sleep } from 'utils/async';

export type LazyImageProps = {
  // Делаю alt и src обязательными
  alt: string;
  src: string;
  isError?: boolean;
  unmountOnError?: boolean;
  hideImgUntilLoaded?: boolean;
  onSuccessLoad?: VoidFunction;
  onErrorLoad?: VoidFunction;
  onMount?: VoidFunction;
  loader?: MetaRendererType;
  error?: MetaRendererType;
  container?: (children: React.ReactNode, isLoading: boolean, isError: boolean) => JSX.Element;
  stateChangingDelay?: number;
  className?: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError' | 'alt' | 'src'>;

/**
 * Компонент на основе img-тэга. Загружает переданную картинку
 * и отрисовывает компонент загрузки или ошибки в зависимости
 * от атрибутов onLoad и onError элемента img. Рендерит массив элементов:
 * картинка, компонент загрузки, компонент ошибки.
 * @param isError принудительно ставит состояние ошибки (img размонтируется)
 * @param unmountOnError размонтировать ли img при ошибке (не влияет на isError)
 * @param className класс (стиль), прокидывается в img
 * @param src ссылка на загружаемую картинку
 * @param onSuccessLoad колбэк, вызываемый после всех внутренних операций
 * в обработчике onLoad. Внимание: если картинка сохранена в кеше,
 * img.onLoad всё равно вызывается, хоть и выполняется мгновенно
 * @param onErrorLoad аналогичен пропсу onSuccessLoad, но вызывается в onError
 * @param loader колбэк, принимающий в себя состояние загрузки,
 * который должен отрисовать вёрстку лоадера
 * @param error аналогичен пропсу loader, только отрисовать нужно ошибку
 * @param container колбэк, принимающий массив из картинки, загрузчика
 * и вёрстки ошибки как children, возвращающий children в некоторой обёртке
 */
const LazyImage: React.FC<LazyImageProps> = ({
  className,
  src,
  alt,
  onSuccessLoad,
  onErrorLoad,
  onMount,
  loader,
  error,
  container,
  stateChangingDelay = 0,
  isError = false,
  unmountOnError = true,
  hideImgUntilLoaded = true,
  ...imgAttributes
}) => {
  // Реф используется для определения обработчиков у img
  // (установка обработчиков напрямую в img) приводит к тому,
  // что они не вызываются
  const ref = React.useRef<HTMLImageElement | null>(null);
  const [meta] = React.useState(() => new MetaModel());

  React.useEffect(() => {
    meta.setLoadedStartMeta();

    if (ref.current) {
      ref.current.onload = async () => {
        if (stateChangingDelay) {
          await sleep(stateChangingDelay);
        }

        meta.setLoadedSuccessMeta();
        onSuccessLoad?.();
      };

      ref.current.onerror = async () => {
        if (stateChangingDelay) {
          await sleep(stateChangingDelay);
        }

        meta.setLoadedErrorMeta();
        onErrorLoad?.();
      };

      ref.current.src = src;
    }

    onMount?.();
  }, []);

  // Размонтировать картинку (img), если принудительно задали ошибку,
  // либо если произошла ошибка и из-за этого нужно размонтировать
  const unmountImg = React.useMemo(
    () => isError || (meta.isError && unmountOnError),
    [isError, unmountOnError, meta.isError]
  );

  const body = (
    <>
      {!unmountImg && (
        <img
          ref={ref}
          className={className}
          alt={alt}
          style={
            // При виртуализации это помогает скрыть картинку
            // в процессе загрузки, которую видно за переходами
            // между состояниями загрузки и ошибки
            hideImgUntilLoaded && !meta.isLoaded
              ? {
                  display: 'none',
                }
              : undefined
          }
          {...imgAttributes}
        />
      )}
      {loader?.(meta.isLoading, meta.isError)}
      {isError ? error?.(false, true) : error?.(meta.isLoading, meta.isError)}
    </>
  );

  if (container) {
    return container(body, meta.isLoading, meta.isError);
  }

  return body;
};

export default observer(LazyImage);
