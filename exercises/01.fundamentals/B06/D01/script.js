const cities = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};


function defaultValues() {
  const t1 = document.querySelectorAll('input');
  const t2 = document.querySelectorAll('textarea');
  const t3 = document.getElementById('city');

  const str = '1231ccdsfvsdfv';

  t1.forEach(x => {
    x.value = str.substr(0, Math.floor(Math.random() * (str.length - 1)) + 1)
  })
  t2.forEach(x => {
    x.innerText = str.substr(0, Math.floor(Math.random() * (str.length - 1)) + 1)
  })

  const a = [...t3.children];
  a[Math.floor(Math.random() * a.length)].selected = 'selected';
}

function comboBoxElement(parentElement, citiesObj) {
  const keys = Object.keys(citiesObj);

  const firstOption = document.createElement('option');
  firstOption.value = '';
  firstOption.innerText = 'Selecione um estado';
  parentElement.appendChild(firstOption);

  for (let i = 0; i < keys.length; i += 1) {
    const value = keys[i];
    const text = citiesObj[value];
    const option = document.createElement('option');
    option.value = value;
    option.innerText = text;
    parentElement.appendChild(option)
  }
}

function validateDate(e) {
  const valueString = e.target.value.split('/');
  const date = {
    d: parseInt(valueString[0], 10),
    m: parseInt(valueString[1], 10),
    y: parseInt(valueString[2], 10),
  };

  e.target.classList.remove('erro');
  if ((date.d > 0 && date.d <= 31) && (date.m > 0 && date.m <= 12) && (date.y > 0)) {
    e.target.classList.remove('erro');
    return true;
  } else {
    e.target.classList.add('erro');
    return false;
  }
}


comboBoxElement(document.getElementById('city'), cities);