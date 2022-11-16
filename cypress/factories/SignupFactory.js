var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default{

    deliver: function(){

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
 
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '37999999999',
            address:{
                postalcode: '35633120',
                street: 'Rua Gustavo Capanema',
                number: '123',
                details: 'AP 102',
                district: 'São José',
                city_state: 'Bom Despacho/MG',
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }   

        return data;

    }
}