export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingAppointments = filteredDays[0].appointments.map(appointment => state["appointments"][appointment])

  return matchingAppointments;
}

export function getInterview(state, interview) {
  if (interview !== null) {
    const interviewer = interview.interviewer;
    interview.interviewer = state.interviewers[`${interviewer}`];
    return interview;
  }
  
  return null;
}