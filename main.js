const result = document.querySelector(".result");
const allbutton = document.getElementById("allbutton");



async function animallist(){

    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10");

    const animals = await response.json();

    let output = "";

    animals.map((animal)=>{

        output +=`

            <div class="animals">
                <div>
                    <img src="${animal.image_link}" alt="animals" />
                </div>

                <h2>${animal.name}</h2>
                <p class="latin">Latin neve: ${animal.latin_name}</p>
                <p>Táplálkozása: ${animal.diet}</p>
                <p>Élőhelye: ${animal.geo_range}<p>
            </div>
        
        `;

    })

    result.innerHTML = output;

}

allbutton.addEventListener("click", animallist);
