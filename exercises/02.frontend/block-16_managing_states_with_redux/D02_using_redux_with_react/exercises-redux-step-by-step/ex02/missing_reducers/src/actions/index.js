export const AFRICA_ENERGY = 'AFRICA_ENERGY';
export const AMERICA_ENERGY = 'AMERICA_ENERGY';
export const ANTARCTICA_ENERGY = 'ANTARCTICA_ENERGY';
export const ASIA_ENERGY = 'ASIA_ENERGY';
export const EUROPE_ENERGY = 'EUROPE_ENERGY';
export const OCEANIA_ENERGY = 'OCEANIA_ENERGY';

export const sendAfricaEnergy = (percentage) => ({
  type: AFRICA_ENERGY,
  percentage,
});

export const sendAmericaEnergy = (percentage) => ({
  type: AMERICA_ENERGY,
  percentage,
});

export const sendAntarcticaEnergy = (percentage) => ({
  type: ANTARCTICA_ENERGY,
  percentage,
});

export const sendAsiaEnergy = (percentage) => ({
  type: ASIA_ENERGY,
  percentage,
});

export const sendEuropeEnergy = (percentage) => ({
  type: EUROPE_ENERGY,
  percentage,
});

export const sendOceaniaEnergy = (percentage) => ({
  type: OCEANIA_ENERGY,
  percentage,
});
