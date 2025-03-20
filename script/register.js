function nextStep() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
}

function submitForm(event)  {
    event.preventDefault();
    console.log('1/3');
    const email = inputs.email().value;
    const password = inputs.password().value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        console.log('2/3')
        alert('Cadastro realizado com sucesso!');
        window.location.href = "../source/home.html"
    }).catch(error => {
        alert('Erro ao cadastrar: ' + error.message);
    });
    console.log('3/3')
}

const inputs = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmpassword: () => document.getElementById('inp_cfsenha'),
    invalid_email: () => document.getElementById('erro_email_2'),
    required_email: () => document.getElementById('erro_email_1'),
    bt_login: () => document.getElementById('bt_login'),
    bt_register: () => document.getElementById('bt_registro')
}
