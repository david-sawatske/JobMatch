export const UPDATE_PERSONAL_DATA = 'UPDATE_PERSONAL_DATA';
export const UPDATE_RESUME_IMAGE_DATA = 'UPDATE_RESUME_IMAGE_DATA';

export const updatePersonalData = data => ({
  type: UPDATE_PERSONAL_DATA,
  data
});

export const updateResumeImageData = data => ({
  type: UPDATE_RESUME_IMAGE_DATA,
  data
});
