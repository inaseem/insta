import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { StoriesProvider } from '../../providers/StoriesContext';
import { renderApp } from '../../testUtils';
import { Status } from '../../types';
import StoriesView from '../StoriesView';

vi.mock(import('../../hooks/useImageLoder'), async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    default: vi.fn().mockImplementation(() => 'loaded'),
  };
});

import useImageLoader from '../../hooks/useImageLoder';

const status = {
  handle: '@naseem',
  id: '123',
  name: 'Naseem',
  stories: [
    {
      id: '1',
      type: 'photo',
      src: 'https://www.stage.in/_next/image?url=https://media.stage.in/show/vertical/small/showImage-1723012728745.jpg&w=384&q=75',
      duration: 5000,
    },
    {
      id: '2',
      type: 'photo',
      src: 'https://www.stage.in/_next/image?url=https://media.stage.in/show/vertical/small/showImage-1696930317030.jpg&w=256&q=75',
      duration: 5000,
    },
  ],
} as Status;

const initApp = () => {
  renderApp(
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <StoriesProvider initialStories={status.stories}>
              <StoriesView status={status} />
            </StoriesProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

describe('StoriesView', () => {
  it('renders first story by default', async () => {
    initApp();

    expect(useImageLoader).toHaveBeenCalled();

    // Assert that first story is visible

    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();
    const storyImage = screen
      .getByRole('img', {
        name: 'Story',
      })
      .getAttribute('src');
    expect(storyImage).toBe(status.stories[0].src);
  });

  it('clicking Next takes the user to next story', async () => {
    initApp();

    expect(useImageLoader).toHaveBeenCalled();

    // Assert that first story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();
    const storyImage = screen
      .getByRole('img', {
        name: 'Story',
      })
      .getAttribute('src');
    expect(storyImage).toBe(status.stories[1].src);
  });

  it('clicking Previous takes the user to previous story', async () => {
    initApp();

    expect(useImageLoader).toHaveBeenCalled();

    // Assert that first story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    // Assert that 2nd story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    // Assert that 2nd story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();
    const storyImage = screen
      .getByRole('img', {
        name: 'Story',
      })
      .getAttribute('src');
    expect(storyImage).toBe(status.stories[0].src);
  });
});
