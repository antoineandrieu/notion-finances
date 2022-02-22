import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import App from '../components/App';
import styled from 'styled-components';
import Footer from '../components/Footer';

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
`;

const Home: NextPage = () => {
  return (
    <StyledHome>
      <Head>
        <title>Notion finances</title>
        <meta name="description" content="Get your bank statements in Notion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Import your transaction to Notion</Title>
      <App />

      <Footer />
    </StyledHome>
  );
};

export default Home;
