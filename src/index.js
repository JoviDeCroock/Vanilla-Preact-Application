import { createElement as h, render, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm@latest?module';
import { Router } from 'https://unpkg.com/preact-router@3.0.0?module';

window.html = htm.bind(h);
window.h = h;
window.Component = Component;

import Home from './modules/home/index.js';
import NotFound from './modules/notFound/index.js';
import AsyncRoute from './modules/_common/AsyncRoute.js';

render(
  html`
    <div>
      <${Router}>
        <${AsyncRoute} path="/" getComponent=${() => import('./modules/home/index.js')} />
        <${AsyncRoute} default getComponent=${() => import('./modules/notFound/index.js')} />
      </${Router}>
    </div>
  `,
  document.body,
);
