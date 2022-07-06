import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSvDto } from './dto/create-sv.dto';
import { UpdateSvDto } from './dto/update-sv.dto';
import { SvService } from './sv.service';

@Controller('sv')
export class SvController {
  constructor(private readonly service: SvService) {}
  @Get()
  async index() {
    return await this.service.findAll();
  }
  @Post()
  async create(@Body() CreateSvDto: CreateSvDto) {
    return await this.service.create(CreateSvDto);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSvDto: UpdateSvDto) {
    return await this.service.update(id, updateSvDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
