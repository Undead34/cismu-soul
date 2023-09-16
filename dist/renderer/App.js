"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const client_1 = __importDefault(require("react-dom/client"));
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const MusicPlayer_1 = __importDefault(require("./components/MusicPlayer/MusicPlayer"));
const MainViewNavbar_1 = __importDefault(require("./components/MainViewNavbar"));
const LeftSidebar_1 = __importDefault(require("./components/LeftSidebar"));
const PlayingBar_1 = __importDefault(require("./components/PlayingBar"));
const Home_1 = __importDefault(require("./views/Home"));
// 1c1c24
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "absolute flex h-full w-full flex-col overflow-hidden bg-[#181820]", children: (0, jsx_runtime_1.jsxs)("div", { className: "cismu-skeleton grid h-full w-full bg-[#181820] p-2 text-xs", children: [(0, jsx_runtime_1.jsx)(LeftSidebar_1.default, {}), (0, jsx_runtime_1.jsx)(MainViewNavbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "skeleton-main-view m-2 my-0 flex overflow-hidden rounded-lg bg-[#23232d] text-white", children: (0, jsx_runtime_1.jsx)("div", { className: "relative flex-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-full w-full overflow-y-auto p-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "sticky h-16 w-full" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "skeleton-right-sidebar w-58 rounded-lg bg-[#23232d] p-2 text-base text-white", children: "right-sidebar" }), (0, jsx_runtime_1.jsx)(PlayingBar_1.default, {})] }) }));
}
exports.default = App;
function Login() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "App" }) }));
}
const root = client_1.default.createRoot(document.getElementById("app"));
root.render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.HashRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(MusicPlayer_1.default, { children: (0, jsx_runtime_1.jsx)(App, {}) }), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "explore", element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Explorar" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "library", element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "library" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "search", element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "search" }) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login, {}) })] }) }) }));
//# sourceMappingURL=App.js.map