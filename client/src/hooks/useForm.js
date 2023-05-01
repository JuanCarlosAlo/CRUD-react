import { useState } from 'react';

export const useForm = () => {
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

	const addUserInfo = (newInfo, newKey) => {
		setNewUser({ ...newUser, [newKey]: newInfo });
	};
	const randomPicture = () => {
		const randomNumber = Math.floor(Math.random() * 99);
		setNewUser({
			...newUser,
			profileImage: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
		});
	};

	return { setNewUser, addUserInfo, randomPicture, setGender, newUser };
};
