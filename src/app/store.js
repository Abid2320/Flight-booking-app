import { configureStore } from "@reduxjs/toolkit";
import TicketReducer from "../features/ticketSlice/TicketSlice";

const store = configureStore({
  reducer: {
    tickets: TicketReducer,
  },
});

export default store;
