import { URLS } from '../../constants/urls';
import { useForm } from '../../hooks/useForm';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledForm,
	StyledFormContainer,
	StyledImgGeneratorContainer
} from './styles';

const CreateUser = ({ setAction, setUrlToFetch, setOptions }) => {
	const { setNewUser, addUserInfo, randomPicture, setGender, newUser } =
		useForm();

	return (
		<StyledForm onSubmit={e => e.preventDefault()}>
			<img src={newUser.profileImage} alt='' />
			<StyledImgGeneratorContainer>
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
				<StyledButton
					onClick={() => {
						randomPicture();
					}}
				>
					Generate picture
				</StyledButton>
			</StyledImgGeneratorContainer>

			<StyledFormContainer>
				<label htmlFor='username'>User Name</label>
				<input
					onChange={e => addUserInfo(e.target.value, 'username')}
					id='username'
					type='text'
				/>
			</StyledFormContainer>
			<StyledFormContainer>
				<label htmlFor='name'>Name</label>
				<input
					onChange={e => addUserInfo(e.target.value, 'name')}
					id='name'
					type='text'
				/>
			</StyledFormContainer>
			<StyledFormContainer>
				<label htmlFor='email'>Email</label>
				<input
					onChange={e => addUserInfo(e.target.value, 'email')}
					id='email'
					type='text'
				/>
			</StyledFormContainer>
			<StyledFormContainer>
				<label htmlFor='age'>Age</label>
				<input
					onChange={e => addUserInfo(e.target.value, 'age')}
					id='age'
					type='text'
				/>
			</StyledFormContainer>
			<StyledFormContainer>
				<label htmlFor='male'>Title</label>
				<input
					onChange={e => addUserInfo(e.target.value, 'title')}
					id='male'
					type='text'
				/>
			</StyledFormContainer>
			<StyledFormContainer>
				<label htmlFor='active'>Active</label>
				<input
					onChange={e => addUserInfo(e.target.checked, 'active')}
					id='active'
					type='checkbox'
				/>
			</StyledFormContainer>
			<StyledButtonsContainer>
				<StyledButton
					onClick={() => {
						setUrlToFetch(URLS.POST);
						setOptions({
							method: 'POST',
							body: JSON.stringify({ ...newUser }),
							headers: {
								Accept: 'application/json',

								'Content-Type': 'application/json'
							}
						});
					}}
				>
					Create
				</StyledButton>
				<StyledButton
					onClick={() => {
						setAction({ edit: false, delete: false, create: false });
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
				</StyledButton>
			</StyledButtonsContainer>
		</StyledForm>
	);
};

export default CreateUser;
