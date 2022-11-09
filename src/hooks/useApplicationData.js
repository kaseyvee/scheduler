import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

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

  function decrementSpots(state) {
    const currentDay = state.day;
    const filteredDay = state.days.find(day => day.name === currentDay)
    return { ...filteredDay, spots: (filteredDay.spots - 1)}
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

    const updatedDay = decrementSpots(state)
    
    const days = state.days.map(day => {
      if (day.id === updatedDay.id) {
        return updatedDay;
      }
      return day;
    })

    console.log("state: ", state, "days: ", days, "updatedDay: ", updatedDay)
    
    return axios.put(`${appointmentsURL}/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        })
      })
  }

  function incrementSpots(state) {
    const currentDay = state.day;
    const filteredDay = state.days.find(day => day.name === currentDay)
    return { ...filteredDay, spots: (filteredDay.spots + 1)}
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const updatedDay = incrementSpots(state)
    
    const days = state.days.map(day => {
      if (day.id === updatedDay.id) {
        return updatedDay;
      }
      return day;
    })

    return axios.delete(`${appointmentsURL}/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        });
      })
  }

  return { state, setDay, bookInterview, cancelInterview };
}