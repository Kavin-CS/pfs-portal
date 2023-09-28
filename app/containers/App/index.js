/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import MainLayout from '../MainLayout/Loadable';
import GlobalStyle from '../../global-styles';
import {
  getUserDetails,
  getUserChangeLang,
} from '../../utils/helpers/storageHelper';
import ThemeProvider from '../../utils/themeProvider';

import CloseTab from '../HomePage/closeTab';
import './styles.scss';
import {
  getAxiosInstance,
  getConfig,
  getIntegrationInstance,
  getPaymentInstance,
} from '../../utils/ApiService';
import ConfigContext from '../../utils/helpers/configHelper';
import KenLoader from '../../components/KenLoader';
import Routes from '../../utils/routes.json';
import { useTranslation } from 'react-i18next';
import { messaging } from '../../init-fcm';
import { useAppContext } from '../../utils/contextProvider/AppContext';

export default function App() {
  const [config, setConfig] = React.useState();
  const { i18n } = useTranslation();
  const userLang = getUserChangeLang();

  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    getConfig()
      .then(res => {
        dispatch({ type: 'updateConfig', value: res[0]?.config });
        getAxiosInstance(res);
        getPaymentInstance(res);
        getIntegrationInstance(res);
        setConfig(res[0].config);
        if (userLang) {
          i18n.changeLanguage(userLang);
        } else if (
          res[0]?.config?.translation?.enabled &&
          res[0]?.config?.translation?.default
        ) {
          i18n.changeLanguage(res[0]?.config?.translation?.default);
        }
      })
      .catch(err => {
        console.log('error in config', err);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (messaging) {
      messaging
        .requestPermission()
        .then(async function () {
          const token = await messaging.getToken();
          console.log(token);
        })
        .catch(function (err) {
          console.log('Unable to get permission to notify.', err);
        });
      navigator.serviceWorker.addEventListener('message', message =>
        console.log(message)
      );
    }
  }, [messaging]);

  return (
    <div>
      {!state?.config ? (
        <KenLoader />
      ) : (
        <ConfigContext.Provider value={{ config: config }}>
          <ThemeProvider>
            <div>
              <Switch>
                {/* <Route exact path="/" component={LoginPage} /> */}
                <Route exact path={`/${Routes.login}`} component={LoginPage} />
                <Route
                  exact
                  path={`/${Routes.closetab}`}
                  render={routerProps => <CloseTab {...routerProps} />}
                />

                <Route
                  path="/"
                  render={renderProps => {
                    return getUserDetails() ? (
                      <MainLayout {...renderProps} />
                    ) : (
                      <LoginPage {...renderProps} />
                    );
                  }}
                />

                <Route component={NotFoundPage} />
              </Switch>
              <GlobalStyle />
            </div>
          </ThemeProvider>
        </ConfigContext.Provider>
      )}
    </div>
  );
}
