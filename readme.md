### DI pdf creation app

_____________________________

For creating DI (ITEP) pdfs

This project structure is based on [lerna](https://github.com/lerna/lerna). The API & frontend are different packages with in the same repo.

I chose this structure coz i dont expect this to blow up into a very large code base. Keep things together maybe an advantage. In case the codebase gets too large, It will relatively easy to split the packages into independet repos.

Goals

___________________

- To have ready to go pdf / web templates i.e have re-usable components
- Auto generate pdfs from web page equivalents using chromeless
- Create static html versions of pdf / web pages for easy insertion into other webapps

Tools

_________


Installations & setup

see lerna repo readme

______________

```
lerna bootstrap # installs all package dependencies
lerna run lint # lints all packages
lerna run build && lerna run start # starts api & pdf front end
lerna run dev # runs packages in dev mode

```
