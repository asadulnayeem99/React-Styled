import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;
export const Card = styled.div`
  box-shadow: 0px 0 30px rgb(1 141 112 / 8%);
  height: 100%;
  padding: 60px 30px;
  text-align: center;
  transition: 0.3s;
  border-radius: 5px;
  flex-basis: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bg }) => bg};
`;
