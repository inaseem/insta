import React from 'react';
import useImageLoader from '../hooks/useImageLoder';
import useStoryProgress from '../hooks/useStoryProgress';
import { Status } from '../types';
import Loader from './Loader';
import PhotoStoryHeader from './PhotoStoryHeader';
import { useNavigate } from 'react-router';
import { routes } from '../constants';

type PhotoStoryProps = {
  status: Status;
  src: string;
  storyIndex: number;
  duration: number;
  onComplete: () => void;
};

const PhotoStory: React.FC<PhotoStoryProps> = ({
  status,
  src,
  storyIndex,
  duration,
  onComplete,
}) => {
  const navigate = useNavigate();
  const imageStatus = useImageLoader(src);
  const { pause, resume, isPaused } = useStoryProgress(
    storyIndex,
    duration,
    imageStatus,
    onComplete
  );

  if (imageStatus === 'error') {
    return (
      <div className="flex items-center justify-center h-full w-full bg-black text-white">
        Failed to load story
      </div>
    );
  }

  if (imageStatus === 'loading') {
    return <Loader />;
  }

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(routes.home);
  };
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Ideally, this should some sort of menu for the user to take an action.
    // Meanwhile the menu is open, we need to pause the story from progressing.
    // The code below can be called based on the menu close and open events
    if (isPaused) resume();
    else pause();
  };

  return (
    <div className="relative w-full h-full" data-testid={storyIndex}>
      <PhotoStoryHeader
        status={status}
        onClickMenu={handleMenuClick}
        onClose={handleCloseClick}
      />
      <img
        aria-label="Story"
        src={src}
        alt="Story"
        className="object-cover w-full h-full animate-fade-in"
      />
    </div>
  );
};

export default PhotoStory;
