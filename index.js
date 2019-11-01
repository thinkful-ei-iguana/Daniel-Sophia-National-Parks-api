const apiKey = 'MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e';
const baseUrl = 'https://developer.nps.gov/api/v1';
const arrayStates = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

function getParks() {

  fetch('https://developer.nps.gov/api/v1/parks?stateCode=tx&api_key=MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

}

function submitHandler() {
  $('#state-submit').submit(event => {
    event.preventDefault();
    getParks();
  }
  );
};

submitHandler();
