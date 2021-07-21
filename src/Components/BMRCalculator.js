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

    const [activity] = useState({
        sedentary: 0,
        light: 0,
        moderate: 0,
        veryActive: 0,
        extreme: 0
    }); 

    const [macros] = useState({
        protein: 0,
        sedentaryCarbs: 0,
        lightCarbs: 0,
        moderateCarbs: 0,
        veryCarbs: 0,
        extremeCarbs: 0,
        sedentaryFat: 0,
        lightFat: 0,
        moderateFat: 0,
        veryFat: 0,
        extremeFat: 0
    });

    const [gender, setGender] = useState("male");
    const maleBMRFormula = 66+(6.23*info.weight)+(12.7*info.height)-(6.8*info.age);
    const femaleBMRFormula = 655+(4.35*info.weight)+(4.7*info.height)-(4.7*info.age);

    const handleInfoChange = (e) => {
        setUserInfo({...info, [e.target.name]: e.target.value});
    };

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    };

    const RenderBMR = () => {
        if (gender !== "male") {
            info.BMR = femaleBMRFormula;
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {info.BMR.toFixed(0)} cals.</h2></div>
            
        } else {
            info.BMR = maleBMRFormula;
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {info.BMR.toFixed(0)} cals.</h2></div>
        }
    };

    const RenderRadioButtons = () => {
        return (
            <div id="radioContainer">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleRadioChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
                </FormControl>
            </div>
        );
    };

    const setCalories = () => {
        activity.sedentary = info.BMR*1.2;
        activity.light = info.BMR*1.375;
        activity.moderate = info.BMR*1.55;
        activity.veryActive = info.BMR*1.7;
        activity.extreme = info.BMR*1.9;
        console.log(activity);
    };

    const setMacros = () => {
        macros.protein = (info.weight*.8).toFixed(0);
        macros.sedentaryCarbs = ((activity.sedentary/2)/4).toFixed(0);
        macros.lightCarbs = ((activity.light/2)/4).toFixed(0);
        macros.moderateCarbs = ((activity.moderate/2)/4).toFixed(0);
        macros.veryCarbs = ((activity.veryActive/2)/4).toFixed(0);
        macros.extremeCarbs = ((activity.extreme/2)/4).toFixed(0);
        macros.sedentaryFat = ((activity.sedentary*.3)/9).toFixed(0);
        macros.lightFat = ((activity.light*.3)/9).toFixed(0);
        macros.moderateFat = ((activity.moderate*.3)/9).toFixed(0);
        macros.veryFat = ((activity.veryActive*.3)/9).toFixed(0);
        macros.extremeFat = ((activity.extreme*.3)/9).toFixed(0);
        console.log(macros);
    };

    const RenderCalorieTable = () => {
        setCalories();
        setMacros();
        return (
            <div className="calorie-table-container">
                <table id="calories">
                    <thead>
                        <tr>
                            <th>Activity Level</th>
                            <th>Maintain Weight</th>
                            <th>Lose Weight</th>
                            <th>Gain Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Sedentary</b> (little to no exercise)</td>
                            <td>{activity.sedentary.toFixed(0)} cals.</td>
                            <td>{(activity.sedentary-500).toFixed(0)} cals.</td>
                            <td>{(activity.sedentary+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Lightly Active</b> (1-3 days a week)</td>
                            <td>{activity.light.toFixed(0)} cals.</td>
                            <td>{(activity.light-500).toFixed(0)} cals.</td>
                            <td>{(activity.light+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Moderatley Active</b> (3-5 days a week)</td>
                            <td>{activity.moderate.toFixed(0)} cals.</td>
                            <td>{(activity.moderate-500).toFixed(0)} cals.</td>
                            <td>{(activity.moderate+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Very Active</b> (6-7 days a week)</td>
                            <td>{activity.veryActive.toFixed(0)} cals.</td>
                            <td>{(activity.veryActive-500).toFixed(0)} cals.</td>
                            <td>{(activity.veryActive+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Extremely Active</b> (daily or physical job)</td>
                            <td>{activity.extreme.toFixed(0)} cals.</td>
                            <td>{(activity.extreme-500).toFixed(0)} cals.</td>
                            <td>{(activity.extreme+250).toFixed(0)} cals.</td>
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
                    <label htmlFor="age">Age (years): </label>
                    <input type="number" className="age-input" placeholder="25" name="age" onChange={handleInfoChange} required/>
                    <br></br>
                    <label htmlFor="weight">Weight (lbs.): </label>
                    <input type="number" className="weight-input" placeholder="230" name="weight" onChange={handleInfoChange} required/> 
                    <br></br>
                    <label htmlFor="height">Height (inches): </label>
                    <input type="number" className="height-input" placeholder="72" name="height" onChange={handleInfoChange} required/>
                    <br></br>
                </form>
            </div>
            <RenderBMR/>
            <RenderCalorieTable/>
        </div>
    );
}