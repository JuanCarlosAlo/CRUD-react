import { useEffect, useState } from 'react';

const useFetch = url => {
	console.log('USE FETCH');
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(url);

	useEffect(() => {
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

	return { data, setUrlToFetch, setData };
};

const useEditFetch = (url, newMethod, userNewInfo) => {
	console.log(userNewInfo);
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(url);

	useEffect(() => {
		fetchDataEdit(urlToFetch, setData, {
			method: newMethod,
			body: JSON.stringify(userNewInfo),
			headers: {
				Accept: 'application/json',

				'Content-Type': 'application/json'
			}
		});
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

	return { data, setUrlToFetch, urlToFetch };
};

const fetchData = async (urlToFetch, setData) => {
	const request = await fetch(urlToFetch);
	const data = await request.json();
	setData(data);
	console.log(data);
};

const fetchDataEdit = async (urlToFetch, setData, ...options) => {
	const request = await fetch(urlToFetch, ...options);
	const data = await request.json();
	setData(data);
	console.log(data);
};

export { useFetch, useEditFetch };
