import axios from "axios";

// base url
export const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

// end points
export const getAllCountries = () => {
  return axiosInstance.get("all");
};

export const getCountriesByRegion = (region) => {
  return axiosInstance.get(`region/${region}`);
};

export const getCountryByName = (name) => {
  return axiosInstance.get(`name/${name}`);
};
