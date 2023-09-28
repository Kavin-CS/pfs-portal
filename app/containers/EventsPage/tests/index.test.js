import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import EventsPage from '../index';

describe('<EventsPage />', () => {
  it('Event should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <EventsPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
