import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    authorization:
      "Bearer plpARrvGrieoDCG4kPT22XB4IpM2BL_e8D1sz-1iky-ndHe3wVy_DIVolGOsHPLuYGplgnOKQzSZ1ajYA4i77WENOmV5A01wmUFGCN0RgHvKxOjbWQcHlmeYhXDSY3Yx",
  },
});
