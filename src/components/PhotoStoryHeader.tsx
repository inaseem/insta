import React from 'react';
import crossIcon from '../assets/cross.svg';
import overflowMenuIcon from '../assets/overflow-menu.svg';
import { Status } from '../types';

const PhotoStoryHeader: React.FC<{
  status: Status;
  onClickMenu: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
}> = ({ status, onClickMenu, onClose }) => {
  return (
    <div className="absolute left-0 top-0 w-full px-4 pt-5 flex items-center justify-between z-10">
      <div className="flex flex-col">
        <span className="text-white text-sm">{status.name}</span>
        <span className="text-white text-xs">{status.handle}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-200 [&>button]:w-8 [&>button]:h-8">
        <button className="text-center text-sm " onClick={onClickMenu}>
          <img src={overflowMenuIcon} />
        </button>
        <button className="text-center text-sm" onClick={onClose}>
          <img src={crossIcon} />
        </button>
      </div>
    </div>
  );
};

export default PhotoStoryHeader;
