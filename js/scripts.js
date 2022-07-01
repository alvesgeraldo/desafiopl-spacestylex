    
    let endereco = document.getElementById('endereco');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let cep = document.getElementById('cep');
    let fone = document.getElementById('fone');
    let mapa = document.getElementById('mapa');


    console.log(btntop);

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
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24216.061671997646!2d-73.85964387070996!3d40.651760466109884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2678125152133%3A0x82eddafb0028c7dc!2s163-50%20Cross%20Bay%20Blvd%2C%20Howard%20Beach%2C%20NY%2011414%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1656694215336!5m2!1spt-BR!2sbr';


      } else if(dados == 'filial3'){

        endereco.innerHTML = 'Av. Maria Helena Vieira da Silva 48';
        bairro.innerHTML = '';
        cidade.innerHTML = 'Lisboa, Portugal';
        cep.innerHTML = '1750-184';
        fone.innerHTML = '+351217501200';
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12443.252111668127!2d-9.160015058034865!3d38.76799221231055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932f71fdbdbe9%3A0x8ff008ad33fadccd!2sAv.%20Maria%20Helena%20Vieira%20da%20Silva%2048%2C%201750-184%20Lisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1656694292822!5m2!1spt-BR!2sbr';


      }
    }
