import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};
