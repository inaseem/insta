import { useEffect } from 'react';
import ProgressBarList from '../components/ProgressBarList';
import { mockStories } from '../constants';
import { StoriesProvider, useStories } from '../providers/StoriesContext';
import StoriesView from '../views/StoriesView';

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

const Stories = () => {
  return (
    <div className="m-auto w-full h-screen relative">
      <StoriesProvider>
        <MockDataLoader />
        <StoriesView />
        <ProgressBarList />
      </StoriesProvider>
    </div>
  );
};

export default Stories;
