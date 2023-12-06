import axios from "axios";
//holds all of the routes to the backend

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = "http://localhost";
  }

  async request({ endpoint, method, data = {} }) {
    //setting up the url and method
    const url = `${this.remoteHostUrl}/${endpoint}`;
    console.debug("API Call:", endpoint, data, method);
    const params = method === "GET" ? data : {};
    const headers =
      method === "PATCH" || method === "DELETE"
        ? { "Content-Type": "application/json" }
        : {
            "Content-Type": "multipart/form-data",
          };

    try {
      const res = await axios({ url, method, data, params, headers });
      return { data: res.data, error: res.error, status: res.status };
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response);
      if (error?.response?.status === 404)
        return { data: null, error: "Not found" };
      return { data: null, error: error?.response };
    }
  }

  //routes
  async register(creds) {
    return await this.request({
      endpoint: `register`,
      method: `POST`,
      data: creds,
    });
  }

  async login(creds) {
    return await this.request({
      endpoint: `login`,
      method: `POST`,
      data: creds,
    });
  }

  async ratingP(creds) {
    return await this.request({
      endpoint: `ratings`,
      method: `POST`,
      data: creds,
    });
  }

  async ratingG(creds) {
    return await this.request({
      endpoint: `ratings`,
      method: `GET`,
      data: creds,
    });
  }

  async ratingPatch(creds) {
    return await this.request({
      endpoint: `ratings`,
      method: `PATCH`,
      data: creds,
    });
  }

  async ratingD(creds) {
    return await this.request({
      endpoint: `ratings`,
      method: `DELETE`,
      data: creds,
    });
  }
}
const apiClientInstance = new ApiClient("http://localhost");

export default apiClientInstance;
