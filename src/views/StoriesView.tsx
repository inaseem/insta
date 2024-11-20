import React from 'react';
import PhotoStory from '../components/PhotoStory';
import VideoStory from '../components/VideoStory';
import { useStories } from '../providers/StoriesContext';
import { Status } from '../types';

interface StoriesViewProps {
  onAllStoriesViewed?: () => void;
  status: Status;
}

const StoriesView = ({ onAllStoriesViewed, status }: StoriesViewProps) => {
  const {
    stories,
    activeStoryIndex,
    setActiveStoryIndex,
    updateStoryProgress,
  } = useStories();

  const activeStory = stories[activeStoryIndex];

  // Move to the next story
  const moveNext = React.useCallback(() => {
    if (activeStoryIndex < stories.length - 1) {
      updateStoryProgress(activeStoryIndex, 100);
      setActiveStoryIndex(activeStoryIndex + 1);
    } else {
      // When all stories are viewed
      onAllStoriesViewed?.();
    }
  }, [activeStoryIndex, stories.length, setActiveStoryIndex]);

  // Move to the previous story
  const movePrevious = React.useCallback(() => {
    if (activeStoryIndex > 0) {
      updateStoryProgress(activeStoryIndex, 0);
      updateStoryProgress(activeStoryIndex - 1, 0);
      setActiveStoryIndex(activeStoryIndex - 1);
    }
  }, [activeStoryIndex, setActiveStoryIndex]);

  if (!activeStory) return null;

  return (
    <div className="relative h-full bg-screenBlack">
      <div className="relative h-full w-full">
        {activeStory.type === 'photo' && (
          <PhotoStory
            status={status}
            src={activeStory.src}
            storyIndex={activeStoryIndex}
            duration={activeStory.duration}
            onComplete={moveNext}
          />
        )}
        {activeStory.type === 'video' && (
          <VideoStory
            status={status}
            src={activeStory.src}
            storyIndex={activeStoryIndex}
            duration={activeStory.duration}
            onComplete={moveNext}
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 flex w-full h-4/5 justify-between [&>button]:h-full [&>button]:w-1/2">
        <button aria-label="Previous" onClick={movePrevious} />
        <button aria-label="Next" onClick={moveNext} />
      </div>
    </div>
  );
};

export default StoriesView;
