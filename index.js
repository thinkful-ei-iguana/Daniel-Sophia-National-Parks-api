const apiKey = 'MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e';
const baseUrl = 'https://developer.nps.gov/api/v1';

function getParks () {

  fetch('https://developer.nps.gov/api/v1/parks?stateCode=tx&api_key=MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

}

getParks();