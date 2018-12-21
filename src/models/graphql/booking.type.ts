const BookingTypeDefs = `

  type BookingDetail {
    hotelId: String
    checkIn: String
    checkOut: String
    status: String
  }

  input BookingInput {
    userId: String
  }

  type BookingResultSet {
    data: [BookingDetail]
    metaData: PaginationMetaData
  }`;

export default BookingTypeDefs;
