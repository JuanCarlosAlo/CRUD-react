import { useNavigate } from 'react-router-dom';
import {
	StyledButtonDelete,
	StyledButtonEdit,
	StyledButtonInfo,
	StyledButtons,
	StyledButtonsContainer,
	StyledImg,
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo
} from './styles';

const UserCard = ({ element, setAction, setUserById }) => {
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
				<StyledButtons>
					<StyledButtonInfo
						onClick={() => navigate(`/details/${element.userId}`)}
					>
						<StyledImg src='/circle-info-solid.svg' alt='' />
					</StyledButtonInfo>
					<StyledButtonEdit
						onClick={() => {
							setAction({
								delete: false,

								edit: true,
								create: false
							});
							setUserById(element);
						}}
					>
						<StyledImg src='/pen-to-square-solid.svg' alt='' />
					</StyledButtonEdit>
					<StyledButtonDelete
						onClick={() => {
							setAction({
								edit: false,

								delete: true,
								create: false
							});
							setUserById(element);
						}}
					>
						<StyledImg src='/trash-solid.svg' alt='' />
					</StyledButtonDelete>
				</StyledButtons>
			</StyledButtonsContainer>
		</StyledUserCard>
	);
};

export default UserCard;
