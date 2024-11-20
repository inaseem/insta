import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { renderApp } from '../../testUtils';
import { Status, Story } from '../../types';
import StatusItem from '../StatusItem';

describe('StatusItem', () => {
  it('renders StatusItem with given username', () => {
    const onClick = vi.fn();
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
    renderApp(<StatusItem onClick={onClick} status={status} />);

    expect(
      screen.getByRole('heading', {
        name: status.name,
      })
    ).toBeVisible();
  });

  it('onClick handler is called when user clicks on the status item', () => {
    const onClick = vi.fn();
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
    renderApp(<StatusItem onClick={onClick} status={status} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
