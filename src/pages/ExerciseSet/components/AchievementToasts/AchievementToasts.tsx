import { observer } from 'mobx-react';
import * as React from 'react';

import { AchievementToast } from 'components/AchievementToast';
import { BaseToastViewport } from 'components/ui/BaseToast';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

const AchievementToasts: React.FC = () => {
  const store = useExerciseSetPageStore();

  const achievementsController = store.taskProgress.value?.achievementsController;

  if (!achievementsController) {
    return null;
  }

  return (
    <>
      {achievementsController.achievements.value.map((toast) => (
        <AchievementToast
          key={toast.data.id}
          achievement={toast.data}
          open={toast.open.value}
          onOpenChange={toast.open.changeValue}
        />
      ))}
      <BaseToastViewport />
    </>
  );
};

export default observer(AchievementToasts);
