// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("70.79.164.103", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });


fetchISSFlyOverTimes({ latitude: 49.2827291, longitude: -123.1207375 }, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned the next upcoming times that the ISS will fly over the given coordinates, and the duration it will remain "visible" in the sky:' , passTimes);
});