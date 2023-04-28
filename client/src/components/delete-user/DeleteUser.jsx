import { URLS } from '../../constants/urls';

const DeleteUser = ({ userById, setData, setAction, setUserById }) => {
	if (userById) {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<div>Are you sure you want to delete {userById.name} user?</div>
				<button
					onClick={() => {
						fetchDataDelete(URLS.DELETE + userById.userId, setData, {
							method: 'DELETE'
						});
						setUserById('');
					}}
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
			</form>
		);
	}
};
const fetchDataDelete = async (urlToFetch, setData, ...options) => {
	console.log(urlToFetch);
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
};

export default DeleteUser;
