"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ReactTable = __importStar(require("@table-library/react-table-library/table"));
const baseline_1 = require("@table-library/react-table-library/baseline");
const theme_1 = require("@table-library/react-table-library/theme");
const react_1 = require("react");
function MusicView() {
    const theme = (0, theme_1.useTheme)((0, baseline_1.getTheme)());
    const [musics, setMusics] = (0, react_1.useState)([
        {
            id: "001",
            title: "MV LUVORATORRRRRY",
            album: "LUVORATORRRRRY",
            artist: "Reolれをる",
            file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
        },
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ReactTable.Table, { data: { nodes: musics }, theme: theme, children: (nodes) => {
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ReactTable.Header, { children: (0, jsx_runtime_1.jsxs)(ReactTable.HeaderRow, { className: "!bg-[#23232d] !text-white", children: [(0, jsx_runtime_1.jsx)(ReactTable.HeaderCell, { className: "!mb-4 !pb-3", children: "#" }), (0, jsx_runtime_1.jsx)(ReactTable.HeaderCell, { className: "!mb-4 !pb-3", children: "T\u00EDtulo" }), (0, jsx_runtime_1.jsx)(ReactTable.HeaderCell, { className: "!mb-4 !pb-3", children: "Album" }), (0, jsx_runtime_1.jsx)(ReactTable.HeaderCell, { className: "!mb-4 !pb-3", children: "Fecha" }), (0, jsx_runtime_1.jsx)(ReactTable.HeaderCell, { className: "!mb-4 !pb-3", children: "Options" })] }) }), (0, jsx_runtime_1.jsx)(ReactTable.Body, { children: nodes.map((music) => {
                                return ((0, jsx_runtime_1.jsxs)(ReactTable.Row, { className: "!bg-[#23232d] !text-white hover:!bg-[#404053] ", item: music, children: [(0, jsx_runtime_1.jsx)(ReactTable.Cell, { className: "!border-none", children: 1 }), (0, jsx_runtime_1.jsxs)(ReactTable.Cell, { className: "!border-none", children: [music.title, " ", music.artist] }), (0, jsx_runtime_1.jsx)(ReactTable.Cell, { className: "!border-none", children: music.album }), (0, jsx_runtime_1.jsx)(ReactTable.Cell, { className: "!border-none", children: "18 jul 2023" }), (0, jsx_runtime_1.jsx)(ReactTable.Cell, { className: "!border-none", children: "1 2 3" })] }, music.id));
                            }) })] }));
            } }) }));
}
exports.default = MusicView;
//# sourceMappingURL=Home.js.map