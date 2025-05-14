// resources/js/components/Head.tsx
import React from 'react';

interface HeadProps {
    title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content="Portfolio of John Doe, Full-Stack Developer" />
            <link rel="icon" href="/favicon.ico" />
            {/* Add more head elements here like external CSS/JS, fonts, etc. */}
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </>
    );
};

export default Head;
