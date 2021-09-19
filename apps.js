//holds logic and magic of java

//GLOBAL VARIABLES
// Bio Object and API URL
let myBio = {
    name: 'Alex Myers',
    bio: "A web developer who comes from a design background, a teaching lifestyle, and network proficiency.",
    likes: ['my kitties', 'korean food', 'movies', 'basketball'],
    dislikes: ['lack of sleep', 'stigmas', 'the feeling of velcro', 'milk stout beers', 'coffee']
};
// API URL
const cardURL = "http://deckofcardsapi.com/api/deck/new/draw/?count=3";

// Call and use pre-existing HTML elements (main/section)
let bioDiv = document.querySelector("#bioSection"); //#'s are for ID's. 
let apiDiv = document. querySelector("#apiData");




// -------- separator ------- Local data from JS file displayed -------

// Make a display function to do all that:
// Creating elements, Give them data, Append to HTML/site page
function displayBio(bio) {
    //Console.logging to check if object/data is passed
    console.log(bio);//to make sure when this gets called, is it actually receiving everything from myBio?

    // Create my elements for bio info
    let nameTag = document.createElement('h3');
    let bioTag = document.createElement('h6');
    let likesTag = document.createElement('p');
    let dislikesTag = document.createElement('p');

    //Give element bio data
    nameTag.innerText = `Hello there, my name is ${bio.name}!`;
    bioTag.innerText = `A bit about me: ${bio.bio}`;
    likesTag.innerText = `The things I love in life are: ${bio.likes[0]}, ${bio.likes[1]}, ${bio.likes[2]}, and ${bio.likes[3]}. `; //could pass as a loop or whatever!
    dislikesTag.innerText = `The things I don't really enjoy are: ${bio.dislikes[0]}, ${bio.dislikes[1]}, ${bio.dislikes[2]}, ${bio.dislikes[3]}, and ${bio.dislikes[4]}. `;

    //Append those elements to the main bio div
    bioDiv.appendChild(nameTag);
    bioDiv.appendChild(bioTag);
    bioDiv.appendChild(likesTag);
    bioDiv.appendChild(dislikesTag);    
}

displayBio(myBio);

// -------- separator ------- External data from API display -------
// Creating the fetch to grab data
fetch(cardURL)
    .then(res => res.json()) //json() is a method -> promise 
    .then(data => apiDisplay(data)) //positive case is .then ---> Passing to function to display 
    .catch(err => console.log(err)) //negative case is .catch (404 error, etc)

let apiDisplay = (data) => {
    // Console.loglog to check that display is working
    console.log(data);

    let card = data.cards;
    //console.log(card);

    // create new elements for incoming data
    let img1 = document.createElement("img"); //img = thats the tag.
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");

    // Give new elements attributes and data to display 
    img1.className = "cards"; //could do this with a loop
    img2.className = "cards";
    img3.className = "cards";

    // Populating card/img1's attributes
    img1.src = `${card[0].image}`;
    img1.alt = `A playing card that is the ${card[0].value} of ${card[0].suit.toLowerCase()}`;

    // Populating card/img2's attributes
    img2.src = `${card[1].image}`;
    img2.alt = `A playing card that is the ${card[1].value} of ${card[1].suit.toLowerCase()}`;
    
    // Populating card/img3's attributes
    img3.src = `${card[2].image}`;
    img3.alt = `A playing card that is the ${card[2].value} of ${card[2].suit.toLowerCase()}`;



    //Appending the cards/images to the HTML; through apiDiv
    apiDiv.appendChild(img1);
    apiDiv.appendChild(img2);
    apiDiv.appendChild(img3);
}