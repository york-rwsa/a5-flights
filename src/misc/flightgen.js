/* eslint-disable */

[{
  'repeat(10)': {
    airline: '{{random("Ryanair","British Airways","Air France","easyJet","Turkish Airlines","Aeroflot","Norwegian","Scandinavian Airlines","Wizz Air","Pegasus Airlines","Aegean Airlines","Finnair","Air Europa","SunExpress","Flybe")}}',
    stops(tags) {
      let numberOfStops = tags.random(0, 0, 0, 1, 2, 3);
      let possibleStops = ['JFK', 'LAX', 'LGW', 'LHR', 'CAN', 'HKG', 'MAN'];
      let stops = [];
      for (i = 0; i < numberOfStops; i++) {
        let stop = possibleStops[Math.floor(Math.random() * possibleStops.length)];
        stops.push(stop);
        possibleStops.splice(possibleStops.indexOf(stop), 1);
      }

      return stops;
    }
  }
}]