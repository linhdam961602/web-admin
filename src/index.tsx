import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/store';
import ThemeConfig from 'theme';
import LanguageProvider from 'containers/LanguageProvider';
import { NotificationContainer } from 'containers/Notification';
import { translationMessages } from './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingContainer from 'containers/LoadingContainer';
import AppContainer from 'containers/AppContainer';
import LocalizationProvider from 'containers/LocalizationProvider';

const store = configureStore;

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = (messages: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <LanguageProvider messages={messages}>
            <LocalizationProvider>
              <ThemeConfig>
                <NotificationContainer />
                <AppContainer>
                  <LoadingContainer>
                    <App />
                  </LoadingContainer>
                </AppContainer>
              </ThemeConfig>
            </LocalizationProvider>
          </LanguageProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', './App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

render(translationMessages);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
