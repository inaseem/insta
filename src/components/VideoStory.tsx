import React, { useState } from 'react';
import useStoryProgress from '../hooks/useStoryProgress';

type VideoStoryProps = {
  src: string;
  storyIndex: number;
  duration: number;
  onComplete: () => void;
};

const VideoStory: React.FC<VideoStoryProps> = ({
  src,
  duration,
  onComplete,
  storyIndex,
}) => {
  const [muted, setMuted] = useState(true);
  useStoryProgress(storyIndex, duration, 'loaded', onComplete);

  // Not making much changes here as assignment primarily focuses on image as stores.
  // But this can be used as an example and can be enchanced to increase the feature parity

  return (
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
  );
};

export default VideoStory;
