export const UPDATE_SKILL_DATA = 'UPDATE_SKILL_DATA';
export const CREATE_SKILL_DATA = 'CREATE_SKILL_DATA';

export const updateSkillData = data => ({
  type: UPDATE_SKILL_DATA,
  data
});

export const createSkillData = data => ({
  type: CREATE_SKILL_DATA,
  data
});
