"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const typedoc_1 = require("typedoc");
const Sonicware_1 = require("./Sonicware");
function load(app) {
    app.renderer.hooks.on('body.begin', (_) => (typedoc_1.JSX.createElement("script", null,
        typedoc_1.JSX.createElement(typedoc_1.JSX.Raw, { html: "console.log('%cok'+'%c: Typedoc Loaded. TYPESCRIPT ON TOP', 'color:#00dd00;font-weight:bold;', 'color:black;')" }))));
    app.listenTo(app.renderer, typedoc_1.RendererEvent.END, () => {
        const from = (0, path_1.resolve)(__dirname, '../assets/snw.css');
        const to = (0, path_1.resolve)(app.options.getValue('out'), 'assets/snw.css');
        (0, fs_1.cpSync)(from, to);
    });
    app.renderer.defineTheme('sonicware', Sonicware_1.Sonicware);
}
exports.load = load;
;
