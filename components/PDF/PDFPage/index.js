import React, {
  PropTypes,
} from 'react';

import PDFHead from '../PDFHead';

const PDFPage = props => (
  <html>
    <PDFHead meta={ props.meta } styles={ props.styles } />
    <body>
      <main>
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
        </header>
        {props.entries.map((entry, index) => (
          <article key={index} dangerouslySetInnerHTML={{ __html: entry }} />
        ))}
      </main>
    </body>
  </html>
);

PDFPage.propTypes = {
  entries: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default PDFPage;
