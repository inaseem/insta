import { useEffect } from 'react';
import ProgressBarList from './components/ProgressBarList';
import StoriesView from './views/StoriesView';
import { mockStories, statusList } from './constants';
import { StoriesProvider, useStories } from './providers/StoriesContext';
import StatusContainer from './components/StatusIconContainer';
import StatusItem from './components/StatusItem';

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
    <div>
      <div className="p-3">
        <h1 className="font-sans font-semibold text-4xl">On stage</h1>
        <div className="flex gap-2 overflow-x-auto py-3 no-s">
          {statusList.map((status) => (
            <StatusItem status={status} key={status.id} />
          ))}
        </div>
      </div>
      {/* <div className="m-auto w-full h-screen relative">
        <StoriesProvider>
          <MockDataLoader />
          <StoriesView />
          <ProgressBarList />
        </StoriesProvider>
      </div> */}
    </div>
  );
};

export default App;
