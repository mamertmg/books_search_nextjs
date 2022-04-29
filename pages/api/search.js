// pages/api/search.js
import axios from 'axios';
export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: `https://hapi-books.p.rapidapi.com/search/${req.query.title}`,
		headers: {
			'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
			'X-RapidAPI-Key': '501c776370msh8f72823bf521e48p171594jsn18b017bde7c9'
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}