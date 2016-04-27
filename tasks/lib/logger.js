/* eslint-disable no-console */

import colors from 'colors';

export default {
  log(message) {
    console.log(` ${colors.green('✓')}  ${message}`);
  },
  warn(message) {
    console.log(` ${colors.red('✘')}  ${message}`);
  },
};
