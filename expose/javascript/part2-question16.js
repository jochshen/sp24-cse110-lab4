let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCrs: 40,
  rareCars: 2,
};

for (let car in statistics) {
    if (car[0] == 'r' || statistics[car] % 2 == 1) {
        console.log(`${car}: ${statistics[car]}`);
    }
}
