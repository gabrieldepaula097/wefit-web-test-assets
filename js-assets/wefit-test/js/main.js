let titles = document.getElementsByTagName('h3');
for(let i = 0; i < titles.length; i++){
    titles[i].style.fontWeight = "bold";
}

let buttonGroup = document.getElementsByClassName('btn-group-vertical')[0];
buttonGroup.style.flexDirection = "row";
buttonGroup.style.whiteSpace = "nowrap";
buttonGroup.style.alignItems = "flex-end";
buttonGroup.style.columnGap = "5px";

let buttons = document.getElementsByClassName('btn')

for(let i = 0; i < 6; i++){
    buttons[i].style.borderRadius = "0.25rem";
    buttons[i].style.backgroundColor = "#6B757E";
    buttons[i].style.borderColor = "#6B757E";
}

let jumbotron = document.getElementsByClassName('jumbotron')[0];
jumbotron.style.backgroundColor = "#6B757E";
jumbotron.style.color = "white";
jumbotron.style.display = "flex";
jumbotron.style.flexDirection = "column";
jumbotron.style.alignItems = "flex-end";

let hr = jumbotron.getElementsByTagName('hr')[0];
hr.style.width = '100%';

let buttonJumbotron = jumbotron.getElementsByTagName('a')[0];
buttonJumbotron.style.backgroundColor = '#27A844';
buttonJumbotron.style.borderColor = '#27A844';

let textJumbotron = jumbotron.getElementsByTagName('p')[1];
let textJumbotronIdx = textJumbotron.innerText.indexOf("Lorem");
let textToAppend = textJumbotron.innerText.substring(textJumbotronIdx);

textJumbotron.style.marginBottom = '0px';
textJumbotron.innerText = textJumbotron.innerText.substring(0, textJumbotronIdx);

let tag = document.createElement('p');
let text = document.createTextNode(textToAppend);
tag.appendChild(text);
jumbotron.insertBefore(tag, buttonJumbotron);

let cardsContainer = document.getElementsByClassName('row')[2];
let cards = document.getElementsByClassName('col-lg-3');
let cardsTitle = document.getElementsByTagName('h5');

for(let i = 0; i < cards.length; i++){
    cardsTitle[i].style.fontWeight = 'bold';
}

cardsContainer.insertBefore(cards[3], cards[0])
cardsContainer.insertBefore(cards[3], cards[2])
let natureCardButton =  cards[1].getElementsByTagName('a')[0]
natureCardButton.style.backgroundColor = '#27A844';
natureCardButton.style.borderColor = '#27A844';

let list = document.getElementsByClassName('list-group')[0]
let threeLi = list.getElementsByClassName('active')[0];
threeLi.classList.remove('active')
let fourLi = document.createElement('li');
let textFourLi = document.createTextNode('Quarto item');
fourLi.appendChild(textFourLi);
fourLi.classList.add('list-group-item', 'active');
let fiveLi = document.createElement('li');
let textFiveLi = document.createTextNode('Quinto item');
fiveLi.classList.add('list-group-item');
fiveLi.appendChild(textFiveLi);
list.appendChild(fourLi);
list.appendChild(fiveLi);