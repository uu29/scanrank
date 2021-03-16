import { useState } from "react";
import styled from "@emotion/styled";

export default function Top() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <Title>a-ttack!</Title>
      <Lines>
        <Text>
          공격 탐지<Period>.</Period>
        </Text>
        <Text>
          방문자 검색<Period>.</Period>
        </Text>
        <Text>
          당신이 찾던 로그 탐색기<Period>.</Period>
        </Text>
      </Lines>
      <SearchBar>
        <Input type="text" value={text} onChange={onChange} placeholder="naver, apple, etc." />
        <Button type="button">검색</Button>
      </SearchBar>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: #fff;
  text-align: center;
  height: 100vh;
  padding-left: calc(100% / 1.8);
`;

const Title = styled.h1`
  padding-top: 3em;
  font-style: italic;
  font-weight: 900;
  font-size: 4.5rem;
`;

const Lines = styled.ul`
  padding-top: 1em;
  font-size: 1.4rem;
`;

const Text = styled.li`
  padding: 2px;
`;

const SearchBar = styled.div`
  margin-top: 4em;
`;

const Input = styled.input`
  width: 340px;
  border: 0 none;
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 1.1rem;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  margin-left: 8px;
  border-radius: 6px;
  font-size: 1.1rem;
  padding: 12px 14px;
  background: rgb(69, 13, 224);
  background: linear-gradient(131deg, rgba(69, 13, 224, 1) 0%, rgba(58, 6, 201, 1) 100%);
`;

const Period = styled.span`
  display: inline-block;
  margin: 2px;
  font-size: 2.8rem;
  transform: translateY(2px);
  line-height: 12px;
`;
