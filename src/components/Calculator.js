import React from 'react';

const Calculator = ({ num3, num4, result1, numchange, CalculateSum }) => {
    return (
        <div>
            <main>
                <form>
                <h3 className='name'>Sum Calculator</h3>
            <div className="input1input" >
                <label htmlFor="num1">Enter the first number:</label><br/>
                <input
                    type="text"
                    id="num1"
                    value={num3}
                    onChange={(e) => numchange(e, 1)}
                />
            </div>
            <div  className="input2input">
                <label htmlFor="num2">Enter the second number:</label><br/>
                <input
                    type="text"
                    id="num2"
                    value={num4}
                    onChange={(e) =>numchange(e, 2)}
                />
            </div>
            <button className="btn" onClick={CalculateSum}>Sum</button>
            <div  className="res">
                <label>The Sum is:</label><br/>
                <input type="text" className="result" value={result1} readOnly />
            </div>
                </form>
            </main>
            
        </div>
    );
};

export default Calculator;
