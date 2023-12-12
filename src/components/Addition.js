import './all.css'
import React,{useState} from 'react'
import Calculator from './Calculator'


const Addition = () => {
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const [result1, setResult1] = useState('');
    const handleNumChange = (e, num) => {
       
        const value = e.target.value;
        num === 1 ? setNum3(value) : setNum4(value);
    };
    const calculateSum = (e) => {
        e.preventDefault();
        const sum = parseFloat(num3) + parseFloat(num4);
        setResult1(isNaN(sum) ? 'Invalid input' : sum);
    };
  return (
    <div>
         <Calculator
                num1={num3}
                num2={num4}
                result={result1}
                numchange={handleNumChange}
                CalculateSum={calculateSum}
            />
    </div>
  )
}

export default Addition
