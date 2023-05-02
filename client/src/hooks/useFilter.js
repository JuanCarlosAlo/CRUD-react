import { useState } from 'react';

export const useFilter = data => {
	const [filter, setFilter] = useState({
		active: true,
		search: '',
		sort: 0
	});
	const usersList = [...data];

	const activeFilter = () => {
		if (!filter.active) {
			return usersList.filter(element => element.active);
		} else {
			return usersList;
		}
	};
	const searchFilter = () => {
		if (filter.search !== '') {
			return filteredUser.filter(element =>
				element.name.toLowerCase().includes(filter.search)
			);
		} else {
			return filteredUser;
		}
	};
	const sortFilter = () => {
		if (filter.sort !== 0) {
			return filteredUser.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		} else {
			return filteredUser;
		}
	};
	let filteredUser = activeFilter(filter.active, usersList);
	filteredUser = searchFilter(filter.search, filteredUser);
	filteredUser = sortFilter(filter.sort, filteredUser);
	return {
		filteredUser,
		filter,
		setFilter
	};
};
