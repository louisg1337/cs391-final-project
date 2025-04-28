// Rahil Shah
// this function fetches a list of countries from the REST Countries API
// and returns an array of country objects with their name, population, and flag

import { Country } from "../../../types" // import country type from types.ts

export async function CountryList(): Promise<Country[]> { // main function to fetch countries
    try {
        const response = await fetch('https://restcountries.com/v3.1/all'); // fetch data from the countries API
        const data = await response.json(); // get the data in JSON format

        const countriesList: Country[] = data // now we map the data we got from the API to our country type
            .filter((country: any) => country.flags?.png && country.population) // get rid of any countries that don't have a flag or population
            .map((country: any) => ({ // map the data to our country type
                name: {
                    common: country.name.common,
                },
                population: country.population,
                flag: country.flags.png,
            }));
        //console.log("Fetched countries:", countriesList);
        return countriesList; // return it if no errors
    } catch (error) {
        console.error("Error fetching countries:", error);
        return []; // otherwise return an empty array
    }
}