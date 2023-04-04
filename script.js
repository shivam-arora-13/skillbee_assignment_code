const axios = require('axios')
const ejs = require('ejs');
const fs = require('fs');



const url = 'https://www.boredapi.com/api/activity';

const templateString = fs.readFileSync('views/template.ejs', 'utf8');


for (let i = 1; i <= 10; i++) {
    axios.get(url)
        .then(res => {
            const fileData = ejs.render(templateString, res.data)
            const fileName = __dirname + `/views/Page${i}.html`;
            fs.writeFile(fileName, fileData, err => {
                if (err) console.error(err);
                console.log(`Generated ${fileName}`);
            });
        })
        .catch(err => {
            console.log(err);
        })
}


