let cache = { "/data": null, "/formatted-data": null, "/brands": null };

async function fetch_data(endpoint) {
  if (cache[endpoint] !== null) {
    return cache[endpoint];
  }
  const response = await fetch(
    "http://free-painfully-donkey.ngrok-free.app" + endpoint
  );
  const data = await response.json();
  cache[endpoint] = data;
  return data;
}

export default fetch_data;
