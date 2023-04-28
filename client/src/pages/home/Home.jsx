import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../../components/user-card/UserCard';
import { useState } from 'react';
import EditUser from '../../components/edit-user/EditUser';
import DeleteUser from '../../components/delete-user/DeleteUser';
import CreateUser from '../../components/create-user/CreateUser';

const Home = () => {
	const { data, setData } = useFetch(URLS.ALL);
	const [action, setAction] = useState({
		edit: false,
		delete: false,
		open: false,
		create: false
	});
	const editUser = data.filter(element => element.userId === action.edit);
	const deleteUser = data.filter(element => element.userId === action.delete);
	if (!data) {
		return <h1>Loading</h1>;
	} else {
		return (
			<>
				<div>
					<button onClick={() => setAction({ ...action, create: true })}>
						Create User
					</button>
					{data.map(element => (
						<UserCard
							key={v4()}
							element={element}
							setAction={setAction}
							action={action}
						/>
					))}
				</div>
				<div>{filter(action, editUser, deleteUser, setData, setAction)}</div>
			</>
		);
	}
};

const filter = (action, editUser, deleteUser, setData, setAction) => {
	if (action.edit)
		return (
			<EditUser editUser={editUser} setData={setData} setAction={setAction} />
		);
	if (action.delete)
		return (
			<DeleteUser
				deleteUser={deleteUser}
				setData={setData}
				setAction={setAction}
			/>
		);
	if (action.create) return <CreateUser setData={setData}
	setAction={setAction}/>;
};

export default Home;
