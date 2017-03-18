import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  border-bottom: 2px solid #555;
  color: #aaa;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export default Link;
