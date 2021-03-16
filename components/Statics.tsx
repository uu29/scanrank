import styled from "@emotion/styled";
import UseScrolls from "../hooks/useScrolls";

export default function Statics() {
  const scrollY = UseScrolls();
  return (
    <Wrapper>
      <Title>
        오늘 하루 방문자 통계<Count fontSize={3.8}>1538</Count>
      </Title>
      <Title>
        수상한 방문자
        <Count fontSize={3.8} color="#72fffa">
          29
        </Count>
      </Title>
      <StSumInfo>
        <dt>
          <img src="/images/spy.svg" width={120} alt="수상한 사람 형태의 작은 이미지" />
          <SubTitle>가장 많이 왔다 간 방문자는 ...</SubTitle>
        </dt>
        <Item>133.254.149.115</Item>
        <Item>America</Item>
        <Item>Cloudflare</Item>
      </StSumInfo>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 700px;
  margin: 5em auto;
  padding: 4em;
  text-align: center;
  border-radius: 3em;
  background: rgb(7, 3, 20);
  background: linear-gradient(
    134deg,
    rgba(7, 3, 20, 0.23) 0%,
    rgba(15, 8, 51, 0.7035189075630253) 34%,
    rgba(15, 8, 51, 0.5) 54%,
    rgba(4, 1, 18, 0.34) 100%
  );

  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(0.96) translateY(24px);
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-style: italic;
  padding: 0.5em;
`;

const SubTitle = styled.h3`
  padding: 1em;
  font-style: italic;
  color: #a2a6d4;
`;

const StSumInfo = styled.dl`
  padding-top: 6em;
`;

const Item = styled.dd`
  display: inline-block;
  padding: 2px;
  font-size: 1.8rem;
  margin: 0 0.5em;
  &:after {
    margin: 3px;
    display: inline-block;
    content: ".";
    font-size: 3.6rem;
  }
`;

const Count = styled.strong<{ fontSize?: number; color?: string }>`
  margin: 11px;
  padding: 8px;
  font-style: normal;
  font-size: 2.4rem;
  font-size: ${(props) => props.fontSize && `${props.fontSize}rem`};
  color: ${(props) => (props.color ? `${props.color}` : `#8b72ff`)};
`;
