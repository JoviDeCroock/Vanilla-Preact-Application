import { createElement as h, render, Component } from 'https://unpkg.com/preact@10.0.0-beta.0/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@2.1.1/dist/htm.mjs';
import { setPragma } from 'https://unpkg.com/goober@1.3.1/dist/goober.mjs';

setPragma(h);
window.html = htm.bind(h);
window.h = h;
window.Component = Component;

import Router from './lib/router/index.js';
import Home from './modules/home/index.js';
import NotFound from './modules/notFound/index.js';

render(
  html`
    <div>
      <${Router}>
        <${Home} path="/" />
        <${NotFound} default />
      </${Router}>
    </div>
  `,
  document.body,
);
