import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("Test");
  }, []);
  return null;
};

export default Test;
