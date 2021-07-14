import React, {useState} from 'react';

export const BMICalculator = () => {

    const [state, setState] = useState({
        age: 0,
        weight: 0,
        height: 0,
        BMI: 0
    });
    const[isMaleChecked, setIsMaleChecked] = useState(false);
    const[isFemaleChecked, setIsFemaleChecked] = useState(false);
    const maleBMIFormula = 66 + (6.23 * state.weight) + (12.7 * state.height) - (6.8 * state.age);
    const femaleBMIFormula = 655 + (4.35 * state.weight) + (4.7 * state.height) - (4.7 * state.age);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const toggleChecked = () => {
        setIsMaleChecked(!isMaleChecked);
        setIsFemaleChecked(!isFemaleChecked);
    }

    const CalculateCalories = () => {
        if (!isMaleChecked) {
            state.BMI = maleBMIFormula;
            {console.log(state)};
            return <div><h2>BMI: {state.BMI.toFixed(0)}</h2></div>
        } else {
            state.BMI = femaleBMIFormula;
            {console.log(state)};
            return <div><h2>BMI: {state.BMI.toFixed(0)}</h2></div>
        }
        
    }

    return (
        <div className="bmi-form-container">
            <div className="bmi-form">
                <form className="bmi-form-group">
                    <label htmlFor="male">Male:</label>
                    <input type="checkbox" className="male-checkbox" name="male" checked={!isMaleChecked} onChange={toggleChecked}/>
                    <label htmlFor="female">Female:</label>
                    <input type="checkbox" className="female-checkbox" name="female" checked={isFemaleChecked} onChange={toggleChecked}/>
                    <br></br>
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="age-input" placeholder="Age in years" name="age" value={state.age} onChange={handleChange} required/>
                    <br></br>
                    <label htmlFor="weight">Weight (lbs.):</label>
                    <input type="number" className="weight-input" placeholder="Weight in lbs." name="weight" value={state.weight} onChange={handleChange} required/> 
                    <br></br>
                    <label htmlFor="height">Height (inches):</label>
                    <input type="number" className="height-input" placeholder="Height in inches" name="height" value={state.height} onChange={handleChange} required/>
                    <br></br>
                </form>
            </div>
            <CalculateCalories/>
        </div>
    );
}