import { useEffect } from 'react';
import ProgressBarList from './components/ProgressBarList';
import StoryViewer from './components/StoryViewer';
import { mockStories } from './constants';
import { StoriesProvider, useStories } from './providers/StoriesContext';

const MockDataLoader = () => {
  const { setActiveStoryIndex, stories, setStories } = useStories();

  // This can be used to fetch the stories from server
  useEffect(() => {
    if (!stories.length) {
      setStories(mockStories);
      setActiveStoryIndex(0);
    }
  }, [stories]);

  return null;
};

const App = () => {
  return (
    <div className="flex">
      <div className="m-auto w-full h-screen relative">
        <StoriesProvider>
          <MockDataLoader />
          <StoryViewer />
          <ProgressBarList />
        </StoriesProvider>
      </div>
    </div>
  );
};

export default App;
