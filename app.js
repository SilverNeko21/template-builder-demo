const sumOfArray = data.filter((num) =>{
     return num >= 0;
 })
 .reduce((accum, curr) => {
     return accum + curr;
 });
 console.log('sumOfArray', sumOfArray);


 const doubleArray = data.filter((num) =>{
     return num >= 0;
 })
 .map((num) => {
     return num * 2;
 })
 .reduce((accum, curr) =>{
    return accum + curr;
 });
 console.log('doubleArray', doubleArray);



const result = document.querySelector('#result');
console.log('result', result);


const htmlTemplateBuilder = `
    <h2> My favorite number is </h2>
    <h3>${doubleArray}</h3>
`;
result.innerHTML = htmlTemplateBuilder;

