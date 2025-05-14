// resources/js/components/Navbar.tsx
type Props = {
    isAltLayout: boolean;
    toggleLayout: () => void;
};

export default function Navbar({ isAltLayout, toggleLayout }: Props) {
    return (
        <nav className="flex items-center justify-between bg-white p-4 shadow-md dark:bg-black">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Hello!</h1>

            <label className="flex cursor-pointer items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">Layout</span>
                <div className="relative mr-2 inline-block w-10 align-middle select-none">
                    <input
                        type="checkbox"
                        name="toggle"
                        checked={isAltLayout}
                        onChange={toggleLayout}
                        className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white transition duration-200 ease-in-out"
                        style={{ left: isAltLayout ? '1.5rem' : '0.25rem' }}
                    />
                    <div className="toggle-label block h-6 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
            </label>
        </nav>
    );
}
