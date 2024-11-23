import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { routes } from '../constants';
import useStoryProgress from '../hooks/useStoryProgress';
import { Status } from '../types';
import VideoStoryHeader from './VideoStoryHeader';

type VideoStoryProps = {
  src: string;
  storyIndex: number;
  duration: number;
  onComplete: () => void;
  status: Status;
};

const VideoStory: React.FC<VideoStoryProps> = ({
  src,
  duration,
  onComplete,
  storyIndex,
  status,
}) => {
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();
  const { pause, resume, isPaused } = useStoryProgress(
    storyIndex,
    duration,
    'loaded', // should be based on useImageLoader hook (this is not implemented as per the requirements)
    onComplete
  );

  // Not making much changes here as assignment primarily focuses on image as stores.
  // But this can be used as an example and can be enchanced to increase the feature parity

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
    <div className="relative w-full h-full">
      <VideoStoryHeader
        onClickMenu={handleMenuClick}
        onClose={handleCloseClick}
        status={status}
      />
      <div className="relative h-full w-full animate-fade-in">
        <video
          src={src}
          autoPlay
          muted={muted}
          className="object-cover w-full h-full"
        />
        {/* Mute/Unmute Toggle */}
        <button
          aria-label="Toggle audio"
          onClick={(e) => {
            e.stopPropagation();
            setMuted((prev) => !prev);
          }}
          className="absolute bottom-4 right-4 bg-gray-800 text-white p-2 rounded"
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
};

export default VideoStory;
