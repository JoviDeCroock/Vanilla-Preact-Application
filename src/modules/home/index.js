import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { styled } from '../_common/styled.js';

const Text = styled('p')`
  color: blue;
  margin: 0;
`;

export default () => {
  const [state] = useState('Hello world!');
  return html`
    <${Text}>${state}</${Text}>
  `
};
