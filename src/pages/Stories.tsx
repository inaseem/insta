import { Navigate, useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ProgressBarList from '../components/ProgressBarList';
import { routes } from '../constants';
import useStoriesData from '../hooks/useStatusData';
import { StoriesProvider } from '../providers/StoriesContext';
import StoriesView from '../views/StoriesView';

const Stories = () => {
  const [params] = useSearchParams();
  const userId = params.get('userId');

  const { loading, error, status } = useStoriesData(userId);

  if (!userId) {
    return <Navigate to={routes.home} />;
  }

  if (loading || !status) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-auto w-full h-screen relative">
      <StoriesProvider initialStories={status.stories}>
        <StoriesView />
        <ProgressBarList />
      </StoriesProvider>
    </div>
  );
};

export default Stories;
