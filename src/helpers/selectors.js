export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingAppointments = filteredDays[0].appointments.map(appointment => state["appointments"][appointment])

  return matchingAppointments;
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingInterviewers = filteredDays[0].interviewers.map(interviewer => state["interviewers"][interviewer])

  return matchingInterviewers;
}

export function getInterview(state, interview) {
  let interviewObj = {};

  if (!interview) {
    return null;
  }

  interviewObj["student"] = interview.student;
  interviewObj["interviewer"] = state.interviewers[interview.interviewer];
  
  return interviewObj;
}