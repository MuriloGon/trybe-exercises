export const RECEIVE_COSMO = 'RECEIVE_COSMO';

export const getCosmo = (cosmo) => ({
  type: RECEIVE_COSMO,
  cosmo,
});
