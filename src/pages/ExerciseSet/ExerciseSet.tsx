import { observer } from 'mobx-react';
import * as React from 'react';

import { Layout } from './Layout';

const ExerciseSet: React.FC = () => {
  return <Layout />;
};

export default observer(ExerciseSet);
