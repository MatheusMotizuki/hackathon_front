export default class School {
    constructor( logintude = 0, latitude = 0, id = ":3", name = "Creche", cep = "", telefone ="1234", email ="john@doe.com", endereco = "Rua tal, 88 Sasuke"){
        this.id = id
        this.name = name;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.logintude = logintude
        this.latitude = latitude
        this.endereco = endereco
    }
}