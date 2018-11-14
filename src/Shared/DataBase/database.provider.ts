import { createConnection} from 'typeorm';

export const databaseProviders = [
  {
    provide: 'TypeORMInstance',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: "postgres",
      password: "12345",
      database: 'HealthyU',
      entities: [
        __dirname + '/../../**/*.entity{.ts,.js}',
      ],
      logging:true,
      synchronize:true
    }),
  }
]