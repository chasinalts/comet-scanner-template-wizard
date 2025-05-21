import { useEffect } from "./src/utils/react-imports";

const Test = () => {
  useEffect(() => {
    console.log("Test");
  }, []);
  return null;
};

export default Test;
