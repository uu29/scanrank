import { useEffect, useLayoutEffect } from "react";
import init from "../lib/three";

export default function Home() {
  const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );

  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(() => {
    init();
  }, []);
  return <div>scanrank with typescript</div>;
}
