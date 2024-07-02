function imprimir(){
    console.log('Olá mundo')
}
imprimir()

function dobroNumero(num1){
    console.log(num1*2)
}
dobroNumero(2)

function mediaNumero(num1, num2, num3){
    console.log((num1+num2+num3)/3)
}
mediaNumero(2,3,4)

function maior(num1, num2){
    if(num1>num2){
        console.log(`Maior numero é ${num1}`)
    }else{
        console.log(`Maior numero é ${num2}`)
    }
}
maior(4, 5)

function quadrado(num1){
    console.log(Math.pow(num1,2))
}
quadrado(2)