// pages/api/search.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: `https://hapi-books.p.rapidapi.com/search/${req.query.title}`,
		headers: {
			'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
			'X-RapidAPI-Key': ''
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
