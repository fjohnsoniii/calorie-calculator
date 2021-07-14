import React, {useState, useEffect} from 'react';

export const BMRCalculator = () => {

    const [state, setState] = useState({
        age: 0,
        weight: 0,
        height: 0,
        BMR: 0
    });
    const[isMaleChecked, setIsMaleChecked] = useState(false);
    const[isFemaleChecked, setIsFemaleChecked] = useState(false);
    const maleBMRFormula = 66 + (6.23 * state.weight) + (12.7 * state.height) - (6.8 * state.age);
    const femaleBMRFormula = 655 + (4.35 * state.weight) + (4.7 * state.height) - (4.7 * state.age);
    const sedentaryCals = state.BMR * 1.2;
    const lightlyActiveCals = state.BMR * 1.375;
    const moderatelyActiveCals = state.BMR * 1.55;
    const veryActiveCals = state.BMR * 1.7;
    const extremelyActiveCals = state.BMR * 1.9;

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const toggleChecked = () => {
        setIsMaleChecked(!isMaleChecked);
        setIsFemaleChecked(!isFemaleChecked);
    }

    const CalculateCalories = () => {
        if (!isMaleChecked) {
            state.BMR = maleBMRFormula;
            {console.log(state)};
            return <div><h2>BMR: {state.BMR.toFixed(0)}</h2></div>
        } else {
            state.BMR = femaleBMRFormula;
            {console.log(state)};
            return <div><h2>BMR: {state.BMR.toFixed(0)}</h2></div>
        }
        
    }

    return (
        <div className="bmr-calculator-container">
            <div className="bmr-form-container">
                <form className="bmr-form">
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
            <div className="calorie-table-container">
                <table className="calorie-table">
                    <thead>
                        <tr>
                            <th>Activity Level</th>
                            <th>Maintenance Calories</th>
                            <th>Weight Loss</th>
                            <th>Weight Gain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sedentary</td>
                            <td>{sedentaryCals}</td>
                            <td>{sedentaryCals - 500}</td>
                            <td>{sedentaryCals + 250}</td>
                        </tr>
                        <tr>
                            <td>Lightly Active</td>
                            <td>{lightlyActiveCals}</td>
                            <td>{lightlyActiveCals - 500}</td>
                            <td>{lightlyActiveCals + 250}</td>
                        </tr>
                        <tr>
                            <td>Moderatley Active</td>
                            <td>{moderatelyActiveCals}</td>
                            <td>{moderatelyActiveCals - 500}</td>
                            <td>{moderatelyActiveCals + 250}</td>
                        </tr>
                        <tr>
                            <td>Very Active</td>
                            <td>{veryActiveCals}</td>
                            <td>{veryActiveCals - 500}</td>
                            <td>{veryActiveCals + 250}</td>
                        </tr>
                        <tr>
                            <td>Extremely Active</td>
                            <td>{extremelyActiveCals}</td>
                            <td>{extremelyActiveCals - 500}</td>
                            <td>{extremelyActiveCals + 250}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}