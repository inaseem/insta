import React from 'react';
import { useStories } from '../providers/StoriesContext';
import PhotoStory from './PhotoStory';
import VideoStory from './VideoStory';

interface StoryViewerProps {
  onAllStoriesViewed?: () => void;
}

const StoryViewer = ({ onAllStoriesViewed }: StoryViewerProps) => {
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
      className="relative h-full bg-black"
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
            src={activeStory.src}
            storyIndex={activeStoryIndex}
            duration={activeStory.duration}
            onComplete={moveNext}
          />
        )}
        {activeStory.type === 'video' && (
          <VideoStory
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

export default StoryViewer;
