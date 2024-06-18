import inquirer from "inquirer"
import Qrcode from "qrcode"
import fs from "fs"

const question = [{
    type:'input',
    name:'name',
    message: 'Enter Your Site'
},];

let data="";

inquirer.prompt(question).then(answers => {
    data=answers.name;
    Qrcode.toFile('qrcode.png', data, {
        color: {
          dark: '#000',  // QR code color
          light: '#FFF'  // Background color
        }
      }, function (err) {
        if (err) throw err;
        console.log('QR code generated and saved to qrcode.png');
      });
    
      fs.writeFile("./qrdata",'/.qrcode.png', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        }
      });
      fs.writeFile("./qrdata/data.txt", data, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        }
      });
});

