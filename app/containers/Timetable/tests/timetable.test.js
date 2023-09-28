import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import ThemeProvider from '../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import Timetable from '../index';

describe('<Timetable />', () => {
  it('Timetable should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ThemeProvider>
          <Router>
            <Timetable />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});
