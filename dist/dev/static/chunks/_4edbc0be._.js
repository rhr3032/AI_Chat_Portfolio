(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/animated-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBackground",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimatedBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationFrameId;
            let particles = [];
            let mouseX = 0;
            let mouseY = 0;
            const resize = {
                "AnimatedBackground.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["AnimatedBackground.useEffect.resize"];
            class Particle {
                x;
                y;
                size;
                speedX;
                speedY;
                opacity;
                color;
                pulse;
                pulseSpeed;
                constructor(){
                    this.x = Math.random() * (canvas?.width || window.innerWidth);
                    this.y = Math.random() * (canvas?.height || window.innerHeight);
                    this.size = Math.random() * 1.5 + 0.3;
                    this.speedX = (Math.random() - 0.5) * 0.3;
                    this.speedY = (Math.random() - 0.5) * 0.3;
                    this.opacity = Math.random() * 0.4 + 0.15;
                    this.pulse = 0;
                    this.pulseSpeed = Math.random() * 0.015 + 0.008;
                    const colors = [
                        "rgba(0, 245, 255,",
                        "rgba(191, 0, 255,",
                        "rgba(255, 0, 168,",
                        "rgba(0, 122, 255,"
                    ];
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.pulse += this.pulseSpeed;
                    const pulseFactor = Math.sin(this.pulse) * 0.25 + 0.75;
                    this.opacity = pulseFactor * 0.4;
                    if (canvas) {
                        if (this.x < 0) this.x = canvas.width;
                        if (this.x > canvas.width) this.x = 0;
                        if (this.y < 0) this.y = canvas.height;
                        if (this.y > canvas.height) this.y = 0;
                    }
                }
                draw() {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `${this.color} ${this.opacity})`;
                    ctx.fill();
                    // Soft glow effect
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = `${this.color} ${this.opacity * 0.15})`;
                    ctx.fill();
                }
            }
            const init = {
                "AnimatedBackground.useEffect.init": ()=>{
                    particles = [];
                    // Adjust particle count based on screen size for performance
                    const baseCount = Math.min(80, Math.floor(canvas.width * canvas.height / 18000));
                    const particleCount = window.innerWidth < 640 ? Math.floor(baseCount * 0.5) : baseCount;
                    for(let i = 0; i < particleCount; i++){
                        particles.push(new Particle());
                    }
                }
            }["AnimatedBackground.useEffect.init"];
            const connectParticles = {
                "AnimatedBackground.useEffect.connectParticles": ()=>{
                    if (!ctx) return;
                    const connectionDistance = window.innerWidth < 640 ? 100 : 130;
                    for(let i = 0; i < particles.length; i++){
                        for(let j = i + 1; j < particles.length; j++){
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < connectionDistance) {
                                const opacity = (1 - distance / connectionDistance) * 0.1;
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
                                ctx.lineWidth = 0.4;
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }["AnimatedBackground.useEffect.connectParticles"];
            const drawMouseGlow = {
                "AnimatedBackground.useEffect.drawMouseGlow": ()=>{
                    if (!ctx || !mouseX || !mouseY) return;
                    const glowRadius = window.innerWidth < 640 ? 120 : 180;
                    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, glowRadius);
                    gradient.addColorStop(0, "rgba(0, 245, 255, 0.08)");
                    gradient.addColorStop(0.5, "rgba(191, 0, 255, 0.04)");
                    gradient.addColorStop(1, "transparent");
                    ctx.beginPath();
                    ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
            }["AnimatedBackground.useEffect.drawMouseGlow"];
            const animate = {
                "AnimatedBackground.useEffect.animate": ()=>{
                    if (!ctx || !canvas) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw subtle gradient background overlay
                    const bgGradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 1.5);
                    bgGradient.addColorStop(0, "rgba(25, 25, 60, 0.2)");
                    bgGradient.addColorStop(1, "transparent");
                    ctx.fillStyle = bgGradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    drawMouseGlow();
                    particles.forEach({
                        "AnimatedBackground.useEffect.animate": (particle)=>{
                            particle.update();
                            particle.draw();
                        }
                    }["AnimatedBackground.useEffect.animate"]);
                    connectParticles();
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["AnimatedBackground.useEffect.animate"];
            const handleMouseMove = {
                "AnimatedBackground.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            }["AnimatedBackground.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "AnimatedBackground.useEffect.handleTouchMove": (e)=>{
                    if (e.touches.length > 0) {
                        mouseX = e.touches[0].clientX;
                        mouseY = e.touches[0].clientY;
                    }
                }
            }["AnimatedBackground.useEffect.handleTouchMove"];
            resize();
            init();
            animate();
            window.addEventListener("resize", {
                "AnimatedBackground.useEffect": ()=>{
                    resize();
                    init();
                }
            }["AnimatedBackground.useEffect"]);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove, {
                passive: true
            });
            return ({
                "AnimatedBackground.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("touchmove", handleTouchMove);
                }
            })["AnimatedBackground.useEffect"];
        }
    }["AnimatedBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "fixed inset-0 pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/components/animated-background.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full opacity-25 sm:opacity-30 blur-3xl animate-pulse-glow",
                        style: {
                            background: "radial-gradient(circle, rgba(191, 0, 255, 0.35) 0%, transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-64 sm:w-80 md:w-[500px] h-64 sm:h-80 md:h-[500px] rounded-full opacity-15 sm:opacity-20 blur-3xl",
                        style: {
                            background: "radial-gradient(circle, rgba(0, 245, 255, 0.4) 0%, transparent 70%)",
                            animation: "pulse-soft 6s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] rounded-full opacity-[0.08] blur-3xl",
                        style: {
                            background: "radial-gradient(circle, rgba(255, 0, 168, 0.25) 0%, transparent 60%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.015] sm:opacity-[0.02] pointer-events-none",
                        style: {
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/animated-background.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full border border-cyan-500/15",
                        style: {
                            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
                            animation: "float-ring 6s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full border border-purple-500/10",
                        style: {
                            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
                            animation: "float-ring 6s ease-in-out infinite 0.5s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] rounded-full border border-pink-500/[0.07]",
                        style: {
                            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
                            animation: "float-ring 6s ease-in-out infinite 1s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/animated-background.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/animated-background.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AnimatedBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AnimatedBackground;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/profile-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileSection",
    ()=>ProfileSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProfileSection() {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center text-center w-full px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                },
                className: "text-xs sm:text-sm md:text-base font-medium text-cyan-400/80 tracking-[0.2em] sm:tracking-widest uppercase",
                children: "Hi! I'm Raisul R."
            }, void 0, false, {
                fileName: "[project]/components/profile-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: -30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    delay: 0.1,
                    ease: "easeOut"
                },
                className: "mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/90",
                        children: "UI/UX"
                    }, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "bg-clip-text text-transparent inline-block",
                        style: {
                            backgroundImage: "linear-gradient(135deg, #00f5ff 0%, #bf00ff 25%, #ff00a8 50%, #00f5ff 75%, #bf00ff 100%)",
                            backgroundSize: "200% 200%"
                        },
                        animate: {
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%"
                            ]
                        },
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        children: "Designer"
                    }, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profile-section.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.8,
                    delay: 0.3,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                className: "relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 group cursor-pointer",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.98
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-full",
                        animate: {
                            opacity: isHovered ? 1 : 0.5,
                            scale: isHovered ? 1.3 : 1.15
                        },
                        transition: {
                            duration: 0.7,
                            ease: "easeOut"
                        },
                        style: {
                            background: "conic-gradient(from 0deg, rgba(0, 245, 255, 0.25), rgba(191, 0, 255, 0.25), rgba(255, 0, 168, 0.25), rgba(0, 245, 255, 0.25))",
                            filter: "blur(25px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -inset-3 sm:-inset-4 rounded-full",
                        animate: {
                            rotate: 360,
                            borderColor: isHovered ? "rgba(0, 245, 255, 0.3)" : "rgba(0, 245, 255, 0.15)",
                            scale: isHovered ? 1.05 : 1
                        },
                        transition: {
                            rotate: {
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            borderColor: {
                                duration: 0.5
                            },
                            scale: {
                                duration: 0.5
                            }
                        },
                        style: {
                            border: "1px solid rgba(0, 245, 255, 0.15)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden",
                        animate: {
                            boxShadow: isHovered ? "0 0 50px rgba(0, 245, 255, 0.35), 0 0 100px rgba(191, 0, 255, 0.25), inset 0 0 40px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)" : "0 0 25px rgba(0, 245, 255, 0.15), 0 0 50px rgba(191, 0, 255, 0.1), inset 0 0 25px rgba(0, 0, 0, 0.4), 0 4px 24px rgba(0, 0, 0, 0.25)"
                        },
                        transition: {
                            duration: 0.5
                        },
                        style: {
                            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                            backdropFilter: "blur(40px) saturate(180%)",
                            WebkitBackdropFilter: "blur(40px) saturate(180%)",
                            border: "1.5px solid rgba(255, 255, 255, 0.15)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-10 pointer-events-none",
                                style: {
                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 40%, rgba(0, 0, 0, 0.2) 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/profile-section.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/2025-12-03-2013-2043-2007.png",
                                alt: "Raisul R. - UI/UX Designer",
                                fill: true,
                                className: "object-cover object-top",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/profile-section.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 opacity-20 z-20 pointer-events-none",
                                animate: {
                                    x: [
                                        "-100%",
                                        "100%"
                                    ]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                style: {
                                    background: "linear-gradient(45deg, transparent 25%, rgba(0, 245, 255, 0.4) 50%, transparent 75%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/profile-section.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.5,
                            duration: 0.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full opacity-35",
                            style: {
                                background: "radial-gradient(ellipse at center, rgba(0, 245, 255, 0.35) 0%, transparent 70%)",
                                transform: "rotateX(75deg)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/profile-section.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/profile-section.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/profile-section.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 sm:h-8 md:h-10 lg:h-12"
            }, void 0, false, {
                fileName: "[project]/components/profile-section.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/profile-section.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ProfileSection, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ProfileSection;
var _c;
__turbopack_context__.k.register(_c, "ProfileSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/search-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchBar({ value, onChange, onSubmit }) {
    _s();
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            onSubmit();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.98
        },
        className: `relative flex items-center w-full rounded-full transition-all duration-500 liquid-glass-input`,
        style: {
            background: isFocused ? "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)" : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(50px) saturate(180%)",
            WebkitBackdropFilter: "blur(50px) saturate(180%)",
            border: isFocused ? "1px solid rgba(0, 245, 255, 0.35)" : "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: isFocused ? "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 25px rgba(0, 245, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)" : "0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.08)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pl-3 sm:pl-4 md:pl-5 pr-1 sm:pr-2",
                animate: {
                    rotate: isFocused ? [
                        0,
                        15,
                        -15,
                        0
                    ] : 0,
                    scale: isFocused ? 1.1 : 1
                },
                transition: {
                    duration: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: `w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${isFocused ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]" : "text-white/40"}`
                }, void 0, false, {
                    fileName: "[project]/components/search-bar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/search-bar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Ask me anything...",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                onFocus: ()=>setIsFocused(true),
                onBlur: ()=>setIsFocused(false),
                onKeyDown: handleKeyDown,
                className: "relative flex-1 px-2 sm:px-3 py-3 sm:py-3.5 md:py-4 bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none rounded-full"
            }, void 0, false, {
                fileName: "[project]/components/search-bar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onSubmit,
                whileHover: {
                    scale: 1.1,
                    rotate: 5
                },
                whileTap: {
                    scale: 0.9
                },
                className: "relative mr-1.5 sm:mr-2 p-2.5 sm:p-3 rounded-full transition-all duration-300 group",
                style: {
                    background: "linear-gradient(135deg, rgba(0, 245, 255, 0.7) 0%, rgba(0, 122, 255, 0.7) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 4px 15px rgba(0, 245, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                },
                "aria-label": "Send message",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                }, void 0, false, {
                    fileName: "[project]/components/search-bar.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/search-bar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/search-bar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "taoS6m9NZex5dx3pinefKTdpShE=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/category-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCards",
    ()=>CategoryCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const categories = [
    {
        key: "me",
        label: "Me",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 23,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-violet-500/20 to-purple-500/20",
        glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
        key: "projects",
        label: "Projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 30,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-cyan-500/20 to-blue-500/20",
        glowColor: "rgba(0, 245, 255, 0.3)"
    },
    {
        key: "skills",
        label: "Skills",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 37,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-emerald-500/20 to-teal-500/20",
        glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
        key: "fun",
        label: "Fun",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-amber-500/20 to-orange-500/20",
        glowColor: "rgba(245, 158, 11, 0.3)"
    },
    {
        key: "contact",
        label: "Contact",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 51,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-pink-500/20 to-rose-500/20",
        glowColor: "rgba(236, 72, 153, 0.3)"
    },
    {
        key: "video",
        label: "Video",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 58,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-red-500/20 to-pink-500/20",
        glowColor: "rgba(239, 68, 68, 0.3)"
    },
    {
        key: "location",
        label: "Location",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 65,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-cyan-400/20 to-sky-500/20",
        glowColor: "rgba(34, 211, 238, 0.3)"
    },
    {
        key: "resume",
        label: "Resume",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "w-4 h-4 sm:w-5 sm:h-5"
        }, void 0, false, {
            fileName: "[project]/components/category-cards.tsx",
            lineNumber: 72,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-indigo-500/20 to-violet-500/20",
        glowColor: "rgba(99, 102, 241, 0.3)"
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.5
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
};
function CategoryCards({ onCategoryClick, activeCategory }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex flex-col items-center gap-1.5 sm:gap-2",
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-1.5 sm:gap-2",
                children: categories.slice(0, 5).map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: cardVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                            category: category,
                            isActive: activeCategory === category.key,
                            onClick: ()=>onCategoryClick(category.key),
                            index: index
                        }, void 0, false, {
                            fileName: "[project]/components/category-cards.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, category.key, false, {
                        fileName: "[project]/components/category-cards.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-1.5 sm:gap-2",
                children: categories.slice(5).map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: cardVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                            category: category,
                            isActive: activeCategory === category.key,
                            onClick: ()=>onCategoryClick(category.key),
                            index: index + 5
                        }, void 0, false, {
                            fileName: "[project]/components/category-cards.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, category.key, false, {
                        fileName: "[project]/components/category-cards.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category-cards.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c = CategoryCards;
function CategoryCard({ category, isActive, onClick, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onClick,
        whileHover: {
            scale: 1.1,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        },
        whileTap: {
            scale: 0.95
        },
        animate: isActive ? {
            scale: 1.05,
            boxShadow: `0 12px 40px ${category.glowColor}`
        } : {},
        className: `group relative flex flex-col items-center justify-center 
        w-[60px] h-[55px] 
        sm:w-[75px] sm:h-[68px] 
        md:w-[85px] md:h-[75px] 
        lg:w-[100px] lg:h-[85px] 
        rounded-xl sm:rounded-2xl 
        transition-colors duration-300 overflow-hidden`,
        style: {
            background: isActive ? "linear-gradient(165deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)" : "linear-gradient(165deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.06) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: isActive ? `1px solid ${category.glowColor.replace("0.3", "0.4")}` : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: isActive ? `0 8px 32px ${category.glowColor}, 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset, 0 2px 4px rgba(255, 255, 255, 0.1) inset` : "0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset, 0 1px 2px rgba(255, 255, 255, 0.06) inset"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `absolute inset-0 bg-gradient-to-br ${category.gradient}`,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: isActive ? 1 : 0
                },
                whileHover: {
                    opacity: 1
                },
                transition: {
                    duration: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg`,
                whileHover: {
                    scale: 1.2,
                    rotate: [
                        0,
                        -10,
                        10,
                        0
                    ]
                },
                animate: isActive ? {
                    scale: 1.1
                } : {},
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                },
                style: {
                    background: `linear-gradient(145deg, ${category.glowColor.replace("0.3", "0.25")} 0%, ${category.glowColor.replace("0.3", "0.1")} 100%)`,
                    backdropFilter: "blur(10px)",
                    boxShadow: isActive ? `0 0 20px ${category.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.2)` : "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `transition-colors duration-300 ${isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-white/70 group-hover:text-white"}`,
                    children: category.icon
                }, void 0, false, {
                    fileName: "[project]/components/category-cards.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: `relative z-10 mt-1 sm:mt-1.5 md:mt-2 text-[10px] sm:text-xs md:text-sm font-medium ${isActive ? "text-white" : "text-white/60 group-hover:text-white/90"}`,
                animate: isActive ? {
                    y: 0
                } : {},
                children: category.label
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                initial: {
                    x: "-100%",
                    opacity: 0
                },
                whileHover: {
                    x: "100%",
                    opacity: 0.3,
                    transition: {
                        duration: 0.6,
                        ease: "easeInOut"
                    }
                },
                style: {
                    background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/category-cards.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/category-cards.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c1 = CategoryCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CategoryCards");
__turbopack_context__.k.register(_c1, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/generate-resume-pdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateResumePDF",
    ()=>generateResumePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
function generateResumePDF() {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;
    const purple = [
        139,
        92,
        246
    ] // Purple for name
    ;
    const sectionPurple = [
        109,
        40,
        217
    ] // Darker purple for headers
    ;
    const orange = [
        234,
        88,
        12
    ] // Orange for achievements
    ;
    const goldLine = [
        251,
        191,
        36
    ] // Yellow/gold divider
    ;
    const textDark = [
        31,
        41,
        55
    ];
    const textMuted = [
        107,
        114,
        128
    ];
    const emailPurple = [
        139,
        92,
        246
    ];
    const phoneTeal = [
        20,
        184,
        166
    ];
    const locationOrange = [
        249,
        115,
        22
    ];
    const linkedinBlue = [
        59,
        130,
        246
    ];
    let yPos = 25;
    doc.setTextColor(...purple);
    doc.setFontSize(32);
    doc.setFont("helvetica", "bold");
    doc.text("Raisul R.", centerX, yPos, {
        align: "center"
    });
    yPos += 10;
    doc.setTextColor(...textMuted);
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Web & UI/UX Designer", centerX, yPos, {
        align: "center"
    });
    yPos += 10;
    doc.setFontSize(10);
    const line1Parts = [
        {
            text: "hello@raisulr.design",
            color: emailPurple
        },
        {
            text: "  •  ",
            color: textMuted
        },
        {
            text: "+880 1234-567890",
            color: phoneTeal
        },
        {
            text: "  •  ",
            color: textMuted
        },
        {
            text: "Dhaka, Bangladesh",
            color: locationOrange
        }
    ];
    const line1Text = line1Parts.map((p)=>p.text).join("");
    const line1Width = doc.getTextWidth(line1Text);
    let startX = centerX - line1Width / 2;
    line1Parts.forEach((part)=>{
        doc.setTextColor(...part.color);
        doc.text(part.text, startX, yPos);
        startX += doc.getTextWidth(part.text);
    });
    yPos += 6;
    const line2Parts = [
        {
            text: "linkedin.com/in/raisulr",
            color: linkedinBlue
        },
        {
            text: "  •  ",
            color: textMuted
        },
        {
            text: "raisulr.design",
            color: phoneTeal
        }
    ];
    const line2Text = line2Parts.map((p)=>p.text).join("");
    const line2Width = doc.getTextWidth(line2Text);
    startX = centerX - line2Width / 2;
    line2Parts.forEach((part)=>{
        doc.setTextColor(...part.color);
        doc.text(part.text, startX, yPos);
        startX += doc.getTextWidth(part.text);
    });
    yPos += 6;
    doc.setDrawColor(...goldLine);
    doc.setLineWidth(1.5);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...sectionPurple);
    doc.text("PROFESSIONAL SUMMARY", 20, yPos);
    yPos += 6;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textDark);
    const summary = "Passionate Web & UI/UX Designer with 5+ years of experience crafting beautiful digital experiences. Skilled in transforming complex problems into simple, intuitive designs that delight users. Featured on Dribbble & Behance with a proven track record of delivering high-quality work for 50+ clients globally.";
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, yPos);
    yPos += summaryLines.length * 5 + 8;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...sectionPurple);
    doc.text("EXPERIENCE", 20, yPos);
    yPos += 8;
    const experiences = [
        {
            title: "Senior UI/UX Designer",
            company: "Design Studio XYZ",
            period: "2022 - Present",
            duties: [
                "Led design systems for 20+ enterprise clients",
                "Increased user engagement by 40% through UX improvements",
                "Mentored junior designers and conducted design reviews"
            ]
        },
        {
            title: "UI/UX Designer",
            company: "Creative Agency ABC",
            period: "2020 - 2022",
            duties: [
                "Designed 50+ web and mobile applications",
                "Collaborated with developers to ensure pixel-perfect implementation",
                "Created wireframes, prototypes, and high-fidelity mockups"
            ]
        },
        {
            title: "Junior Designer",
            company: "Startup Hub",
            period: "2019 - 2020",
            duties: [
                "Designed landing pages and marketing materials",
                "Conducted user research and usability testing",
                "Developed brand identity for 10+ startups"
            ]
        }
    ];
    experiences.forEach((exp)=>{
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...textDark);
        doc.text(exp.title, 20, yPos);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...sectionPurple);
        doc.text(exp.period, pageWidth - 20, yPos, {
            align: "right"
        });
        yPos += 4;
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(...textMuted);
        doc.text(exp.company, 20, yPos);
        yPos += 5;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...textDark);
        exp.duties.forEach((duty)=>{
            doc.text(`•   ${duty}`, 24, yPos);
            yPos += 4;
        });
        yPos += 4;
    });
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...sectionPurple);
    doc.text("SKILLS", 20, yPos);
    yPos += 8;
    // Column headers
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...textDark);
    doc.text("Design Tools", 20, yPos);
    doc.text("Development", 85, yPos);
    doc.text("UX Skills", 150, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const drawSkillTag = (text, x, y, bgColor)=>{
        const padding = 4;
        const textWidth = doc.getTextWidth(text);
        const tagWidth = textWidth + padding * 2;
        const tagHeight = 6;
        doc.setFillColor(...bgColor);
        doc.roundedRect(x, y - 4.5, tagWidth, tagHeight, 2, 2, "F");
        doc.setTextColor(...textDark);
        doc.text(text, x + padding, y);
        return tagWidth + 3;
    };
    const purpleLight = [
        237,
        233,
        254
    ];
    const greenLight = [
        220,
        252,
        231
    ];
    const blueLight = [
        219,
        234,
        254
    ];
    // Design Tools column
    let colX = 20;
    let rowY = yPos;
    drawSkillTag("Figma", colX, rowY, purpleLight);
    colX += drawSkillTag("Figma", colX, rowY, purpleLight) + 2;
    drawSkillTag("Adobe XD", colX, rowY, purpleLight);
    colX += drawSkillTag("Adobe XD", colX, rowY, purpleLight) + 2;
    rowY += 9;
    colX = 20;
    drawSkillTag("Sketch", colX, rowY, purpleLight);
    colX += drawSkillTag("Sketch", colX, rowY, purpleLight) + 2;
    rowY += 9;
    colX = 20;
    drawSkillTag("Photoshop", colX, rowY, purpleLight);
    colX += drawSkillTag("Photoshop", colX, rowY, purpleLight) + 2;
    drawSkillTag("Illustrator", colX, rowY, purpleLight);
    // Development column
    colX = 85;
    rowY = yPos;
    drawSkillTag("HTML", colX, rowY, greenLight);
    colX += drawSkillTag("HTML", colX, rowY, greenLight) + 2;
    drawSkillTag("CSS", colX, rowY, greenLight);
    colX += drawSkillTag("CSS", colX, rowY, greenLight) + 2;
    drawSkillTag("JavaScript", colX, rowY, greenLight);
    rowY += 9;
    colX = 85;
    drawSkillTag("React", colX, rowY, greenLight);
    colX += drawSkillTag("React", colX, rowY, greenLight) + 2;
    rowY += 9;
    colX = 85;
    drawSkillTag("Tailwind", colX, rowY, greenLight);
    // UX Skills column
    colX = 150;
    rowY = yPos;
    drawSkillTag("User Research", colX, rowY, blueLight);
    colX += drawSkillTag("User Research", colX, rowY, blueLight) + 2;
    rowY += 9;
    colX = 150;
    drawSkillTag("Wireframing", colX, rowY, blueLight);
    rowY += 9;
    colX = 150;
    drawSkillTag("Prototyping", colX, rowY, blueLight);
    colX += drawSkillTag("Prototyping", colX, rowY, blueLight) + 2;
    drawSkillTag("Testing", colX, rowY, blueLight);
    yPos += 30;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...sectionPurple);
    doc.text("EDUCATION", 20, yPos);
    yPos += 8;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...textDark);
    doc.text("Bachelor of Fine Arts in Graphic Design", 20, yPos);
    yPos += 4;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textMuted);
    doc.text("University of Dhaka • 2019", 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...orange);
    doc.text("ACHIEVEMENTS", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textDark);
    const achievements = [
        "Featured Designer on Dribbble (2023)",
        "Top 10 UI Designer on Behance Bangladesh",
        "100+ Successfully Completed Projects",
        "50+ Global Clients Served"
    ];
    achievements.forEach((achievement)=>{
        doc.text(`•   ${achievement}`, 24, yPos);
        yPos += 5;
    });
    // Save the PDF
    doc.save("Raisul_R_Resume.pdf");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat-bubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatBubble",
    ()=>ChatBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$figma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Figma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/figma.js [app-client] (ecmascript) <export default as Figma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generate$2d$resume$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generate-resume-pdf.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ResumeContent() {
    _s();
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDownload = async ()=>{
        setIsDownloading(true);
        await new Promise((resolve)=>setTimeout(resolve, 500));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generate$2d$resume$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateResumePDF"])();
        setIsDownloading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 sm:gap-3",
                children: [
                    {
                        value: "5+",
                        label: "Years Experience",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-3 h-3 sm:w-4 sm:h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 60,
                            columnNumber: 19
                        }, this),
                        gradient: "from-amber-500/20 to-orange-500/20",
                        iconColor: "text-amber-400"
                    },
                    {
                        value: "50+",
                        label: "Clients Globally",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-3 h-3 sm:w-4 sm:h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 67,
                            columnNumber: 19
                        }, this),
                        gradient: "from-cyan-500/20 to-blue-500/20",
                        iconColor: "text-cyan-400"
                    },
                    {
                        value: "100+",
                        label: "Projects Done",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-3 h-3 sm:w-4 sm:h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 74,
                            columnNumber: 19
                        }, this),
                        gradient: "from-violet-500/20 to-purple-500/20",
                        iconColor: "text-violet-400"
                    }
                ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-2 sm:p-3 rounded-xl text-center bg-gradient-to-br ${stat.gradient}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 ${stat.iconColor}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: stat.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm sm:text-lg font-bold text-white",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] sm:text-xs text-white/50",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg",
                style: {
                    background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
                    border: "1px solid rgba(245, 158, 11, 0.2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                        className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs sm:text-sm text-white/70",
                        children: "Featured on Dribbble & Behance"
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleDownload,
                disabled: isDownloading,
                className: "w-full flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl font-medium transition-all disabled:opacity-70 text-sm sm:text-base",
                style: {
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)",
                    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)"
                },
                children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-4 h-4 sm:w-5 sm:h-5 animate-spin text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white",
                            children: "Preparing..."
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 120,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white",
                            children: "Download Resume"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 124,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ResumeContent, "I+IY6bHIajfeJNOs4vl6hY3OWII=");
_c = ResumeContent;
const categoryConfig = {
    me: {
        title: "About Me",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-violet-500/30 to-purple-500/30",
        glowColor: "rgba(139, 92, 246, 0.3)"
    },
    projects: {
        title: "My Projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-cyan-500/30 to-blue-500/30",
        glowColor: "rgba(0, 245, 255, 0.3)"
    },
    skills: {
        title: "My Skills",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-emerald-500/30 to-teal-500/30",
        glowColor: "rgba(16, 185, 129, 0.3)"
    },
    fun: {
        title: "Fun Facts",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-amber-500/30 to-orange-500/30",
        glowColor: "rgba(245, 158, 11, 0.3)"
    },
    contact: {
        title: "Get In Touch",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-pink-500/30 to-rose-500/30",
        glowColor: "rgba(236, 72, 153, 0.3)"
    },
    video: {
        title: "Video Content",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-red-500/30 to-pink-500/30",
        glowColor: "rgba(239, 68, 68, 0.3)"
    },
    location: {
        title: "Location",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-cyan-400/30 to-sky-500/30",
        glowColor: "rgba(34, 211, 238, 0.3)"
    },
    resume: {
        title: "My Resume",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        gradient: "from-indigo-500/30 to-violet-500/30",
        glowColor: "rgba(99, 102, 241, 0.3)"
    }
};
const categoryContent = {
    me: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 leading-relaxed",
                children: [
                    "Hi there! I'm ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-violet-400",
                        children: "Raisul R."
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 195,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", a passionate Web & UI/UX Designer with 5+ years of experience crafting beautiful digital experiences."
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 200,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        text: "Design Lover",
                        color: "from-rose-500/20 to-pink-500/20",
                        textColor: "text-rose-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 201,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        text: "Problem Solver",
                        color: "from-amber-500/20 to-orange-500/20",
                        textColor: "text-amber-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 202,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        text: "Creative Thinker",
                        color: "from-emerald-500/20 to-teal-500/20",
                        textColor: "text-emerald-400"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} ${item.textColor}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            item.icon,
                            " ",
                            item.text
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    projects: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 leading-relaxed",
                children: "I've worked on some exciting projects across various industries!"
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    {
                        name: "E-Commerce Platform",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 220,
                            columnNumber: 48
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-cyan-500/20 to-blue-500/20",
                        iconColor: "text-cyan-400"
                    },
                    {
                        name: "SaaS Dashboard",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 221,
                            columnNumber: 43
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-purple-500/20 to-violet-500/20",
                        iconColor: "text-purple-400"
                    },
                    {
                        name: "Mobile App Design",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$figma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Figma$3e$__["Figma"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 222,
                            columnNumber: 46
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-orange-500/20 to-amber-500/20",
                        iconColor: "text-orange-400"
                    },
                    {
                        name: "Brand Identity",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 223,
                            columnNumber: 43
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-pink-500/20 to-rose-500/20",
                        iconColor: "text-pink-400"
                    }
                ].map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all hover:scale-105 bg-gradient-to-br ${project.gradient}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-lg ${project.iconColor}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: project.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-white/80",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors",
                children: [
                    "View All Projects ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 238,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    skills: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            {
                title: "Design Tools",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$figma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Figma$3e$__["Figma"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/chat-bubble.tsx",
                    lineNumber: 245,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                color: "text-pink-400",
                skills: [
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "Photoshop"
                ],
                gradient: "from-pink-500/10 to-rose-500/10"
            },
            {
                title: "Development",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/chat-bubble.tsx",
                    lineNumber: 246,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0)),
                color: "text-cyan-400",
                skills: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Tailwind"
                ],
                gradient: "from-cyan-500/10 to-blue-500/10"
            },
            {
                title: "UX Skills",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/chat-bubble.tsx",
                    lineNumber: 247,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0)),
                color: "text-violet-400",
                skills: [
                    "User Research",
                    "Wireframing",
                    "Prototyping",
                    "Testing"
                ],
                gradient: "from-violet-500/10 to-purple-500/10"
            }
        ].map((category, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-1.5 rounded-lg ${category.color}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: category.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-white/90",
                                children: category.title
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: category.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2.5 py-1 rounded-lg text-xs font-medium ${category.color} bg-gradient-to-r ${category.gradient}`,
                                style: {
                                    border: "1px solid rgba(255, 255, 255, 0.05)"
                                },
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    fun: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 leading-relaxed",
                children: "When I'm not designing, here's what keeps me inspired!"
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 276,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-amber-500/20 to-orange-500/20",
                        iconColor: "text-amber-400",
                        text: "Exploring new coffee shops"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 277,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-purple-500/20 to-violet-500/20",
                        iconColor: "text-purple-400",
                        text: "Playing video games"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 278,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        gradient: "from-pink-500/20 to-rose-500/20",
                        iconColor: "text-pink-400",
                        text: "Experimenting with 3D art"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${item.gradient}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-lg ${item.iconColor}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/80 font-medium",
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    contact: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 leading-relaxed",
                children: "Let's connect! I'm always open to new opportunities."
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 299,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "Email",
                        value: "hello@raisulr.design",
                        gradient: "from-rose-500/20 to-pink-500/20",
                        iconColor: "text-rose-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 300,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "Twitter",
                        value: "@raisulr_design",
                        gradient: "from-sky-500/20 to-blue-500/20",
                        iconColor: "text-sky-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 301,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "LinkedIn",
                        value: "/in/raisulr",
                        gradient: "from-blue-500/20 to-indigo-500/20",
                        iconColor: "text-blue-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 302,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "GitHub",
                        value: "@raisulr",
                        gradient: "from-gray-500/20 to-slate-500/20",
                        iconColor: "text-gray-400"
                    }
                ].map((contact, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: `flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] bg-gradient-to-r ${contact.gradient}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-lg ${contact.iconColor}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: contact.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-white/50",
                                        children: contact.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat-bubble.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-white/80",
                                        children: contact.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/chat-bubble.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-4 h-4 ml-auto text-white/30"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    video: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-4 rounded-xl",
                style: {
                    background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                    border: "1px solid rgba(239, 68, 68, 0.2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-xl text-red-400",
                        style: {
                            background: "rgba(255, 255, 255, 0.1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-white",
                                children: "YouTube Channel"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-white/50",
                                children: "Design tutorials & tips"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    "UI/UX Design Tutorials",
                    "Process & Behind the Scenes",
                    "Tips for Aspiring Designers"
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-white/70 p-2 rounded-lg",
                        style: {
                            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)",
                            border: "1px solid rgba(16, 185, 129, 0.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            item
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full flex items-center justify-center gap-2 p-3 rounded-xl font-medium text-white transition-all hover:scale-[1.02]",
                style: {
                    background: "linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%)",
                    boxShadow: "0 4px 20px rgba(239, 68, 68, 0.3)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Subscribe Now"
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    location: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-4 rounded-xl",
                style: {
                    background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)",
                    border: "1px solid rgba(34, 211, 238, 0.2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-xl text-cyan-400",
                        style: {
                            background: "rgba(255, 255, 255, 0.1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-white",
                                children: "Dhaka, Bangladesh"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-white/50",
                                children: "Currently based here"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 385,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "Remote Ready",
                        value: "Worldwide",
                        gradient: "from-blue-500/20 to-indigo-500/20",
                        iconColor: "text-blue-400",
                        valueColor: "text-blue-400"
                    },
                    {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 386,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        label: "Open to",
                        value: "Relocation",
                        gradient: "from-emerald-500/20 to-teal-500/20",
                        iconColor: "text-emerald-400",
                        valueColor: "text-emerald-400"
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 rounded-xl text-center bg-gradient-to-br ${item.gradient}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1 ${item.iconColor}`,
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)"
                                },
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/50",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm font-semibold ${item.valueColor}`,
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/chat-bubble.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/chat-bubble.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    resume: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumeContent, {}, void 0, false, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 403,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0))
};
function ChatBubble({ category, onClose }) {
    const config = categoryConfig[category];
    const content = categoryContent[category];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative",
        initial: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9
        },
        transition: {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-elevated",
            initial: {
                boxShadow: "0 16px 64px rgba(0, 0, 0, 0.35)"
            },
            animate: {
                boxShadow: `0 16px 64px rgba(0, 0, 0, 0.35), 0 0 30px ${config.glowColor}, 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset, 0 4px 8px rgba(255, 255, 255, 0.1) inset`
            },
            transition: {
                duration: 0.5
            },
            style: {
                background: "linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)",
                backdropFilter: "blur(60px) saturate(180%)",
                WebkitBackdropFilter: "blur(60px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: `flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r ${config.gradient}`,
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.2,
                        duration: 0.4
                    },
                    style: {
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "p-1.5 sm:p-2 rounded-xl text-white",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 5
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    style: {
                                        background: "linear-gradient(145deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: `0 0 15px ${config.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                                    },
                                    children: config.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/chat-bubble.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "font-semibold text-white text-sm sm:text-base",
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    children: config.title
                                }, void 0, false, {
                                    fileName: "[project]/components/chat-bubble.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: onClose,
                            whileHover: {
                                scale: 1.1,
                                rotate: 90
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-colors text-white/60 hover:text-white",
                            "aria-label": "Close chat",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/chat-bubble.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat-bubble.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat-bubble.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base max-h-[45vh] sm:max-h-[50vh] overflow-y-auto",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.3,
                        duration: 0.4
                    },
                    children: content
                }, void 0, false, {
                    fileName: "[project]/components/chat-bubble.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat-bubble.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat-bubble.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_c1 = ChatBubble;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResumeContent");
__turbopack_context__.k.register(_c1, "ChatBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/typing-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingIndicator",
    ()=>TypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9
        },
        transition: {
            duration: 0.4,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inline-flex items-center gap-2 sm:gap-3 rounded-2xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 liquid-glass",
            animate: {
                boxShadow: [
                    "0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset",
                    "0 8px 32px rgba(0, 245, 255, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset",
                    "0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset"
                ]
            },
            transition: {
                duration: 2,
                repeat: Infinity
            },
            style: {
                background: "linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)",
                backdropFilter: "blur(50px) saturate(180%)",
                WebkitBackdropFilter: "blur(50px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.12)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center",
                    animate: {
                        rotate: [
                            0,
                            360
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    style: {
                        background: "linear-gradient(145deg, rgba(0, 245, 255, 0.25) 0%, rgba(191, 0, 255, 0.25) 100%)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 0 15px rgba(0, 245, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400"
                    }, void 0, false, {
                        fileName: "[project]/components/typing-indicator.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/typing-indicator.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 sm:gap-1.5",
                    children: [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full",
                            animate: {
                                y: [
                                    0,
                                    -8,
                                    0
                                ],
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ]
                            },
                            transition: {
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            },
                            style: {
                                background: i === 0 ? "linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)" : i === 1 ? "linear-gradient(135deg, #bf00ff 0%, #ff00a8 100%)" : "linear-gradient(135deg, #ff00a8 0%, #ff6b35 100%)",
                                boxShadow: i === 0 ? "0 0 8px rgba(0, 245, 255, 0.4)" : i === 1 ? "0 0 8px rgba(191, 0, 255, 0.4)" : "0 0 8px rgba(255, 0, 168, 0.4)"
                            }
                        }, i, false, {
                            fileName: "[project]/components/typing-indicator.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/typing-indicator.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "text-white/50 text-xs sm:text-sm ml-0.5 sm:ml-1",
                    animate: {
                        opacity: [
                            0.5,
                            1,
                            0.5
                        ]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: Infinity
                    },
                    children: "AI is thinking..."
                }, void 0, false, {
                    fileName: "[project]/components/typing-indicator.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/typing-indicator.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/typing-indicator.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TypingIndicator;
var _c;
__turbopack_context__.k.register(_c, "TypingIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ai-chat-bubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiChatBubble",
    ()=>AiChatBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function AiChatBubble({ messages, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative",
        initial: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9
        },
        transition: {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-elevated",
            style: {
                background: "linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)",
                backdropFilter: "blur(60px) saturate(180%)",
                WebkitBackdropFilter: "blur(60px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 16px 64px rgba(0, 0, 0, 0.35), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset, 0 4px 8px rgba(255, 255, 255, 0.1) inset"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4",
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.2
                    },
                    style: {
                        background: "linear-gradient(135deg, rgba(0, 245, 255, 0.08) 0%, rgba(191, 0, 255, 0.08) 100%)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "p-1.5 sm:p-2 rounded-xl",
                                    animate: {
                                        rotate: [
                                            0,
                                            5,
                                            -5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    style: {
                                        background: "linear-gradient(145deg, rgba(0, 245, 255, 0.2) 0%, rgba(191, 0, 255, 0.2) 100%)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 0 15px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chat-bubble.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-chat-bubble.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-white text-sm sm:text-base",
                                            children: "AI Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chat-bubble.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-[10px] sm:text-xs text-cyan-400/60 block",
                                            animate: {
                                                opacity: [
                                                    0.6,
                                                    1,
                                                    0.6
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            children: "Powered by Gemini"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chat-bubble.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ai-chat-bubble.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ai-chat-bubble.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: onClose,
                            whileHover: {
                                scale: 1.1,
                                rotate: 90
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:bg-white/10 text-white/60 hover:text-white",
                            "aria-label": "Close chat",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ai-chat-bubble.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ai-chat-bubble.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ai-chat-bubble.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 max-h-[250px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: `flex gap-2 sm:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`,
                                children: [
                                    message.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center",
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            delay: index * 0.1 + 0.2
                                        },
                                        style: {
                                            background: "linear-gradient(145deg, rgba(0, 245, 255, 0.2) 0%, rgba(191, 0, 255, 0.2) 100%)",
                                            backdropFilter: "blur(10px)",
                                            boxShadow: "0 0 10px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chat-bubble.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chat-bubble.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        className: `max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl ${message.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"}`,
                                        style: {
                                            background: message.role === "user" ? "linear-gradient(145deg, rgba(0, 245, 255, 0.25) 0%, rgba(0, 122, 255, 0.25) 100%)" : "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                                            backdropFilter: "blur(20px)",
                                            border: message.role === "user" ? "1px solid rgba(0, 245, 255, 0.25)" : "1px solid rgba(255, 255, 255, 0.08)",
                                            boxShadow: message.role === "user" ? "0 4px 15px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)" : "0 2px 10px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${message.role === "user" ? "text-white" : "text-white/80"}`,
                                            children: message.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chat-bubble.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chat-bubble.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    message.role === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center",
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            delay: index * 0.1 + 0.2
                                        },
                                        style: {
                                            background: "linear-gradient(145deg, rgba(0, 245, 255, 0.35) 0%, rgba(0, 122, 255, 0.35) 100%)",
                                            backdropFilter: "blur(10px)",
                                            boxShadow: "0 0 10px rgba(0, 245, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chat-bubble.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chat-bubble.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/ai-chat-bubble.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ai-chat-bubble.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ai-chat-bubble.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ai-chat-bubble.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ai-chat-bubble.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AiChatBubble;
var _c;
__turbopack_context__.k.register(_c, "AiChatBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/portfolio-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioHero",
    ()=>PortfolioHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profile$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/profile-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/search-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/category-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat-bubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/typing-indicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ai$2d$chat$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ai-chat-bubble.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
function PortfolioHero() {
    _s();
    const [activeChat, setActiveChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showResponse, setShowResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAiChat, setIsAiChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCategoryClick = (category)=>{
        setActiveChat(category);
        setShowResponse(false);
        setIsTyping(true);
        setIsAiChat(false);
        setMessages([]);
        setTimeout(()=>{
            setIsTyping(false);
            setShowResponse(true);
        }, 1500);
    };
    const handleSearch = async ()=>{
        if (searchQuery.trim()) {
            setActiveChat(null);
            setShowResponse(false);
            setIsAiChat(true);
            const userMessage = {
                role: "user",
                content: searchQuery
            };
            setMessages((prev)=>[
                    ...prev,
                    userMessage
                ]);
            setIsTyping(true);
            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: searchQuery
                    })
                });
                const data = await response.json();
                setIsTyping(false);
                if (data.response) {
                    const aiMessage = {
                        role: "assistant",
                        content: data.response
                    };
                    setMessages((prev)=>[
                            ...prev,
                            aiMessage
                        ]);
                } else if (data.error) {
                    console.error("API Error:", data);
                    const errorMessage = {
                        role: "assistant",
                        content: `Error: ${data.error}${data.details ? '\n\nDetails: ' + data.details : ''}`
                    };
                    setMessages((prev)=>[
                            ...prev,
                            errorMessage
                        ]);
                }
            } catch (error) {
                console.error("Fetch error:", error);
                setIsTyping(false);
                const errorMessage = {
                    role: "assistant",
                    content: "Sorry, I couldn't connect to the API. Please check the console for details."
                };
                setMessages((prev)=>[
                        ...prev,
                        errorMessage
                    ]);
            }
            setSearchQuery("");
        }
    };
    const handleCloseChat = ()=>{
        setActiveChat(null);
        setShowResponse(false);
        setIsTyping(false);
        setIsAiChat(false);
        setMessages([]);
    };
    const hasActiveModal = showResponse || isTyping || isAiChat && messages.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen safe-area-inset",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBackground"], {}, void 0, false, {
                fileName: "[project]/components/portfolio-hero.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-16 sm:pb-20",
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-4xl mx-auto",
                        variants: itemVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$profile$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSection"], {}, void 0, false, {
                            fileName: "[project]/components/portfolio-hero.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio-hero.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl",
                        variants: itemVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                            value: searchQuery,
                            onChange: setSearchQuery,
                            onSubmit: handleSearch
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio-hero.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio-hero.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `mt-3 sm:mt-6 w-full max-w-[92vw] sm:max-w-md md:max-w-lg lg:max-w-xl ${hasActiveModal ? '' : 'min-h-[20px]'}`,
                        layout: true,
                        transition: {
                            duration: 0.3,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: [
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypingIndicator"], {}, void 0, false, {
                                        fileName: "[project]/components/portfolio-hero.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                }, "typing", false, {
                                    fileName: "[project]/components/portfolio-hero.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                showResponse && activeChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatBubble"], {
                                        category: activeChat,
                                        onClose: handleCloseChat
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio-hero.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                }, "chat", false, {
                                    fileName: "[project]/components/portfolio-hero.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                isAiChat && messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ai$2d$chat$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiChatBubble"], {
                                        messages: messages,
                                        onClose: handleCloseChat
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio-hero.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                }, "ai-chat", false, {
                                    fileName: "[project]/components/portfolio-hero.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/portfolio-hero.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio-hero.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-3 sm:mt-6 w-full max-w-[95vw] sm:max-w-2xl lg:max-w-3xl",
                        variants: itemVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryCards"], {
                            onCategoryClick: handleCategoryClick,
                            activeCategory: activeChat
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio-hero.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio-hero.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio-hero.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio-hero.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(PortfolioHero, "0nRRh3VU6+HOnByvnHiLoiC455Y=");
_c = PortfolioHero;
var _c;
__turbopack_context__.k.register(_c, "PortfolioHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4edbc0be._.js.map