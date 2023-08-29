const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch", res.status);
    }
    return await res.json();
  } catch (error) {
    console.log("Could not fetch", error);
    return false;
  }
};
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

(async () => {
  const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
  console.log(body);
})();
