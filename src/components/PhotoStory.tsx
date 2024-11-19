import React from 'react';
import useImageLoader from '../hooks/useImageLoder';
import useStoryProgress from '../hooks/useStoryProgress';

type PhotoStoryProps = {
  src: string;
  storyIndex: number;
  duration: number;
  onComplete: () => void;
};

const PhotoStory: React.FC<PhotoStoryProps> = ({
  src,
  storyIndex,
  duration,
  onComplete,
}) => {
  const status = useImageLoader(src);
  useStoryProgress(storyIndex, duration, status, onComplete);

  if (status === 'error') {
    return (
      <div className="flex items-center justify-center h-full w-full bg-black text-white">
        Failed to load story
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-full w-full bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Story"
      className="object-cover w-full h-full animate-fade-in"
    />
  );
};

export default PhotoStory;
