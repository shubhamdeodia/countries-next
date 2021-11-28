import { ReactNode } from "react";
import { CardWrapper, CardItem } from "./Card.styled";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <CardWrapper>
      <CardItem>{children}</CardItem>
    </CardWrapper>
  );
};
