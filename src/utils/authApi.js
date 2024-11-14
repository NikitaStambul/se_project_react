import BaseApi from "./baseApi";

class AuthApi extends BaseApi {
  constructor() {
    if (AuthApi.shared) {
      return AuthApi.shared;
    }

    super();
    AuthApi.shared = this;
  }

  signUp({ name, avatar, email, password }) {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, avatar, email, password }),
    }).then((res) => console.log(res));
  }

  signIn({ email, password }) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      localStorage.setItem("jwt", res.token);
    });
  }

  editProfile({ name, avatar }) {
    return this._authorizedRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, avatar }),
    });
  }

  getMyInfo() {
    return this._authorizedRequest(`${this._baseUrl}/users/me`);
  }
}

export default new AuthApi();
