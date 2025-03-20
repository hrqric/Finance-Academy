
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();

}

function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

function toggleButtonsDisable(){
    const bt_login = inputs.bt_login();
    const bt_recover = inputs.bt_recover();
    const email = isEmailValid();
    const password = isPasswordValid();

    bt_login.disabled = !email || !password;

    if(!email) {
        bt_recover.disabled = true;
    } else if (validateEmail(email)) {
        bt_recover.disabled = false;
    }
}

function isEmailValid(){
    const email = inputs.email().value

    if(!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = inputs.password().value
    if(!password){
        return false;
    }
    return true;
}

function toggleEmailErrors(){
    const email = inputs.email().value;
    const invalid_email = inputs.invalid_email();
    const required_email = inputs.required_email();

    if(!email){
        required_email.style.display = "block";
    } else {
        required_email.style.display = "none";
    }

    if(validateEmail(email)) {
        invalid_email.style.display = "none"
    } else {
        invalid_email.style.display = "block"
    }

}

function togglePasswordErrors(){
    const password = inputs.password().value;
    if(!password) {
        document.getElementById('erro_senha').style.display = "block";
    }else {
        document.getElementById('erro_senha').style.display = "none";
    }
}

function doLogin(event){
    event.preventDefault();
    console.log('botao clicado');

    console.log('antes');
    firebase.auth().signInWithEmailAndPassword(inputs.email().value, inputs.password().value).then(response => {
      console.log('sucess', response)
      window.location.href = "../source/home.html";
    }).catch(error => {
      alert(getErrorMessage(error))
    });
    console.log('dps');


}

function getErrorMessage(error) {
    console.log('deu erro', error.code)
    if (error.code == "auth/invalid-credential")
    {
        return "Usuário não encontrado"
    }
    return error.message;
}

function register() {
    window.location.href = '../source/register.html'
}

const inputs = {
    email: () => document.getElementById('inp_email'),
    password: () => document.getElementById('inp_senha'),
    invalid_email: () => document.getElementById('erro_email_2'),
    required_email: () => document.getElementById('erro_email_1'),
    bt_login: () => document.getElementById('bt_login'),
    bt_recover: () => document.getElementById('bt_recover')
}