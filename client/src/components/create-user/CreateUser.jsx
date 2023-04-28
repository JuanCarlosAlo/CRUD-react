import { useState } from 'react';
import { URLS } from '../../constants/urls';

const CreateUser = ({ setData, setAction }) => {
	const [gender, setGender] = useState('men');
	const [picture, setPicture] = useState(
		'https://randomuser.me/api/portraits/men/57.jpg'
	);
	const [newUser, SetNewUser] = useState({
		active: false,
		age: '',
		email: '',
		name: '',
		title: '',
		username: '',
		profileImage: picture
	});
	return (
		<form onChange={e => e.preventDefault()}>
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
				<label htmlFor='email'>email</label>
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
				<label htmlFor='male'>Title</label>
				<input
					onChange={e => SetNewUser({ ...newUser, title: e.target.value })}
					id='male'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					onChange={e => SetNewUser({ ...newUser, active: e.target.checked })}
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
			<img src={picture} alt='' />
			<button
				onClick={e => {
					e.preventDefault();
					randomPicture(gender, setPicture);
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

const randomPicture = (gender, setPicture) => {
	const randomNumber = Math.floor(Math.random() * 99);
	setPicture(
		`https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
	);
};

const fetchDataCreate = async (urlToFetch, setData, ...options) => {
	console.log(urlToFetch);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
};

export default CreateUser;
