//import{calculateTotal} from './cart';
const calculateTotal = require('./calculateTotal');
test('multiply 3 and 80 to equal 240', ()=> {
    expect(calculateTotal(3,80)).toBe(240);
});
