import './all.css'
import React,{useState} from 'react'

const Main = () => {
    const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const multiplyNumbers = (e) => {
    e.preventDefault();
    const result = parseFloat(num1) * parseFloat(num2);
    setResult(isNaN(result) ? 'Invalid input' : result);
  };
  return (
    <div>
      <main>
        <form >
            <h3 className="name">Multiplication Calculator</h3>
            <div className="input1input">
                <label htmlFor="num1">Enter the first number:</label><br/>
                <input 
                type="text" 
                id="num1" 
                value={num1}
                onChange={(e) => setNum1(e.target.value)}/>

            </div>
            <div className="input2input">
                <label htmlFor="num2">Enter the second number:</label><br/>
                <input 
                type="text" 
                id="num2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)} />
            </div>
            <button className="btn" onClick={multiplyNumbers}>Multiplication</button>
            <div className="res">
                <label htmlFor='sumresult' >The Product is:</label><br/>
                <input type="text" className="result" id="sumresult" value={result} readOnly/>
            </div>
        </form>
    </main>
    </div>
  )
}

export default Main
