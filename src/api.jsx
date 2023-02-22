import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zOO6h8CqxfNGjSKI6XmL5uJBHOOQz3QPz0wkNbOTKB4",
    },
    params: {
      query: "forests",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
