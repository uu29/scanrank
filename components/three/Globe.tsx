import { useEffect, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import init from "../../lib/three";

export default function Globe() {
  const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );

  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(() => {
    init();
  }, []);
  return <Dom id="globeDom"></Dom>;
}

const Dom = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;
