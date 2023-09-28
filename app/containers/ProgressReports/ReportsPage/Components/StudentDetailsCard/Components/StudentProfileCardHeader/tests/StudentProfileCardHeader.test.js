import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import StudentProfileCardHeader from '../index';
import ThemeProvider from '../../../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Student-Details-Card-Header-Page', () => {
  it('Student Details Card Header renders correctly without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardHeader />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardHeader />
        </Router>
      </ThemeProvider>
    );
    const cardHeader = getByTestId('student-profile-card-header');
    expect(cardHeader).toBeTruthy();
    expect(cardHeader.textContent).toBe('');

    const avatar = getByTestId('student-profile-avatar');
    expect(avatar).toBeTruthy();
    expect(avatar.textContent).toBe('');

    const name = getByTestId('student-profile-name');
    expect(name).toBeTruthy();
    expect(name.textContent).toBe('');
    expect(getByTestId('student-profile-card-header')).toMatchSnapshot();
  });

  it('Student Details Card Header renders correctly with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardHeader />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <StudentProfileCardHeader primary="Fake Name" avatarImageUrl="" />
        </Router>
      </ThemeProvider>
    );

    const cardHeader = getByTestId('student-profile-card-header');
    expect(cardHeader).toBeTruthy();

    const avatar = getByTestId('student-profile-avatar');
    expect(avatar).toBeTruthy();
    expect(avatar.textContent).toBe('F');

    const name = getByTestId('student-profile-name');
    expect(name).toBeTruthy();
    expect(name.textContent).toBe('Fake Name');
  });
});
