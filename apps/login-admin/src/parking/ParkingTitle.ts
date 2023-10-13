import { Parking as TParking } from "../api/parking/Parking";

export const PARKING_TITLE_FIELD = "vehicleNumber";

export const ParkingTitle = (record: TParking): string => {
  return record.vehicleNumber?.toString() || String(record.id);
};
