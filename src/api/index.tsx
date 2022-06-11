const baseUrl = 'https://api.covid19api.com/';

const api = {
  summary: `${baseUrl}summary`,
  countries: `${baseUrl}countries`,
};

export const summary = async cbSuccess => {
  return await fetch(api.summary)
    .then(res => {
      return res.json();
    })
    .then(result => {
      return result.Global;
    });
};
export const countryListApi = async () => {
  return await fetch(api.countries)
    .then(res => {
      return res.json();
    })
    .then(result => {
      return result;
    });
};
