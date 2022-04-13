//selecionando o id 
const controles = document.getElementById('controles');
//selecionando a classe .css
const cssText = document.querySelector('.css');
//selecionando o botão de Clique
const btn = document.querySelector('.btn');
//adicionando o evento de mudança e a função handleChange à const controles, para retornar quando cada elemento for modificado
controles.addEventListener('change', handleChange);

//método para acessar os elementos que vão modificar o botão "Clique"
const handleStyle = {
    element: btn,
    backgroundColor(value) { this.element.style.backgroundColor = value; },
    height(value) { this.element.style.height = value + 'px'; },
    width(value) { this.element.style.width = value + 'px'; },
    texto(value) { this.element.innerText = value; },
    color(value) { this.element.style.color = value; },
    border(value) { this.element.style.border = value; },
    borderRadius(value) { this.element.style.borderRadius = value + 'px'; },
    fontFamily(value) { this.element.style.fontFamily = value; },
    fontSize(value) { this.element.style.fontSize = value + 'rem'; }
}

function handleChange(event) {
    //mostra o nome do elemento que foi modificado
    const name = event.target.name;
    //mostra o valor que está no elemento quando foi modificado
    const value = event.target.value;
    handleStyle[name](value);
    //vai salvar o que estiver nas constantes name e value
    saveValues(name, value);
    showCss();
}


//método para salvar os valores das propriedades de css
function saveValues(name, value) {
    localStorage[name] = value;
}

//funcionalidade de mostrar os valores que o usuário fez com as propriedades do botão caso ele resete a página
function setValues() {
    //captura os "names" das propriedades que foram mudadas
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie]);
        //ele atribue o valor a cada propriedade no localStorage
        controles.elements[propertie].value = localStorage[propertie];
    });
}
setValues();

//mostra o texto da classe botão conforme for sendo adicionado cada estilo nela
function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';<span></span>');
}