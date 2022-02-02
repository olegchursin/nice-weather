import useSWR from 'swr';

const WEATHER_API = process.env.WEATHER_API;
const API_KEY = process.env.API_KEY;
const ZIP = '11215';
const FETCH_AQI = 'yes';

const fetcher = url => fetch(url).then(res => res.json());
const baseUrl = `${WEATHER_API}?key=${API_KEY}&q=${ZIP}&aqi=${FETCH_AQI}`;

export const useGetWeather = () => {
  const { data, error } = useSWR(baseUrl, fetcher);
  return {
    weather: data,
    isLoading: !error && !data,
    isError: error
  };
};

// Sample response object
// {
//   "location": {
//       "name": "Brooklyn",
//       "region": "New York",
//       "country": "USA",
//       "lat": 40.67,
//       "lon": -73.99,
//       "tz_id": "America/New_York",
//       "localtime_epoch": 1643771552,
//       "localtime": "2022-02-01 22:12"
//   },
//   "current": {
//       "last_updated_epoch": 1643767200,
//       "last_updated": "2022-02-01 21:00",
//       "temp_c": 1.7,
//       "temp_f": 35.1,
//       "is_day": 0,
//       "condition": {
//           "text": "Overcast",
//           "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
//           "code": 1009
//       },
//       "wind_mph": 0.0,
//       "wind_kph": 0.0,
//       "wind_degree": 25,
//       "wind_dir": "NNE",
//       "pressure_mb": 1034.0,
//       "pressure_in": 30.54,
//       "precip_mm": 0.0,
//       "precip_in": 0.0,
//       "humidity": 61,
//       "cloud": 100,
//       "feelslike_c": -0.7,
//       "feelslike_f": 30.7,
//       "vis_km": 16.0,
//       "vis_miles": 9.0,
//       "uv": 1.0,
//       "gust_mph": 8.5,
//       "gust_kph": 13.7,
//       "air_quality": {
//           "co": 1321.800048828125,
//           "no2": 94.5999984741211,
//           "o3": 0.0,
//           "so2": 17.600000381469727,
//           "pm2_5": 61.599998474121094,
//           "pm10": 82.5999984741211,
//           "us-epa-index": 3,
//           "gb-defra-index": 8
//       }
//   }
// }
