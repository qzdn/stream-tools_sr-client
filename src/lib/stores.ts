import { writable } from 'svelte/store';

export const requestsStore = writable([]);
const API_URL = "http://localhost:6789/queue";

async function fetchData() {
    const response = await fetch(API_URL); // Replace with your actual API URL
    const data = await response.json();
    requestsStore.set(data);
}

// Call the function to fetch data (e.g., on store creation or interval)
fetchData();
setInterval(fetchData, 30 * 1000);