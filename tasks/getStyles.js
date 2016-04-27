import logger from './lib/logger';

import {
  readFileSync,
} from 'fs';

import {
  sync as glob,
} from 'glob';

import postcss, {
  parse,
} from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const globOptions = {
  ignore: [
    'node_modules/**',
    'styles/**',
  ],
};

export default () => postcss([
  cssnano(),
  autoprefixer,
  cssnext,
]).process(
  parse(
    glob('styles/**/reset.css')
      .concat(glob('**/*.css', globOptions))
      .map(file => readFileSync(file))
      .reduce((p, c) => parse(p).append(parse(c)))
  )
).then(css => {
  logger.log('generated styles');
  return css;
});
