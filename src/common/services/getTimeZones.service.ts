import { API } from "../constants";

export const getTimeZones = () => {
  return fetch(API.TIME_ZONES).then((res) =>
    res.json().then((response) => response)
  );
};

export const getTimeZoneDetail = (timeZone: string) => {
  const URL = `${API.TIME_ZONES}/${timeZone}`;
  return fetch(URL).then((res) =>
    res.json().then((response: Record<string, string | number>) => response)
  );
};
