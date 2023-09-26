export const getTrips = async () => {
  try {
    // Simulate fetching
    const response = await fetch('public/api/trips.json');

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
