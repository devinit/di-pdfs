import {main} from '@di-pdfs/api-base';
import brazil from './modules/brazil';
import china from './modules/china';
import india from './modules/india';
import shared from './modules/shared';
import southAfrica from './modules/southAfrica';

const apiModules = [brazil, china, india, southAfrica, shared];

// starts app
main({
    resolverPattern: '**/dist/modules/**/resolver.js',
    apiModules
  });
