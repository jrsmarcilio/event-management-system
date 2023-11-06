import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventModuleBase } from "./base/event.module.base";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";

@Module({
  imports: [EventModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
