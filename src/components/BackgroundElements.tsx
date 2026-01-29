export default function BackgroundElements() {
    return (
        <>
            {/* Animated Orbs */}
            <div className="orb orb-purple w-[500px] h-[500px] -top-48 -left-48 animate-float-slow opacity-60" />
            <div className="orb orb-violet w-[400px] h-[400px] top-1/4 -right-32 animate-float opacity-50" />
            <div className="orb orb-fuchsia w-[350px] h-[350px] bottom-20 left-1/4 animate-float-delayed opacity-40" />
            <div className="orb orb-purple w-[300px] h-[300px] -bottom-32 right-1/3 animate-pulse-glow opacity-50" />

            {/* Sparkles */}
            <div className="sparkle top-[15%] left-[10%] animate-sparkle" />
            <div className="sparkle top-[25%] right-[15%] animate-sparkle delay-300" />
            <div className="sparkle top-[60%] left-[20%] animate-sparkle delay-500" />
            <div className="sparkle top-[45%] right-[25%] animate-sparkle delay-700" />
            <div className="sparkle bottom-[30%] left-[35%] animate-sparkle delay-200" />
        </>
    );
}
