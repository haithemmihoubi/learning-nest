/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  // array containing all the cats 
  private readonly cats: Cat[] = [];
  // create a cat 
  create(createCatDto: CreateCatDto) {
    return this.cats.push(createCatDto) ;
  }
// returl  all the cats
  findAll() {
    return this.cats;
  }
  // find one cat by age
  findOne(age: number) {
   for (let index = 0; index < this.cats.length; index++) {
     const element = this.cats[index];
     if (element.age===age) {
       return element ;
     }
     
   }

  }

  update(age: number, updateCatDto: UpdateCatDto) {
 return "cat" ;
  }

  remove(id: number) {
   for (let index = 0; index < this.cats.length; index++) {
     const element = this.cats[index];
     if (element.age===id) {
      this.cats.splice(this.cats.indexOf(element),1) ;
      return  this.cats  ;
     }
     
   }

  }
}
