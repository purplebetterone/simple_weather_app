if('geolocation' in navigator){
    console.log('geolocation available');

    navigator.geolocation.getCurrentPosition(async position => {
        let lat, lon, weather, air;
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat.toFixed(3);
        document.getElementById('longitude').textContent = lon.toFixed(3);

        const api_url =`weather/${lat},${lon}`
        const response = await fetch(api_url);
        const json = await response.json();

        weather = json.weather.currently;
        console.log(weather);

        document.getElementById('summary').textContent = weather.summary;
        document.getElementById('temp').textContent = weather.temperature;

          air = json.air_quality.results[0].measurements[0];
          console.log(air);
        //console.log(air);
        document.getElementById('latest').textContent = air.lastUpdated;

    })

} else {
    console.log('sorry geolocation not available in this device');
}