export default function CTASection() {
    return (
        <section id="about" className="relative z-10 px-6 py-8 md:py-10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-4">
                    Ready to Light Up the Night?
                </h2>
                <p className="text-pink-800 text-lg mb-6 max-w-xl mx-auto">
                    Join thousands of women who refuse to let fear limit their adventures.
                    Be among the first to experience Nishara when we launch.
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="btn-primary btn-glow inline-flex items-center gap-2"
                >
                    <span>Join the Sisterhood</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
