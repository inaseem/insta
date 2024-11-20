export interface Story {
  id: string;
  type: 'photo' | 'video';
  src: string;
  duration: number; // Duration in ms
  progress: number; // Progress percentage (0 to 100)
}

export interface Status {
  id: string;
  name: string;
  handle: string;
  stories: Story[];
}
