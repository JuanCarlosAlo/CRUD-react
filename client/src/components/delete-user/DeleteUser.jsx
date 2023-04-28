import { URLS } from '../../constants/urls';

const DeleteUser = ({ deleteUser, setData, setAction }) => {
	const url = URLS.DELETE + deleteUser[0].userId;

	return (
		<div>
			<div>Are you sure you want to delete {deleteUser[0].name} user?</div>
			<button
				onClick={() =>
					fetchDataDelete(url, setData, {
						method: 'DELETE'
					})
				}
			>
				Yes
			</button>
			<button
				onClick={() =>
					setAction({
						edit: false,
						delete: false,
						open: false,
						create: false
					})
				}
			>
				No
			</button>
		</div>
	);
};
const fetchDataDelete = async (urlToFetch, setData, ...options) => {
	console.log(urlToFetch);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
};

export default DeleteUser;
