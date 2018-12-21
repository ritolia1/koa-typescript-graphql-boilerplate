const rootTypeDefs = `
  type Query {
    getAllHotels(options: AdditionalInput): HotelResultSet
    getUserData(input: UserInput): UserData
    getDraftBookingDetail(input: BookingInput, options: AdditionalInput): BookingResultSet
    getCompletedBookingDetail(input: BookingInput, options: AdditionalInput): BookingResultSet
    getBookingDetail(input: BookingInput, options: AdditionalInput): BookingResultSet
  }
`;

export default rootTypeDefs;
