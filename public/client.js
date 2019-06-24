if('geolocation' in navigator){
    console.log('geolocation available');

    navigator.geolocation.getCurrentPosition(async position => {
        let lat, lon;
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
    })

} else {
    console.log('sorry geolocation not available in this device');
}