//holds logic and magic of java

//GLOBAL VARIABLES
// Bio Object and API URL
let myBio = {
    name: 'Alex Myers',
    bio: "A web developer who comes from a design background, a teaching lifestyle, and network proficiency.",
    likes: ['my kitties', 'korean food', 'movies', 'basketball'],
    dislikes: ['lack of sleep', 'stigmas', 'the feeling of velcro', 'milk stout beers', 'coffee']
};

// Call and use pre-existing HTML elements (main/section)
let bioDiv = document.querySelector("#bioSection"); //#'s are for ID's. 

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
    nameTag.innerText = `Hell there, my name is ${bio.name}!`;
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