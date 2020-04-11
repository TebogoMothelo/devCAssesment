
const impacts = (data) => {
    //currentlyinfected
    const currentlyInfected = data.reportedCases * 10;

    //infectionsByRequestedTime
    let duration = 0;
    if(data.periodType == "days"){
        duration = data.timeToElapse;
    } else if(data.periodType == "weeks"){
        duration = data.timeToElapse * 7;
    } else if(data.periodType == "months"){
        duration = data.timeToElapse * 30;
    } else {
        duration = data.timeToElapse * 365;
    }
    let factor = Math.floor(duration/3);
    infectionsByRequestedTime = Math.floor(currentlyInfected * Math.pow (2, factor))
     //15% of infectionsByRequestedTime
     const percentage = 15/100;
     const severeCasesByRequestedTime = Math.floor(percentage * infectionsByRequestedTime);

     //numberofhospital beds
     const occupied = 0.65 * data.totalHospitalBeds;
     const emptyBeds = data.totalHospitalBeds - occupied;
     const hospitalBedsByRequestedTime = Math.floor(emptyBeds - severeCasesByRequestedTime);

     //casesforICU
     casesForICUByRequestedTime = Math.floor(0.5 * infectionsByRequestedTime);

     //casesforventilators
     const casesForVentilatorsByRequestedTime = Math.floor(0.2 * infectionsByRequestedTime);
     
    //dollarsinflight

    const dollarsInFlight = Math.floor((infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD)/duration);

     const impact = {
            currentlyInfected: currentlyInfected,
            infectionsByRequestedTime: infectionsByRequestedTime,
            severeCasesByRequestedTime: severeCasesByRequestedTime,
            hospitalBedsByRequestedTime: hospitalBedsByRequestedTime,
            casesForICUByRequestedTime: casesForICUByRequestedTime,
            casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime,
            dollarsInFlight:dollarsInFlight
     }
    return impact;
}

const severeImpacts = (data) =>  {
    //currentlyInfected
    const currentlyInfected = data.reportedCases * 50;

    //infectionsByRequestedTime
    let duration = 0;
    if(data.periodType == "days"){
        duration = data.timeToElapse;
    } else if(data.periodType == "weeks"){
        duration = data.timeToElapse * 7;
    } else if(data.periodType == "months"){
        duration = data.timeToElapse * 30;
    } else {
        duration = data.timeToElapse * 365;
    }
 
    let factor = Math.floor(duration/3);
    infectionsByRequestedTime = Math.floor(currentlyInfected * Math.pow (2, factor))

    //15% of infectionsByRequestedTime
    const percentage = 15/100;
    const severeCasesByRequestedTime = Math.floor(percentage * infectionsByRequestedTime);

    //numberofhospital beds
    const occupied = 0.65 * data.totalHospitalBeds;
    const emptyBeds = data.totalHospitalBeds - occupied;
    const hospitalBedsByRequestedTime = Math.floor(emptyBeds - severeCasesByRequestedTime);

     //casesforICU
     casesForICUByRequestedTime = Math.floor(0.5 * infectionsByRequestedTime);
    //casesforventilators
    const casesForVentilatorsByRequestedTime = Math.floor(0.2 * infectionsByRequestedTime);

    //dollarsinflight

    const dollarsInFlight = Math.floor((infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD)/duration);

    const severeImpact = {
            currentlyInfected: currentlyInfected,
            infectionsByRequestedTime: infectionsByRequestedTime,
            severeCasesByRequestedTime: severeCasesByRequestedTime,
            hospitalBedsByRequestedTime: hospitalBedsByRequestedTime,
            casesForICUByRequestedTime: casesForICUByRequestedTime,
            casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime,
            dollarsInFlight:dollarsInFlight
        }
     return severeImpact;   
}

const covid19ImpactEstimator = () => {
    const severeImpact= severeImpacts(input);
    const impact = impacts(input);
    const estimates = {
        input,
        estimate:{
         impact :{
             currentlyInfected: impact.currentlyInfected,
             infectionsByRequestedTime: impact.infectionsByRequestedTime,
             severeCasesByRequestedTime: impact.severeCasesByRequestedTime,
             hospitalBedsByRequestedTime: impact.hospitalBedsByRequestedTime,
             casesForICUByRequestedTime: impact.casesForICUByRequestedTime,
             casesForVentilatorsByRequestedTime: impact.casesForVentilatorsByRequestedTime,
             dollarsInFlight: impact.dollarsInFlight
         },
        severeImpact :{
             currentlyInfected: severeImpact.currentlyInfected,
             infectionsByRequestedTime: severeImpact.infectionsByRequestedTime,
             severeCasesByRequestedTime: severeImpact.severeCasesByRequestedTime,
             hospitalBedsByRequestedTime: severeImpact.hospitalBedsByRequestedTime,
             casesForICUByRequestedTime: severeImpact.casesForICUByRequestedTime,
             casesForVentilatorsByRequestedTime: severeImpact.casesForVentilatorsByRequestedTime,
             dollarsInFlight: severeImpact.dollarsInFlight
        }
     }
    }

    return estimates
 };


export default covid19ImpactEstimator;
