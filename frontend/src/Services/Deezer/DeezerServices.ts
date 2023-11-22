import api from "../api";
import { Root } from "./DeezerTypes";

export class DeezerServices {
	static async get() {
    const response = await api.get<Root>('/get')
    return response.data
	}
}