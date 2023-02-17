const regresaTrue = () => {
    console.log (' regresa true');
    return true;

}

const regresaFalsa = () => {
    console.log (' regresa false');
    return false;
}


console.warn('not o la negacion')
console.log( true);   //true
console.log( !true);   //fa lse 
console.log( !false);  //true 

console.warn('and');   //true si stodos son vdd
console.log(true && true);  //true
console.log (true && !false) // true 


console.log ('======');
console.log( regresaTrue() && regresaFalsa()); //false, el false primero corta el codigo

console.log('4 conds', true && true && true && false); //false



console.warn('or');
console.log(true || false);
console.log (false || false);

console.log('4 conds', true || true || true || false); //true



console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyfalso = false;

const a1 = false && 'hola mundo' && 150;  //false
const a2 = 'hola' && 'mundo' && soyfalso && true;  //false
const a3 = soyfalso || soyUndefined || soyNull || 'ya no soi falsoo'  //false
const a4 = soyfalso || soyUndefined || regresaTrue() || 'ya no soi falso'


console.log({a1, a2,a3,a4 });