import {main} from '@devinit/graphql-next';
import brazil from './modules/brazil';
import china from './modules/china';
import india from './modules/india';
import shared from './modules/shared';
import southAfrica from './modules/southAfrica';

const apiModules = [brazil, china, india, southAfrica, shared];

// starts app
main({
    resolverPattern: '**/lib/modules/**/resolver.js',
    apiModules,
    port: process.env.PORT || 3000
  });
