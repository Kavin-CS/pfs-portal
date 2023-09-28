import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import ThemeProvider from '../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import CommonTT from '../CommonTT/index';
import ClassAndSubjectTT from '../ClassAndSubjectTT/index';
import TTHeader from '../TTHeader';
import WeekPicker from '../WeekPicker';
import TTGrid from '../TTGrid';

describe('<CommonTT />', () => {
  it('CommonTT should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <CommonTT />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<ClassAndSubjectTT />', () => {
  it('ClassAndSubjectTT should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <ClassAndSubjectTT />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<TTHeader />', () => {
  it('TTHeader should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <TTHeader />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<WeekPicker />', () => {
  it('WeekPicker should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <WeekPicker />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<TTGrid />', () => {
  it('TTGrid should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <TTGrid />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});
