import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ParkingWhereInput = {
  endTime?: DateTimeFilter;
  id?: StringFilter;
  startTime?: DateTimeFilter;
  vehicleNumber?: StringFilter;
};
