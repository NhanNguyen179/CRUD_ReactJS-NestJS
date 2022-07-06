import axiosClient from "./axiosClient";
const SVapi = {
  getAll() {
    return axiosClient.get(``);
  },
  AddSv(data) {
    return axiosClient.post(``, data);
  },
  UpdateSv(id, data) {
    return axiosClient.put(`/${id}`, data);
  },
  DeleteSv(id) {
    return axiosClient.delete(`/${id}`);
  },
};

export default SVapi;
