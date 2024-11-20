import { useNavigate } from 'react-router';
import StatusItem from '../components/StatusItem';
import { logo, routes, statusList } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (userId: string) => {
    navigate(`${routes.stories}?userId=${userId}`);
  };

  return (
    <div className="bg-screenBlack h-full">
      <div className="px-4 py-2 h-14 flex items-center">
        <img src={logo} className="h-auto w-[103.01px]" />
      </div>
      <div className="px-4 flex gap-2 overflow-x-auto py-3 no-s">
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
