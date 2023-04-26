import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const Details = () => {
	const userId = useParams();

	const { data, setUrlToFetch } = useFetch(URLS.DETAILS + userId.id);
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<p>{data.name}</p>
				<p>{data.age}</p>
				<p>{data.email}</p>
				<p>{data.username}</p>
				<p>{data.active}</p>
				<button onClick={() => navigate('/')}>Back</button>
			</div>
		</div>
	);
};

export default Details;
