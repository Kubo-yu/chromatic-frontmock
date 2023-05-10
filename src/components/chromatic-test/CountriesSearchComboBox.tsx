import {useEffect, useState} from 'react';
import SingleComboBox from './SingleComboBox';


export const CountriesSearchComboBox: React.FC = () => {
  const [selectableCountries, setSelectableCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedItem] = useState<string | null>(null);

  useEffect(()=>{
    // https://restcountries.com/
    fetch("https://restcountries.com/v3.1/region/europe").then((res) =>
      res.json().then((data)=>{
        console.log(data)
        let array = new Array();
        data.map((d: any) => {
          array.push(d.name.common)
        })
        setSelectableCountries(array)
      })
    );
  }, [])

  return (
    <div>
      <SingleComboBox items={selectableCountries} selectedItem={selectedCountry} onSelect={(item: any) => setSelectedItem(item)}></SingleComboBox>
    </div>
  )

}