import eUmCPF from "./valida-cpf.js";
const camposDoForm = document.querySelectorAll("[required]");

camposDoForm.forEach ((campo)=> {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    }
}