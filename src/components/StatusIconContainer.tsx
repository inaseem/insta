import React from 'react';

const StatusContainer: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div
      className={`min-w-14 max-w-14 min-h-14 max-h-14 ${
        className ? className : ''
      }`}
    >
      <div className="h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
        <div className="flex h-full w-full items-center justify-center bg-white rounded-full overflow-clip border-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StatusContainer;
