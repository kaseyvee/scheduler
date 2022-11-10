import { useEffect, useState } from "react";
import axios from "axios";

// Used in Application.js
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Sets the day state when clicking through each days on the sidebar
  const setDay = day => setState({ ...state, day });

  const daysURL = '/api/days';
  const appointmentsURL = '/api/appointments';
  const interviewersURL = '/api/interviewers';
  
  useEffect(() => {
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL)
    ]).then((all) => {
      setState(state => ({
        ...state,
        days: [...all[0].data],
        appointments: {...all[1].data},
        interviewers: {...all[2].data}
      }));
    });
  }, []);

  // Returns a new days array with updated spots when an interview is booked/cancelled
  function updateSpots(state, appointments) {
    return state.days.map((day => {
      if (day.name === state.day) {
        let appointmentsArr = day.appointments.map((id => appointments[id]));
        let freeSpotsAmount = appointmentsArr.filter(({interview}) => !interview).length;
        return { ...day, spots: freeSpotsAmount}
      }
      return day;
    }))
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`${appointmentsURL}/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, appointments)
        })
      })
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`${appointmentsURL}/${id}`, { interview })
      .then(() => {
        setState(prev => ({
          ...prev,
          appointments,
          days: updateSpots(state, appointments)
        }))
      })
  }

  return { state, setDay, bookInterview, cancelInterview };
}