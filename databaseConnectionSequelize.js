const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = "mysql://freedb_2350main:&G3AbYA*auMSvZn@sql.freedb.tech:3306/freedb_comp2350-week2-A01316270";
const dbConfigLocal = "mysql://root:Toffifee1$@localhost/lab10qoddi";

if (is_qoddi) {
var databaseConnectionString = dbConfigQoddi;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;