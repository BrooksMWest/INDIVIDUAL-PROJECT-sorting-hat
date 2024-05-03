const characters = [
  {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor", 
  gender: "male",
  role: "student",
  imageUrl: "https://www.irishtimes.com/resizer/SmxgbQ6uare8cwxz0bGi94tWcPM=/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/3MS3PYEKJI2N533Z3ZG6VJ2RKU.jpg"
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    gender: "female",
    role: "student",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*fZV8g-1uYh05uz3H"
  },
  {
    id: 3,
    name: "Ron Weasley",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://media.harrypotterfanzone.com/ron-weasley-yule-ball-portrait-2.jpg"
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    gender: "male",
    role: "student",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*3u1GM9w8XN2A704Dd3DbDQ@2x.jpeg"
  },
  {
    id: 5,
    name: "Neville Longbottom",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://pavingmyauthorsroad.files.wordpress.com/2016/07/nevillelongbottom_wb_f4_nevillelongbottomwithplantpromoshot_promo_080615_port.jpg?w=640"
  },
  {
    id: 6,
    name: "Ginny Weasley",
    house: "Gryffindor",
    gender: "female",
    role: "student",
    imageUrl: "https://cdn.staticneo.com/w/harrypotter/thumb/Ginny_weasley.jpg/200px-Ginny_weasley.jpg"
  },
  {
    id: 7,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    gender: "female",
    role: "student",
    imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/Mam68Vfou2OO6kqEcyW8W/41657e4dbb7d42d2cab591276105bcc1/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg?fm=jpg&q=70&w=2560"
  },
  {
    id: 8,
    name: "Fred Weasley",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://itistrish.com/wp-content/uploads/2015/08/large.png"
  },
  {
    id: 9,
    name: "George Weasley",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://i.pinimg.com/736x/f0/a0/13/f0a013b8f28a57a7ebf0fddd559b966c.jpg" 
   },
  {
    id: 10,
    name: "Cho Chang",
    house: "Ravenclaw",
    gender: "female",
    role: "student",
    imageUrl: "https://s.abcnews.com/images/GMA/katie-leung-asian-racist-attack-02-ht-llr-210311_1615509383220_hpMain.jpg"
  },
  {
    id: 11,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    gender: "male",
    role: "student",
    imageUrl: "https://i.pinimg.com/564x/79/7b/03/797b035e829eb09745efe6a61149760b.jpg"
  },
  {
    id: 12,
    name: "Severus Snape",
    house: "Slytherin",
    gender: "male",
    role: "adult",
    imageUrl: "https://i.pinimg.com/736x/03/90/0b/03900b837b6cd93906823d30c07077d4.jpg"
  },
  {
    id: 13,
    name: "Minerva McGonagall",
    house: "Gryffindor",
    gender: "female",
    role: "adult",
    imageUrl: "https://hpfeminism.weebly.com/uploads/2/3/7/0/23705208/151630838.jpg"
  },
  {
    id: 14,
    name: "Albus Dumbledore",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_medium/0/4165/451958-x_studio_08dumbledore.jpg"
  },
  {
    id: 15,
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://borg.com/wp-content/uploads/2012/02/fang-with-hagrid.jpg"
  },
  {
    id: 16,
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    gender: "female",
    role: "adult",
    imageUrl: "https://miro.medium.com/v2/resize:fit:524/0*BkXEYMfkYYpEvoPz.jpg"
  },
  {
    id: 17,
    name: "Sirius Black",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://therantingsofabookworm.files.wordpress.com/2016/07/f5110ad6f7c1f0942722d4aa316ad6d4.jpg?w=144"
  }
];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};
// this is my formOnTheDom function that is activated when i click the "click me to sort someone" button

const formOnDom = () => {
  const characterForm = `<form id="form">
  <h5>Add a new wizard to hogwarts</h5>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="Name" required>
      <label for="name">New wizard's name</label>
    </div>
  <button type="submit" class="btn btn-success" id="form-submit">Sort</button>
  </form>`
  
  renderToDom("#form", characterForm);//function runs when user clicks the start button and shows the form on the DOM
  const form = document.querySelector("#form");
  form.addEventListener("submit", createCharacter);//event listener for my form - it should run my createCharacter function and submit my form
}



const createCharacter = (e) => {
  e.preventDefault();

  const newCharObj = {
    id:characters.length + 1,
    name: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random() * houses.length)],
  };
  characters.push(newCharObj)
  cardsOnDom(characters)
}



//this is my card function that generates the HTML for the cards that go to the dom
const cardsOnDom = (characters) => {
  let domString ="";
  for (const character of characters) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">${character.house}</p>
        </div>
        <div>
        <button type="button" class="btn btn-danger exile-button" id="exile--${character.id}">EXILE</button>
        </div>
      </div>
    </div>
  </div>`
  }
  renderToDom("#app", domString)

// const exileButtons = document.querySelector("")
// exileButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const exileCharacter(CharacterId);
//   })
//})

};

const filter = (array, characterHouse) => {
  const houseArray = [];

  array.forEach((character) => {
    if (character.house === characterHouse) {
      houseArray.push(character);
    }
  });
  return houseArray;
};

//this is where i'm going to make my exile filter. when exile is clicked, i want the character who's button has been clicked to have an exiled card generated.

//const filter = (array, ???) => {
 // const exiledArray.forEach
//}

const startButton = document.querySelector("#start")//where to put my Start button on the dom

const showAllButton = document.querySelector("#show-all")
const showGryffindorButton = document.querySelector("#show-gryffindor")
const showHufflepuffButton = document.querySelector("#show-hufflepuff")
const showRavenclawButton = document.querySelector("#show-ravenclaw")
const showSlytherinButton = document.querySelector("#show-slytherin")

const showExiledButton = document.querySelector("#show-exiled")


//event listener for my start button
startButton.addEventListener("click", () => {
  formOnDom();
});


showAllButton.addEventListener("click", () => {
  cardsOnDom(characters);
});

showGryffindorButton.addEventListener("click", () => {
  const gryffindorChars = filter(characters, "Gryffindor");
  cardsOnDom(gryffindorChars);
  console.log(gryffindorChars)
})

showHufflepuffButton.addEventListener("click", () => {
  const hufflepuffChars = filter(characters, "Hufflepuff");
  cardsOnDom(hufflepuffChars);
})
showRavenclawButton.addEventListener("click", () => {
    const ravenclawChars = filter(characters, "Ravenclaw");
    cardsOnDom(ravenclawChars);
})
showSlytherinButton.addEventListener("click", () => {
      const slytherinChars = filter(characters, "Slytherin");
      cardsOnDom(slytherinChars);
})
showExiledButton.addEventListener("click", () => {
  cardsOnDom(exiledChars);
})

const startApp = () => {
  cardsOnDom(characters);
}
console.log(characters)
startApp();
 