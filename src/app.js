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



// * peer review: Rinus

// import axios from 'axios';
//
// ///////////////////////
// // Elements
// ///////////////////////
// const countryContainer = document.getElementById('countries');
//
// ///////////////////////
// // Constructors
// ///////////////////////
//
// const countryFlag = (country) => {
//     return`
//     <img src="${country.flags.png}" alt="${country.name}"/>
//     `
// };
//
// const countryTittle = (country) => {
//     return `
//     <h3 class="${continentColor(country)}">${country.name} ${countryFlag(country)}</h3>
//     `
// };
//
// const countryPopulation = (country) => {
//     return `
//     <div>
//     Has a population of <span class="population">${country.population}</span> people
//     </div>
// `
// };
//
// const countryListItem = (country) => {
//     return `
//         <li class="countryListItem">
//         ${countryTittle(country)}
//         ${countryPopulation(country)}
//         </li>
//     `;
// };
//
//
// ///////////////////////
// // Manipulation
// ///////////////////////
//
// const sortOnPopulation = (countries) => {
//     countries.sort((a,b)=> a.population - b.population)
// };
//
// const continentColor = (countries) => {
//     switch (countries.region) {
//         case "Antarctic Ocean":
//             return "light-gray";
//         case "Antarctic":
//             return "light-blue";
//         case "Americas":
//             return "green";
//         case "Oceania":
//             return "purple";
//         case "Africa":
//             return "blue";
//         case "Europe":
//             return "yellow";
//         case "Polar":
//             return "black";
//         case "Asia":
//             return "red";
//     }
// };
//
// ///////////////////////
// // API Calls
// ///////////////////////
//
// const getCountries = async () => {
//     try {
//         const result = await axios.get('https://restcountries.com/v2/all');
//         // Log all data
//         console.log(result);
//         // Log one country
//         console.log(result.data[1].name)
//
//         sortOnPopulation(result.data);
//
//         // Get all continents
//         const allContinents = result.data.map((country) => {
//             return `
//             ${country.region}`
//         });
//         // Get unique continents
//         const uniqueContinents = [...new Set(allContinents)];
//         console.log(uniqueContinents)
//
//         const countryItemList = result.data.map((country) => {
//             return `
//             ${countryListItem(country)}
//             `
//         });
//         countryContainer.innerHTML = `${countryItemList.join('')}`;
//
//     } catch (err) {
//         console.error(err);
//     }
// };
//
// getCountries()