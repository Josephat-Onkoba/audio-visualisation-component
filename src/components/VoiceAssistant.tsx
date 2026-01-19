import { useEffect, useRef } from 'react';
import Bubble3DCanvas from './Bubble3D';

// Configuration for the waveform
const BAR_COUNT = 11;
const MIN_HEIGHT = 12;
const MAX_HEIGHT = 60;

export default function VoiceAssistant() {
    const barsRef = useRef<HTMLDivElement[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        let time = 0;

        const animate = () => {
            time += 0.15;

            barsRef.current.forEach((bar, index) => {
                if (!bar) return;

                const wave1 = Math.sin(time + index * 0.6);
                const wave2 = Math.cos(time * 0.9 + index * 0.2);
                const noise = (wave1 + wave2 + 2) / 4;

                const centerOffset = Math.abs(index - (BAR_COUNT - 1) / 2);
                const bellCurve = 1 - (centerOffset / BAR_COUNT);

                const targetHeight = MIN_HEIGHT + (noise * (MAX_HEIGHT - MIN_HEIGHT) * bellCurve);
                bar.style.height = `${targetHeight}px`;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">

            {/* TRUE 3D BUBBLE - Using Three.js */}
            <Bubble3DCanvas />

            {/* FOREGROUND: The Audio Waveform - Responsive */}
            <div className="absolute inset-0 flex items-center justify-center z-20 gap-1 sm:gap-1.5 md:gap-2">
                {Array.from({ length: BAR_COUNT }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => { if (el) barsRef.current[i] = el; }}
                        className="w-1 sm:w-1.5 md:w-[6px] bg-white/90 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.15)] sm:shadow-[0_0_15px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.2)] transition-all duration-75 ease-out"
                        style={{ height: `${MIN_HEIGHT}px` }}
                    />
                ))}
            </div>

            {/* HD VIGNETTE - Responsive */}
            <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.3)_50%,_black_100%)] sm:bg-[radial-gradient(circle_at_center,_transparent_25%,_rgba(0,0,0,0.4)_60%,_black_100%)]" />

        </div>
    );
}