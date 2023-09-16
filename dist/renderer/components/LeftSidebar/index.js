"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LeftSidebarBottom_1 = __importDefault(require("./LeftSidebarBottom"));
const LeftSidebarTop_1 = __importDefault(require("./LeftSidebarTop"));
function LeftSidebar() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "skeleton-left-sidebar w-66 flex select-none flex-col gap-2 text-base text-white", children: [(0, jsx_runtime_1.jsx)(LeftSidebarTop_1.default, {}), (0, jsx_runtime_1.jsx)(LeftSidebarBottom_1.default, {})] }));
}
exports.default = LeftSidebar;
//# sourceMappingURL=index.js.map