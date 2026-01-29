import Image from "next/image";

interface HeroSectionProps {
    onJoinClick: () => void;
}

export default function HeroSection({ onJoinClick }: HeroSectionProps) {
    return (
        <section className="relative z-10 px-6 pt-0 pb-16 md:pt-0 md:pb-24 lg:pt-0 lg:pb-32">
            <div className="max-w-4xl mx-auto text-center">
                {/* Logo */}
                <div className="flex justify-center mb-6 -mt-8 md:-mt-12">
                    <div className="animate-fade-in-up relative w-[48rem] h-48">
                        <Image
                            src="/Nishara_Logo.png"
                            alt="Nishara"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Badge */}
                <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-sm text-pink-700">Women-Only Safe Mobility App — Coming Soon</span>
                </div>

                {/* Main Headline */}
                <h1 className="animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    Be the Light of{" "}
                    <span className="gradient-text-shimmer animate-shimmer">the Night</span>
                </h1>

                {/* Tagline */}
                <p className="animate-fade-in-up delay-150 text-xl md:text-2xl text-rose-600 font-medium mb-4">
                    Travel freely. Travel safely. Travel together.
                </p>

                {/* Subheadline */}
                <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-pink-800 max-w-2xl mx-auto mb-12 leading-relaxed">
                    A trust-first digital infrastructure designed exclusively for women on the move —
                    built to enable confidence, safety, and collective strength through technology.
                </p>

                {/* Join Survey Button */}
                <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-3">
                    <button
                        onClick={onJoinClick}
                        className="btn-primary btn-glow flex items-center justify-center gap-3 px-8 py-4 text-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span>Join Survey</span>
                    </button>
                    <p className="text-pink-700 text-sm italic">Help us build Nishara for YOU — your input shapes our features</p>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-fade-in-up delay-500">
                    <div className="flex items-center justify-center" style={{ isolation: 'isolate' }}>
                        {[
                            "/avatar-1.png",
                            "/avatar-2.png",
                            "/avatar-3.png",
                            "/avatar-4.png",
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="relative w-12 h-12 rounded-full border-2 border-[#0c0010] overflow-hidden shadow-lg"
                                style={{
                                    marginLeft: i > 0 ? '-20px' : '0',
                                    zIndex: i,
                                    position: 'relative'
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Sisterhood member ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-pink-800">
                        <span className="text-pink-950 font-semibold">2,500+</span> women already joined the sisterhood
                    </p>
                </div>
            </div>
        </section>
    );
}
