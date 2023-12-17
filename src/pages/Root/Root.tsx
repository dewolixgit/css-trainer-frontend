import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Routes } from 'react-router';

import { useAppLoad } from './utils';

const Root: React.FC = () => {
  const { loadedSuccessfully, loadedWithError } = useAppLoad();

  if (loadedWithError) {
    return <div>Ошибка</div>;
  }

  if (!loadedSuccessfully) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route path="/" Component={() => <div>hello world</div>} />
      <Route path="*" Component={() => <div>oops</div>} />
    </Routes>
  );
};

// Todo: ErrorBoundary
export default observer(Root);
