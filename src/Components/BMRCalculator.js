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
    
    const calories = {
        BMR: 0,
        sedentary: 0,
        sedentaryLoss: 0,
        sedentaryGain: 0,
        light: 0,
        lightLoss: 0,
        lightGain: 0,
        moderate: 0,
        moderateLoss: 0,
        moderateGain: 0,
        veryActive: 0,
        veryLoss: 0,
        veryGain: 0,
        extreme: 0,
        extremeLoss: 0,
        extremeGain: 0
    };

    const macros = {
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
    };

    const weightLossMacros = {
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
    };

    const weightGainMacros = {
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
    };

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
            calories.BMR = femaleBMRFormula;
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {calories.BMR.toFixed(0)} cals.</h2></div>
            
        } else {
            calories.BMR = maleBMRFormula;
            return <div id="bmr"><h2>BMR (Basal Metabolic Rate): {calories.BMR.toFixed(0)} cals.</h2></div>
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
        calories.sedentary = calories.BMR*1.2;
        calories.light = calories.BMR*1.375;
        calories.moderate = calories.BMR*1.55;
        calories.veryActive = calories.BMR*1.7;
        calories.extreme = calories.BMR*1.9;
    };

    const setMacros = () => {
        macros.protein = (calories.weight*.8).toFixed(0);
        macros.sedentaryCarbs = ((calories.sedentary/2)/4).toFixed(0);
        macros.lightCarbs = ((calories.light/2)/4).toFixed(0);
        macros.moderateCarbs = ((calories.moderate/2)/4).toFixed(0);
        macros.veryCarbs = ((calories.veryActive/2)/4).toFixed(0);
        macros.extremeCarbs = ((calories.extreme/2)/4).toFixed(0);
        macros.sedentaryFat = ((calories.sedentary*.3)/9).toFixed(0);
        macros.lightFat = ((calories.light*.3)/9).toFixed(0);
        macros.moderateFat = ((calories.moderate*.3)/9).toFixed(0);
        macros.veryFat = ((calories.veryActive*.3)/9).toFixed(0);
        macros.extremeFat = ((calories.extreme*.3)/9).toFixed(0);
        weightLossMacros.sedentaryCarbs = (((calories.sedentary-500)/2)/4).toFixed(0);
        weightLossMacros.lightCarbs = (((calories.light-500)/2)/4).toFixed(0);
        weightLossMacros.moderateCarbs = (((calories.moderate-500)/2)/4).toFixed(0);
        weightLossMacros.veryCarbs = (((calories.veryActive-500)/2)/4).toFixed(0);
        weightLossMacros.extremeCarbs = (((calories.extreme-500)/2)/4).toFixed(0);
        weightLossMacros.sedentaryFat = (((calories.sedentary-500)*.3)/9).toFixed(0);
        weightLossMacros.lightFat = (((calories.light-500)*.3)/9).toFixed(0);
        weightLossMacros.moderateFat = (((calories.moderate-500)*.3)/9).toFixed(0);
        weightLossMacros.veryFat = (((calories.veryActive-500)*.3)/9).toFixed(0);
        weightLossMacros.extremeFat = (((calories.extreme-500)*.3)/9).toFixed(0);
        weightGainMacros.sedentaryCarbs = (((calories.sedentary+250)/2)/4).toFixed(0);
        weightGainMacros.lightCarbs = (((calories.light+250)/2)/4).toFixed(0);
        weightGainMacros.moderateCarbs = (((calories.moderate+250)/2)/4).toFixed(0);
        weightGainMacros.veryCarbs = (((calories.veryActive+250)/2)/4).toFixed(0);
        weightGainMacros.extremeCarbs = (((calories.extreme+250)/2)/4).toFixed(0);
        weightGainMacros.sedentaryFat = (((calories.sedentary+250)*.3)/9).toFixed(0);
        weightGainMacros.lightFat = (((calories.light+250)*.3)/9).toFixed(0);
        weightGainMacros.moderateFat = (((calories.moderate+250)*.3)/9).toFixed(0);
        weightGainMacros.veryFat = (((calories.veryActive+250)*.3)/9).toFixed(0);
        weightGainMacros.extremeFat = (((calories.extreme+250)*.3)/9).toFixed(0);
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
                            <td>{calories.sedentary.toFixed(0)} cals.</td>
                            <td>{(calories.sedentary-500).toFixed(0)} cals.</td>
                            <td>{(calories.sedentary+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Lightly Active</b> (1-3 days a week)</td>
                            <td>{calories.light.toFixed(0)} cals.</td>
                            <td>{(calories.light-500).toFixed(0)} cals.</td>
                            <td>{(calories.light+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Moderatley Active</b> (3-5 days a week)</td>
                            <td>{calories.moderate.toFixed(0)} cals.</td>
                            <td>{(calories.moderate-500).toFixed(0)} cals.</td>
                            <td>{(calories.moderate+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Very Active</b> (6-7 days a week)</td>
                            <td>{calories.veryActive.toFixed(0)} cals.</td>
                            <td>{(calories.veryActive-500).toFixed(0)} cals.</td>
                            <td>{(calories.veryActive+250).toFixed(0)} cals.</td>
                        </tr>
                        <tr>
                            <td><b>Extremely Active</b> (daily or physical job)</td>
                            <td>{calories.extreme.toFixed(0)} cals.</td>
                            <td>{(calories.extreme-500).toFixed(0)} cals.</td>
                            <td>{(calories.extreme+250).toFixed(0)} cals.</td>
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