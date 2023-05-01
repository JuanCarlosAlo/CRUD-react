import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';
import {
	StyledButton,
	StyledDetails,
	StyledImg,
	StyledInfoContainer
} from './styles';

const Details = () => {
	const userId = useParams();

	const { data } = useFetch(URLS.DETAILS + userId.id);
	const navigate = useNavigate();
	return (
		<StyledDetails>
			<StyledInfoContainer>
				<StyledImg src={data.profileImage} alt='' />
				<div>
					<p>UserName: {data.username}</p>
					<p>Name: {data.name}</p>
					<p>Age: {data.age}</p>
					<p>Email: {data.email}</p>
					<p>Active: {data.active ? 'Active' : 'Inactive'}</p>
				</div>
			</StyledInfoContainer>

			<StyledButton onClick={() => navigate('/')}>Back</StyledButton>
		</StyledDetails>
	);
};

export default Details;
