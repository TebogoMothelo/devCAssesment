const impacts = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  let duration = 0;
  if (data.periodType === 'days') {
    duration = data.timeToElapse;
  }
  if (data.periodType === 'weeks') {
    duration = data.timeToElapse * 7;
  }
  if (data.periodType === 'months') {
    duration = data.timeToElapse * 30;
  }
  const factor = Math.floor(duration / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfected * 2 ** factor);

  const percentage = 15 / 100;
  const severeCasesByRequestedTime = Math.floor(
    percentage * infectionsByRequestedTime
  );

  const occupied = 0.65 * data.totalHospitalBeds;
  const emptyBeds = data.totalHospitalBeds - occupied;
  const hospitalBedsByRequestedTime = Math.floor(
    emptyBeds - severeCasesByRequestedTime
  );

  const casesForICUByRequestedTime = Math.floor(
    0.5 * infectionsByRequestedTime
  );

  const casesForVentilatorsByRequestedTime = Math.floor(
    0.2 * infectionsByRequestedTime
  );

  const dollarsInFlight = Math.floor(
    (infectionsByRequestedTime
      * data.region.avgDailyIncomePopulation
      * data.region.avgDailyIncomeInUSD)
      / duration
  );
  const impact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
  return impact;
};

const severeImpacts = (data) => {
  const currentlyInfected = data.reportedCases * 50;

  let duration = 0;
  if (data.periodType === 'days') {
    duration = data.timeToElapse;
  } 
  if (data.periodTyp === 'weeks') {
    duration = data.timeToElapse * 7;
  }
  if (data.periodType === 'months') {
    duration = data.timeToElapse * 30;
  }

  const factor = Math.floor(duration / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfected * 2 ** factor);

  const percentage = 15 / 100;
  const severeCasesByRequestedTime = Math.floor(
    percentage * infectionsByRequestedTime
  );

  const occupied = 0.65 * data.totalHospitalBeds;
  const emptyBeds = data.totalHospitalBeds - occupied;
  const hospitalBedsByRequestedTime = Math.floor(
    emptyBeds - severeCasesByRequestedTime
  );

  const casesForICUByRequestedTime = Math.floor(
    0.5 * infectionsByRequestedTime
  );

  const casesForVentilatorsByRequestedTime = Math.floor(
    0.2 * infectionsByRequestedTime
  );

  const dollarsInFlight = Math.floor(
    (infectionsByRequestedTime *
      data.region.avgDailyIncomePopulation *
      data.region.avgDailyIncomeInUSD) /
      duration
  );

  const severeImpact = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
  return severeImpact;
};

const covid19ImpactEstimator = (data) => {
  const severeImpact = severeImpacts(data);
  const impact = impacts(data);
  const estimates = {
    data,
    estimate: {
      impact: {
        currentlyInfected: impact.currentlyInfected,
        infectionsByRequestedTime: impact.infectionsByRequestedTime,
        severeCasesByRequestedTime: impact.severeCasesByRequestedTime,
        hospitalBedsByRequestedTime: impact.hospitalBedsByRequestedTime,
        casesForICUByRequestedTime: impact.casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime:
          impact.casesForVentilatorsByRequestedTime,
        dollarsInFlight: impact.dollarsInFlight
      },
      severeImpact: {
        currentlyInfected: severeImpact.currentlyInfected,
        infectionsByRequestedTime: severeImpact.infectionsByRequestedTime,
        severeCasesByRequestedTime: severeImpact.severeCasesByRequestedTime,
        hospitalBedsByRequestedTime: severeImpact.hospitalBedsByRequestedTime,
        casesForICUByRequestedTime: severeImpact.casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime:
          severeImpact.casesForVentilatorsByRequestedTime,
        dollarsInFlight: severeImpact.dollarsInFlight
      }
    }
  };

  return estimates;
};

export default covid19ImpactEstimator;
