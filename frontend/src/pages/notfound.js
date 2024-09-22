import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 120px;
    color: #FF6060;
    margin: 0;
`;

const H4 = styled.h4`
    color: #FF6060;
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <H1>404</H1>
      <H4>Oups! La page que vous demandez n'existe pas.</H4>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </NotFoundWrapper>
  );
}

export default NotFound;
