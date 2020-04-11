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
  const estimates = {
    data,
    estimate: {
      impact: {
        currentlyInfected: data.reportedCases * 10,
        infectionsByRequestedTime: Math.floor(
          data.reportedCases * 10 * 2 ** Math.floor(duration/3)
        )
      },
      severeImpact: {
        currentlyInfected: data.reportedCases * 50,
        infectionsByRequestedTime: Math.floor(
          data.reportedCases * 50 * 2 ** Math.floor(duration/3)
        )
      }
    }
  };
  return estimates;
};

export default covid19ImpactEstimator;
