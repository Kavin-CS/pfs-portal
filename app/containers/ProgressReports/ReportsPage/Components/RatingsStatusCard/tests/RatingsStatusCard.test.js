import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import RatingsStatusCard from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Ratings-Status-Card', () => {
  const div = document.createElement('div');
  it('Ratings Status Card renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <RatingsStatusCard />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <RatingsStatusCard />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('ratings-status-card')).toMatchSnapshot();
  });
  it('Ratings status Card renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <RatingsStatusCard boldText="bold" boldSubtext="subtext" />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <RatingsStatusCard
            title="Title"
            boldText="bold"
            boldSubtext="subtext"
          />
        </Router>
      </ThemeProvider>
    );

    const title = queryByTestId('card-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Title');

    const bold = queryByTestId('card-boldText');
    expect(bold).toBeTruthy();
    expect(bold.textContent).toBe('bold');

    const subText = queryByTestId('card-boldSubtext');
    expect(subText).toBeTruthy();
    expect(subText.textContent).toBe('subtext');
  });
});
