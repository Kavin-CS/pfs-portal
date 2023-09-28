import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import QueryPopupContent from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Query-Popup-Content', () => {
  const div = document.createElement('div');
  it('Query Popup Content renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <QueryPopupContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <QueryPopupContent />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('query-popup-content')).toMatchSnapshot();
  });
  it('Query Popup Content renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <QueryPopupContent
            rank={'10'}
            totalMarks={'660'}
            obtainedMarks={'440'}
          />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <QueryPopupContent
            rank={'10'}
            totalMarks={'660'}
            obtainedMarks={'440'}
          />
        </Router>
      </ThemeProvider>
    );

    const rank = queryByTestId('rank');
    expect(rank).toBeTruthy();
    expect(rank.textContent).toBe('10');

    const totalMarks = queryByTestId('total-marks');
    expect(totalMarks).toBeTruthy();
    expect(totalMarks.textContent).toBe(' headings:Division_Symbol660');

    const obtainedMarks = queryByTestId('obtained-marks');
    expect(obtainedMarks).toBeTruthy();
    expect(obtainedMarks.textContent).toBe('440 headings:Division_Symbol660');
  });
});
