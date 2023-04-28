import { useNavigate } from 'react-router-dom';
import {
	StyledButtonsContainer,
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo
} from './styles';

const UserCard = ({ element, setAction, action }) => {
	const navigate = useNavigate();

	return (
		<StyledUserCard>
			<StyledUserInfo>
				<StyledUserImg src={element.profileImage} alt='' />
				<div>
					<p>{element.name}</p>
					<p>{element.username}</p>
				</div>
			</StyledUserInfo>
			<StyledButtonsContainer>
				<p>{element.active ? 'Online' : 'Offline'}</p>
				<div>
					<button onClick={() => navigate(`/details/${element.userId}`)}>
						details
					</button>
					<button
						onClick={() =>
							setAction({
								delete: false,
								open: true,
								edit: element.userId,
								create: false
							})
						}
					>
						edit
					</button>
					<button
						onClick={() =>
							setAction({
								edit: false,
								open: true,
								delete: element.userId,
								create: false
							})
						}
					>
						delete
					</button>
				</div>
			</StyledButtonsContainer>
		</StyledUserCard>
	);
};

export default UserCard;
