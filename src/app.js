import axios from 'axios';


// Stap 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed.


async function getCountries() {

    const countryList = document.getElementById("countries-list");

    try {
        const result = await axios.get('https://restcountries.com/v2/all');

        const countries = result.data;
        // console.log(result.data);

        countries.sort((a, b)=>{
            return a.population - b.population;
        });


        result.data.map((country) => {

            const countryItem1 = document.createElement("li");
            countryItem1.innerHTML = `
                <img src="${country.flag}" alt="vlaggetje van landje" class="flag"/>
                <span id="name" class="${regionName(country.region)}">${country.name}</span>
             `;

            const countryItem2 = document.createElement("li");
            countryItem2.innerHTML = `
                <p class="population">Has a population of: ${country.population} people</p>
            `;


            countryList.appendChild(countryItem1);
            countryList.appendChild(countryItem2);

        });

    }

    catch (e) {
        console.error(e);
    }
}

getCountries();

// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string
// teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. _Tip_: zorg ervoor
// dat je CSS-classes maakt voor alle regio-kleuren!

function regionName(arrRegion) {

            if (arrRegion === "Africa")
            return arrRegion === "Africa";

            else if (arrRegion === "Asia")
            return "Asia";

            else if (arrRegion === "Europe")
            return "Europe";

            else if (arrRegion === "Oceania")
            return "Oceania";

            else
            return "Americas";

}

regionName();




// Sam vragen waarom hebben we hier className gemaakt?
// <span id="name" className="${regionName(country.region)}">${country.name}</span>


//* troubleshoot github