export const UPDATE_RESUME_IMAGE_DATA = 'UPDATE_RESUME_IMAGE_DATA';
export const UPDATE_LOCATIONS_DATA = 'UPDATE_LOCATIONS_DATA';
export const UPDATE_PERSONAL_DATA = 'UPDATE_PERSONAL_DATA';
export const UPDATE_BENEFITS_DATA = 'UPDATE_BENEFITS_DATA';
export const UPDATE_TECHS_DATA = 'UPDATE_LOCATIONS_DATA';

export const updatePersonalData = data => ({
  type: UPDATE_PERSONAL_DATA,
  data
});

export const updateResumeImageData = data => ({
  type: UPDATE_RESUME_IMAGE_DATA,
  data
});

export const updateLocationsData = data => ({
  type: UPDATE_LOCATIONS_DATA,
  data
});

export const updateTechsData = data => ({
  type: UPDATE_TECHS_DATA,
  data
});

export const updateBenefitsData = data => ({
  type: UPDATE_BENEFITS_DATA,
  data
});
