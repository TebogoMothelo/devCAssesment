const calculatesImpact = (impact) => {
  let population = document.getElementById('population').value;
  let timeToElapse = document.getElementById('time').value;
  let reportedCases = document.getElementById('reported').value;
  let totalHospitalBeds = document.getElementById('hospitals').value;
  let periodType = document.getElementById('period').value;
  let duration;

  const occupied = 0.65 * totalHospitalBeds;
  const emptyBeds = totalHospitalBeds - occupied;
  if (periodType === 'days') {
    duration = timeToElapse;
  }
  if (periodType === 'weeks') {
    duration = timeToElapse * 7;
  }
  if (periodType === 'months') {
    duration = timeToElapse * 30;
  }

  const infected = reportedCases * impact;
  const infectedAtTime = infected * 2 ** parseInt(duration / 3, 10);
  const severeCases = parseInt(infectedAtTime * 0.15, 10);
  const hospitalBeds = parseInt(emptyBeds - severeCases, 10);

  return {
    estimates: {
      infected,
      infectedAtTime,
      severeCases,
      hospitalBeds
    }
  };
};
const covid19ImpactEstimator = () => {
  const impacts = calculatesImpact(10);
  const severeImpacts = calculatesImpact(50);
  return {
    impact: {
      currentlyInfected: impacts[0],
      infectionsByRequestedTime: impacts[1],
      severeCasesByRequestedTime: impacts[2],
      hospitalBedsByRequestedTime: impacts[3]
    },
    severeImpact: {
      currentlyInfected: severeImpacts[0],
      infectionsByRequestedTime: severeImpacts[1],
      severeCasesByRequestedTime: severeImpacts[2],
      hospitalBedsByRequestedTime: severeImpacts[3]
    }
  };
};

export default covid19ImpactEstimator;
