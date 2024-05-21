import { writable } from "svelte/store";

// Store for requests -----------

export const requestsStore = writable([]);
const API_URL = "https://backend-yvq7.onrender.com/song-requests/";

export async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  requestsStore.set(data);
}

// ------------------------------

// Store for video player state -

// export const playerStore = writable({
//   isPlaying: false,
//   muted: false,
//   volume: 0.25,
//   playbackRate: 1.0,
//   loop: false,
//   currentTime: 0,
// });

// -----------------------------