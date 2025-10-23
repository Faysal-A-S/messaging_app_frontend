type Config = {
  API_BASE_URL: string;
};

function getConfig(): Config {
  const hostname = window.location.hostname;
  switch (hostname) {
    case "localhost":
    case "127.0.0.1":
      return {
        API_BASE_URL: "http://localhost:8080/api/",
      };

    default:
      return {
        API_BASE_URL: "http://localhost:8080/api/",
      };
  }
}
export default getConfig();
