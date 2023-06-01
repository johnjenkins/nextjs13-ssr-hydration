const stencil = require('@matt/stencil-components/hydrate');
const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(compression());

  // static assets
  server.get('/_next/*', handle);
  server.get('/img/*', handle);
  server.get('/video/*', handle);
  server.get('/__nextjs_original-stack-frame', handle);

  // server.use('/scripts/comp', express.static(path.join(__dirname, '/node_modules/comp')));

  server.all('/api/*', handle);

  server.all('*', async (req, res) => {
    const html = await app.renderToHTML(req, res, req.path, req.query);

    // generate a 'DOM' and insert next generated html into it
    const win = stencil.createWindowFromHtml('', 'stencil-ssr')
    const document = win.document
    const bodyElement = document.body
    const headElement = document.head

    const nextHeader = html.match(/(?<=<head([^>]+)?>)((.|\n)*?)(?=<\/head>)/g)
    const nextBody = /<body([^>]+)?>((.|\n)*?)<\/body>/g.exec(html)

    if (nextHeader) {
      // head
      headElement.innerHTML = nextHeader[0];
    }

    if (nextBody) {
      // main body content
      if (nextBody[2]) bodyElement.innerHTML = nextBody[2];

      // body tag attributes
      if (nextBody[1]) {
        const el = document.createElement('html');
        el.innerHTML = `<div ${nextBody[1]}></div>`;

        const attrs = Array.from(el.getElementsByTagName('div')[0].attributes);
        attrs.forEach(attr => bodyElement.setAttribute(attr.name, attr.value));
      }
    }

    // hydrate stencil components mpw
    await stencil.renderToString(document);

    // pick out stencil style tags and add them to body so next leaves them alone
    headElement.querySelectorAll('style[sty-id]').forEach((stencilStyle) => {
      bodyElement.append(stencilStyle);
    });
    
    return res.send(document.documentElement.outerHTML);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});