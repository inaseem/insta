import { useNavigate } from 'react-router';
import StatusItem from '../components/StatusItem';
import { routes, statusList } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (userId: string) => {
    navigate(`${routes.stories}?userId=${userId}`);
  };

  return (
    <div className="p-3">
      <h1 className="font-sans font-semibold text-4xl">On stage</h1>
      <div className="flex gap-2 overflow-x-auto py-3 no-s">
        {statusList.map((status) => (
          <StatusItem
            status={status}
            key={status.id}
            onClick={() => handleClick(status.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
