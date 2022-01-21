import styled from 'styled-components';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Nav />
            <StyledMain>{children}</StyledMain>
            <Footer />
        </>
    );
};

const StyledMain = styled.main`
    height: 100%;
`;
