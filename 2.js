const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  
  const highlyRatedMovies = movies.filter(movie => movie.rating > 7.5);
  const totalWatchTime = highlyRatedMovies.reduce((sum, movie) => sum + movie.watchTime, 0);
  const bestMovies = highlyRatedMovies.map(movie => ({ title: movie.title, watchTime: movie.watchTime / 60 }));
   
  console.log(highlyRatedMovies)
  console.log(totalWatchTime)
  console.log(bestMovies)