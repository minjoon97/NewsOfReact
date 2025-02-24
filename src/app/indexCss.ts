"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  padding-top: 100px;
  text-align: center;
`;

export const MainButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;
