import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { renderApp } from '../../testUtils';
import { Status, Story } from '../../types';
import PhotoStoryHeader from '../PhotoStoryHeader';

describe('PhotoStoryHeader', () => {
  it('renders StatusItem with given username', () => {
    const status: Status = {
      handle: '@naseem',
      id: '123',
      name: 'Naseem',
      stories: [
        {
          src: '/test',
        } as Story,
      ],
    };
    renderApp(
      <PhotoStoryHeader
        onClickMenu={vi.fn()}
        onClose={vi.fn()}
        status={status}
      />
    );

    // Assert that the right name is rendered in the header
    expect(
      screen.getByRole('heading', {
        name: status.name,
      })
    ).toBeVisible();

    // Assert that the right handle is rendered in the header
    expect(
      screen.getByRole('heading', {
        name: status.handle,
      })
    ).toBeVisible();
  });

  it('onClose and onClickMeny handler is called when user clicks on the associated buttons', () => {
    const onClickMenu = vi.fn();
    const onClose = vi.fn();
    const status: Status = {
      handle: '@naseem',
      id: '123',
      name: 'Naseem',
      stories: [
        {
          src: '/test',
        } as Story,
      ],
    };
    renderApp(
      <PhotoStoryHeader
        onClickMenu={onClickMenu}
        onClose={onClose}
        status={status}
      />
    );

    const menuButton = screen.getByRole('button', { name: 'Menu Options' });
    fireEvent.click(menuButton);
    const closeButton = screen.getByRole('button', { name: 'Close Story' });
    fireEvent.click(closeButton);
    expect(onClickMenu).toHaveBeenCalledOnce();
    expect(onClose).toHaveBeenCalledOnce();
  });
});
