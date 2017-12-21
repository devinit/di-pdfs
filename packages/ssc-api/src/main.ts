import {main} from '@di-pdfs/api-base';
import brazil from './modules/brazil';

const apiModules = [brazil];

// starts app
main({
    resolverPattern: '**/dist/modules/**/resolver.js',
    apiModules
  });
