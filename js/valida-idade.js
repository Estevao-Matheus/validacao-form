export default function eMaiorDeIdade (campo) {
    const dataNascimento = new Date(campo.value);
    if(!validadIdade(dataNascimento)) {
        campo.setCustomValidity('O Usuario não é maior de idade');
    }
}


function validadIdade (data) {
    const dataAtual = new Date ();
    const dataMais18 = new Date (data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate());
    console.log(dataMais18);

    return dataAtual >= dataMais18;

}