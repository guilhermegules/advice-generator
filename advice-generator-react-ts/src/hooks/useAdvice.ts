import { useEffect, useState } from "react";
import { Advice } from "../models/advice.model";
import { getAdvice } from "../services/advices-service";

const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice>();

  useEffect(() => {
    adviceHandler();
  }, []);

  const adviceHandler = () => {
    getAdvice().then((response) => {
      setAdvice(response.data);
    });
  };

  return { advice, adviceHandler };
};

export default useAdvice;
