import { useNavigate } from 'react-router-dom';
import {
	StyledButtonsContainer,
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo
} from './styles';

const UserCard = ({ element }) => {
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
					<button>edit</button>
					<button>delete</button>
				</div>
			</StyledButtonsContainer>
		</StyledUserCard>
	);
};

export default UserCard;
