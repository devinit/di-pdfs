import {TConfig} from 'pg-promise';

// get the connection details from Allan or Donata

export const dwConfig: TConfig = {
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD
};
