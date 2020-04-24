const Amadeus = require("amadeus");

const amadeus = new Amadeus({
  clientId: process.env.AMA_CLIENT,
  clientSecret: process.env.AMA_SECRET,
});

// Test call, NB maximum 2000 a month

// amadeus.shopping.flightOffersSearch
//   .get({
//     originLocationCode: "SYD",
//     destinationLocationCode: "BKK",
//     departureDate: "2020-08-01",
//     adults: "2",
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (responseError) {
//     console.log(responseError.code);
//   });
