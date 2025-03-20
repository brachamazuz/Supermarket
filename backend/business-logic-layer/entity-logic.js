const cryptoHelper = require("../helpers/crypto-helper");
const dal = require("../data-access-layer/dal");
const jwt = require("jsonwebtoken");

// function doPost(e) {
//     const email = 'brachamazuz18@gmail.com'
//     GmailApp.sendEmail(email, 'הופעלה הפונקציה', e.parameter.text)
//     return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
//   }

async function getAllProduct() {
    return dal.executeQueryAsync("select * from products");
} 


async function loginAsync(credentials) {
  //  credentials.password = cryptoHelper.hash(credentials.password);
    const user = await dal.executeQueryAsync(
        `
            select * from client 
            where username_email='${credentials.username_email}'
            and password='${credentials.password}'
        `
    );

    if (!user || user.length < 1) return null;
    delete user[0].password;
    user[0].token = jwt.sign({ user: user[0] }, "token jey dablyou tea", { expiresIn: "5 minutes" });
    return user[0];
}



async function registerAsync(reg) {
    try {

        const checkUser = await dal.executeQueryAsync(
            `
           select * from client where clientID  = '${reg.clientID}'
        `
        );
console.log( `
select * from client where clientID  = '${reg.clientID}'
`);
        if (checkUser.length === 0) {

            const result = await dal.executeQueryAsync(
                `insert into client ( username_email, clientID, password, firstName, lastName, city, street) values (  '${reg.username_email}', '${reg.clientID}', '${reg.password}', '${reg.firstName}', '${reg.lastName}', '${reg.city}', '${reg.street}')`
            );
  
            return result;
        } else {
            console.log('user no insert');
            return false;

        }

    }
    catch (error) {
        return error;
    }
}


module.exports = {
    loginAsync,
    registerAsync,
    getAllProduct
};