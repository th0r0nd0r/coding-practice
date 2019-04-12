// input: flight time and a list of movie runtimes
// output: boolean to determine if any two movie times exactly equal the flight time
function compatibleMovies(flightTime, movieTimes) {
  const times = new Set();

  for (let i = 0; i < movieTimes.length; i++) {
    if (times.has(flightTime - movieTimes[i])) {
      return true;
    }
    times.add(movieTimes[i]);
  }

  return false;
}