

const express = require('express')
const async = require('async');
const cors = require('cors')
const app = express()
const port = 3000

const request = require('request');
const { response } = require('express');


app.use(cors());

app.get('/', (req, res) => {
	res.send('bla bla bla')
})

app.get('/landing', function (req, res) {
	res.send('Landing')
	res.end()
});

app.get('/drivers', function(req, res) {
	var request = require("request");
	var options = {
		method: 'GET',
		url: 'http://api.sportradar.us/nascar-ot3/mc/2020/drivers/list.json?api_key=ha9qceygzbanbs8efjkju9e6'
	}
	

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		res.send(body);
	});

});

app.get('/tracks/Dover', function(req, res) {
	var request = require("request");
	var options = {
		method: 'GET',
		url: 'http://dataservice.accuweather.com/currentconditions/v1/332276?apikey=BQ3Nmt3IuPJUFaSm4hG9C3pRX6FAxqTu&language=pt-br'
		
	}
	
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		res.send(body);
	});
})

app.get('/series', function(req, res) {
	var request = require("request");
	var options = {
		method: 'GET',
		url: 'https://api.sportsdata.io/nascar/v2/json/series?key=caa9edb7efee4c13998e9be5d29f108f'
		
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		res.send(body);
	});
});

app.get('/tracks', function(req, res) {
	var request = require("request");
	var options = {
		method: 'GET',
		url: 'http://api.sportradar.us/nascar-ot3/tracks/list.json?api_key=ha9qceygzbanbs8efjkju9e6'
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		console.log(body);
		res.send(body);
	});
});

app.get('/drivers/:id', function(req, res, next) {
	var request = require("request");
	const requestedId = req.query.id;
	var options = {
		method: 'GET',
		url: 'https://api.sportsdata.io/nascar/v2/json/driver/'+ requestedId +'?key=caa9edb7efee4c13998e9be5d29f108f'
		
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		console.log(body);
		res.send(body);
	});
});


app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})

