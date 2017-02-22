import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors'; //eslint-disable-line no-unused-vars

/*eslint-disable no-console*/
/*eslint-disable no-unused-vars*/

fs.readFile('src/index.html', 'utf8', (err, markup) =>{
   if(err){
       return console.log(err);
   }

    let vendorCss = '<link rel="stylesheet" href="vendorStyles.css">';
    let appCss = '<link rel="stylesheet" href="appStyles.css">';

    const $ = cheerio.load(markup); //pass in the read html file to cheerio,
    //this will create an in memory dom

    $('head').prepend(vendorCss, appCss);

    fs.writeFile('dist/index.html', $.html(), 'utf8', err => {
       if(err){
           return console.log(err);
       }
        console.log('index.html written to /dist'.blue);
    });
});