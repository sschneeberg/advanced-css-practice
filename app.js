function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;
    // return the new element
    return newElement;
}

const card = createNewElement('div');
card.classList.add('card');
card.style = "width: 18rem;";
document.body.appendChild(card);


const cardBody = createNewElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

const cardTitle = createNewElement('div', 'New Card');
cardTitle.classList.add('card-title');
cardBody.appendChild(cardTitle);

const cardText = createNewElement('div', 'this is a new card');
cardText.classList.add('card-text');
cardBody.appendChild(cardText);


$('.collapse').collapse('toggle');
//this needs work, it is supposed to start hidden but it does not even though aria-expanded is false, I think it has to do with how I used the jquery part

$(function() {
    $('[data-toggle="popover"]').popover()
});