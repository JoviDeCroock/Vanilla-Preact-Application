import { h, Component } from 'https://unpkg.com/preact@latest?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import Loading from './Loading.js'

const AsyncRoute = ({ getComponent, url }) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const componentData = getComponent();
    if (componentData && componentData.then) {
      componentData.then(c => setComponent(c.default));
    } else {
      setComponent(componentData);
    }
  }, [])

  return component ? component : html`<${Loading} />`;
}

export default AsyncRoute;
