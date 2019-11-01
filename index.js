const apiKey = 'MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e';
const baseUrl = 'https://developer.nps.gov/api/v1';

function getParks () {
  const options = {
    headers: new Headers({
      'X-Api-Key': apiKey
    })  
  };

  fetch('https://developer.nps.gov/api/v1/parks?stateCode=tx', options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

}

getParks();