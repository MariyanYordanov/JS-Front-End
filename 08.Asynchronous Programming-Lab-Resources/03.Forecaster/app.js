function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';


    const btnGet = document.getElementById('submit');
    const conditions = ['Sunny', 'Partly sunny', 'Overcast', 'Rain'];
    const symbols = ['☀', '⛅', '☁', '☂'];
    const degrees = '°';

    btnGet.addEventListener('click', () => {

        const input = document.getElementById('location').value;

        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                const locations = Object.values(data);
                const location = locations.find(l => l.name === input);
                document.getElementById('forecast').style.display = 'block';


                fetch(`${todayURL}${location.code}`)
                    .then(res => res.json())
                    .then(data => {

                        const symbolIndex = conditions.findIndex(x => x === data.forecast.condition);
                        const current = document.getElementById('current');

                        const forecasts = document.createElement('div');
                        const spanSymbol = document.createElement('span');
                        const spanCondition = document.createElement('span');
                        const spanDataCity = document.createElement('span');
                        const spanDataTemp = document.createElement('span');
                        const spanDataCondition = document.createElement('span');

                        forecasts.className = 'forecasts';
                        spanSymbol.className = 'condition symbol';
                        spanCondition.className = 'condition';
                        spanDataCity.className = 'forecast-data';
                        spanDataTemp.className = 'forecast-data';
                        spanDataCondition.className = 'forecast-data';

                        spanSymbol.textContent = symbols[symbolIndex];
                        spanDataCity.textContent = data.name;
                        spanDataTemp.textContent = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                        spanDataCondition.textContent = data.forecast.condition;

                        current.appendChild(forecasts);
                        forecasts.appendChild(spanSymbol);
                        forecasts.appendChild(spanCondition);
                        spanCondition.appendChild(spanDataCity);
                        spanCondition.appendChild(spanDataTemp);
                        spanCondition.appendChild(spanDataCondition);
                    })

                fetch(`${upcomingURL}${location.code}`)
                    .then(res => res.json())
                    .then(data => {

                        const upcoming = document.getElementById('upcoming');
                        const forecasts = document.createElement('div');
                        forecasts.className = 'forecast-info';
                        upcoming.appendChild(forecasts);
                        
                        const dataValues = Object.values(data)[0];

                        for (const element in dataValues) {

                            const symbolIndex = conditions.findIndex(x => x === dataValues[element].condition);

                            const spanUpcoming = document.createElement('span');
                            const spanSymbol = document.createElement('span');
                            const spanData = document.createElement('span');
                            const spanCondition = document.createElement('span');

                            spanUpcoming.className = 'upcoming';
                            spanSymbol.className = 'symbol';
                            spanData.className = 'forecast-data';
                            spanCondition.className = 'forecast-data';

                            spanData.textContent = `${dataValues[element].low}${degrees}/${dataValues[element].high}${degrees}`;
                            spanSymbol.textContent = symbols[symbolIndex];
                            spanCondition.textContent = dataValues[element].condition;

                            forecasts.appendChild(spanUpcoming);
                            spanUpcoming.appendChild(spanSymbol);
                            spanUpcoming.appendChild(spanData);
                            spanUpcoming.appendChild(spanCondition);
                        }
                    })

            })

    })
}

attachEvents();