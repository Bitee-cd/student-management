import { BASE_URL } from "@/builder/endpoints";
import axios from "axios";
import queryString from "query-string";

const DEFAULT_REQUEST_TIMEOUT = 15000; // 15 seconds

export const _axios = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  paramsSerializer,
});

function paramsSerializer(params: Record<string, unknown>) {
  return queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
    strict: true,
    arrayFormat: "comma",
  });
}
