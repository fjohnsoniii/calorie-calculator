import React, {useState} from 'react';

export const BMRCalculator = () => {

    const [state, setState] = useState({
        age: 0,
        weight: 0,
        height: 0,
        BMR: 0
    });
    const[state2, setState2] = useState({
        sedentary: 0,
        light: 0,
        moderate: 0,
        veryActive: 0,
        extreme: 0
    });
    const[isMaleChecked, setIsMaleChecked] = useState(false);
    const[isFemaleChecked, setIsFemaleChecked] = useState(false);
    const maleBMRFormula = 66 + (6.23 * state.weight) + (12.7 * state.height) - (6.8 * state.age);
    const femaleBMRFormula = 655 + (4.35 * state.weight) + (4.7 * state.height) - (4.7 * state.age);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const toggleChecked = () => {
        setIsMaleChecked(!isMaleChecked);
        setIsFemaleChecked(!isFemaleChecked);
    }

    const CalculateBMR = () => {
        if (!isMaleChecked) {
            state.BMR = maleBMRFormula;
            {console.log(state)};
            return <div className="bmr"><h2>BMR: {state.BMR.toFixed(2)}</h2></div>
        } else {
            state.BMR = femaleBMRFormula;
            {console.log(state)};
            return <div className="bmr"><h2>BMR: {state.BMR.toFixed(2)}</h2></div>
        }
    }

    const CalculateCalories = () => {
        state2.sedentary = state.BMR * 1.2;
        state2.light = state.BMR * 1.375;
        state2.moderate = state.BMR * 1.55;
        state2.veryActive = state.BMR * 1.7;
        state2.extreme = state.BMR * 1.9;
        {console.log(state2)};
        return (
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
                            <td>{state2.sedentary.toFixed(2)}</td>
                            <td>{(state2.sedentary - 500).toFixed(2)}</td>
                            <td>{(state2.sedentary + 250).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Lightly Active</td>
                            <td>{state2.light.toFixed(2)}</td>
                            <td>{(state2.light - 500).toFixed(2)}</td>
                            <td>{(state2.light + 250).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Moderatley Active</td>
                            <td>{state2.moderate.toFixed(2)}</td>
                            <td>{(state2.moderate - 500).toFixed(2)}</td>
                            <td>{(state2.moderate + 250).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Very Active</td>
                            <td>{state2.veryActive.toFixed(2)}</td>
                            <td>{(state2.veryActive - 500).toFixed(2)}</td>
                            <td>{(state2.veryActive + 250).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Extremely Active</td>
                            <td>{state2.extreme.toFixed(2)}</td>
                            <td>{(state2.extreme - 500).toFixed(2)}</td>
                            <td>{(state2.extreme + 250).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="bmr-calculator-container">
            <div className="bmr-form-container">
                <form className="bmr-form">
                    <label htmlFor="male">Male: </label>
                    <input type="checkbox" className="male-checkbox" name="male" checked={!isMaleChecked} onChange={toggleChecked}/>
                    <label htmlFor="female">Female: </label>
                    <input type="checkbox" className="female-checkbox" name="female" checked={isFemaleChecked} onChange={toggleChecked}/>
                    <br></br>
                    <label htmlFor="age">Age: </label>
                    <input type="number" className="age-input" placeholder="Age in years" name="age" value={state.age} onChange={handleChange} required/>
                    <br></br>
                    <label htmlFor="weight">Weight (lbs.): </label>
                    <input type="number" className="weight-input" placeholder="Weight in lbs." name="weight" value={state.weight} onChange={handleChange} required/> 
                    <br></br>
                    <label htmlFor="height">Height (inches): </label>
                    <input type="number" className="height-input" placeholder="Height in inches" name="height" value={state.height} onChange={handleChange} required/>
                    <br></br>
                </form>
            </div>
            <CalculateBMR/>
            <CalculateCalories/>
        </div>
    );
}