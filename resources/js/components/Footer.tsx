export default function Footer() {
    return (
        <footer className="mt-12 w-full border-t border-gray-200 py-6 text-center text-sm dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
}
