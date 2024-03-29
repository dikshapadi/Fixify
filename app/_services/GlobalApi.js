const { gql, request } = require("graphql-request");

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`
  query MyQuery {
    businessLists(where: {category: {name: "` +
    category +
    `"}}) {
      about
      address
      contactPerson
      email
      category {
        name
      }
      id
      name
      images {
        url
      }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getBusinessById = async (id) => {
  const query =
    gql`
  query GetBusinessById {
    businessList(where: {id: "` +
    id +
    `"}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createBooking = async (businessId, date, time, userEmail, userName) => {
  const mutationQuery =
    gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: Booked, businessList: {connect: {id: "` +
    businessId +
    `"}}, date: "` +
    date +
    `", time: "` +
    time +
    `", userEmail: "` +
    userEmail +
    `", userName: "` +
    userName +
    `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const businessBookedSlot = async (businessId, date) => {
  const query =
    gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: {id: "` +
    businessId +
    `"}, date: "` +
    date +
    `"}) {
      date
      time
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createBooking,
  businessBookedSlot,
};
