import { useState } from 'react';
import AltLayout from '../components/layouts/AltLayout';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SharedLayout from '../components/layouts/SharedLayout';
import LetterGlitch from '../components/LetterGlitch';
export default function Main() {
    const [isAltLayout, setIsAltLayout] = useState(false);
    const [showGlitch, setShowGlitch] = useState(false);

    const toggleLayout = () => {
        setShowGlitch(true); // show glitch
        setTimeout(() => {
            setIsAltLayout((prev) => !prev); // switch layout
            setShowGlitch(false); // hide glitch
        }, 500); // duration of glitch effect (adjust as needed)
    };
    return (
        <div className="relative min-h-screen">
            {/* Glitch Effect */}
            {showGlitch && (
                <div className="pointer-events-none fixed inset-0 z-50">
                    <LetterGlitch glitchSpeed={5} centerVignette={false} outerVignette={false} smooth={false} />
                </div>
            )}

            {/* Layout with toggle */}
            <SharedLayout isAltLayout={isAltLayout} toggleLayout={toggleLayout}>
                {isAltLayout ? <AltLayout /> : <DefaultLayout />}
            </SharedLayout>
        </div>
    );
}
