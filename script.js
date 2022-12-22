const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcac5d243amsh341cf29dddc80f4p16b9edjsn5bf5eecbc3ad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

		city_name.innerHTML=city
		
		console.log(response)
		temp.innerHTML=response.temp 
		humidity.innerHTML=response.humidity 
		min_temp.innerHTML=response.min_temp 
		max_temp.innerHTML=response.max_temp 
		wind_speed.innerHTML=response.wind_speed 
		wind_degrees.innerHTML=response.wind_degrees 

		time = (timestamp) =>{
			var date = new Date(timestamp*1000)
			var hours = date.getHours()
			var minutes = "0"+date.getMinutes()
			var seconds = "0"+date.getSeconds()
			var format_time = hours+":"+minutes.substr(-2)+":"+seconds.substr(-2)
			return format_time
		}
		sr = response.sunrise
		sunrise.innerHTML=time(sr)
		ss = response.sunset
		sunset.innerHTML=time(ss)

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")