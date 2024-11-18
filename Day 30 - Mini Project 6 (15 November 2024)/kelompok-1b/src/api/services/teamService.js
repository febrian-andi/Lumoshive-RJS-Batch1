import axios from "../axiosConfig";

const teamService = {
  getAll: async () => {
    const response = await axios.get("/api/team");
    return response.data;
  },
};

export default teamService;
