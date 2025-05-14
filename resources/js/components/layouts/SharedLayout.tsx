// resources/js/components/layouts/SharedLayout.tsx
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {
    children: ReactNode;
    isAltLayout: boolean;
    toggleLayout: () => void;
};

export default function SharedLayout({ children, isAltLayout, toggleLayout }: Props) {
    return (
        <>
            <Navbar isAltLayout={isAltLayout} toggleLayout={toggleLayout} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
