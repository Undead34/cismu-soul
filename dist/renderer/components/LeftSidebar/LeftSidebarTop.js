"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const pi_1 = require("react-icons/pi");
const react_router_dom_1 = require("react-router-dom");
function LeftSidebarTop() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-1 rounded-lg bg-[#23232d] px-1 py-2", children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => navigate("/"), className: "flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg", children: (0, jsx_runtime_1.jsx)(pi_1.PiMusicNotes, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "M\u00FAsica" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => navigate("/explore"), className: "flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg", children: (0, jsx_runtime_1.jsx)(pi_1.PiCompass, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "Explorar" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => navigate("/library"), className: "flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg", children: (0, jsx_runtime_1.jsx)(pi_1.PiFolders, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "Biblioteca" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => navigate("/search"), className: "flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg", children: (0, jsx_runtime_1.jsx)(pi_1.PiMagnifyingGlass, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "Buscar" })] })] }) }));
}
exports.default = LeftSidebarTop;
//# sourceMappingURL=LeftSidebarTop.js.map