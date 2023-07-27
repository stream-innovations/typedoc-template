import { cpSync } from 'fs';
import * as fs from "fs";
import { resolve } from 'path';
import { Application, JSX, RendererEvent, ParameterType } from 'typedoc';
import { StreamProtocol } from "./StreamProtocol";

export function load(app: Application) {
  app.options.addDeclaration({
    name: "cname",
    type: ParameterType.String,
    default: "",
    help: "Github Pages CName for redirections"
  });
  app.renderer.once(RendererEvent.END, () => {
    const cName = app.options.getValue('cname') as string;
    if (cName && cName.length > 0) {
      const outDir = app.options.getValue('out') || './docs';
      fs.writeFileSync(`${outDir}/CNAME`, cName);
    }
  });
  app.options.addDeclaration({
    name: "keywords",
    type: ParameterType.Array,
    help: "Website keywords",
  });
  app.renderer.hooks.on('body.begin', (_) => (
    <script>
      <JSX.Raw html="console.log('%cok'+'%c: Typedoc Loaded. TYPESCRIPT ON TOP', 'color:#00dd00;font-weight:bold;', 'color:black;')" />
    </script>
  ));
  app.renderer.hooks.on("head.begin", (ctx) => {
    const keywords = ctx.options.getValue("keywords");
    return JSX.createElement("meta", { name: "keywords", content: keywords.join(", ") });
  });
  app.listenTo(app.renderer, RendererEvent.END, () => {
    const from = resolve(__dirname, '../assets/theme.css');
    const to = resolve(app.options.getValue('out'), 'assets/theme.css');
    cpSync(from, to);
  });
  app.renderer.defineTheme('streamprotocol', StreamProtocol);
};