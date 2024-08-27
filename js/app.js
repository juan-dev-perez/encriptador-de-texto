let inputTexto = document.getElementById('texto');
let parrafoResultado = document.getElementById('resultado');

function validarTexto(texto) {

    if(texto.length <= 0){
        return false;
    }

    for (let i = 0; i < texto.length; i++) {
        let codigoLetra = texto.charCodeAt(i);
        
        if (codigoLetra >= 97 && codigoLetra <= 122) {
            continue;
        } else if (codigoLetra == 32 || codigoLetra == 241 || codigoLetra == 10) {
            continue;
        } else {
            alert('Solo se permiten letras en minúscula y/o espacios');
            inputTexto.value = '';
            return false;
        }
    }
    inputTexto.value = '';
    return true;
}

function encriptarTexto(){
    let textoIngresado = inputTexto.value;
    if(!validarTexto(textoIngresado)){
        return;
    };
    
    let textoCifrado = textoIngresado.split('').map(letra => {
        switch (letra) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
              return letra;
          }
    });

    let resultado = textoCifrado.join('');
    parrafoResultado.innerHTML = resultado;
}

function desencriptarTexto(){
    let datosDescifrar = [
        ['ai','a'],
        ['enter','e'],
        ['imes','i'],
        ['ober','o'],
        ['ufat','u']
    ]
    let textoIngresado = inputTexto.value;
    if(!validarTexto(textoIngresado)){
        return;
    };

    datosDescifrar.forEach( dato => {
        textoIngresado = textoIngresado.replaceAll(dato[0], dato[1])
    })

    parrafoResultado.innerHTML = textoIngresado;
}

async function copiarTexto() {
    try{
        let texto = parrafoResultado.innerHTML;
        await navigator.clipboard.writeText(texto);
    }catch(error) {
        console.error('Error al copiar el texto: ', error);
    }
}
