function validateEmail(email){
    if(email){
        return /\S+@\S+\.\S+/.test(email);
    } else {
        return true
    }
}