import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GroupModuleBase } from "./base/group.module.base";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";

@Module({
  imports: [GroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [GroupService],
})
export class GroupModule {}
