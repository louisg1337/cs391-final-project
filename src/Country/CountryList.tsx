// Rahil Shah
// 

import { Country } from "../../types"

export async function CountryList(): Promise<Country[]> {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const countriesList: Country[] = data
            .filter((country: any) => country.flags?.png && country.population)
            .map((country: any) => ({
                name: {
                    common: country.name.common,
                },
                population: country.population,
                flag: country.flags.png,
            }));


        //console.log("Fetched countries:", countriesList);
        return countriesList;
    } catch (error) {
        console.error("Error fetching countries:", error);
        return []; 
    }
}