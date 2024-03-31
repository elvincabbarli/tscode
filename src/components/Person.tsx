import { ChangeEvent, useState } from "react";
import { HairColor } from "../enums/HairColor";


interface PersonProp {
  name: string;
  age: number;
  id: number;
  email: string;
  getName?: (ad: string) => string;
  hairColor: HairColor;
}

const Person = ({ name, age, id, email, hairColor }: PersonProp) => {
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <li>{name}</li>
      <li>{id}</li>
      <li>{age}</li>
      <li>{email}</li>

      <input type="text" onChange={(e) => handleChange(e)} />
      <br />

      {country}
      {hairColor}
    </div>
  );
};

export default Person;
