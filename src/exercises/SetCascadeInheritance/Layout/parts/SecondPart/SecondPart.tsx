import cn from 'classnames';
import * as React from 'react';

import { TaskIds } from '../../../../types';
import { SetCascadeInheritance } from '../../../utils';

import * as s from './SecondPart.styles';

type Props = {
  taskId: number;
};

const SecondPart: React.FC<Props> = ({ taskId }) => {
  const mushroomClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.mushroomElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.mushroomElement.edible,
        SetCascadeInheritance.CLASSNAMES.partSecond.mushroomElement.ground
      ),
    []
  );

  const redBerriesClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.redBerriesElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.redBerriesElement.red,
        SetCascadeInheritance.CLASSNAMES.partSecond.redBerriesElement.edible,
        SetCascadeInheritance.CLASSNAMES.partSecond.redBerriesElement.ground
      ),
    []
  );

  const purpleBerriesClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.purpleBerriesElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.purpleBerriesElement.purple,
        SetCascadeInheritance.CLASSNAMES.partSecond.purpleBerriesElement.edible,
        SetCascadeInheritance.CLASSNAMES.partSecond.purpleBerriesElement.ground
      ),
    []
  );

  const redToxicBerriesClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.redToxicBerriesElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.redToxicBerriesElement.red,
        SetCascadeInheritance.CLASSNAMES.partSecond.redToxicBerriesElement.toxic,
        SetCascadeInheritance.CLASSNAMES.partSecond.redToxicBerriesElement.ground
      ),
    []
  );

  const toxicMushroomClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.toxicMushroomElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.toxicMushroomElement.toxic,
        SetCascadeInheritance.CLASSNAMES.partSecond.toxicMushroomElement.ground,
        SetCascadeInheritance.CLASSNAMES.partSecond.toxicMushroomElement.red
      ),
    []
  );

  const herbsClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.herbsElement.root,
        SetCascadeInheritance.CLASSNAMES.partSecond.herbsElement.edible,
        SetCascadeInheritance.CLASSNAMES.partSecond.herbsElement.ground
      ),
    []
  );

  const cloverClassNames = React.useMemo(
    () =>
      cn(
        SetCascadeInheritance.CLASSNAMES.partSecond.cloverElement.ground,
        SetCascadeInheritance.CLASSNAMES.partSecond.cloverElement.herbs
      ),
    []
  );

  return (
    <s.Root className={SetCascadeInheritance.CLASSNAMES.root}>
      <s.Jar />
      <s.Bag />
      <s.Bin />
      {taskId === TaskIds.task26 && <s.Mushroom className={mushroomClassNames} />}
      {taskId === TaskIds.task27 && (
        <>
          <s.RedBerries $key={1} className={redBerriesClassNames} />
          <s.RedToxicBerries $key={1} className={redToxicBerriesClassNames} />
          <s.ToxicMushroom $key={1} className={toxicMushroomClassNames} />
          <s.Herbs $key={1} className={herbsClassNames} />
        </>
      )}
      {taskId === TaskIds.task28 && <s.PurpleBerries className={purpleBerriesClassNames} />}
      {taskId === TaskIds.task29 && <s.RedBerries className={redBerriesClassNames} />}
      {taskId === TaskIds.task30 && (
        <s.Clover id={SetCascadeInheritance.ID.partSecond.clover} className={cloverClassNames} />
      )}
      {taskId === TaskIds.task31 && (
        <>
          <s.ToxicMushroom $key={2} className={toxicMushroomClassNames} />
          <s.Mushroom $key={1} className={mushroomClassNames} />
          <s.ToxicMushroom $key={3} className={toxicMushroomClassNames} />
          <s.Mushroom $key={2} className={mushroomClassNames} />
          <s.ToxicMushroom $key={4} className={toxicMushroomClassNames} />
          <s.Mushroom $key={3} className={mushroomClassNames} />
        </>
      )}
      {taskId === TaskIds.task32 && (
        <s.Bucket className={SetCascadeInheritance.CLASSNAMES.partSecond.bucket}>
          <s.Mushroom className={mushroomClassNames} />
          <s.Mushroom className={mushroomClassNames} />
          <s.Mushroom className={mushroomClassNames} />
        </s.Bucket>
      )}
      {taskId === TaskIds.task33 && (
        <>
          <s.Mushroom $key={1} className={mushroomClassNames} />
          <s.Mushroom $key={2} className={mushroomClassNames} />
          <s.Herbs $key={1} className={herbsClassNames} />
          <s.Herbs $key={2} className={herbsClassNames} />
        </>
      )}
      {taskId === TaskIds.task34 && <s.PurpleBerries className={purpleBerriesClassNames} />}
      {taskId === TaskIds.task35 && (
        <s.Clover id={SetCascadeInheritance.ID.partSecond.clover} className={cloverClassNames} />
      )}
    </s.Root>
  );
};

export default SecondPart;
