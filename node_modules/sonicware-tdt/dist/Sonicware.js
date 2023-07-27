"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sonicware = void 0;
const typedoc_1 = require("typedoc");
const ThemeContext_1 = require("./ThemeContext");
class Sonicware extends typedoc_1.DefaultTheme {
    getRenderContext(pageEvent) {
        return new ThemeContext_1.ThemeContext(this, pageEvent, this.application.options);
    }
}
exports.Sonicware = Sonicware;
