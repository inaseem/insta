import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = React.memo(({ progress }) => {
  return (
    <li
      className={`h-0.5 rounded-sm shadow-black bg-gray-500/50 bg-opacity-90 flex-1`}
      style={{
        background: `linear-gradient(to right, rgb(156 163 175) ${progress}%, rgb(107 114 128 / 0.5) ${progress}%)`,
      }}
    ></li>
  );
});

export default ProgressBar;
