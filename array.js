function indicesValores(arr) {
    if (arr.length === 0) {
      return "O array está vazio";
    }
  
    let indiceDoMaior = 0;
    let indiceDoMenor = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[indiceDoMaior]) {
        indiceDoMaior = i;
      }
      if (arr[i] < arr[indiceDoMenor]) {
        indiceDoMenor = i;
      }
    }
  
    return {indiceDoMaior, indiceDoMenor};
  }
  
  const arr = [5, 8, 1, 3, 2, 9, 4, 7, 6];
  const indices = indicesValores(arr);
  console.log(`Índice do maior valor: ${indices.indiceDoMaior}, Índice do menor valor: ${indices.indiceDoMenor}`);

  module.exports = { indicesValores }
  