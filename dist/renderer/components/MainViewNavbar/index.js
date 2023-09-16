"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
const react_router_dom_1 = require("react-router-dom");
function MainViewNavbar() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const goBack = () => {
        if (window.navigation.canGoBack) {
            navigate(-1);
        }
    };
    const goForward = () => {
        if (window.navigation.canGoForward) {
            navigate(1);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "skeleton-main-view pointer-events-none z-20 m-2 my-0 h-16", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex h-full w-full items-center justify-between gap-2 p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 text-base text-white", children: [(0, jsx_runtime_1.jsx)("button", { onClick: goBack, disabled: !window.navigation.canGoBack, className: `pointer-events-auto rounded-[50%] p-2 ${window.navigation.canGoBack ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"}`, children: (0, jsx_runtime_1.jsx)(pi_1.PiCaretLeftBold, {}) }), (0, jsx_runtime_1.jsx)("button", { onClick: goForward, disabled: !window.navigation.canGoForward, className: `pointer-events-auto rounded-[50%] p-2 ${window.navigation.canGoForward ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"}`, children: (0, jsx_runtime_1.jsx)(pi_1.PiCaretRightBold, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: "h-9 w-9 rounded-[50%] bg-[#39394a] hover:scale-105", children: (0, jsx_runtime_1.jsx)("button", { className: "m-1", children: (0, jsx_runtime_1.jsx)("img", { draggable: false, className: "pointer-events-auto h-full w-full select-none rounded-[50%] object-cover", src: "https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17" }) }) })] }) }));
}
exports.default = MainViewNavbar;
//# sourceMappingURL=index.js.map