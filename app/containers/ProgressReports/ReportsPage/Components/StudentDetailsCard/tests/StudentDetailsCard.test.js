import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import StudentDetailsCard from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

const data = {
  name: 'Fake Name',
  avatarImageUrl: 'Fake Image',
  details: { class: 'Montessori' },
};
describe('Student-Details-Card-Page', () => {
  it('Student Details Card renders correctly with data', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentDetailsCard data={data} />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentDetailsCard data={data} />
        </Router>
      </ThemeProvider>
    );

    const card = getByTestId('student-profile-card-header');
    expect(card).toBeTruthy();
    expect(card.textContent).toBe(data.name[0] + data.name);
    expect(getByTestId('student-details-card')).toMatchSnapshot();

    const cardContent = getByTestId('student-profile-card-content');
    expect(cardContent).toBeTruthy();
    expect(cardContent.textContent).toBe('ClassMontessori');
  });
  it('Student Details Card renders correctly without data', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentDetailsCard />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentDetailsCard />
        </Router>
      </ThemeProvider>
    );

    const cardHeader = getByTestId('student-profile-card-header');
    expect(cardHeader).toBeTruthy();
    expect(cardHeader.textContent).toBe('');

    const cardContent = getByTestId('student-profile-card-content');
    expect(cardContent).toBeTruthy();
    expect(cardContent.textContent).toBe('');
  });
});
