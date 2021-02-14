import client from ".";
import { IDashboard } from "../../store/modules/dashboard/reducer";

export interface IRequest {}

export interface IResponse {
  status: number;
  data: IDashboard[];
}

export interface IError {
  message: string;
}

const fetchDashboard = () => {
  return client
    .get(`/dashboard`)
    .then((res) => res)
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export default {
  fetchDashboard,
};
