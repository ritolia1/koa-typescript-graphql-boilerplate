const PricesTypeDefs = `

  type RackPrices {
    morning_slot: String
    evening_slot: String
    fullDay_slot: String
  }

  type PricesDetails {
    morning_slot: String
    evening_slot: String
    fullDay_slot: String
    rack_prices: RackPrices
  }

  type referralCredits {
    discount: Int
  }

  type walletDetail {
    amount: Int
  }`;

export default PricesTypeDefs;
