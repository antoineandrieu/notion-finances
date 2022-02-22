import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Footer: NextPage = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/codingantoine/coconut"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <Image src="/github.svg" alt="Github Logo" width={288} height={44} />
        </span>
      </a>
    </StyledFooter>
  );
};

export default Footer;
