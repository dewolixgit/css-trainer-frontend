import { observer } from 'mobx-react';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { TabBar } from 'components';
import { ROUTES } from 'config/router';
import { Achievements } from 'pages/Achievements';
import { Auth } from 'pages/Auth';
import { ExerciseSet } from 'pages/ExerciseSet';
import { Topic } from 'pages/Topic';
import { Topics } from 'pages/Topics';
import { TrialExerciseSet } from 'pages/TrialExerciseSet';
import { useRootStore } from 'stores/globals';

import { useAppLoad } from './utils';

const Root: React.FC = () => {
  const { userStore } = useRootStore();
  const { loadedSuccessfully, loadedWithError } = useAppLoad();

  if (loadedWithError) {
    return <div>Ошибка</div>;
  }

  if (!loadedSuccessfully) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <Routes>
        {userStore.isAuthenticated ? (
          <>
            <Route path={ROUTES.root.mask} element={<Navigate to={ROUTES.topics.mask} replace />} />
            <Route path={ROUTES.topics.mask} element={<Topics />} />
            <Route path={ROUTES.topics.topic.mask} element={<Topic />} />
            <Route path={ROUTES.exerciseSet.mask} element={<ExerciseSet />} />
            <Route path={ROUTES.achievements.mask} element={<Achievements />} />
            <Route path="*" element={<Navigate to={ROUTES.topics.mask} replace />} />
          </>
        ) : (
          <>
            <Route path={ROUTES.root.mask} element={<Navigate to={ROUTES.auth.mask} replace />} />
            <Route path={ROUTES.auth.mask} element={<Auth />} />
            <Route path={ROUTES.trialSet.mask} element={<TrialExerciseSet />} />
            <Route path="*" element={<Navigate to={ROUTES.auth.mask} replace />} />
          </>
        )}
      </Routes>
      <TabBar />
    </>
  );
};

// Todo: ErrorBoundary
export default observer(Root);
