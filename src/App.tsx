import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Root } from 'pages/Root';
import { stores } from 'stores/globals';

import './App.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider {...stores}>
        <div styleName="flex">
          <Root />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
