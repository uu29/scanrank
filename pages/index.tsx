import Globe from "../components/three/Globe";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Wrapper>
      <Title>a-ttack!</Title>
      <Globe />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 4.5rem;
  font-style: italic;
  text-align: center;
  height: 100vh;
  float: right;
  padding: 20rem;
`;
