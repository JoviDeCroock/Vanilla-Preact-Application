import { createElement as h } from 'https://unpkg.com/preact@latest?module';
import { setPragma, styled as baseStyled } from 'https://unpkg.com/goober@latest?module';

setPragma(h);
export const styled = baseStyled;
