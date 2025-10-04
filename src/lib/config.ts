type Config = {
  API_BASE_URL: string;
};

function getConfig(): Config {
  const hostname = window.location.hostname;
  switch (hostname) {
    case "localhost":
    case "127.0.0.1":
      return {
        API_BASE_URL: "http://localhost:8000/api/v1",
      };

    default:
      return {
        API_BASE_URL:
          "http://leather-api-dev-alb-1256121811.ap-northeast-1.elb.amazonaws.com/api/v1",
      };
  }
}
export default getConfig();
