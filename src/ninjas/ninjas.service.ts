import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNinjaDTO } from './dto/create-ninja.dto';
import { UpdateNinjaDTO } from './dto/update-ninja.dto';
import { randomInt } from 'crypto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 1, name: 'Naruto', weapon: 'nunchucks' },
        { id: 2, name: 'Nunito', weapon: 'nunchucks' }
    ]

    getNinjas(weapon: 'stars' | 'nunchucks') {

        if (weapon) {
            return this.ninjas.filter(ninjas => ninjas.weapon === weapon)
        }

        return this.ninjas
    }


    getNinja(id: number) {
        const ninja = this.ninjas.find(ninjas => ninjas.id === id)

        if (!ninja) {
            throw new NotFoundException('Ninja not found')
        
        }

        return ninja
    }

    createNinja(ninja: CreateNinjaDTO) {
        this.ninjas.push({
            id: randomInt(5),
            ...ninja
        })
    }

    updateNinja(id: number, ninjaUpdated: UpdateNinjaDTO) {
        this.ninjas = this.ninjas.map(ninja => {
            if (ninja.id === id) {
                return { ...ninja, ...ninjaUpdated }
            }
            return ninja
        })

        return this.getNinja(id)
    }

    removeNinja(id: number) {
        const toBeRemoved = this.getNinja(id)

        this.ninjas = this.ninjas.filter(ninja => ninja.id !== id)
        
        return toBeRemoved
    }

}
