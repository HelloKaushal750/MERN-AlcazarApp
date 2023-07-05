const initialState = {
  step: 0,
  promocode: "masai30",
  total: 0,
  cardDetail: {
    cardNo: "111111111111",
    cvv: "111",
  },
  otp: {
    f: "1",
    s: "1",
    t: "1",
    fo: "1",
    fi: "1",
  },
  userName: "Kaushal",
  bookingData: {},
  signUpData: [],
  bookingHistory: [],
  firstBtn: "SignUp",
  secondBtn: true,
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STEP": {
      return { ...store, step: store.step + action.payload };
    }
    case "DISCOUNT": {
      return {
        ...store,
        booked: { ...store.booked, discount: action.payload },
      };
    }
    case "GRAND_TOTAL": {
      return { ...store, total: action.payload };
    }
    case "BOOKINGDATA":
      return {
        ...store,
        bookingData: action.payload,
      };
    case "SIGNUPDATA":
      return {
        ...store,
        signUpData: [...store.signUpData, action.payload],
      };
    case "BOOKINGHISTORY":
      return {
        ...store,
        bookingHistory: [...store.bookingHistory, action.payload],
      };
    case "FIRSTBTN":
      return { ...store, firstBtn: action.payload };
    case "SECONDBTN":
      return { ...store, secondBtn: action.payload };
    case "USERNAME":
      return {...store, userName:action.payload};  
    default: {
      return store;
    }
  }
};

export default reducer;
