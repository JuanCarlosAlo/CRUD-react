import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../../components/user-card/UserCard';
import { useState } from 'react';
import EditUser from '../../components/edit-user/EditUser';

const Home = () => {
	const { data } = useFetch(URLS.ALL);
	const [action, setAction] = useState({
		edit: false,
		delete: false,
		open: false
	});
	const editUser = data.filter(element => element.userId === action.edit);

	return (
		<>
			<div>
				<button>Create User</button>
				{data.map(element => (
					<UserCard
						key={v4()}
						element={element}
						setAction={setAction}
						action={action}
					/>
				))}
			</div>
			<div>
				<EditUser editUser={editUser} />
			</div>
		</>
	);
};

export default Home;
