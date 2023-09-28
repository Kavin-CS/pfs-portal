import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import StudentProfileCardContent from '../index';
import ThemeProvider from '../../../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Student-Details-Card-Content-Page', () => {
  it('Student Details Card Content renders correctly without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardContent />
        </Router>
      </ThemeProvider>
    );
    const content = getByTestId('student-profile-card-content');
    expect(content).toBeTruthy();
    expect(content.textContent).toBe('');

    expect(getByTestId('student-profile-card-content')).toMatchSnapshot();
  });
  it('Student Details Card Content renders correctly with props', () => {
    const div = document.createElement('div');
    const data = [{ label: 'Class', value: 'Montessori' }];

    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardContent data={data} />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardContent data={data} />
        </Router>
      </ThemeProvider>
    );

    const cardContent = queryByTestId('student-profile-card-content');
    expect(cardContent).toBeTruthy();

    const label = queryByTestId('student-profile-card-content-label');
    expect(label).toBeTruthy();
    expect(label.textContent).toBe('Class');

    const value = queryByTestId('student-profile-card-content-value');
    expect(value).toBeTruthy();
    expect(value.textContent).toBe('Montessori');
  });
});
