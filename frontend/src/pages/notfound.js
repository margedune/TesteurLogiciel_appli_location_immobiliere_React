import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 100px;
    padding-bottom: 100px;
`;

const H1 = styled.h1`
    font-size: 288px;
    font-weight: 700px;
    color: #FF6060;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 96px;
      line-height: 136px;
    }
`;

const H4 = styled.h4`
    color: #FF6060;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 27px;
      width:260px;
      height: 52px;
    }
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
