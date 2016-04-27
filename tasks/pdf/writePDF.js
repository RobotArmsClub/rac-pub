import logger from '../lib/logger';
import {
  readFileSync,
} from 'fs';
import pdf from 'html-pdf';

export default ({ title }) => pdf.create(readFileSync('./_pdf/index.html', 'utf8'), {
  height: '10.5in',
  width: '8in',
}).toFile(`./_pdf/${title}.pdf`, err => (
  err ? logger.warn(err) : logger.log(`wrote ./_pdf/${title}.pdf`)
));
