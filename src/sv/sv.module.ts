import { Module } from '@nestjs/common';
import { SvController } from './sv.controller';
import { SvService } from './sv.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SV, SvSchema } from './schemas/sv.schema';
@Module({
  providers: [SvService],
  controllers: [SvController],
  imports: [MongooseModule.forFeature([{ name: SV.name, schema: SvSchema }])],
})
export class SvModule {}
