const HotelTypeDefs = `
  type HotelDetail {
    name: String,
    amenities: [String],
    prices: PricesDetails,
    pictures: [PicturesDetails],
    locality: LocalityDetails,
  }

  type HotelResultSet {
    data: [HotelDetail]
    metaData: PaginationMetaData
  }
`;

export default HotelTypeDefs;
