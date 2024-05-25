import { writable } from "svelte/store";

// Store for requests -----------
export const requestsStore = writable();
const API_URL = "https://backend-yvq7.onrender.com/song-requests/";

export async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  requestsStore.set(data);
}