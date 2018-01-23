interface AppConfigNav {
  baseUrl: string;
  homeUrl: string;
  firstUrl: string;
  secondUrl: string;
  accountUrl: string;
  setupUrl: string;
  logoutUrl: string;
}

interface ApiUrl {
  baseUrl: string;
  user: string;
  googleMapUrl: string;
  stations: string;
  stationDailyData: string;
}

interface AppConfig {
  ORIGIN: string;
  NAV: AppConfigNav;
  API_URL: ApiUrl;
}

declare const CONFIG: AppConfig;

export { CONFIG as Config };
export const Nav: AppConfigNav = CONFIG.NAV;
export const ApiUrl: ApiUrl = CONFIG.API_URL;
