import React from 'react';
import { Status } from '../types';
import StatusContainer from './StatusIconContainer';

const StatusItem: React.FC<{ status: Status }> = ({ status }) => {
  return (
    <div
      className="flex flex-col items-center gap-1 hover:opacity-90"
      role="button"
      key={status.id}
    >
      <StatusContainer key={status.id}>
        <img
          className="object-cover w-full h-full animate-fade-in"
          src={status.stories[0].src}
        />
      </StatusContainer>
      <h2 className="text-xs">{status.name}</h2>
    </div>
  );
};

export default StatusItem;
