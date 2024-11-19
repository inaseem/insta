import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { Story } from '../types';

interface StoriesState {
  stories: Story[];
  activeStoryIndex: number;
  setActiveStoryIndex: (index: number) => void;
  updateStoryProgress: (index: number, progress: number) => void;
  resetStories: () => void;
  setStories: (stories: Story[]) => void;
}

const StoriesContext = createContext<StoriesState | undefined>(undefined);

export const StoriesProvider = ({ children }: { children: ReactNode }) => {
  const [stories, setStoriesInternal] = useState<Story[]>([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  const setStories = useCallback((newStories: Story[]) => {
    setStoriesInternal(newStories);
  }, []);

  const updateStoryProgress = useCallback((index: number, progress: number) => {
    setStoriesInternal((prev) =>
      prev.map((story, i) =>
        i === index ? { ...story, progress: Math.min(progress, 100) } : story
      )
    );
  }, []);

  const resetStories = useCallback(() => {
    setStoriesInternal((prev) =>
      prev.map((story) => ({ ...story, progress: 0 }))
    );
    setActiveStoryIndex(0);
  }, []);

  return (
    <StoriesContext.Provider
      value={{
        stories,
        activeStoryIndex,
        setActiveStoryIndex,
        updateStoryProgress,
        resetStories,
        setStories,
      }}
    >
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => {
  const context = useContext(StoriesContext);
  if (!context) {
    throw new Error('useStories must be used within a StoriesProvider');
  }
  return context;
};
