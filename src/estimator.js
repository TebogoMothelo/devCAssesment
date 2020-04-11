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
      hospitalBedsByRequestedTime: Math.floor(
        emptyBeds
          - data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10) * 0.15
      )
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime:
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10),
      severeCasesByRequestedTime:
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.15,
      hospitalBedsByRequestedTime: Math.floor(
        emptyBeds
          - data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10) * 0.15
      )
    }
  };
};

export default covid19ImpactEstimator;
