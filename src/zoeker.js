import axios from 'axios';

console.log("hoi");

async function searchByCountry() {


    try {
        const result = await axios.get('https://restcountries.com/v2/name/netherlands');
        console.log(result.data[0].name);
        // console.log(result.data[0].name);


        //
        // const countryItem1 = document.createElement("li");
        // countryItem1.innerHTML = `
        //         <img src="${country.flag}" alt="vlaggetje van landje" class="flag"/>
        //         <span id="name" class="${regionName(country.region)}">${country.name}</span>
        //      `;
        //
        // const countryItem2 = document.createElement("li");
        // countryItem2.innerHTML = `
        //         <p class="population">Has a population of: ${country.population} people</p>
        //     `;
        //
        //
        // countryList.appendChild(countryItem1);
        // countryList.appendChild(countryItem2);

    // });


    } catch (e)
        {
           return console.error(e);
        }
    }

searchByCountry();


// https://restcountries.com/v2/name/netherlands// DATA OPHALEN STAPPENPLAN


// 1. installeer en importeer axios
// ---- zoek in de API documentatie het juiste endpoint
// 2. asynchrone functie schrijven
// 3. try - catch blok
// 4. In het try blok gaan we ons GET-request maken met axios
// 5. Resultaat loggen
// 6. Probeer een console.log() met de naam van het land te maken
// 7. Probeer een console.log() met de populatie van het land
// DINGEN OP PAGINA WEERGEVEN STAPPENPLAN
// 1. 'anker'-element in het HTML-bestand plaatsen (met ID!)
// 2. sla de referentie naar dit element op in het JS-bestand
// 3. Gebruik .innerHTML om een stukje data op de pagina te laten zien

