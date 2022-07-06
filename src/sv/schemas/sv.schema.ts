import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SvDocument = SV & Document;

@Schema()
export class SV {
  @Prop({ required: true })
  FirstName: string;

  @Prop()
  LastName?: string;

  @Prop()
  Age?: string;

  @Prop()
  Class?: string;

  @Prop()
  Avatar?: string;
}

export const SvSchema = SchemaFactory.createForClass(SV);
