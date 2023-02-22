import React from "react";
import { Box, Content } from "./styles";

const Modal = ({children, onClose}, props) => {
  return (
    <Box>
      <div 
        onClick={onClose}
        className="close"
        {...props}
      >
        
      </div>
      <Content>
        {children}
      </Content>
  
    </Box>
  )
}
export default Modal;