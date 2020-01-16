module.exports = function parseStringAsArray(arrayAsString){
 return arrayAsString.split(',').map(str => str.trim());
 //map() percorre o vetor. trim() retira os espaços no inicio e no final;
};