### DI pdf creation app
_____________________________

[![Build Status](https://travis-ci.org/devinit/di-pdfs.svg?branch=master)](https://travis-ci.org/devinit/di-pdfs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e501f77141774b74979c60d5cfd219ac)](https://www.codacy.com/app/epicallan/di-pdfs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=devinit/di-pdfs&amp;utm_campaign=Badge_Grade)

For creating DI (ITEP) pdfs
______________________________

This project structure is based on [lerna](https://github.com/lerna/lerna). The APIs & frontends of different pdf projects are different packages with in the same repo.

The pdf-base package contains components that will get re-used by current & future pdf packages. Same applies to the api-base package.

The thought process behind this project structure is to have re-usable atomic packages / components to re-use for all future and current pdf jobs

Goals
___________________

- [x] To have ready to go pdf / web templates i.e have re-usable components
- [x] Auto generate pdfs from web page equivalents using [puppeteer](https://github.com/GoogleChrome/puppeteer)
- [ ] Create static html versions of pdf / web pages for easy insertion into other webapps (workes -- ish)
- [x] Have a modular extensible platform for future re-use

Tools
_________


Installations & setup

```
npm i -g lerna yarn 
npm install # from root
lerna bootstrap # installs externa dependencies
```


Useful commands
______________

```
lerna bootstrap # installs all package dependencies
lerna run lint # lints all packages
lerna run build && lerna run start # starts api & pdf front end
lerna run dev # runs packages in dev mode
lerna run build --scope @devinit/pdf-base # running a command in say one package

```

see [lerna repo readme](https://github.com/lerna/lerna) for more.
