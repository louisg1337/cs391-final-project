// Edward Marecos

import HigherLowerGame from './components/HigherLowerGame/HigherLowerGame';
import './index.css';
import { CountryList } from './Country/CountryList';

const countries = await CountryList();
console.log("Countries fetched:", countries);

export default function App() {
    return (
        <HigherLowerGame countries={countries} />
    );
}
