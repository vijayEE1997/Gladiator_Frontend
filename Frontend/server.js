//Install express server
const express = require('express');
const path = require('path');
const app = express();
// import { writeFile } from 'fs';
// // Configure Angular `environment.ts` file path
// const targetPath1 = './src/environments/environment.ts';
// const targetPath2 = './src/environments/environment.prod.ts';
// // Load node modules
// const colors = require('colors');
// require('dotenv').config()
// // `environment.ts` file structure
// const envConfigFile1 = `export const environment = {
//    apiBaseUrl: '${process.env.KEY}',
//    production: false,
//    BASE_URL:'https://gladiator-online-shopping-back.herokuapp.com'
// };
// `;
// const envConfigFile2 = `export const environment = {
//     apiBaseUrl: '${process.env.KEY}',
//     production: true,
//     BASE_URL:'https://gladiator-online-shopping-back.herokuapp.com'
//  };
//  `;
// console.log(colors.magenta('The file `environment.ts` and `environment.prod.ts` will be written with the following content: \n'));
// console.log(colors.grey(envConfigFile1));
// console.log(colors.grey(envConfigFile2));
// writeFile(targetPath1, envConfigFile1, function (err) {
//    if (err) {
//        throw console.error(err);
//    } else {
//        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath1} \n`));
//    }
// });
// writeFile(targetPath2, envConfigFile2, function (err) {
//     if (err) {
//         throw console.error(err);
//     } else {
//         console.log(colors.magenta(`Angular environment.prod.ts file generated correctly at ${targetPath2} \n`));
//     }
//  });
// Serve only the static files form the dist directory
app.use(express.static('./dist/Frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);