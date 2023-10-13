import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParkingModuleBase } from "./base/parking.module.base";
import { ParkingService } from "./parking.service";
import { ParkingController } from "./parking.controller";
import { ParkingResolver } from "./parking.resolver";

@Module({
  imports: [ParkingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParkingController],
  providers: [ParkingService, ParkingResolver],
  exports: [ParkingService],
})
export class ParkingModule {}
