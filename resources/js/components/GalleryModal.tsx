import React from 'react';

interface GalleryModalProps {
    isOpen: boolean;
    images: string[];
    onClose: () => void;
    onImageClick?: (img: string) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, images, onClose, onImageClick }) => {
    if (!isOpen) return null;

    return (
        <div className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative mx-4 w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg dark:bg-[#1e1e1e]">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 dark:text-gray-300" onClick={onClose}>
                    ✕
                </button>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Gallery ${idx}`}
                            className="cursor-pointer rounded transition hover:scale-105"
                            onClick={() => onImageClick?.(img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryModal;
