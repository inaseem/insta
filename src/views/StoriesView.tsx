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

  const containerRef = React.useRef<HTMLDivElement>(null);

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
    <div
      ref={containerRef}
      className="relative h-full bg-screenBlack"
      onClick={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;

        if (clickX < rect.width / 2) movePrevious();
        else moveNext();
      }}
    >
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
    </div>
  );
};

export default StoriesView;
