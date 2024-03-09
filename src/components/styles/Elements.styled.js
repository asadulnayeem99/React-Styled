// eslint-disable-next-line no-unused-vars
import styled from "styled-components";

export const CardTitle = styled.h1`
  color: #444444;
  font-weight: 700;
`;
export const CardDesc = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 20px;
  color: #2db6fa;

  &:hover {
    color: ${({ value }) => value?.color};
  }
`;
