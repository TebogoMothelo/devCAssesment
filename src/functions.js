const input = {  
    region:{
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71     
    },   
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614 } 

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
console.log(impacts({  
    region:{
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73     
    },   
    periodType: "days",
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874 } ))

console.log(severeImpacts({  
    region:{
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73     
    },   
    periodType: "days",
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874 }))

        // const covid19ImpactEstimator = () => {
        //    const severeImpact= severeImpacts(data);
        //    const impact = impacts(data);
        //    const estimates = {
        //        data,
        //        estimate:{
        //        severeImpact :{
        //             currentlyInfected: severeImpact.currentlyInfected
        //        }
        //     }
        //    }

        //    return estimates
        // };
        // console.log(covid19ImpactEstimator())