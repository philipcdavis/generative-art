import React, { Component } from 'react';
import styled from 'styled-components';
import { appleSystem } from './styles';
import Gallery from './Gallery';
import Link from './Link';

import 'basscss/css/basscss.css';
import 'basscss-responsive-margin/css/responsive-margin.css';

class App extends Component {
  render() {
    return (
      <div className="m2 sm-m3 md-m4">
        <PageTitle>
          Generative Art
        </PageTitle>
        <div className="h5">
          Created by <Link href="http://philipcdavis.com">Philip Davis</Link> &#8226;
          Built with <Link href="https://d3js.org">D3.js</Link>
        </div>
        <p className="mb4 mt3 h5 max-width-2">If you would like to read more about building generative art, read my blog post on the subject. If you would like to learn D3.js for yourself, check out <Link href="https://learningd3.com">Learning D3.js</Link></p>
        <Gallery />
      </div>
    );
  }
}

const PageTitle = styled.div`
  color: white;
  margin-bottom: 4px;
  font-weight: bold;
  font-family: ${appleSystem};
`;


export default App;
