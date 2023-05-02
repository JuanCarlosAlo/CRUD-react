import { v4 } from 'uuid';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import UserCard from '../../components/user-card/UserCard';
import { useState } from 'react';
import EditUser from '../../components/edit-user/EditUser';
import DeleteUser from '../../components/delete-user/DeleteUser';
import CreateUser from '../../components/create-user/CreateUser';
import {
	StyledButton,
	StyledFilterHeader,
	StyledHome,
	StyledImg,
	StyledList,
	StyledListContainer,
	StyledOptions
} from './styles';
import Filter from '../../components/filter/Filter';
import { useFilter } from '../../hooks/useFilter';

const Home = () => {
	const { data, setData, setUrlToFetch, setOptions } = useFetch(URLS.ALL);
	const { filteredUser, filter, setFilter } = useFilter(data);
	const [action, setAction] = useState({
		edit: false,
		delete: false,
		create: false
	});

	const [userById, setUserById] = useState({});
	if (!data) {
		return <h1>Loading</h1>;
	} else {
		return (
			<StyledHome>
				<StyledListContainer>
					<StyledFilterHeader>
						<StyledButton
							onClick={() =>
								setAction({
									edit: false,
									delete: false,
									open: false,
									create: true
								})
							}
						>
							<StyledImg src='/user-plus-solid.svg' alt='' />
						</StyledButton>
						<Filter filter={filter} setFilter={setFilter} />
					</StyledFilterHeader>
					<StyledList>
						{filteredUser.map(element => (
							<UserCard
								key={v4()}
								element={element}
								setAction={setAction}
								setUserById={setUserById}
							/>
						))}
					</StyledList>
				</StyledListContainer>

				<StyledOptions>
					{action.edit && (
						<EditUser
							userById={userById}
							setData={setData}
							setAction={setAction}
							setUrlToFetch={setUrlToFetch}
							setOptions={setOptions}
						/>
					)}
					{action.delete && (
						<DeleteUser
							userById={userById}
							setData={setData}
							setAction={setAction}
							setUserById={setUserById}
							setUrlToFetch={setUrlToFetch}
							setOptions={setOptions}
						/>
					)}
					{action.create && (
						<CreateUser
							usetData={setData}
							setAction={setAction}
							setUrlToFetch={setUrlToFetch}
							setOptions={setOptions}
						/>
					)}
				</StyledOptions>
			</StyledHome>
		);
	}
};

export default Home;
