import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID gldOMId0nt12on-poZS3pyhg4wwv6iLXIKu_wNVrznM",
      credentials: "include",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
