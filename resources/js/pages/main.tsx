import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AltLayout from '../components/layouts/AltLayout';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SharedLayout from '../components/layouts/SharedLayout';
import LetterGlitch from '../components/LetterGlitch';

function Main() {
    const [isAltLayout, setIsAltLayout] = useState(false);
    const [showGlitch, setShowGlitch] = useState(false);

    const toggleLayout = () => {
        setShowGlitch(true);
        setTimeout(() => {
            setIsAltLayout((prev) => !prev);
            setShowGlitch(false);
        }, 500);
    };

    return (
        <div className="relative min-h-screen">
            {showGlitch && (
                <div className="pointer-events-none fixed inset-0 z-50">
                    <LetterGlitch glitchSpeed={5} centerVignette={false} outerVignette={false} smooth={false} />
                </div>
            )}
            <SharedLayout isAltLayout={isAltLayout} toggleLayout={toggleLayout}>
                {isAltLayout ? <AltLayout /> : <DefaultLayout />}
            </SharedLayout>
        </div>
    );
}

// ✅ Mount to the DOM
const rootElement = document.getElementById('app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
