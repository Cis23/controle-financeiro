import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  background-color: #fff;
  box-shadow: 0 0 .5rem #ccc;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem;
  gap: 1rem;

  @media (max-width: 75rem) {
    display: grid;
  }
`;
export const Form = styled.form`

`;
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 1rem;
  cursor: pointer;
  position: relative;
  input{
    transform: translateY(.3rem);
  }
`;

export const Input = styled.input`
  outline: none;
  border-radius: .5rem;
  padding: .5rem 1rem;
  font-size: 1.5rem;
  border: .1rem solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: .5rem;
  
  input {
    margin-right: .5rem;
    accent-color: black;
    margin-top: 0;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: .5rem 1.5rem;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  color: white;
  background-color: teal;
`;
