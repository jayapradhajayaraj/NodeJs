
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// 1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {message:"Enter your url:",
    name:"URL",
    },
  ])
  .then((answers) => {
    const url =answers.URL;
    console.log(answers);
    //requirement-2
    var qr_svg = qr.image('url', { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('url.png'));
    //requirement-3
    fs.writeFile("log.txt", url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Try Again");
    } else {
      // Something else went wrong
      console.log("Invalid Data");
    }
  });