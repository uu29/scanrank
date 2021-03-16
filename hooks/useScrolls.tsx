import { useEffect, useState } from "react";

const UseScrolls = () => {
  const [scrollY, setScrollY] = useState(0 as number);
  const scrollWindow = () => {
    setScrollY(window.scrollY);
    console.log(scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
  }, [scrollY]);

  return [scrollY];
};

export default UseScrolls;
