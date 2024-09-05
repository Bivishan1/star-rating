import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

//creating an array through Array() function where spread operator helps to combine each length of array in one line.
const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect, }) {
  return <FaStar
    color={selected ? 'red' : 'grey'}
    onClick={onSelect}
  />
}

function StarRating({ countStart = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(countStart).map((n, i) => (
    <Star key={i} selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)} />
  ))
}

function App() {
  return <StarRating />
}

export default App;
