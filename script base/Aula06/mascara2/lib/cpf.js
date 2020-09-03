function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execMascara()", 1)
}

function execMascara() {
    v_obj.value = v_fun(v_obj.value)
}

function formatarCpf(v) {
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}

function mudaMascara(objSelec, id) {
    var campo = document.getElementById(id);
    campo.value = "";
    campo.focus();
    (objSelec.selectedIndex == 1) ? campo.onkeypress = function () {
        mascara(this, formatarCpf)
    } : campo.onkeypress = function () { };
}
