const STOCK = {
    money : 'dollar',
    go() {
        console.log('Go!!!!!!!!!')
    },
}

const QCOM = {
    MC:176,
}
const TSM = {
    MC:553,
}
const TSLA = {
    MC:773,
}
const LVMH = function (mc) {
    this.MC = mc;
    this.getMC = function(){
        console.log(this.MC);
    }
}

QCOM.__proto__ = STOCK;
TSM.__proto__ = STOCK;
TSLA.__proto__ = STOCK;

LVMH.prototype.money = 'dollar';
LVMH.prototype.go = function() {
    console.log('Go!!!!!!!!!')
}
LVMH.prototype.ceo = '베르나르 아르노';
LVMH.prototype.fall = function() {
    console.log('Fall!!!!!!!!!')
}

// LVMH.prototype = {
//     money = 'dollar',
//     go() {
//     console.log('Go!!!!!!!!!')
//     },
//     ceo = '베르나르 아르노',
//     fall() {
//     console.log('Fall!!!!!!!!!')
//     },
// }
// 사용 안함 -> constructor 없음 
console.log(QCOM.MC)

TSLA.go();

for(p in QCOM) {
    console.log(p);
}

const infoLVMH = new LVMH(512);
console.log(infoLVMH)
console.log(infoLVMH instanceof LVMH) // true
console.log(infoLVMH.constructor === LVMH);