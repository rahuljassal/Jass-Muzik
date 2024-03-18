const axios = require("axios");

const options = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  headers: {
    "X-RapidAPI-Key": "c798373116mshda3048328a62639p19d359jsn035652486aa5",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
