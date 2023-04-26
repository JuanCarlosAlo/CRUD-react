import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../../components/user-card/UserCard';

const Home = () => {
	const { data } = useFetch(URLS.ALL);
	console.log(data);
	return (
		<div>
			<button>Create User</button>
			{data.map(element => (
				<UserCard key={v4()} element={element} />
			))}
		</div>
	);
};

export default Home;
