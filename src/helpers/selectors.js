export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(someDay => someDay.name === day);

  if (filteredDays.length === 0) {
    return filteredDays;
  }

  const matchingAppointments = filteredDays[0].appointments.map(appointment => state["appointments"][appointment])

  return matchingAppointments;
}