import { useState } from 'react';
import { URLS } from '../../constants/urls';

const CreateUser = ({ setData, setAction }) => {
	const [gender, setGender] = useState('men');

	const [newUser, setNewUser] = useState({
		active: false,
		age: '',
		email: '',
		name: '',
		title: '',
		username: '',
		profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
	});

	return (
		<form onSubmit={e => e.preventDefault()}>
			<div>
				<label htmlFor='username'>User Name</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.value, 'username', newUser)
					}
					id='username'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.value, 'name', newUser)
					}
					id='name'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='email'>email</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.value, 'email', newUser)
					}
					id='email'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='age'>age</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.value, 'age', newUser)
					}
					id='age'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='male'>Title</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.value, 'title', newUser)
					}
					id='male'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					onChange={e =>
						addUserInfo(setNewUser, e.target.checked, 'active', newUser)
					}
					id='active'
					type='checkbox'
				/>
			</div>
			<div>
				<label htmlFor='men'>Man</label>
				<input
					type='radio'
					name='gender'
					id='men'
					value='men'
					defaultChecked
					onChange={e => setGender(e.target.value)}
				/>
				<label htmlFor='women'>Woman</label>
				<input
					type='radio'
					name='gender'
					id='women'
					value='women'
					onChange={e => setGender(e.target.value)}
				/>
			</div>
			<img src={newUser.profileImage} alt='' />
			<button
				onClick={() => {
					randomPicture(gender, setNewUser, newUser);
				}}
			>
				Generate picture
			</button>
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
					setNewUser({
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

const addUserInfo = (setNewUser, newInfo, newKey, newUser) => {
	setNewUser({ ...newUser, [newKey]: newInfo });
};

const randomPicture = (gender, setNewUser, newUser) => {
	const randomNumber = Math.floor(Math.random() * 99);
	setNewUser({
		...newUser,
		profileImage: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
	});
};

const fetchDataCreate = async (urlToFetch, setData, ...options) => {
	console.log(urlToFetch);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
};

export default CreateUser;
