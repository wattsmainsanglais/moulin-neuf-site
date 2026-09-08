export interface Screenshot {
  id: number;
  filename: string;
  path: string;
  alt: string;
}

export interface ContactFormData {
  firstName: string;
  surname: string;
  addressLine1: string;
  addressLine2: string;
  postCode: string;
  city: string;
  country: string;
  email: string;
  mobile: string;
  arrivalDate: string;
  travellingFrom: string;
  preferredCheckIn: string;
  departureDate: string;
  travellingTo: string;
  numberOfRooms: string;
  numberOfGuests: string;
  travellingWithPets: string;
  petsSpecify: string;
  furtherInfo: string;
  termsAccepted: string;
}
