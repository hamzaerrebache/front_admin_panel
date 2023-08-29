// Bookings interface
export class Booking {
    id!:Number;
    pickup_date!: Date;
    pickup_location!: String;
    return_location!: String;
    return_date!: Date;
    total_price!: Number;
    vehicule_id!: Number;
    agency_id!: Number;
    client_id!:Number;
  }