import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return getConnection().manager.save(
      CreateUserDto.withEncryptedPassword(createUserDto),
    );
  }

  findAll() {
    return getConnection().manager.find(User);
  }

  findOne(id: string) {
    return getConnection().manager.findOne(User, id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await getConnection().manager.update(User, id, updateUserDto);
    return getConnection().manager.findOne(User, id);
  }

  async remove(id: string) {
    const user = await getConnection().manager.findOne(User, id);
    return getConnection().manager.softRemove(user);
  }
}
