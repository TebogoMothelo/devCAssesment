const info = {  
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

// const impact = (data) => {
    
//     const currentlyInfected = data.reportedCases * 10;
//     return {
//         currentlyInfected: currentlyInfected
            //infectionsByRequestedTime: 1
//     };
// }

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

    // const output = { estimate:{
    //     severeImpact: {
    //         currentlyInfected: currentlyInfected,
    //         infectionsByRequestedTime: infectionsByRequestedTime,
    //     }
    // }
}
    //console.log(output)
     //return output

    
}

//infectionsByRequestedTime
//if info.periodType = "days"
    //duration = 
//if info.periodType = "months"
    //duration = requestedPeriod * 30;
//if info.periodType = "years"
    //duration = requestedPeriod  * 365;
//factor = duration/3;
//infectionsByRequestedTime = currentlyInfect *  2 to the power of factor;



// console.log(impact({  
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

    console.log(severeImpacts({  
        region:{
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71     
        },   
        periodType: "days",
        timeToElapse:30 ,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614 } ))