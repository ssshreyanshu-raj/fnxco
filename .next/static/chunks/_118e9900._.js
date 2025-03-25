(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_118e9900._.js", {

"[project]/data/navigationLinks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "navigationLinks": (()=>navigationLinks)
});
const navigationLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Features",
        path: "/#features"
    },
    {
        name: "Contact",
        path: "/#contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/navigationLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use useEffect for client-side detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Navbar.useEffect.handleResize"];
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 10) {
                        setScrolled(true);
                    } else {
                        setScrolled(false);
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            // Set initial state
            handleResize();
            // Add event listeners
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
            // Clean up
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('scroll', handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navStyle = {
        width: '100%',
        height: 'var(--nav-height)',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '0 1.5rem',
        borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent'}`,
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    };
    const containerStyle = {
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };
    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        position: 'relative'
    };
    const logoTextStyle = {
        fontSize: '1.25rem',
        fontWeight: 800,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-display)',
        position: 'relative',
        color: '#fff',
        paddingBottom: '4px',
        display: 'inline-block',
        whiteSpace: 'nowrap'
    };
    const logoUnderlineStyle = {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #7c3aed, #4b9fff)',
        borderRadius: '2px'
    };
    const logoHighlightStyle = {
        color: '#7c3aed',
        fontWeight: 900
    };
    const logoAccentStyle = {
        fontWeight: '300',
        background: 'linear-gradient(45deg, var(--primary), rgba(var(--primary-rgb), 0.7))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };
    const desktopNavStyle = {
        display: isMobile ? 'none' : 'flex',
        alignItems: 'center',
        gap: '2.5rem'
    };
    const navLinkStyle = {
        color: 'var(--foreground)',
        transition: 'color 0.3s, transform 0.3s',
        textDecoration: 'none',
        fontSize: '0.85rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontWeight: '300',
        position: 'relative',
        padding: '0.5rem 0',
        fontFamily: 'var(--font-alt)'
    };
    const navLinkUnderlineStyle = {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '50%',
        width: '0',
        height: '1px',
        background: 'linear-gradient(90deg, #7c3aed, #4b9fff)',
        transition: 'width 0.3s ease, left 0.3s ease',
        borderRadius: '2px'
    };
    const primaryButtonStyle = {
        padding: '0.5rem 1.25rem',
        backgroundColor: 'transparent',
        color: scrolled ? '#7c3aed' : 'var(--primary)',
        border: `1px solid ${scrolled ? '#7c3aed' : 'var(--primary)'}`,
        fontWeight: '300',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '0.85rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'var(--font-alt)',
        position: 'relative',
        overflow: 'hidden'
    };
    const buttonHoverBgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(75, 159, 255, 0.1))',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: -1
    };
    const arrowStyle = {
        marginLeft: '0.5rem'
    };
    const mobileButtonStyle = {
        color: 'var(--foreground)',
        background: 'none',
        border: 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        display: isMobile ? 'block' : 'none'
    };
    const mobileMenuStyle = {
        position: 'absolute',
        top: 'var(--nav-height)',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.97)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        zIndex: 100
    };
    const mobileNavLinksStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem'
    };
    const mobileLinkStyle = {
        color: 'var(--foreground)',
        padding: '1rem 0',
        margin: 0,
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        textDecoration: 'none',
        fontSize: '0.85rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontWeight: '300',
        fontFamily: 'var(--font-alt)'
    };
    const mobileButtonFullStyle = {
        padding: '1rem 0',
        marginTop: '1rem',
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        border: '1px solid var(--primary)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '0.85rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontWeight: '300',
        textDecoration: 'none',
        fontFamily: 'var(--font-alt)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: navStyle,
        className: "jsx-f37ca1eef066a9e0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-f37ca1eef066a9e0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            position: 'relative',
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: logoTextStyle,
                            className: "jsx-f37ca1eef066a9e0",
                            children: [
                                "FnX",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: logoHighlightStyle,
                                    className: "jsx-f37ca1eef066a9e0",
                                    children: "Labs"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 254,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: logoUnderlineStyle,
                                    initial: {
                                        width: '0%'
                                    },
                                    animate: {
                                        width: '100%'
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: desktopNavStyle,
                        className: "jsx-f37ca1eef066a9e0",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationLinks"].map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.1 * (index + 1)
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.path,
                                        style: navLinkStyle,
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = 'var(--primary)';
                                            const underline = e.currentTarget.querySelector('.nav-link-underline');
                                            if (underline) {
                                                underline.style.width = '100%';
                                                underline.style.left = '0';
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = 'var(--foreground)';
                                            const underline = e.currentTarget.querySelector('.nav-link-underline');
                                            if (underline) {
                                                underline.style.width = '0';
                                                underline.style.left = '50%';
                                            }
                                        },
                                        children: [
                                            link.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: navLinkUnderlineStyle,
                                                className: "jsx-f37ca1eef066a9e0" + " " + "nav-link-underline"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                }, link.path, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: 0.1 * (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationLinks"].length + 1)
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    style: primaryButtonStyle,
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(var(--primary-rgb), 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.borderColor = '#7c3aed';
                                        e.currentTarget.style.color = '#7c3aed';
                                        const bg = e.currentTarget.querySelector('.button-hover-bg');
                                        if (bg) bg.style.opacity = '1';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = scrolled ? '#7c3aed' : 'var(--primary)';
                                        e.currentTarget.style.color = scrolled ? '#7c3aed' : 'var(--primary)';
                                        const bg = e.currentTarget.querySelector('.button-hover-bg');
                                        if (bg) bg.style.opacity = '0';
                                    },
                                    children: [
                                        "Get Started ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: arrowStyle,
                                            className: "jsx-f37ca1eef066a9e0",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 324,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: buttonHoverBgStyle,
                                            className: "jsx-f37ca1eef066a9e0" + " " + "button-hover-bg"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        style: mobileButtonStyle,
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        "aria-label": "Toggle menu",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.3,
                            delay: 0.4
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 340,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 340,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: mobileMenuStyle,
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: mobileNavLinksStyle,
                    className: "jsx-f37ca1eef066a9e0",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationLinks"].map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: 0.05 * index
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.path,
                                    style: mobileLinkStyle,
                                    onClick: ()=>setIsMenuOpen(false),
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--foreground)',
                                    children: link.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 360,
                                    columnNumber: 17
                                }, this)
                            }, link.path, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.3,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                style: mobileButtonFullStyle,
                                onClick: ()=>setIsMenuOpen(false),
                                children: [
                                    "Get Started",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: arrowStyle,
                                        className: "jsx-f37ca1eef066a9e0",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 346,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f37ca1eef066a9e0",
                children: "@keyframes gradient{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(Navbar, "OZBkttWJpqo4fmeRZVXAx756+gk=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/siteDetails.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "siteDetails": (()=>siteDetails)
});
const siteDetails = {
    name: "FNXLabs",
    title: "FNXLabs - Innovative Technology Solutions",
    description: "FNXLabs provides cutting-edge technology solutions for businesses of all sizes. Explore our services, features, and pricing.",
    url: "https://fnxlabs.com",
    logo: "/logo.svg",
    contactEmail: "info@fnxlabs.com",
    socialLinks: {
        twitter: "https://twitter.com/fnxlabs",
        linkedin: "https://linkedin.com/company/fnxlabs",
        github: "https://github.com/fnxlabs"
    },
    address: {
        street: "123 Innovation Way",
        city: "Tech City",
        state: "TX",
        zip: "75001",
        country: "USA"
    },
    copyright: `© ${new Date().getFullYear()} FNXLabs. All rights reserved.`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/siteDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/navigationLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Footer() {
    _s();
    const [isMediumScreen, setIsMediumScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use useEffect for responsive design
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const handleResize = {
                "Footer.useEffect.handleResize": ()=>{
                    setIsMediumScreen(window.innerWidth >= 768);
                }
            }["Footer.useEffect.handleResize"];
            // Set initial value
            handleResize();
            // Add event listener
            window.addEventListener('resize', handleResize);
            // Clean up
            return ({
                "Footer.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    // Footer styles
    const footerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.97)',
        paddingTop: '6rem',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    };
    const containerStyle = {
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
    };
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: isMediumScreen ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
        gap: '3rem',
        marginBottom: '4rem',
        color: 'var(--foreground)'
    };
    // Adjust for larger screens if needed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            if (isMediumScreen && typeof document !== 'undefined') {
                const gridContainer = document.querySelector('div[data-grid-container]');
                if (gridContainer && window.innerWidth >= 1024) {
                    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
                }
            }
        }
    }["Footer.useEffect"], [
        isMediumScreen
    ]);
    const logoStyle = {
        fontSize: '1.25rem',
        fontWeight: '300',
        letterSpacing: '0.1em',
        color: 'var(--primary)',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
        display: 'inline-block'
    };
    const paragraphStyle = {
        color: 'var(--muted-100)',
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
        lineHeight: '1.7',
        fontWeight: '300'
    };
    const socialContainerStyle = {
        display: 'flex',
        gap: '1rem'
    };
    const socialLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.5rem',
        height: '2.5rem',
        color: 'var(--foreground)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s'
    };
    const sectionHeadingStyle = {
        fontSize: '1rem',
        fontWeight: '300',
        marginBottom: '1.5rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
    };
    const linkListStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    };
    const linkStyle = {
        color: 'var(--muted-100)',
        transition: 'color 0.3s',
        fontSize: '0.95rem',
        fontWeight: '300'
    };
    const contactItemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1rem'
    };
    const contactIconStyle = {
        color: 'var(--primary)',
        width: '1.25rem',
        height: '1.25rem',
        marginRight: '0.75rem',
        marginTop: '0.125rem',
        flexShrink: 0
    };
    const contactTextStyle = {
        color: 'var(--muted-100)',
        fontSize: '0.95rem',
        fontWeight: '300'
    };
    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'var(--foreground)',
        fontSize: '0.95rem',
        marginBottom: '1rem',
        fontWeight: '300'
    };
    const buttonStyle = {
        width: '100%',
        padding: '0.75rem 2rem',
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        border: '1px solid var(--primary)',
        fontWeight: '300',
        display: 'inline-block',
        textAlign: 'center',
        transition: 'all 0.3s',
        textDecoration: 'none',
        fontSize: '0.85rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer'
    };
    const hrStyle = {
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        margin: '2rem 0'
    };
    const bottomContainerStyle = {
        display: 'flex',
        flexDirection: isMediumScreen ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
    };
    const copyrightStyle = {
        color: 'var(--muted-100)',
        fontSize: '0.85rem',
        fontWeight: '300'
    };
    const bottomLinksStyle = {
        display: 'flex',
        gap: '1.5rem'
    };
    const bottomLinkStyle = {
        color: 'var(--muted-100)',
        fontSize: '0.85rem',
        fontWeight: '300',
        transition: 'color 0.3s'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: footerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: gridContainerStyle,
                    "data-grid-container": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: logoStyle,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].name
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: paragraphStyle,
                                    children: "Innovative technology solutions for businesses of all sizes. We help you transform and grow through cutting-edge technology."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: socialContainerStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].socialLinks.twitter,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: socialLinkStyle,
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = 'var(--primary)';
                                                e.currentTarget.style.color = 'var(--primary)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.color = 'var(--foreground)';
                                            },
                                            "aria-label": "Twitter",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Footer.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].socialLinks.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: socialLinkStyle,
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = 'var(--primary)';
                                                e.currentTarget.style.color = 'var(--primary)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.color = 'var(--foreground)';
                                            },
                                            "aria-label": "LinkedIn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Footer.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].socialLinks.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: socialLinkStyle,
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = 'var(--primary)';
                                                e.currentTarget.style.color = 'var(--primary)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.color = 'var(--foreground)';
                                            },
                                            "aria-label": "GitHub",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Footer.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: sectionHeadingStyle,
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: linkListStyle,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$navigationLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.path,
                                                style: linkStyle,
                                                onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                                onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Footer.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        }, link.path, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: sectionHeadingStyle,
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: contactItemStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    style: contactIconStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].contactEmail}`,
                                                    style: contactTextStyle,
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].contactEmail
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: contactItemStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    style: contactIconStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+15551234567",
                                                    style: contactTextStyle,
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                                    children: "+1 (555) 123-4567"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: contactItemStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    style: contactIconStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: contactTextStyle,
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].address.street,
                                                        ", ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].address.city,
                                                        ", ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].address.state,
                                                        " ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].address.zip
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Footer.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: sectionHeadingStyle,
                                    children: "Newsletter"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: paragraphStyle,
                                    children: "Subscribe to our newsletter for the latest updates and insights."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Your email address",
                                            style: inputStyle,
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)',
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            style: buttonStyle,
                                            whileHover: {
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                transform: 'translateY(-3px)'
                                            },
                                            whileTap: {
                                                transform: 'translateY(0)'
                                            },
                                            children: "Subscribe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Footer.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Footer.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    style: hrStyle
                }, void 0, false, {
                    fileName: "[project]/components/sections/Footer.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: bottomContainerStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: copyrightStyle,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDetails"].copyright
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: bottomLinksStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    style: bottomLinkStyle,
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    style: bottomLinkStyle,
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cookies",
                                    style: bottomLinkStyle,
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--primary)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted-100)',
                                    children: "Cookie Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Footer.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Footer.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Footer.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Footer.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Footer.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s(Footer, "vA0+ZQTJj00soMysynpmNkDp46g=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_118e9900._.js.map