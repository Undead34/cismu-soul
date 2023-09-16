"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increment = exports.counterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
// window.api;
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: "player",
    initialState: {
        player: false,
    },
    reducers: {
        increment: (state) => { },
    },
});
// Action creators are generated for each case reducer function
exports.increment = exports.counterSlice.actions.increment;
exports.default = exports.counterSlice.reducer;
//# sourceMappingURL=index.js.map