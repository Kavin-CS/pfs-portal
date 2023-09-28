import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import RemarksContent from '../index';
import ThemeProvider from '../../../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Remarks Content component', () => {
  const div = document.createElement('div');
  const remarks = [
    { label: 'remark', value: 'Priyanka is a very clever student.' },
  ];
  it('Remarks Content component renders correctly without props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <RemarksContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <RemarksContent />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('remarks-content')).toMatchSnapshot();
  });
  it('Remarks Content component renders correctly with props', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <RemarksContent />
        </Router>
      </ThemeProvider>,
      div
    );

    const { queryByTestId } = render(
      <ThemeProvider>
        <Router>
          <RemarksContent title={'title'} data={remarks} />
        </Router>
      </ThemeProvider>
    );

    const title = queryByTestId('remarks-content-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('title');

    const text = queryByTestId('remarks-content-text');
    expect(text).toBeTruthy();
    expect(text.textContent).toBe('Priyanka is a very clever student.');
  });
});
