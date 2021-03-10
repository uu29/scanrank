import Globe from "../components/three/Globe";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Wrapper>
      Cumulonimbus clouds
      <Globe />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
