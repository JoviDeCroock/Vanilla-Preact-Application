import { createElement as h } from 'https://unpkg.com/preact@next?module';
import { setPragma, styled as baseStyled } from 'https://unpkg.com/goober@latest?module';

setPragma(h);
export const styled = baseStyled;
