const UsersTypeDefs = `

  type UserData {
    name: String
    two_factor: Boolean
    phone: String
    user_email: String
    hasSetPassword: String
    user_type: String
    created: String
    id: String
    gender: String
    city: String
    dialogSignUp: String
    updated: String
    isPhoneVerified: Boolean
    bookings: [BookingDetail]
    wallet: walletDetail,
    referralCredits: referralCredits
  }

  input UserInput {
    userId: String
  }`;

export default UsersTypeDefs;
