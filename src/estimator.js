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

    const output = { estimate:{
        severeImpact: {
            currentlyInfected: currentlyInfected,
            infectionsByRequestedTime: infectionsByRequestedTime,
        }
    }
}
return output;
}




const covid19ImpactEstimator = (data) => {
    const y = severeImpacts({region:{
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71     
        },   
        periodType: "days",
        timeToElapse:30 ,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614 })
        return y;
};
console.log(covid19ImpactEstimator())

//export default covid19ImpactEstimator;
