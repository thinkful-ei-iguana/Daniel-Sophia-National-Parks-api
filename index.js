const apiKey = 'MghaYsUpHaHrgblfI7IcgQgucoKbB3gUMzY6HR7e';

const arrayStates = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

function getParks(str) {
  const baseUrl = 'https://developer.nps.gov/api/v1/parks';
  fetch(baseUrl + str)
    .then(response => response.json())
    .then(responseJson => renderParks(responseJson));
}

function formatParameters(states, numResults) {
  return `?stateCode=${states}&limit=${numResults}&Api_key=${apiKey}`;
}

function submitHandler () {
  $('form').submit(event => {
    event.preventDefault();
    let limit = $('#limit').val();
    let states = $('#states').val();
    let str = formatParameters(states, limit);
    getParks(str);
  });
}

function renderParks(response) {
  let parks = response.data;
  let html = '';
  parks.forEach(park => {
    html += `
      <ul>
        <li>${park.fullName}</li>
        <li>${park.description}</li>
        <li>${park.url}</li>
      </ul>
    `;
  });

  $('.results').html(html);
}

submitHandler();