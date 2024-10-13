class Api {
  constructor() {
    if (Api.shared) {
      return Api.shared;
    }

    this._baseUrl = " http://localhost:3001";
    Api.shared = this;
  }

  getClothing() {
    return fetch(`${this._baseUrl}/items`).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }

  addClothing(data) {
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }

  removeClothing(id) {
    return fetch(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
    }).then((res) =>
      res.ok ? "success" : Promise.reject(`Error: ${res.status}`)
    );
  }
}

export default new Api();
