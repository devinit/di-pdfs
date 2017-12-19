const makeTypeDefs = require('../dist');

try {
    makeTypeDefs.generateTsFromGql({outFile: 'src/types/dh.d.ts'});
} catch(error) {
    console.log(error);
}