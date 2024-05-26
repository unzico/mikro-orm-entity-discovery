# Reproduction

This is a reproduction of a bug that occurs in version `6.2.2` of the **MikroORM** stack.

Official issue:

## How To

1. clone this repo and run `yarn install` to install the dependencies
2. run `yarn db` in a separate tab to start the database with docker
3. run `yarn build` to build the app
4. run `yarn start` -> no error
5. run `yarn dep:up` to upgrade MikroORM to `v6.2.2`.
6. run `yarn start` -> **error**
7. run `yarn dep:down` to downgrade MikroORM to `v6.2.1`
8. run `yarn start` -> no error
