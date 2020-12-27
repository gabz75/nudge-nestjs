import * as crypto from 'crypto';
import { IsNotEmpty } from 'class-validator';
import { User } from '../entities/user.entity';

export const generateSalt = () => crypto.randomBytes(16).toString('base64');
export const encryptPassword = (plainText, salt) =>
  crypto.createHash('RSA-SHA256').update(plainText).update(salt).digest('hex');

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  password: string;

  public static withEncryptedPassword(entity: CreateUserDto): User {
    const user = new User();
    user.email = entity.email;
    user.firstName = entity.firstName;
    user.lastName = entity.lastName;
    user.encryptedPasswordSalt = generateSalt();
    user.encryptedPassword = encryptPassword(
      entity.password,
      user.encryptedPasswordSalt,
    );

    return user;
  }
}
