function onChangeEmail(){
    const email = inputs.email().value;
    inputs.required_email().style.display = email ? "none" : "block";
    inputs.invalid_email().style.display = validateEmail(email) ? "none" : "block";
}

function onChangePassword() {
    

}

const inputs = {
    email: () => document.getElementById('inp_email'),
    password: () => document.getElementById('inp_senha'),
    confirmpassword: () => document.getElementById('inp_cfsenha'),
    invalid_email: () => document.getElementById('erro_email_2'),
    required_email: () => document.getElementById('erro_email_1'),
    bt_login: () => document.getElementById('bt_login'),
    bt_register: () => document.getElementById('bt_registro')
}
