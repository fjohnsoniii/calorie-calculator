import React, {useState} from 'react';
import { FormControl } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const BMRCalculator = () => {
    
    const [info, setUserInfo] = useState({
        age: 0,
        weight: 0,
        height: 0,
        BMR: 0
    });

    const [activity, setActivity] = useState({
        sedentary: 0,
        light: 0,
        moderate: 0,
        veryActive: 0,
        extreme: 0
    }); 

    const [macros, setUserMacros] = useState({
        protein: 0,
        carbs: 0,
        fat: 0
    });

    const [gender, setGender] = useState("male");
    const maleBMRFormula = 66 + (6.23 * info.weight) + (12.7 * info.height) - (6.8 * info.age);
    const femaleBMRFormula = 655 + (4.35 * info.weight) + (4.7 * info.height) - (4.7 * info.age);

    const handleInfoChange = (e) => {
        setUserInfo({...info, [e.target.name]: e.target.value});
    };

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    };

    const RenderBMR = () => {
        if (gender !== "male") {
            info.BMR = femaleBMRFormula;
            {console.log(info)};
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {info.BMR.toFixed(2)} cals.</h2></div>
            
        } else {
            info.BMR = maleBMRFormula;
            {console.log(info)};
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {info.BMR.toFixed(2)} cals.</h2></div>
        }
    };

    const RenderRadioButtons = () => {
        return (
            <div id="radioContainer">
                <FormControl component="fieldset">
                    <RadioGroup  aria-label="gender" name="gender" value={gender} onChange={handleRadioChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
                </FormControl>
            </div>
        );
    };

    const setCalories = () => {
        activity.sedentary = info.BMR * 1.2;
        activity.light = info.BMR * 1.375;
        activity.moderate = info.BMR * 1.55;
        activity.veryActive = info.BMR * 1.7;
        activity.extreme = info.BMR * 1.9;
    };

    const setMacros = () => {
        macros.protein = info.weight * .8;
        macros.carbs = info.weight * .8;
        macros.fat = info.weight * .8;
    };

    const RenderCalorieTable = () => {
        setCalories();
        setMacros();
        {console.log(activity)};
        {console.log(macros)};
        return (
            <div className="calorie-table-container">
                <table id="calories">
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
                            <td>{activity.sedentary.toFixed(2)} cals.</td>
                            <td>{(activity.sedentary - 500).toFixed(2)} cals.</td>
                            <td>{(activity.sedentary + 250).toFixed(2)} cals.</td>
                        </tr>
                        <tr>
                            <td>Lightly Active</td>
                            <td>{activity.light.toFixed(2)} cals.</td>
                            <td>{(activity.light - 500).toFixed(2)} cals.</td>
                            <td>{(activity.light + 250).toFixed(2)} cals.</td>
                        </tr>
                        <tr>
                            <td>Moderatley Active</td>
                            <td>{activity.moderate.toFixed(2)} cals.</td>
                            <td>{(activity.moderate - 500).toFixed(2)} cals.</td>
                            <td>{(activity.moderate + 250).toFixed(2)} cals.</td>
                        </tr>
                        <tr>
                            <td>Very Active</td>
                            <td>{activity.veryActive.toFixed(2)} cals.</td>
                            <td>{(activity.veryActive - 500).toFixed(2)} cals.</td>
                            <td>{(activity.veryActive + 250).toFixed(2)} cals.</td>
                        </tr>
                        <tr>
                            <td>Extremely Active</td>
                            <td>{activity.extreme.toFixed(2)} cals.</td>
                            <td>{(activity.extreme - 500).toFixed(2)} cals.</td>
                            <td>{(activity.extreme + 250).toFixed(2)} cals.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="bmr-calculator-container">
            <h1>Calorie Calculator</h1>
            <div id="bmrFormContainer">
                <RenderRadioButtons/>
                <form id="bmrForm">
                    <label htmlFor="age">Age: </label>
                    <input type="number" className="age-input" placeholder="Age in years" name="age" onChange={handleInfoChange} required/>
                    <br></br>
                    <label htmlFor="weight">Weight (lbs.): </label>
                    <input type="number" className="weight-input" placeholder="Weight in lbs." name="weight" onChange={handleInfoChange} required/> 
                    <br></br>
                    <label htmlFor="height">Height (inches): </label>
                    <input type="number" className="height-input" placeholder="Height in inches" name="height" onChange={handleInfoChange} required/>
                    <br></br>
                </form>
            </div>
            <RenderBMR/>
            <RenderCalorieTable/>
        </div>
    );
}