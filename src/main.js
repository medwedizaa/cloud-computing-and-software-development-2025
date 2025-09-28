fetch('https://flight.pequla.com/api/flight/list?type=departure')
    .then(rsp => rsp.json())
    .then(data => {
        const flights = document.getElementById('flights')
        for (let flight of data) {
            const li = document.createElement('li')
            li.setAttribute('data-flight-id', flight.id)
            li.innerText = `${flight.flightNumber} ${flight.destination}`
            flights.appendChild(li)
        }
    })