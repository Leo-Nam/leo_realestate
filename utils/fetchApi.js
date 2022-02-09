import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
		    'x-rapidapi-host': 'bayut.p.rapidapi.com',
		    'x-rapidapi-key': '94d1d92e04mshaa6c2f47e5c1bf8p1350e5jsn32cf09e8a87c'
		}
	});

	return data;
}
