import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from 'src/club/club.entity';
import { Member } from 'src/member/member.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Member, Club],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([Member, Club]),
];
