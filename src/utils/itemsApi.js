import BaseApi from "./baseApi";

class ItemsApi extends BaseApi {
  constructor() {
    if (ItemsApi.shared) {
      return ItemsApi.shared;
    }

    super();

    ItemsApi.shared = this;
  }

  getClothing() {
    return this._request(`${this._baseUrl}/items`).then((items) =>
      items.reverse()
    );
  }

  addClothing(data) {
    return this._authorizedRequest(`${this._baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  removeClothing(id) {
    return this._authorizedRequest(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
    });
  }

  like(itemId) {
    return this._authorizedRequest(`${this._baseUrl}/items/${itemId}/likes`, {
      method: "PUT",
    });
  }

  unlike(itemId) {
    return this._authorizedRequest(`${this._baseUrl}/items/${itemId}/likes`, {
      method: "DELETE",
    });
  }
}

export default new ItemsApi();
