export default class School {
    constructor( logintude = 0, latitude = 0, id = ":3", nome = "Creche", cep = "", telefone ="1234", email ="john@doe.com"){
        this.id = id
        this.nome = nome;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.logintude = logintude
        this.latitude = latitude
    }
}