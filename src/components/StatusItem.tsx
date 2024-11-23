import React from 'react';
import { Status } from '../types';
import StatusContainer from './StatusIconContainer';

interface StatusItemProps {
  status: Status;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const StatusItem: React.FC<StatusItemProps> = ({ status, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-1 hover:opacity-90"
      role="button"
      key={status.id}
      onClick={onClick}
    >
      <StatusContainer key={status.id}>
        <img
          className="object-cover w-full h-full animate-fade-in"
          src={status.stories[0].src}
        />
      </StatusContainer>
      <h2 className="text-xs text-gray-200">{status.name}</h2>
    </div>
  );
};

export default StatusItem;
