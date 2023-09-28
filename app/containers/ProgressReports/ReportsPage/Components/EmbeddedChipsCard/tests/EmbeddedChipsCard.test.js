import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import EmbeddedChipsCard from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Embedded-Chips-Card', () => {
  const div = document.createElement('div');
  it('Embedded Chips Card renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <EmbeddedChipsCard />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <EmbeddedChipsCard />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('embedded-chips-card')).toMatchSnapshot();
  });
  it('Ratings status Card renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <EmbeddedChipsCard boldText="bold" boldSubtext="subtext" />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <EmbeddedChipsCard
            title="Title"
            chipData={[{ label: 'Hindi', value: 'hindi' }]}
          />
        </Router>
      </ThemeProvider>
    );

    const title = queryByTestId('chips-card-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Title');

    const label = queryByTestId('chips-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toBe('Hindi');
  });
});
