import { useState } from 'react';
import { useEditFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const EditUser = ({ editUser }) => {
	if (editUser.length !== 0) {
		const [data, setData] = useState([]);
		const [newUser, setNewUser] = useState({
			name: editUser[0].name,
			username: editUser[0].username,
			email: editUser[0].email,
			age: editUser[0].age
		});

		const url = URLS.EDIT + editUser[0].userId;
		return (
			<div>
				<div>
					<p>{editUser[0].name}</p>
					<form>
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
								e.preventDefault();
								setNewUser({
									name: editUser[0].name,
									username: editUser[0].username,
									email: editUser[0].email,
									age: editUser[0].age
								});
								fetchDataEdit(url, {
									method: 'PATCH',
									body: JSON.stringify(newUser),
									headers: {
										Accept: 'application/json',

										'Content-Type': 'application/json'
									}
								});
							}}
						>
							Cancel
						</button>
						<button
							onClick={e => {
								e.preventDefault();
								fetchDataEdit(url, {
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

const fetchDataEdit = async (urlToFetch, ...options) => {
	console.log(...options);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();

	console.log(data);
};

export default EditUser;
