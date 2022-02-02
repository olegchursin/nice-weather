import useSWR from 'swr';

const WEATHER_API = process.env.WEATHER_API;
const API_KEY = process.env.API_KEY;
const ZIP = '11215';
const FETCH_AQI = 'yes';

const fetcher = url => fetch(url).then(res => res.json());
const baseUrl = `${WEATHER_API}?key=${API_KEY}&q=${ZIP}&aqi=${FETCH_AQI}`;

interface ICondition {
  text: string;
  icon: string;
  code: string;
}

interface IAirQuality {
  readonly co: number;
  readonly no2: number;
  readonly o3: number;
  readonly so2: number;
  readonly pm2_5: number;
  readonly pm10: number;
  readonly 'us-epa-index': number;
  readonly 'gb-defra-index': number;
}
interface ICurrentData {
  readonly last_updated_epoch: Date | string | number;
  readonly last_updated: Date | string | number;
  readonly temp_c: number;
  readonly temp_f: number;
  readonly is_day: number;
  readonly condition: ICondition;
  readonly wind_mph: number;
  readonly wind_kph: number;
  readonly wind_degree: number;
  readonly wind_dir: string;
  readonly pressure_mb: number;
  readonly pressure_in: number;
  readonly precip_mm: number;
  readonly precip_in: number;
  readonly humidity: number;
  readonly cloud: number;
  readonly feelslike_c: number;
  readonly feelslike_f: number;
  readonly vis_km: number;
  readonly vis_miles: number;
  readonly uv: number;
  readonly gust_mph: number;
  readonly gust_kph: number;
  readonly air_quality: IAirQuality;
}

interface ILocationData {
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly lat: number;
  readonly lon: number;
  readonly tz_id: string;
  readonly localtime_epoch: Date | string | number;
  readonly localtime: Date | string | number;
}

interface IWeatherData {
  readonly location: ILocationData;
  readonly current: ICurrentData;
}

interface IUseGetWeatherData {
  readonly weather: IWeatherData;
  readonly isLoading: boolean;
  readonly error: any;
}

export const useGetWeather = (): IUseGetWeatherData => {
  const { data, error } = useSWR(baseUrl, fetcher);
  if (error) {
    console.error('API Error: ', error);
  }
  return {
    weather: data,
    isLoading: !error && !data,
    error: !!error
  };
};
