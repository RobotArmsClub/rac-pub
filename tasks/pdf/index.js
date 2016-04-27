import getStyles from '../getStyles';
import createDir from './createDir';
import writeHTML from './writeHTML';
import writePDF from './writePDF';

createDir();

export default () => getStyles()
  .then(styles => writeHTML({ styles }))
  .then(title => writePDF({ title }));
