import React from 'react';
import styled from 'styled-components';

const Header = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;


const PageHeader = ({ text }) => (
  <Header>{text}</Header>
);

export default PageHeader;