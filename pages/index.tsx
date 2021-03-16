import Globe from "../components/three/Globe";
import Top from "../components/Top";
import Statics from "../components/Statics";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Wrapper>
      <Top />
      <Statics />
      <Globe />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: #fff;
  background: rgb(10, 12, 30);
  background: linear-gradient(353deg, rgba(10, 12, 30, 1) 0%, rgba(11, 15, 54, 1) 35%, rgba(10, 10, 26, 1) 100%);
`;
