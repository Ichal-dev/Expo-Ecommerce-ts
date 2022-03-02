import axios from "axios";
import { URL_API } from "@env";
class services {
  private ROUTES_API = URL_API;

  async getProduct() {
    const END_POINT = `getList/getlistproduct`;

    const response = await axios.get(`${this.ROUTES_API}/${END_POINT}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
  }
}

export default new services();
