import * as React from 'react';

import { setPseudoClassElementT } from 'models/exersices/SetPseudoClassElement/translations';
import { SetPseudoClassElementUtils } from 'models/exersices/SetPseudoClassElement/utils';

import { Root, Table } from './SetPseudoClassElementPartOne.styles';

const SetPseudoClassElementPartOne: React.FC = () => {
  return (
    <Root>
      <Table
        $tableType={1}
        $key={1}
        alt={setPseudoClassElementT().tableImageAlt}
        className={SetPseudoClassElementUtils.CLASSNAMES.partOne.table}
      />
      <Table
        $tableType={2}
        $key={2}
        alt={setPseudoClassElementT().tableImageAlt}
        className={SetPseudoClassElementUtils.CLASSNAMES.partOne.table}
      />
      <Table
        $tableType={2}
        $key={3}
        alt={setPseudoClassElementT().tableImageAlt}
        className={SetPseudoClassElementUtils.CLASSNAMES.partOne.table}
      />
      <Table
        $tableType={1}
        $key={4}
        alt={setPseudoClassElementT().tableImageAlt}
        className={SetPseudoClassElementUtils.CLASSNAMES.partOne.table}
      />
    </Root>
  );
};

export default React.memo(SetPseudoClassElementPartOne);
