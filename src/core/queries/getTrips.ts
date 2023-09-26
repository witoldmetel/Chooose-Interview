export const getTrips = async () => {
  try {
    // Simulate fetching
    const response = await fetch('http://localhost:5000/trips?_page=1&_limit=15');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to let the caller handle it
  }
};
