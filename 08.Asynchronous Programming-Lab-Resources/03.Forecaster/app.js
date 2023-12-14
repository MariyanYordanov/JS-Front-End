function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayURL = 'http://localhost:3030/jsonstore/forecaster/today';
    const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming';
    const btnGet = document.getElementById('submit');
    const conditions = ['Sunny','Partly sunny','Overcast','Rain','Degrees'];
    const symbols = ['☀','⛅','☁','☂','°'];

    btnGet.addEventListener('click', () => {

        const input = document.getElementById('location').value;

        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                const locations = Object.values(data);
                const location = locations.find(l => l.name === input);

                fetch(`${todayURL}/${location.code}`)
                    .then(res => res.json())
                    .then(data => {
                        const symbolIndex = conditions.findIndex(x => x === data.forecast.condition);
                        const condition = document.getElementById('forecast');
                        const spanSymbol = document.createElement('span');
                        spanSymbol.className = 'condition symbol';
                        spanSymbol.textContent = symbols[symbolIndex];
                        condition.appendChild(spanSymbol);
                        document.getElementById('forecast').style.display = 'block';
                    })

                fetch(`${upcomingURL}/${location.code}`)
                    .then(res => res.json())
                    .then(data => {
                        const upcoming = document.getElementById('upcoming');
                    })
            })

    })
}

attachEvents();