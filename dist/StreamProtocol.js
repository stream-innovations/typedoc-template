"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamProtocol = void 0;
const typedoc_1 = require("typedoc");
const ThemeContext_1 = require("./ThemeContext");
class StreamProtocol extends typedoc_1.DefaultTheme {
    getRenderContext(pageEvent) {
        return new ThemeContext_1.ThemeContext(this, pageEvent, this.application.options);
    }
}
exports.StreamProtocol = StreamProtocol;