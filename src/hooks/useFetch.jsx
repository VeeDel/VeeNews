// const API_KEY = "819239e82cc14536a879f68cd4cd00de";
// const API_URL =
//   "https://newsapi.org/v2/everything?q=tesla&from=2023-12-06&sortBy=publishedAt";

export const UseFetch = async (query) => {
  try {
    const response = await fetch(
      `  https://newsapi.org/v2/top-headlines?apiKey=819239e82cc14536a879f68cd4cd00de&language=en&category=${query} `
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Data", error);
    throw error;
  }
};
