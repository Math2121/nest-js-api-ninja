import { Module } from '@nestjs/common';

import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [NinjasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
