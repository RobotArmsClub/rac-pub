import logger from '../lib/logger';
import {
  writeFile,
  readFileSync,
} from 'fs';
import { safeLoad } from 'js-yaml';
import { minify } from 'html-minifier';
import remark from 'remark';
import remarkHTML from 'remark-html';
import remarkYAMLConfig from 'remark-yaml-config';
import React from 'react';
import {
  renderToStaticMarkup,
} from 'react-dom/server';
import PDFPage from '../../components/PDF/PDFPage';

const processor = remark().use(remarkYAMLConfig).use(remarkHTML);

export default ({ styles }) => new Promise((resolve, reject) => {
  if (!process.argv[2]) {
    logger.warn('yo, specify where you want the content to come from');
  }
  const root = process.argv[2];
  const manifest = safeLoad(readFileSync(`${root}MANIFEST.yml`).toString());
  const meta = {
    title: manifest.title,
  };
  const entries = manifest.entries.map(entry => (
    processor.process(readFileSync(`${root}${entry}.md`).toString())
  ));
  writeFile('./_pdf/index.html', minify(renderToStaticMarkup(
    <PDFPage
      styles={ styles }
      meta={ meta }
      title={ manifest.title }
      entries={ entries }
    />
  ), {
    collapseWhitespace: true,
  }), err => {
    if (err) {
      reject(err);
    }
    logger.log('wrote ./_pdf/index.html');
    resolve(manifest.title);
  });
});
