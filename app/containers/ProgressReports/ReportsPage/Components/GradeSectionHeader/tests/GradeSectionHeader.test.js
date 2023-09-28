import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import GradeSectionHeader from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Grade-Section-Header', () => {
  const div = document.createElement('div');
  it('Grade Section Header renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <GradeSectionHeader />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <GradeSectionHeader />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('grade-section-header')).toMatchSnapshot();
  });

  it('Grade Section Header renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <GradeSectionHeader title="title" gradeLabel="gradeLabel" />
        </Router>
      </ThemeProvider>,
      div
    );

    const title = queryByTestId('grade-section-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Title');

    const gradeLabel = queryByTestId('grade-section-label');
    expect(gradeLabel).toBeTruthy();
    expect(gradeLabel.textContent).toBe('GradeLabel');
  });
});
