import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSvDto } from './dto/create-sv.dto';
import { UpdateSvDto } from './dto/update-sv.dto';
import { SV, SvDocument } from './schemas/sv.schema';

type NewType = Model<SvDocument>;

@Injectable()
export class SvService {
  constructor(@InjectModel(SV.name) private readonly model: NewType) {}
  async findAll(): Promise<SV[]> {
    return await this.model.find().exec();
  }
  async create(createSvDto: CreateSvDto): Promise<SV> {
    return await new this.model({
      ...createSvDto,
      createdAt: new Date(),
    }).save();
  }
  async update(id: string, updateSvDto: UpdateSvDto): Promise<SV> {
    return await this.model.findByIdAndUpdate(id, updateSvDto).exec();
  }
  async delete(id: string): Promise<SV> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
