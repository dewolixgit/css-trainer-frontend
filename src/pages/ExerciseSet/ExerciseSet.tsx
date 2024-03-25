import * as React from 'react';

import { CodeContainer } from 'components/ui';

const ExerciseSet: React.FC = () => {
  return (
    <div>
      Набор упражнений
      <CodeContainer linesCount={10} lineCounterTheme="secondary" mainTheme={null} />
    </div>
  );
};

export default ExerciseSet;
