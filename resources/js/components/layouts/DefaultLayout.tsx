import { useState } from 'react';
import { FaGitAlt, FaLaravel, FaReact } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiTailwindcss } from 'react-icons/si';
import DecryptedText from '../DecryptedText';
import GalleryModal from '../GalleryModal';
import Head from '../Head';
import Particles from '../Particles';

const skills = [
    { name: 'React', icon: <FaReact className="text-3xl text-blue-500" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-3xl text-red-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl text-teal-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-3xl text-blue-600" /> },

    // { name: 'MySQL', level: 'Intermediate', icon: <SiMysql className="text-3xl text-blue-600" /> },
];

export default function DefaultLayout() {
    // 💡 State declarations
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    // 🔍 Sample gallery images
    const portfolioImages = ['/images/sample.jpg', '/images/sample.jpg', '/images/sample.jpg'];

    const anotherProjectImages = ['/images/sample.jpg', '/images/sample.jpg'];

    return (
        <>
            <Head title="My Portfolio" />

            <div className="default-layout bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
                {/* <section id="home" className="flex min-h-screen items-center justify-center p-8">
                    <img src="/images/gutentama.jpg" alt="Gutentama" className="h-auto w-48 rounded-lg object-cover shadow-lg" />
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold">Hi, I'm John Doe</h1>
                        <p className="text-lg">Full-Stack Developer | Laravel + React Enthusiast</p>
                    </div>
                </section> */}

                {/* Introduction */}
                <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
                    {/* Particle Background */}
                    <div className="absolute inset-0 z-0">
                        <Particles
                            particleColors={['#ffffff', '#ffffff']}
                            particleCount={200}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={false}
                            disableRotation={false}
                        />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative z-10 px-4 text-center">
                        <div style={{ marginTop: '4rem' }}></div>
                        <h1 className="mb-4 text-4xl font-bold text-white">
                            <DecryptedText text="Hi, I'm John Doe" animateOn="view" revealDirection="center" speed={60} />
                        </h1>
                        <p className="text-lg text-white">
                            <DecryptedText
                                text="Full-Stack Developer | Laravel + React Enthusiast"
                                animateOn="view"
                                revealDirection="center"
                                speed={60}
                            />
                        </p>
                    </div>
                </section>

                {/* About Me */}
                <section id="about" className="flex min-h-screen items-center justify-center bg-gray-100 p-8 dark:bg-[#161615]">
                    <div className="flex items-center gap-8">
                        <div>
                            <img src="/images/gutentama.jpg" alt="Gutentama" className="h-auto w-48 rounded-lg object-cover shadow-lg" />
                        </div>
                        <div className="max-w-2xl">
                            <h2 className="mb-4 text-3xl font-semibold">About Me</h2>
                            <p className="text-base leading-relaxed">
                                I’m a web developer with experience in Laravel, React, and Tailwind. I enjoy building fast, responsive websites and
                                applications.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Skills  */}
                <section id="skills" className="min-h-screen p-8">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="mb-10 text-center text-3xl font-semibold">My Skills</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-4 rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-[#0a0a0a]"
                                >
                                    {skill.icon}
                                    <div>
                                        <h3 className="text-xl font-bold">{skill.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Projects */}
                <section id="projects" className="min-h-screen bg-gray-100 p-8 dark:bg-[#161615]">
                    <div className="mx-auto w-full max-w-6xl">
                        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>

                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                            {/* Card 1 */}
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-[#0a0a0a]">
                                <img src="/images/sd.png" alt="Portfolio Screenshot" className="h-48 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Portfolio Website</h3>
                                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                                        A responsive portfolio built with React, Tailwind CSS, and Laravel backend.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSelectedImages(portfolioImages);
                                            setIsModalOpen(true);
                                        }}
                                        className="text-sm text-[#f53003] hover:underline dark:text-[#FF4433]"
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-[#0a0a0a]">
                                <img src="/images/sd.png" alt="Another Project Screenshot" className="h-48 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Another Project</h3>
                                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">Description of another awesome project.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedImages(anotherProjectImages);
                                            setIsModalOpen(true);
                                        }}
                                        className="text-sm text-[#f53003] hover:underline dark:text-[#FF4433]"
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <GalleryModal
                        isOpen={isModalOpen}
                        images={selectedImages}
                        onClose={() => setIsModalOpen(false)}
                        onImageClick={(img) => setCurrentImage(img)}
                    />

                    {/* Full image view */}
                    {currentImage && (
                        <div
                            className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black"
                            onClick={() => setCurrentImage(null)}
                        >
                            <img src={currentImage} alt="Full View" className="max-h-[90%] max-w-[90%] rounded shadow-lg" />
                        </div>
                    )}
                </section>

                {/* Contact Us */}
                <section id="contact" className="flex min-h-screen items-center justify-center p-8">
                    <div className="w-full max-w-xl">
                        <h2 className="mb-4 text-3xl font-semibold">Contact Me</h2>
                        <ul className="space-y-2 text-base">
                            <li>
                                <strong>Phone:</strong>{' '}
                                <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                                    +1 234 567 890
                                </a>
                            </li>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:you@example.com" className="text-blue-500 hover:underline">
                                    you@example.com
                                </a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong>{' '}
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    linkedin.com/in/yourprofile
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}

// PROJECTS
{
    /* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-[#161615]">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Portfolio Website</h3>
                                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                                        A responsive portfolio built with React, Tailwind CSS, and Laravel backend.
                                    </p>
                                    <div className="flex gap-2 text-sm text-[#f53003] dark:text-[#FF4433]">
                                        <a href="#" target="_blank" className="hover:underline">
                                            Live Demo
                                        </a>
                                        <span>|</span>
                                        <a href="#" target="_blank" className="hover:underline">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div> */
}
