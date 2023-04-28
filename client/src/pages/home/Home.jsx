import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../../components/user-card/UserCard';
import { useState } from 'react';
import EditUser from '../../components/edit-user/EditUser';
import DeleteUser from '../../components/delete-user/DeleteUser';
import CreateUser from '../../components/create-user/CreateUser';
import { StyledHome } from './styles';

const Home = () => {
	const { data, setData } = useFetch(URLS.ALL);
	const [action, setAction] = useState({
		edit: false,
		delete: false,
		open: false,
		create: false
	});
	const [userById, setUserById] = useState({});
	if (!data) {
		return <h1>Loading</h1>;
	} else {
		return (
			<StyledHome>
				<div>
					<button
						onClick={() =>
							setAction({
								edit: false,
								delete: false,
								open: false,
								create: true
							})
						}
					>
						Create User
					</button>
					{data.map(element => (
						<UserCard
							key={v4()}
							element={element}
							setAction={setAction}
							setUserById={setUserById}
						/>
					))}
				</div>
				<div>
					{filter(action, setData, setAction, userById, data, setUserById)}
				</div>
			</StyledHome>
		);
	}
};

const filter = (action, setData, setAction, userById, data, setUserById) => {
	if (action.edit)
		return (
			<EditUser userById={userById} setData={setData} setAction={setAction} />
		);
	if (action.delete)
		return (
			<DeleteUser
				userById={userById}
				setData={setData}
				setAction={setAction}
				setUserById={setUserById}
			/>
		);
	if (action.create)
		return <CreateUser usetData={setData} setAction={setAction} />;
};

export default Home;
