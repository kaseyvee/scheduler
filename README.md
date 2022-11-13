# Interview Scheduler

Interview Scheduler is a single page application that allows users to book, modify, and cancel interviews with available interviewers.


## Final Product

### Booking a new appointment
!["User booking a new appointment.](https://github.com/kethnal/scheduler/blob/master/docs/appointment-create.gif?raw=true)

### Modifying an existing appointment
!["User modifying an existing appointment.](https://github.com/kethnal/scheduler/blob/master/docs/appointment-edit.gif?raw=true)

### Cancelling an existing appointment
!["User cancelling an existing appointment.](https://github.com/kethnal/scheduler/blob/master/docs/appointment-delete.gif?raw=true)


## Setup

### Scheduler
1. Install dependencies with `npm install`.
2. Run the development server with `npm start`.

### Scheduler API
3. Clone [this](https://github.com/lighthouse-labs/scheduler-api) repository for the Scheduler API.
4. Install dependencies with `npm install`.
5. Run the development server with `npm start`.
6. If needed, navigate to `http://localhost:8001/api/debug/reset` to reset the database. Alternatively, use `curl http://localhost:8001/api/debug/reset` in your terminal.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
