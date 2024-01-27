import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDTO } from './dto/create-ninja.dto';
import { UpdateNinjaDTO } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
// @UseGuards(BeltGuard)
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) { }

    // GET /ninjas?weapon=fast --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'nunchucks' | 'stars') {
        return this.ninjasService.getNinjas(weapon)
    }

    // GET /ninjas/:id --> {}
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjasService.getNinja(id)
    }

    // POST /ninjas --> {}
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDTO: CreateNinjaDTO) {

        return this.ninjasService.createNinja(createNinjaDTO)
    }
    // PUT /ninjas/:id --> {}
    @Put(':id')
    updateOneNinja(@Param('id') id: string, @Body() updateNinjaDTO: UpdateNinjaDTO) {
        return this.ninjasService.updateNinja(+id, updateNinjaDTO)
    }
    // DELETE /ninjas/:id --> {}
    @Delete(':id')
    removeOneNinja(@Param('id') id: string) {
        return this.ninjasService.removeNinja(+id)
    }



}
