import { METHODS } from '../../constants/methods';
import { URLS } from '../../constants/urls';
import { StyledButton, StyledDeleteUser, StyledText } from './styles';

const DeleteUser = ({
	userById,
	setAction,
	setUserById,
	setUrlToFetch,
	setOptions
}) => {
	if (userById) {
		return (
			<StyledDeleteUser onSubmit={e => e.preventDefault()}>
				<StyledText>
					Are you sure you want to delete {userById.name} user?
				</StyledText>
				<div>
					<StyledButton
						onClick={() => {
							setUrlToFetch(URLS.DELETE + userById.userId);
							setOptions({ method: METHODS.DELETE });

							setUserById('');
						}}
					>
						Yes
					</StyledButton>
					<StyledButton
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
					</StyledButton>
				</div>
			</StyledDeleteUser>
		);
	}
};

export default DeleteUser;
