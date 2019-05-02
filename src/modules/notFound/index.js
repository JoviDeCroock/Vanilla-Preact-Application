import { styled } from '../_common/styled.js';

const Text = styled('p')`
  color: red;
  margin: 0;
`;

export default () => html`
  <${Text}>You have lost your way!</${Text}>
`;
