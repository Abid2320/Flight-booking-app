import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

const TicketSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    ticketAdded: (state, action) => {
      state.tickets.push(action.payload);
    },
    cancelTicket: (state, action) => {
      state.tickets = state.tickets.filter(
        (tickets) => tickets.id !== action.payload
      );
    },
  },
});

export const { ticketAdded, cancelTicket } = TicketSlice.actions;
export default TicketSlice.reducer;
