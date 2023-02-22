import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: .5rem 1.5rem;
  width: 30%;

  @media (max-width: 75rem) {
    width: 20%;

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 1.5rem;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  margin: 2rem auto;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`;

export const Total = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
