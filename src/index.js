const axios = require('axios')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios.get(url).then((res) => {
    return res
  }).catch((error) => {
    console.error("404 Error occurred", error)
    throw error
  })
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios.get(url).then((res) => {
    const { data } = res
    return data
  }).catch((error) => {
    console.error("Movie ID not found", error)
    throw error
  })
}

const getMovieByIdFailure = () => {
  const fakeId = .25 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios.get(url)
  .then(() => {
    throw new Error('Expected request to fail'); // Throw an error to indicate failure
  })
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return Promise.resolve(404); // Return a resolved Promise with the value 404
    }
    console.error(`Error occurred during getMovieByIdFailure for fakeId ${fakeId}:`, error);
    throw error;
  });
}




module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}