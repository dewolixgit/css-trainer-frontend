import * as React from 'react';

import { ThematicLoader } from 'components/ui/loaders';
import { LoaderSizeEnum } from 'config/components/loaders';
import { ThematicLoaderTypeEnum } from 'config/components/loaders/thematicLoader';

import './Splash.module.scss';

const Splash: React.FC = () => {
  return (
    <div styleName="root">
      <ThematicLoader type={ThematicLoaderTypeEnum.sword} size={LoaderSizeEnum.xxxxl} />
    </div>
  );
};

export default Splash;
