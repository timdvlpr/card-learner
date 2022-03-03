import * as mysql from 'mysql';

const connection = require('../config/dbconfig');

async function dbquery(sql: string, data: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (err: mysql.MysqlError, result: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = dbquery;
