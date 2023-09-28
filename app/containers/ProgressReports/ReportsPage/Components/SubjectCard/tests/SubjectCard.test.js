import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SubjectCard from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Subject Card', () => {
  const div = document.createElement('div');
  it('Subject card renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <SubjectCard />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <SubjectCard />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('subject-card')).toMatchSnapshot();
  });

  it('Subject card renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <GradeSectionHeader
            name="English"
            subjectMark="90"
            gradeValue="A1"
            ratingsDifference="12.3"
            ratingsText="less than class avg of"
            previousRatings="80"
            status="increased"
          />
        </Router>
      </ThemeProvider>,
      div
    );

    const name = queryByTestId('subject-name');
    expect(name).toBeTruthy();
    expect(name.textContent).toBe('English');

    const subjectMark = queryByTestId('subject-mark');
    expect(subjectMark).toBeTruthy();
    expect(subjectMark.textContent).toBe('90');

    const gradeValue = queryByTestId('grade-value');
    expect(gradeValue).toBeTruthy();
    expect(gradeValue.textContent).toBe('A1');

    const ratingsDifference = queryByTestId('subject-remark');
    expect(ratingsDifference).toBeTruthy();
    expect(ratingsDifference.textContent).toBe('12.3');

    const ratingsText = queryByTestId('subject-remark');
    expect(ratingsText).toBeTruthy();
    expect(ratingsText.textContent).toBe('less than class avg of');

    const previousRatings = queryByTestId('subject-remark');
    expect(previousRatings).toBeTruthy();
    expect(previousRatings.textContent).toBe('80');
  });
});
