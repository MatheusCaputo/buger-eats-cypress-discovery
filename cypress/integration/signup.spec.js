import signup from '../Pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', ()=>{

    // beforeEach(() =>{
    //     cy.fixture('deliver.json').then(function(d){
    //         this.deliver = d;
    //     })
    // })

    it('User shoub be deliver', function(){

        var deliver = SignupFactory.deliver();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.modalContentShouldBe();
    })

    it('Invalid document', function(){

        var deliver = SignupFactory.deliver();
        deliver.cpf = '00000014141AA';

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertErrorShouldeBe('Oops! CPF inválido');
        
    })

    it('Invalid email', function(){

        var deliver = SignupFactory.deliver();
        deliver.email = 'user.com.br';

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertErrorShouldeBe('Oops! Email com formato inválido.');
        
    })

    context('Required fields', function(){
        
        const messages = [
            {field:'name', output:'É necessário informar o nome'},
            {field:'cpf', output:'É necessário informar o CPF'},
            {field:'email', output:'É necessário informar o email'},
            {field:'postalcode', output:'É necessário informar o CEP'},
            {field:'number', output:'É necessário informar o número do endereço'},
            {field:'delivery_method', output:'Selecione o método de entrega'},
            {field:'cnh', output:'Adicione uma foto da sua CNH'}
        ];

        before(function(){
            signup.go();
            signup.submit();
        })

        messages.forEach(msg =>{
            it(`${msg.field} is required`, function(){
                signup.alertErrorShouldeBe(msg.output);
            })
        })
    })
})