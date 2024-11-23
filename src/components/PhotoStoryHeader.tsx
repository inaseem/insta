import React from 'react';
import crossIcon from '../assets/cross.svg';
import overflowMenuIcon from '../assets/overflow-menu.svg';
import { Status } from '../types';
import StatusContainer from './StatusIconContainer';

const PhotoStoryHeader: React.FC<{
  status: Status;
  onClickMenu: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
}> = ({ status, onClickMenu, onClose }) => {
  return (
    <div className="absolute left-0 top-0 w-full px-4 pt-5 flex items-center justify-between z-10">
      <div className="flex gap-2">
        <StatusContainer key={status.id} size="small">
          <img
            className="object-cover w-full h-full animate-fade-in"
            src={status.stories[0].src}
          />
        </StatusContainer>

        <div>
          <h1 className="text-gray-200 text-sm">{status.name}</h1>
          <h2 className="text-gray-300 text-xs">{status.handle}</h2>
        </div>
      </div>
      <div className="flex items-center gap-1 [&>button]:w-8 [&>button]:h-8">
        <button aria-label="Menu Options" onClick={onClickMenu}>
          <img src={overflowMenuIcon} />
        </button>
        <button aria-label="Close Story" onClick={onClose}>
          <img src={crossIcon} />
        </button>
      </div>
    </div>
  );
};

export default PhotoStoryHeader;
