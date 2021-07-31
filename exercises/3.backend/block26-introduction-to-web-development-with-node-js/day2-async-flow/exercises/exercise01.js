function nums(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if( num1 === typeof 'number' || num2 === typeof 'number' 
      || num3 === typeof 'number') return reject(Error('Informe apenas números'));

    const output = (num1 + num2) * num3;
    if(output <= 50) return reject(Error('Valor muito baixo'));

    resolve(output);
  });
}

// nums(1, 22, 3).then( (data) => console.log('o resultado foi', data)).catch(e => console.error(e.message));
// nums(1, '22', 3).then( (data) => console.log('o resultado foi', data)).catch(e => console.error(e.message));
// nums(1, 22, 3).then( (data) => console.log('o resultado foi', data)).catch(e => console.error(e.message));
// export default nums;
module.exports = nums;
