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
    
    const currentlyInfected = data.reportedCases * 10;
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
    let factor = duration/3;
    infectionsByRequestedTime = currentlyInfected * Math.pow (2, factor)  
     //15% of infectionsByRequestedTime
     const percentage = 15/100;
     const severeCasesByRequestedTime = percentage * infectionsByRequestedTime;

     const impact = {
            currentlyInfected: currentlyInfected,
            infectionsByRequestedTime: infectionsByRequestedTime,
            severeCasesByRequestedTime: severeCasesByRequestedTime
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
    let factor = duration/3;
    infectionsByRequestedTime = currentlyInfected * Math.pow (2, factor)

    //15% of infectionsByRequestedTime
    const percentage = 15/100;
    const severeCasesByRequestedTime = percentage * infectionsByRequestedTime;

    const severeImpact = {
            currentlyInfected: currentlyInfected,
            infectionsByRequestedTime: infectionsByRequestedTime,
            severeCasesByRequestedTime: severeCasesByRequestedTime
        }
     return severeImpact;   
}
// console.log(impacts({  
//     region:{
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71     
//     },   
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614 } ))

// console.log(severeImpacts({  
//         region:{
//         name: "Africa",
//         avgAge: 19.7,
//         avgDailyIncomeInUSD: 5,
//         avgDailyIncomePopulation: 0.71     
//         },   
//         periodType: "days",
//         timeToElapse:30 ,
//         reportedCases: 674,
//         population: 66622705,
//         totalHospitalBeds: 1380614 } ))

        // const covid19ImpactEstimator = () => {
        //    const severeImpact= severeImpacts(input);
        //    const impact = impacts(input);
        //    const estimates = {
        //        input,
        //        estimate:{
        //        severeImpact :{
        //             currentlyInfected: severeImpact.currentlyInfected
        //        }
        //     }
        //    }

        //    return estimates
        // };
        // console.log(covid19ImpactEstimator())