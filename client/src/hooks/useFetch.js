import { useEffect, useState } from 'react';

export const useFetch = url => {
	console.log('USE FETCH');
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(url);
	const [options, setOptions] = useState({});

	useEffect(() => {
		fetchData(urlToFetch, setData, options);
	}, [urlToFetch]);

	return { data, setUrlToFetch, setData, setOptions };
};

const fetchData = async (urlToFetch, setData, ...options) => {
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
	console.log(data);
};
