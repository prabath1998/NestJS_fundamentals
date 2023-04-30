/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  //get all users
  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  //create a new user
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // update a user
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId,updateUserDto);
  }

  // get single user
  show(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email:string){
    return this.userRepository.findOne({ where: {email}})
  }

  // delete a user
  async delete(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
