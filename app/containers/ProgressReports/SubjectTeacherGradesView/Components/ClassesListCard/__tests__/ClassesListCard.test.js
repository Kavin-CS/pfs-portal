import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ClassesListCard from './index';
import ThemeProvider from '../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import KenSelect from '../../../../../../components/KenSelect/index'

afterEach(() => {
  cleanup();
});

describe('Reports Page', () => {
  it('Reports Page render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <ClassesListCard />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <ClassesListCard />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('classList-page')).toMatchSnapshot();
  });
});
