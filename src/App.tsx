import {useState, useEffect} from 'react';
import Select from './Select';
import { COLORS } from './constants';

const App = () => {

  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fith", value: 5 },
  ]

  const [value, setValue] = useState<any>([options[0], options[1]])

  return (
    <div>
        <h1 style={{color: COLORS.blue}}>Mon app</h1>
        <Select options={options} value={value} setValue={setValue} />

    </div>
  );
};

export default App;