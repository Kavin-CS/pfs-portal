import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TermSectionHeader from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('term-Section-Header', () => {
  const div = document.createElement('div');
  it('Term Section Header renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <TermSectionHeader />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <TermSectionHeader />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('term-section-header')).toMatchSnapshot();
  });

  it('Term Section Header renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <GradeSectionHeader termLabel="title" />
        </Router>
      </ThemeProvider>,
      div
    );

    const termLabel = queryByTestId('term-section-title');
    expect(termLabel).toBeTruthy();
    expect(termLabel.textContent).toBe('Title');
  });
});
