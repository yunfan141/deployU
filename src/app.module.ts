import { Module,NestModule,MiddlewaresConsumer,RequestMethod } from '@nestjs/common';
import { DatabaseModule } from './Shared/DataBase/database.module';
import { UserModule } from './User/user.module';
import { DomainModule } from './DomainForQuestionnaire/Domain/domain.module';
import { SubDomainModule } from './DomainForQuestionnaire/SubDomain/subDomain.module';
import { DemographicModule } from './Demograpic/demographic.module';
import { QuestionnaireModule } from './Questionnaire/questionnaire.module';
import { UserDemographicModule } from './UsersDemographic/userDemographic.module';
// GraphQL
// import { graphqlExpress } from 'apollo-server-express';
// import { GraphQLModule, GraphQLFactory  } from '@nestjs/graphql';
@Module({
  modules:[
    DatabaseModule,
    UserModule,
    DomainModule,
    SubDomainModule,
    DemographicModule,
    QuestionnaireModule,
    UserDemographicModule
    // GraphQLModule
  ]
})
export class AppModule{
  // constructor(private readonly graphQLFactory: GraphQLFactory) {}
  // configure(consumer: MiddlewaresConsumer) {
  //   const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
  //   const schema = this.graphQLFactory.createSchema({ typeDefs });
  //
  //   consumer
  //     .apply(graphqlExpress(req => ({ schema, rootValue: req })))
  //     .forRoutes({ path: '/graphql', method: RequestMethod.ALL });
  // }
}
