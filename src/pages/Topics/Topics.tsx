import * as React from 'react';

import { Button, TopicCard } from 'components/ui';

const Topics: React.FC = () => {
  return (
    <div>
      <div>Темы</div>
      <Button>Кнопка</Button>
      <TopicCard
        completed
        name="Тема"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, ultricies felis"
        backgroundImage="https://loremflickr.com/500/500/cat"
        link="/"
      />
    </div>
  );
};

export default Topics;
