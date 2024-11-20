import React from 'react';

const statusIconSizes = {
  medium: 'min-w-14 max-w-14 min-h-14 max-h-14',
  small: 'min-w-10 max-w-10 min-h-10 max-h-10',
};

const StatusContainer: React.FC<
  React.PropsWithChildren<{ size?: keyof typeof statusIconSizes }>
> = ({ children, size = 'medium' }) => {
  return (
    <div className={statusIconSizes[size]}>
      <div className="h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
        <div className="flex h-full w-full items-center justify-center bg-white rounded-full overflow-clip border-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StatusContainer;
