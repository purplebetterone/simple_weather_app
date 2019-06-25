const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
//require('dotenv'}.config();

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`now listening at port ${port}`)
})

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.get('/weather/:latlon', async (request, response ) =>{
	console.log(request.params);
	const latlon = request.params.latlon.split(',');
	const lat = latlon[0];
	const lon = latlon[1];
	//console.log(lat, lon);
	const api_key = '70cd0eaac6d205a0c220d6780f27c514';
	const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}`;
	const weather_response = await fetch(weather_url);
	const weather_data = await weather_response.json();
	console.log(`${lat},${lon}`)

	//const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
	 // const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
	  const aq_url = `https://api.openaq.org/v1/latest?coordinates=40.73,-73.99`
	const aq_response = await fetch(aq_url);
	const aq_data = await aq_response.json();

	const data = {
		weather: weather_data,
		air_quality: aq_data
	};
	response.json(data);
});