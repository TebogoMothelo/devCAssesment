const impacts = (data) => {
  const currentlyInfected = data.reportedCases * 10;
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
  const factor = Math.floor(duration / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfected * 2 ** factor);
  const impact = {
    currentlyInfected,
    infectionsByRequestedTime
  };
  return impact;
};

const severeImpacts = (data) => {
  const currentlyInfected = data.reportedCases * 50;

  let duration;
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

  const severeImpact = {
    currentlyInfected,
    infectionsByRequestedTime
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
        infectionsByRequestedTime: impact.infectionsByRequestedTime
      },
      severeImpact: {
        currentlyInfected: severeImpact.currentlyInfected,
        infectionsByRequestedTime: severeImpact.infectionsByRequestedTime
      }
    }
  };

  return estimates;
};

export default covid19ImpactEstimator;
