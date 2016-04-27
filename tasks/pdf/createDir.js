import logger from '../lib/logger';
import {
  existsSync,
  mkdirSync,
} from 'fs';
const PDF_PATH = '_pdf/';

export default () => !existsSync(PDF_PATH)
  && mkdirSync(PDF_PATH)
  && logger.log(`created ${PDF_PATH}`);
