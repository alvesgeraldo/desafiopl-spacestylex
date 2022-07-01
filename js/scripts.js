    
    let endereco = document.getElementById('endereco');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let cep = document.getElementById('cep');
    let fone = document.getElementById('fone');
    let mapa = document.getElementById('mapa');

    function mudarEndereco(dados){

      if (dados == 'matriz') {
          
        endereco.innerHTML = 'Rua da Insdústrias, 1289';
        bairro.innerHTML = 'Distrito Industrial Galpão 1 a 5';
        cidade.innerHTML = 'Belo Horionte - MG';
        cep.innerHTML = 'CEP 32145-000';
        fone.innerHTML = '(31) 3399-2050';
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60031.04423359155!2d-43.9923863807393!3d-19.884744131750068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1656635541593!5m2!1spt-BR!2sbr';

      } else if (dados == 'filial1') {
          
        endereco.innerHTML = 'Av. Marginal Direita Anchieta, 1451';
        bairro.innerHTML = 'Distrito Industrial';
        cidade.innerHTML = 'São Bernardo do Campo - SP';
        cep.innerHTML = 'CEP 09696-000';
        fone.innerHTML = '(31) 3399-2050';
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14618.79678177597!2d-46.58211283487805!3d-23.650941284638495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4313374e4359%3A0x95843b5ea9419066!2sBombril%20S%2FA!5e0!3m2!1spt-BR!2sbr!4v1656687635168!5m2!1spt-BR!2sbr';

      } else if(dados == 'filial2'){

        endereco.innerHTML = '163-50 Cross Bay Blvd, 11414';
        bairro.innerHTML = 'Queens';
        cidade.innerHTML = 'NY - Estados Unidos';
        cep.innerHTML = '';
        fone.innerHTML = '+17185934204';

      } else if(dados == 'filial3'){

        endereco.innerHTML = 'Av. Maria Helena Vieira da Silva 48';
        bairro.innerHTML = '';
        cidade.innerHTML = 'Lisboa, Portugal';
        cep.innerHTML = '1750-184';
        fone.innerHTML = '+351217501200';

      }
    }