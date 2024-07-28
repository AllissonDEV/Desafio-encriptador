function criptografar() {
    const textarea = document.getElementById('msgID');
    const texto = textarea.value;
    const textoCriptografado = texto.replace(/a/g, 'ai')
                                    .replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');
    exibirResultado(textoCriptografado);
    esconderMensagemSemTexto();
}
function descriptografar() {
    const textarea = document.getElementById('msgID');
    const texto = textarea.value;
    const textoDescriptografado = texto.replace(/ai/g, 'a')
                                       .replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u');
    exibirResultado(textoDescriptografado);
}

function exibirResultado(texto) {
    const resultadoDiv = document.getElementById('resultado_cript');
    const fraseCript = resultadoDiv.querySelector('.frase-cript');
    fraseCript.textContent = texto;
    resultadoDiv.style.display = 'block';
}

function esconderMensagemSemTexto() {
    const msgSemTextoIMG = document.getElementById('img_Cadeado');
    msgSemTextoIMG.style.display = 'none';
    const p1 = document.getElementById('msg_sem_texto_1');
    p1.style.display = 'none';
    const p2 = document.getElementById('msg_sem_texto_2')
    p2.style.display = 'none'
}

function copiar() {
    const resultadoDiv = document.getElementById('resultado_cript');
    const fraseCript = resultadoDiv.querySelector('.frase-cript');
    navigator.clipboard.writeText(fraseCript.textContent)
        .then(() => {
            alert('Texto copiado!');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

document.getElementById('criptografar').addEventListener('click', criptografar);
document.getElementById('descriptografar').addEventListener('click', descriptografar);
document.querySelector('.copiar').addEventListener('click', copiar);