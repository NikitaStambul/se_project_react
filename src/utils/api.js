class Api {
  constructor() {
    if (Api.shared) {
      return Api.shared;
    }

    this._baseUrl = " http://localhost:3001";
    Api.shared = this;
  }

  getClothing() {
    return this._request(`${this._baseUrl}/items`).then((items) =>
      items.reverse()
    );
  }

  addClothing(data) {
    return this._request(`${this._baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  removeClothing(id) {
    return this._request(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
    });
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}

export default new Api();
