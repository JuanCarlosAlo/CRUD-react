import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';
import { useForm } from '../../hooks/useForm';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledEditUser,
	StyledForm,
	StyledImgContainer
} from './styles';

const EditUser = ({ userById, setAction, setUrlToFetch, setOptions }) => {
	if (userById) {
		const { setNewUser, randomPicture, setGender, newUser } = useForm();

		const url = URLS.EDIT + userById.userId;
		return (
			<StyledEditUser>
				<img src={newUser.profileImage} alt='' />
				<StyledImgContainer>
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

					<button
						onClick={() => {
							randomPicture();
							setNewUser({ ...userById });
						}}
					>
						Generate picture
					</button>
				</StyledImgContainer>
				<p>{userById.name}</p>

				<StyledForm onSubmit={e => e.preventDefault()}>
					<input
						onChange={e => setNewUser({ ...userById, name: e.target.value })}
						type='text'
						placeholder='New Name'
					/>
					<input
						onChange={e =>
							setNewUser({ ...userById, username: e.target.value })
						}
						type='text'
						placeholder='New UserName'
					/>
					<input
						onChange={e => setNewUser({ ...userById, email: e.target.value })}
						type='text'
						placeholder='New Email'
					/>
					<input
						onChange={e => setNewUser({ ...userById, name: e.target.value })}
						type='text'
						placeholder='New Age'
					/>
					<StyledButtonsContainer>
						<StyledButton
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

									create: false
								});
							}}
						>
							Cancel
						</StyledButton>
						<StyledButton
							onClick={e => {
								setUrlToFetch(url);
								setOptions({
									method: METHODS.PATCH,
									body: JSON.stringify(newUser),
									headers: {
										Accept: 'application/json',

										'Content-Type': 'application/json'
									}
								});
							}}
						>
							Accept
						</StyledButton>
					</StyledButtonsContainer>
				</StyledForm>
			</StyledEditUser>
		);
	} else {
		return <div></div>;
	}
};

export default EditUser;
