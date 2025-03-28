const db=require("mysql");

const pool=db.createPool({
    host: "localhost",
    user: "root",
    database: "shopping_online_project"
});




function executeQueryAsync(sqlCmd) {
    return new Promise((resolve, reject) => {
        pool.query(sqlCmd, (err, rows)=> {
            if (err) {
                // console.log(err);
                reject(err);
            }
            else {
                // console.log(rows);
                resolve(rows);
            }
        });
    });
}

module.exports = {
    executeQueryAsync
};