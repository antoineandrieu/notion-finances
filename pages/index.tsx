import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import App from '../components/App';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  height: 100vh;
  background-color: #000714;
  color: #ebf5ff;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
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

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Footer>
    </StyledHome>
  );
};

export default Home;
