import { useState, useEffect } from "react";
import Image from "next/image";

interface SurveyModalProps {
    onClose: () => void;
}

const languages = [
    {
        id: "en",
        label: "English",
        native: "English",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfYjUglypUm6alut9ta12U5QuMgXffsUC_vA_FHJekPv4WJ5A/viewform?embedded=true",
        icon: "A",
    },
    {
        id: "bn",
        label: "Bangla",
        native: "বাংলা",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfP0kkPcbM5XMxSqhdSIt8_eV4d-ytEYulRSiraXMzYtC73NQ/viewform?embedded=true",
        icon: "অ",
    },
    {
        id: "hi",
        label: "Hindi",
        native: "हिंदी",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd-zS_3aOdcUIL3164FIlt0WZfdbyKGeMyQVku8gFq29fI0FA/viewform?embedded=true",
        icon: "अ",
    },
    {
        id: "ta",
        label: "Tamil",
        native: "தமிழ்",
        url: "https://docs.google.com/forms/d/1TAxwY7QoNQ6__wMgAz0XtBdqh_JMxuN2sB0Vn9yGje0/viewform?embedded=true",
        icon: "அ",
    },
];

export default function SurveyModal({ onClose }: SurveyModalProps) {
    const [surveyUrl, setSurveyUrl] = useState("");
    const [selectedLang, setSelectedLang] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleLanguageSelect = (lang: typeof languages[0]) => {
        setSelectedLang(lang.id);
        setIsLoading(true);
        // Small delay for visual feedback
        setTimeout(() => {
            setSurveyUrl(lang.url);
            setIsLoading(false);
        }, 400);
    };

    const handleBack = () => {
        setSurveyUrl("");
        setSelectedLang(null);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={onClose}
        >
            {/* Modal Container */}
            <div
                className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.2)] flex flex-col"
                style={{
                    maxHeight: "90vh",
                    animation: "modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Language Selection View */}
                {!surveyUrl ? (
                    <div className="flex flex-col">
                        {/* Header with Logo */}
                        <div className="relative pt-8 pb-6 px-8 text-center border-b border-gray-100">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Logo */}
                            <div className="w-16 h-16 mx-auto mb-5 relative">
                                <Image
                                    src="/Nishara_Logo.png"
                                    alt="Nishara"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Take the Survey
                            </h2>
                            <p className="text-gray-500 text-base max-w-sm mx-auto">
                                Select your preferred language to begin
                            </p>
                        </div>

                        {/* Language Options */}
                        <div className="p-8">
                            <div className="space-y-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => handleLanguageSelect(lang)}
                                        disabled={isLoading}
                                        className={`
                                            w-full flex items-center gap-5 p-5 rounded-2xl border-2 transition-all duration-200
                                            ${selectedLang === lang.id
                                                ? "border-pink-500 bg-pink-50 shadow-lg shadow-pink-100"
                                                : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"
                                            }
                                            ${isLoading && selectedLang !== lang.id ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                                        `}
                                    >
                                        {/* Flag Emoji */}
                                        <div className={`
                                            w-14 h-14 rounded-xl flex items-center justify-center text-3xl
                                            ${selectedLang === lang.id ? "bg-pink-100" : "bg-gray-100"}
                                            transition-colors duration-200
                                        `}>
                                            {lang.icon}
                                        </div>

                                        {/* Language Text */}
                                        <div className="flex-1 text-left">
                                            <div className={`
                                                text-lg font-semibold transition-colors duration-200
                                                ${selectedLang === lang.id ? "text-pink-600" : "text-gray-900"}
                                            `}>
                                                {lang.native}
                                            </div>
                                            <div className="text-sm text-gray-400 font-medium">
                                                {lang.label}
                                            </div>
                                        </div>

                                        {/* Arrow / Loading Indicator */}
                                        <div className={`
                                            w-10 h-10 rounded-full flex items-center justify-center
                                            ${selectedLang === lang.id ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-400"}
                                            transition-all duration-200
                                        `}>
                                            {isLoading && selectedLang === lang.id ? (
                                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="px-8 pb-8 pt-2">
                            <p className="text-center text-sm text-gray-400">
                                Your feedback helps us build Nishara for you ✨
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Survey Embed View */
                    <div className="flex flex-col h-[85vh] max-h-[700px]">
                        {/* Header Bar */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
                            {/* Back Button */}
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back
                            </button>

                            {/* Center Title */}
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-sm font-semibold text-gray-700">
                                    Nishara Survey
                                </span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Google Form Embed */}
                        <div className="flex-1 relative bg-gray-50">
                            {/* Loading Skeleton */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-3 border-pink-200 border-t-pink-500 rounded-full animate-spin" />
                                    <span className="text-sm text-gray-400">Loading survey...</span>
                                </div>
                            </div>

                            <iframe
                                src={surveyUrl}
                                className="w-full h-full relative z-10"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="Nishara Survey"
                                style={{ background: "white" }}
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes modalSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}
