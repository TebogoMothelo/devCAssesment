const covid19ImpactEstimator = (data) => {
  let duration;
  const occupied = 0.65 * data.totalHospitalBeds;
  const emptyBeds = data.totalHospitalBeds - occupied;
  if (data.periodType === 'days') {
    duration = data.timeToElapse;
  }
  if (data.periodType === 'weeks') {
    duration = data.timeToElapse * 7;
  }
  if (data.periodType === 'months') {
    duration = data.timeToElapse * 30;
  }
  return {
    data,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime:
        data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10),
      severeCasesByRequestedTime:
        data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10) * 0.15,
      hospitalBedsByRequestedTime: parseInt(
        emptyBeds
          - data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10) * 0.15,
        10
      ),
      casesForICUByRequestedTime: parseInt(
        data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10) * 0.05,
        10
      ),
      casesForVentilatorsByRequestedTime: parseInt(
        data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10) * 0.02,
        10
      ),
      dollarsInFlight: parseInt(
        (data.reportedCases
          * 10
          * 2 ** parseInt(duration / 3, 10)
          * data.avgDailyIncomePopulation
          * data.avgDailyIncomeInUSD)
          / duration, 10
      )
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime:
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10),
      severeCasesByRequestedTime:
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.15,
      hospitalBedsByRequestedTime: parseInt(
        emptyBeds
          - data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.15,
        10
      ),
      casesForICUByRequestedTime: parseInt(
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.05,
        10
      ),
      casesForVentilatorsByRequestedTime: parseInt(
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.02,
        10
      ),
      dollarsInFlight: parseInt(
        (data.reportedCases
          * 50
          * 2 ** parseInt(duration / 3, 10)
          * data.avgDailyIncomePopulation
          * data.avgDailyIncomeInUSD)
          / duration, 10
      )
    }
  };
};

export default covid19ImpactEstimator;
