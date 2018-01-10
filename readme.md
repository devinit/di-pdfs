### DI pdf creation app

_____________________________

For creating DI (ITEP) pdfs

This project structure is based on [lerna](https://github.com/lerna/lerna). The APIs & frontends of different pdf projects are different packages with in the same repo.

The pdf-base package contains components that will get re-used by current & future pdf packages. Same applies to the api-base package.

The thought process behind this project structure is to have re-usable atomic packages / components to re-use for all future and current pdf jobs

Goals

___________________

- To have ready to go pdf / web templates i.e have re-usable components
- Auto generate pdfs from web page equivalents using chromeless
- Create static html versions of pdf / web pages for easy insertion into other webapps
- Have a modular extensible platform for future re-use

Tools

_________


Installations & setup

see [lerna repo readme](https://github.com/lerna/lerna) for more.

______________

```
npm i -g lerna
lerna bootstrap # installs all package dependencies
lerna run lint # lints all packages
lerna run build && lerna run start # starts api & pdf front end
lerna run dev # runs packages in dev mode
lerna run build --scope @devinit/pdf-base # running a command in say one package

```
