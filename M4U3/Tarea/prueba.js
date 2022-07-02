var moment = require('moment');
moment.locale('es');

console.log('Naci en '+ moment('14/10/1981','DD/MM/YYYY').fromNow())

