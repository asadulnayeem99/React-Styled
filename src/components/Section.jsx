/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardWrapper, Container } from "./styles/Container.styled";
import { CardArrow, CardIcon } from "./styles/Custom.styled";
import { CardTitle } from "./styles/Elements.styled";

const Section = () => {
  return (
    <div>
      <Container>
        <CardWrapper>
          <Card>
            <CardIcon icon="fa-regular fa-comments"></CardIcon>
            <CardTitle>
              Asadul Nayeem
              <CardArrow icon="fa-solid fa-arrow-right" />
            </CardTitle>
          </Card>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Section;
