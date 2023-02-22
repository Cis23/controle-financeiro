import React from "react";
import { Container, Button } from "./styles";

const Btn = (props) => {
  return (
    <Container>
      <Button {...props}/>
    </Container>
  )
}
export default Btn