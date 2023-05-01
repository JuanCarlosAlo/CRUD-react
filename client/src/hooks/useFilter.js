import { useState } from 'react';

export const useFilter = data => {
	const [active, setActive] = useState(true);
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState(0);
	const usersList = [...data];

	const activeFilter = (active, usersList) => {
		if (!active) {
			return usersList.filter(element => element.active);
		} else {
			return usersList;
		}
	};
	const searchFilter = (search, filteredUser) => {
		if (search !== '') {
			return filteredUser.filter(element =>
				element.name.toLowerCase().includes(search)
			);
		} else {
			return filteredUser;
		}
	};
	const sortFilter = (sort, filteredUser) => {
		if (sort !== 0) {
			return filteredUser.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		} else {
			return filteredUser;
		}
	};
	let filteredUser = activeFilter(active, usersList);
	filteredUser = searchFilter(search, filteredUser);
	filteredUser = sortFilter(sort, filteredUser);
	return { filteredUser, setActive, setSearch, setSort, active };
};
