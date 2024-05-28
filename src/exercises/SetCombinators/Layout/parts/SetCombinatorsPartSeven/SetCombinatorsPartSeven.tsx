import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartSeven.styles';

const SetCombinatorsPartSeven: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Book
        $key={2}
        $size="large"
        className={SetCombinatorsUtils.CLASSNAMES.partSeven.book}
        {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
      />
      <s.Book $key={1} $size="large" className={SetCombinatorsUtils.CLASSNAMES.partSeven.book} />
      <s.Book
        $key={3}
        $size="large"
        className={SetCombinatorsUtils.CLASSNAMES.partSeven.book}
        {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
      />
      <s.Book
        $key={3}
        $size="large"
        className={SetCombinatorsUtils.CLASSNAMES.partSeven.book}
        {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(true)}
      />
      <s.Box
        className={SetCombinatorsUtils.CLASSNAMES.partSeven.box}
        {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
      >
        <s.Book $key={1} $size="medium" className={SetCombinatorsUtils.CLASSNAMES.partSeven.book} />
        <s.Book
          $key={3}
          $size="medium"
          className={SetCombinatorsUtils.CLASSNAMES.partSeven.book}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
        />
      </s.Box>
      <s.Book
        $key={2}
        $size="large"
        className={SetCombinatorsUtils.CLASSNAMES.partSeven.book}
        {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(true)}
      />
      <s.Book $key={1} $size="large" className={SetCombinatorsUtils.CLASSNAMES.partSeven.book} />
    </s.Root>
  );
};

export default SetCombinatorsPartSeven;
