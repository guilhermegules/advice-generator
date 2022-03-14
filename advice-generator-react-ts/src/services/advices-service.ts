import axios from "axios";

import { Advice } from "../models/advice.model";

export function getAdvice() {
  return axios.get<Advice>(`https://api.adviceslip.com/advice`);
}
