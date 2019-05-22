import React from 'react';
import { Box, Image, Paragraph, Heading } from 'grommet';
import styled from 'styled-components';
import scLogo from '../images/styled-components-logo.jpg';

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const ContentBox = styled(Box)`
  &:hover {
    transform: translateY(-4px);
    
  }
  transition: all 0.2s;
`

const LinkWrapper = styled.a`
  text-decoration: none;
`

function Home() {
  return(
    <Box direction="column" align="center">
      <h1>Welcome!</h1>
      <h3>Here are some of the technologies you will use in this app:</h3>
      <ContentGrid>
        <LinkWrapper href="https://reactjs.org/" target="blank">
        <ContentBox align="center" background="brand" pad="small" round="small">
          <Image style={{ height: '40%', width: '60px'}} fallback="react logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
          <Heading level="3" margin="small">React</Heading>
          <Paragraph>React is a library for creating user interfaces</Paragraph>
        </ContentBox>
        </LinkWrapper>
        <LinkWrapper href="https://redux.js.org/" target="blank">
        <ContentBox align="center" background="light-5" pad="small" round="small">
          <Image style={{ height: '30%', width: '50px'}} fallback="redux logo" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
          <Heading level="3" margin="small">Redux</Heading>
          <Paragraph>React is a library for creating user interfaces</Paragraph>
        </ContentBox>
        </LinkWrapper>
        <LinkWrapper href="https://www.styled-components.com/" target="_blank">
        <ContentBox align="center" background="light-2" pad="small" round="small">
          <Image style={{ height: '30%', width: '50px' }} fallback="styled-components log" src={scLogo} />
          <Heading level="3" margin="small">Styled-Components</Heading>
          <Paragraph>React is a library for creating user interfaces</Paragraph>
        </ContentBox>
        </LinkWrapper>
      </ContentGrid>
    </Box>
  )
}

export default Home