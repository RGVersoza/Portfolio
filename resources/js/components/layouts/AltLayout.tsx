export default function AltLayout() {
    return (
        <div className="flex min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
            {/* Left Sidebar */}
            <aside className="flex w-1/4 flex-col items-center bg-gray-100 p-6 dark:bg-[#161615]">
                <div className="mb-6">
                    {/* Replace with actual image */}
                    <div className="mb-4 h-32 w-32 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <h2 className="text-center text-xl font-semibold">John Doe</h2>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
                </div>
                <div className="mt-8 space-y-4 text-sm">
                    <p>Email: john@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>LinkedIn: /john</p>
                </div>
            </aside>

            {/* Right Content */}
            <main className="w-3/4 space-y-16 p-8">
                {/* Introduction */}
                <section id="introduction">
                    <h2 className="mb-2 text-2xl font-bold">Introduction</h2>
                    <p>Hello! I'm a web developer passionate about Laravel and React...</p>
                </section>

                {/* About Me & Labs/Exercises */}
                <div className="grid gap-8 md:grid-cols-2">
                    <section id="about">
                        <h2 className="mb-2 text-xl font-semibold">About Me</h2>
                        <p>Quick background summary...</p>
                    </section>
                    <section id="labs">
                        <h2 className="mb-2 text-xl font-semibold">Labs & Exercises</h2>
                        <p>Hands-on projects and code challenges...</p>
                    </section>
                </div>

                {/* Tools & Learning */}
                <div className="grid gap-8 md:grid-cols-2">
                    <section id="tools">
                        <h2 className="mb-2 text-xl font-semibold">Tools</h2>
                        <ul className="list-inside list-disc">
                            <li>VS Code</li>
                            <li>Postman</li>
                            <li>Git</li>
                        </ul>
                    </section>
                    <section id="learning">
                        <h2 className="mb-2 text-xl font-semibold">What I'm Learning</h2>
                        <ul className="list-inside list-disc">
                            <li>TypeScript</li>
                            <li>Testing (Jest)</li>
                        </ul>
                    </section>
                </div>

                {/* Goals */}
                <section id="goals">
                    <h2 className="mb-2 text-xl font-semibold">Goals</h2>
                    <p>Learn advanced Laravel concepts, contribute to open source...</p>
                </section>

                {/* Contact */}
                <section id="contact">
                    <h2 className="mb-2 text-xl font-semibold">Contact</h2>
                    <p>You can reach me at john@example.com or LinkedIn.</p>
                </section>
            </main>
        </div>
    );
}
