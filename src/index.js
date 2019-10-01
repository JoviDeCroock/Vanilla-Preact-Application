import { createElement as h, render, Component } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm@2.1.1?module';
import { Router } from 'https://unpkg.com/preact-router@3.0.0?module';

window.html = htm.bind(h);
window.h = h;
window.Component = Component;

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
