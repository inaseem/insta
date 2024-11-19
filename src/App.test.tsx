import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders App with hello world', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /Hello World/i,
      })
    ).toBeVisible();
  });
});
