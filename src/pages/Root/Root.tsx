import { observer } from 'mobx-react';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { ROUTES } from 'config/router';
import { Auth } from 'pages/Auth';
import { ExerciseSet } from 'pages/ExerciseSet';
import { Topic } from 'pages/Topic';
import { Topics } from 'pages/Topics';
import { TrialExerciseSet } from 'pages/TrialExerciseSet';

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
      {/* Todo: делать редирект на основе состояния авторизации */}
      <Route path={ROUTES.root.mask} element={<Navigate to={ROUTES.auth.mask} replace />} />
      <Route path={ROUTES.auth.mask} element={<Auth />} />
      <Route path={ROUTES.trialSet.mask} element={<TrialExerciseSet />} />
      <Route path={ROUTES.topics.mask} element={<Topics />} />
      <Route path={ROUTES.topics.topic.mask} element={<Topic />} />
      <Route path={ROUTES.exerciseSet.mask} element={<ExerciseSet />} />
      {/* Todo: редирект */}
      <Route path="*" Component={() => <div>oops</div>} />
    </Routes>
  );
};

// Todo: ErrorBoundary
export default observer(Root);
