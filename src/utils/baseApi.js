import { BACKEND_BASE_URL } from "./config";

class BaseApi {
  constructor() {
    this._baseUrl = BACKEND_BASE_URL;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _authorizedRequest(url, options = {}) {
    options.headers = options.headers || {};
    const token = localStorage.getItem("jwt");

    if (!token) {
      return Promise.reject(
        new Error("No token provided, authentication needed")
      );
    }

    options.headers.Authorization = `Bearer ${token}`;

    return this._request(url, options);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}

export default BaseApi;
