import { SortOrder } from "../../util/SortOrder";

export type ParkingOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  vehicleNumber?: SortOrder;
};
