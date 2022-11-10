// Returns array of appointments for selected day
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingAppointments = filteredDays[0].appointments.map(appointment => state["appointments"][appointment])

  return matchingAppointments;
}

// Returns array of interviewers for selected day
export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingInterviewers = filteredDays[0].interviewers.map(interviewer => state["interviewers"][interviewer])

  return matchingInterviewers;
}

// Used in Application.js to return an interview object for rendering appointments on the schedule
export function getInterview(state, interview) {
  let interviewObj = {};

  if (!interview) {
    return null;
  }

  interviewObj["student"] = interview.student;
  interviewObj["interviewer"] = state.interviewers[interview.interviewer];
  
  return interviewObj;
}