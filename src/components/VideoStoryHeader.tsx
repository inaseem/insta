import React from 'react';
import { Status } from '../types';
import PhotoStoryHeader from './PhotoStoryHeader';

// Since the options are same for both, reusing the same header for now.
// If there are separate options needed for handling the video stories this component can be expanded.
const VideoStoryHeader: React.FC<{
  status: Status;
  onClickMenu: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
}> = (props) => <PhotoStoryHeader {...props} />;

export default VideoStoryHeader;
