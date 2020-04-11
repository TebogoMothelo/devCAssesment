const covid19ImpactEstimator = (data) => {
  let duration;
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
    data: data,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime:
        data.reportedCases * 10 * 2 ** parseInt(duration / 3, 10)
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime:
        data.reportedCases * 50 * 2 ** parseInt(duration / 3, 10)
    }
  };
};

export default covid19ImpactEstimator;
