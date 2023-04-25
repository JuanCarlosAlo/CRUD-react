import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(url);
	useEffect(() => {
		console.log(urlToFetch);
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

	return { data, setUrlToFetch };
};

const fetchData = async (urlToFetch, setData) => {
	const request = await fetch(urlToFetch);
	const data = await request.json();
	setData(data);
};
