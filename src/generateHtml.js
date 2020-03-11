import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/component/App';

export const generateHTML = data => {
  const app = renderToString(<App data={data} />);

  const html = `
      <div id="reactel">${app}</div>
      `;

  return html;
};
