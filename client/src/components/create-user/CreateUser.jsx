import { useState } from 'react';
import { URLS } from '../../constants/urls';

const CreateUser = ({ setData, setAction }) => {
	const [newUser, SetNewUser] = useState({
		active: false,
		age: '',
		email: '',
		name: '',
		title: '',
		username: ''
	});
	return (
		<form>
			<div>
				<label htmlFor='username'>User Name</label>
				<input
					onChange={e => SetNewUser({ ...newUser, username: e.target.value })}
					id='username'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					onChange={e => SetNewUser({ ...newUser, name: e.target.value })}
					id='name'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='email'>User Name</label>
				<input
					onChange={e => SetNewUser({ ...newUser, email: e.target.value })}
					id='email'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='age'>age</label>
				<input
					onChange={e => SetNewUser({ ...newUser, age: e.target.value })}
					id='age'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='male'>Male</label>
				<input id='male' type='checkbox' />
				<label htmlFor='female'>Female</label>
				<input id='female' type='checkbox' />
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					onChange={e => SetNewUser({ ...newUser, active: e.target.checked })}
					id='active'
					type='checkbox'
				/>
			</div>
			<button
				onClick={() =>
					fetchDataCreate(URLS.POST, setData, {
						method: 'POST',
						body: JSON.stringify({ ...newUser }),
						headers: {
							Accept: 'application/json',

							'Content-Type': 'application/json'
						}
					})
				}
			>
				Create
			</button>
			<button
				onClick={() => {
					setAction({ edit: false, delete: false, open: false, create: false });
					SetNewUser({
						active: false,
						age: '',
						email: '',
						name: '',
						title: '',
						username: ''
					});
				}}
			>
				Cancel
			</button>
		</form>
	);
};

const fetchDataCreate = async (urlToFetch, setData, ...options) => {
	console.log(urlToFetch);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
};

export default CreateUser;
