import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import DetailsContent from '../index';
import ThemeProvider from '../../../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Details Content component', () => {
  const div = document.createElement('div');
  const details = [{ label: 'Height', value: '109cm' }];
  it('Details Content component renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <DetailsContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <DetailsContent />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('details-content')).toMatchSnapshot();
  });
  it('Details Content component renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <DetailsContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <DetailsContent title={'title'} data={details} />
        </Router>
      </ThemeProvider>
    );

    const title = queryByTestId('details-content-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('title');

    const label = queryByTestId('student-details-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toBe('Height');

    const value = queryByTestId('student-details-value');
    expect(value).toBeTruthy();
    expect(value.textContent).toBe('109cm');
  });
});
