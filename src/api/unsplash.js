import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID aed370f7be250a253a194018b8f91027c2c37625a5b7ab6a90aee5a4dd065b88"
  }
});
