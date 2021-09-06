import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/authors.json";

const configUrl = process.env.REACT_APP_API_URL + "/config.json";

export function getConfig() {
  return fetch(configUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveAuthor(author) {
  return fetch(baseUrl + (author.id || ""), {
    method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
