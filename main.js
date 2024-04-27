console.log("i'm connected")
const characters = [
  {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor", 
  gender: "male",
  role: "student",
  imageUrl: "https://static.wikia.nocookie.net/neoencyclopedia/images/4/44/HarryPotter5poster.jpg/revision/latest?cb=20121121021021"
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
    imageUrl: "https://static.wikia.nocookie.net/ashes_of_chaos/images/5/55/Ronald.jpg/revision/latest/thumbnail/width/360/height/360?cb=20200730144844"
   
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    gender: "male",
    role: "student",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/8/84/Draco_Malfoy_%28HBP_promo%29.jpg/revision/latest/scale-to-width-down/289?cb=20140623200347"
  },
  {
    id: 5,
    name: "Neville Longbottom",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://static.wikia.nocookie.net/the-truth-behind-aurora/images/4/4b/Static-assets-upload5489954150729937058.jpg/revision/latest?cb=20210916011844"
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
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/9/90/Fred_HS_TDH_promo.jpg/revision/latest?cb=20230526122025"
  },
  {
    id: 9,
    name: "George Weasley",
    house: "Gryffindor",
    gender: "male",
    role: "student",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/2/2a/DH_promo_front_closeup_George_Weasley.jpg/revision/latest?cb=20161119235305" 
   },
  {
    id: 10,
    name: "Cho Chang",
    house: "Ravenclaw",
    gender: "female",
    role: "student",
    imageUrl: "https://static.wikia.nocookie.net/ashes_of_chaos/images/1/19/Cho_chang.jpg/revision/latest?cb=20220120200400"
  },
  {
    id: 11,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    gender: "male",
    role: "student",
    imageUrl: "https://static.wikia.nocookie.net/p__/images/c/ca/Cedric_Diffory_%22such_a_handsome_boy%22.jpeg/revision/latest?cb=20160306120749&path-prefix=protagonist"
  },
  {
    id: 12,
    name: "Severus Snape",
    house: "Slytherin",
    gender: "male",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/c/c1/Severus-snape1.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171112083156"
  },
  {
    id: 13,
    name: "Minerva McGonagall",
    house: "Gryffindor",
    gender: "female",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/p__/images/5/5f/McGonagall_the_Withch.jpeg/revision/latest?cb=20160322213035&path-prefix=protagonist"
  },
  {
    id: 14,
    name: "Albus Dumbledore",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest?cb=20150822232849"
  },
  {
    id: 15,
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/ashes_of_chaos/images/1/10/RubeusHagrid.jpg/revision/latest?cb=20200730081843"
  },
  {
    id: 16,
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    gender: "female",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/1/14/BellatrixLestrange.png/revision/latest?cb=20171101034243"
  },
  {
    id: 17,
    name: "Sirius Black",
    house: "Gryffindor",
    gender: "male",
    role: "adult",
    imageUrl: "https://static.wikia.nocookie.net/p__/images/2/2d/Padfoot.jpeg/revision/latest/scale-to-width/360?cb=20160119152604&path-prefix=protagonist"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (characters) => {
  let domString ="";
  for (const character of characters) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${character.imageUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">${character.house}</p>
          <p class="card-text"><small class="text-body-secondary">${character.role}</small></p>
        </div>
        <div>
        <button type="button" class="btn btn-danger" id="delete--${character.id}">EXILE</button>
        </div>
      </div>
    </div>
  </div>`
  }
  renderToDom("#app", domString)
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

const showAllButton = document.querySelector("#show-all")
const showGryffindorButton = document.querySelector("#show-gryffindor")
const showHufflepuffButton = document.querySelector("#show-hufflepuff")
const showRavenclawButton = document.querySelector("#show-ravenclaw")
const showSlytherinButton = document.querySelector("#show-slytherin")

showAllButton.addEventListener("click", () => {
  cardsOnDom(characters);
});

showGryffindorButton.addEventListener("click.", () => {
  const gryffindorChars = filter(characters, "Gryffindor")
  cardsOnDom(gryffindorChars);
})

showHufflepuffButton.addEventListener("click.", () => {
  const hufflepuffChars = filter(characters, "Hufflepuff")
  cardsOnDom(hufflepuffChars);
})
showRavenclawButton.addEventListener("click.", () => {
    const ravenclawChars = filter(characters, "Ravenclaw")
    cardsOnDom(ravenclawChars);
})
showGryffindorButton.addEventListener("click.", () => {
      const slytherinChars = filter(characters, "Slytherin")
      cardsOnDom(slytherinChars);
})
const startApp = () => {
  cardsOnDom(characters)
}

startApp();
