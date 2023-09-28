import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Scholastic from '../index';
import GradeSectionHeader from '../../GradeSectionHeader/index';
import TermSectionHeader from '../../TermSectionHeader/index';
import SubjectCard from '../../SubjectCard/index';

import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Scholastic-section', () => {
  const div = document.createElement('div');
  it('Scholastic-section renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <Scholastic />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <Scholastic />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('term-section-header')).toMatchSnapshot();
  });

  it('Scholastic-section renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <Scholastic />
        </Router>
      </ThemeProvider>,
      div
    );

    it('TermSectionHeader renders correctly', () => {
      expect(TermSectionHeader).toHaveBeenCalledTimes(1);
    });

    it('GradeSectionHeader renders correctly', () => {
      expect(GradeSectionHeader).toHaveBeenCalledTimes(1);
    });

    it('SubjectCard renders correctly', () => {
      expect(SubjectCard).toHaveBeenCalledTimes(1);
    });
  });
});
