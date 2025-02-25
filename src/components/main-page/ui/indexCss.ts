import styled from "styled-components";

export const List = styled.li`
  border: 1px solid black;
  padding: 2rem;
  margin-bottom: 5px;

  & > h1 {
    font-size: 20px;
  }

  & > p:nth-of-type(1) {
    padding: 10px 0 20px 0;
  }

  & > div {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 20px;
  }
`;
