import { styled } from '../_common/styled.js';

const Text = styled('p')`
  color: blue;
  margin: 0;
`;

export default () => html`
  <${Text}>Hello world!</${Text}>
`;
