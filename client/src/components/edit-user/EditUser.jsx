import { useState } from 'react';

import { URLS } from '../../constants/urls';

const EditUser = ({ userById, setData, setAction }) => {
	if (userById) {
		const [gender, setGender] = useState('men');
		const [newUser, setNewUser] = useState({
			name: userById.name,
			username: userById.username,
			email: userById.email,
			age: userById.age,
			profileImage: userById.profileImage
		});

		const url = URLS.EDIT + userById.userId;
		return (
			<div>
				<div>
					<img src={newUser.profileImage} alt='' />
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
						<button
							onClick={() => {
								randomPicture(gender, setNewUser, newUser);
							}}
						>
							Generate picture
						</button>
					</div>
					<p>{newUser.name}</p>

					<form onSubmit={e => e.preventDefault()}>
						<input
							onChange={e => setNewUser({ ...newUser, name: e.target.value })}
							type='text'
							placeholder='New Name'
						/>
						<input
							onChange={e =>
								setNewUser({ ...newUser, username: e.target.value })
							}
							type='text'
							placeholder='New UserName'
						/>
						<input
							onChange={e => setNewUser({ ...newUser, email: e.target.value })}
							type='text'
							placeholder='New Email'
						/>
						<input
							onChange={e => setNewUser({ ...newUser, name: e.target.value })}
							type='text'
							placeholder='New Age'
						/>
						<button
							onClick={e => {
								setNewUser({
									name: userById.name,
									username: userById.username,
									email: userById.email,
									age: userById.age
								});
								setAction({
									edit: false,
									delete: false,
									open: false,
									create: false
								});
							}}
						>
							Cancel
						</button>
						<button
							onClick={e => {
								fetchDataEdit(url, setData, {
									method: 'PATCH',
									body: JSON.stringify(newUser),
									headers: {
										Accept: 'application/json',

										'Content-Type': 'application/json'
									}
								});
							}}
						>
							Accept
						</button>
					</form>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

const randomPicture = (gender, setNewUser, newUser) => {
	const randomNumber = Math.floor(Math.random() * 99);
	setNewUser({
		...newUser,
		profileImage: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
	});
};

const fetchDataEdit = async (urlToFetch, setData, ...options) => {
	console.log(...options);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
	console.log(data);
};

export default EditUser;
