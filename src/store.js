import { configureStore } from "@reduxjs/toolkit";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const ticketReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.giaVe;
        return { ...state, selectedSeats, totalPrice };
      }

      const selectedSeats = state.selectedSeats.filter(
        (item) => item.maGhe !== seat.maGhe
      );
      const totalPrice = state.totalPrice - seat.giaVe;
      return { ...state, selectedSeats, totalPrice };
    }



    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    ticket: ticketReducer,

  },
});

export default store;
