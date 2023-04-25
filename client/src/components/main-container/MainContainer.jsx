import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../user-card/UserCard';

const MainContainer = () => {
	const { data } = useFetch(URLS.ALL);
	console.log(data);
	return (
		<div>
			{data.map(element => (
				<UserCard key={v4()} element={element} />
			))}
		</div>
	);
};

export default MainContainer;
