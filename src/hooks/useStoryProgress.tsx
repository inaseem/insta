import React from 'react';
import { useStories } from '../providers/StoriesContext';

const useStoryProgress = (
  storyIndex: number,
  duration: number,
  status: 'loading' | 'loaded' | 'error',
  onComplete: () => void
) => {
  const { updateStoryProgress } = useStories();
  const [isPaused, setIsPaused] = React.useState(false);
  const progressRef = React.useRef(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const pause = React.useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = React.useCallback(() => {
    setIsPaused(false);
  }, []);

  React.useEffect(() => {
    if (status === 'loading' || status === 'error') return;
    progressRef.current = 0;
  }, [storyIndex]);

  React.useEffect(() => {
    if (status === 'loading' || status === 'error') return;

    progressRef.current = progressRef.current ?? 0;
    updateStoryProgress(storyIndex, progressRef.current);

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        progressRef.current += (100 / duration) * 50;
        updateStoryProgress(storyIndex, progressRef.current);

        if (progressRef.current >= 100) {
          clearInterval(intervalRef.current!);
          onComplete();
        }
      }
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [storyIndex, duration, status, onComplete, updateStoryProgress, isPaused]);

  return { pause, resume, isPaused };
};

export default useStoryProgress;
