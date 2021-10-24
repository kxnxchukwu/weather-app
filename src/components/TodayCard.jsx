import React from 'react';

function TodayCard (props) {

	let {data} = props;
	let {coord, name, main, weather, wind} = data
	let {lon, lat} = coord;
	let {temp, feels_like, temp_min, temp_max, humidity} = main;
	let {main: overview, description} = weather[0];
	let {speed} = wind;
	let day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
	let todaysDate = new Date().toString().split(' ').splice(1,3).join(' ');


    return (
		<div className="main mx-auto mt-5 pt-5">
		<p className="header">{name}</p>

		<div className="flex">
		<p className="day">Overview: {overview}</p>
		<p className="day">Description: {description}</p>
		</div>

		<div className="flex">
		  <p className="day">Day: {day}</p>
		  <p className="day">{todaysDate}</p>
		</div>

		<div className="flex">
		  <p className="day">Longitude: {lon}</p>
		  <p className="day">Latitude: {lat}</p>
		</div>
  
		<div className="flex">
		  <p className="temp">Temprature: {temp} &deg;C</p>
		  <p className="temp">Feels Like: {feels_like} &deg;C</p>
		</div>

		<div className="flex">
		  <p className="temp">Minimum Temprature: {temp_min} &deg;C</p>
		  <p className="temp">Maximum Temprature: {temp_max} &deg;C</p>
	
		</div>

		<div className="flex">
			<p className="temp">Humidity: {humidity} %</p>
			<p className="temp">Wind Speed: {speed} km/h</p>
		</div>
		
		
	</div>
    );

}

export default TodayCard;