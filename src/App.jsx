import './App.css';
import axios from 'axios';
import {useState} from 'react'
import worldMapImg from "./assets/world_map.png"
import {API_BASE} from "./constants/constants.js";
import colorByRegion from "./helpers/colorByRegion.js";

function App() {

    const [countryData, setCountryData] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get(`${API_BASE}?fields=name,capital,population,borders,region,flags`, {});

            const sortedDataByPopulation = response.data.sort((a, b) => a.population - b.population);

            setCountryData(sortedDataByPopulation);
            console.log(countryData)
        } catch (error) {
            console.error("Error");
        }

    }

    return (
        <>
            <button
                type="button"
                onClick={fetchData}
            >Klik hier!
            </button>
            <p>Werkt het ophalen van de data?</p>
            <ul>
                {countryData.map((country, index) => (
                    <li
                        key={index}
                        className={colorByRegion(country.region || 'default')}
                    >
                        {country.name?.common
                            ? `${country.name.common} has a population of ${country.population}`
                            : "No data available"}
                        <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
                    </li>
                ))}
            </ul>


        </>
    )
}

export default App