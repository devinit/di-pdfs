import {main} from '@di-pdfs/api-base';
import brazil from './modules/brazil';
import china from './modules/china';
import india from './modules/india';
import southAfrica from './modules/southAfrica';

const apiModules = [brazil, china, india, southAfrica];

// starts app
main({
    resolverPattern: '**/dist/modules/**/resolver.js',
    apiModules
  });
