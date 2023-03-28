const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = "mysql://freedb_2350_mainn:CnWw&tp2Bpsn5qD@sql.freedb.tech:3306/freedb_Comp2350-A01034999";
const dbConfigLocal = "mysql://root:Toffifee1$@localhost/lab10qoddi";

if (is_qoddi) {
var databaseConnectionString = dbConfigQoddi;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;