const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  
  const [ { name: firstName, sport: firstSport } ] = athletes;
  const [neerajFirst, neerajSecond, ...neerajRest] = athletes[2].scores;
  const neerajUpdated = { ...athletes[2], age: 27, worldChampion: true };
  const allScores = [...athletes[0].scores, ...athletes[1].scores, ...athletes[2].scores];
  
  console.log(`${firstName} plays ${firstSport}`);
  console.log(neerajFirst, neerajSecond, neerajRest);
  console.log(neerajUpdated);
  console.log(allScores);
  