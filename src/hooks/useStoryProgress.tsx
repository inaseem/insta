import React from 'react';
import { useStories } from '../providers/StoriesContext';

const useStoryProgress = (
  storyIndex: number,
  duration: number,
  status: 'loading' | 'loaded' | 'error',
  onComplete: () => void
) => {
  const { updateStoryProgress } = useStories();

  React.useEffect(() => {
    if (status === 'loading' || status === 'error') return;
    let progress = 0;
    updateStoryProgress(storyIndex, 0); // Reset progress

    const interval = setInterval(() => {
      progress += (100 / duration) * 50;
      updateStoryProgress(storyIndex, progress);

      if (progress >= 100) {
        clearInterval(interval);
        onComplete();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [storyIndex, duration, status, onComplete, updateStoryProgress]);
};

export default useStoryProgress;
