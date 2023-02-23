import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zOO6h8CqxfNGjSKI6XmL5uJBHOOQz3QPz0wkNbOTKB4",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
