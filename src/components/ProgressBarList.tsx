import React from 'react';
import { useStories } from '../providers/StoriesContext';
import ProgressBar from './ProgressBar';

const ProgressBarList: React.FC = () => {
  const { stories } = useStories();

  return (
    <ul className="absolute top-0 left-0 w-full flex gap-1 px-4 py-2">
      {stories.map((story) => (
        <ProgressBar key={story.id} progress={story.progress} />
      ))}
    </ul>
  );
};

export default ProgressBarList;
