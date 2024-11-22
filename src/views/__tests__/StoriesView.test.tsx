import { fireEvent, screen, waitFor } from '@testing-library/dom';
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
      duration: 1000,
    },
    {
      id: '2',
      type: 'photo',
      src: 'https://www.stage.in/_next/image?url=https://media.stage.in/show/vertical/small/showImage-1696930317030.jpg&w=256&q=75',
      duration: 1000,
    },
  ],
} as Status;

const initApp = (onAllStoriesViewed = vi.fn()) => {
  renderApp(
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <StoriesProvider initialStories={status.stories}>
              <StoriesView
                status={status}
                onAllStoriesViewed={onAllStoriesViewed}
              />
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

    // Assert that the first story image is loaded
    expect(storyImage).toBe(status.stories[0].src);
  });

  it('clicking Next Story takes the user to next story', async () => {
    initApp();

    expect(useImageLoader).toHaveBeenCalled();

    // Assert that first story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();

    // Clicking Next Story button
    fireEvent.click(screen.getByRole('button', { name: 'Next Story' }));

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
    // Assert that the 2nd(index 1) story image is loaded
    expect(storyImage).toBe(status.stories[1].src);
  });

  it('clicking Previous Story takes the user to previous story', async () => {
    initApp();

    expect(useImageLoader).toHaveBeenCalled();

    // Assert that first story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();

    // Clicking Next story button
    fireEvent.click(screen.getByRole('button', { name: 'Next Story' }));

    // Assert that 2nd story is visible
    expect(
      await screen.findByRole('img', {
        name: 'Story',
      })
    ).toBeVisible();

    // Clicking Previous story button
    fireEvent.click(screen.getByRole('button', { name: 'Previous Story' }));

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
    // Assert that the 1st(index 0) story is visible
    expect(storyImage).toBe(status.stories[0].src);
  });

  it(
    'should fire onAllStoriesViewed callback when all stories are viewed',
    { timeout: 5000 },
    async () => {
      const onAllStoriesViewed = vi.fn();
      initApp(onAllStoriesViewed);

      expect(useImageLoader).toHaveBeenCalled();

      await waitFor(
        () => {
          expect(onAllStoriesViewed).toHaveBeenCalledOnce();
        },
        { timeout: 5000 }
      );
    }
  );
});
