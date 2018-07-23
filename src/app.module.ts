import { Module,NestModule,MiddlewaresConsumer,RequestMethod } from '@nestjs/common';
import { DatabaseModule } from './Shared/DataBase/database.module';
import { UserModule } from './User/user.module';
import { DomainModule } from './DomainForQuestionnaire/Domain/domain.module';
import { QuestionnaireModule } from './Questionnaire/questionnaire.module';
import { QuestionnaireAnswerModule } from './QuestionnaireAnswer/questionnaireAnswer.module';
import { SessionModule } from './Session/session.module';
import {AuthModule} from './auth/auth.module';

@Module({
  modules:[
    DatabaseModule,
    UserModule,
    DomainModule,
    QuestionnaireModule,
    QuestionnaireAnswerModule,
      AuthModule,
    SessionModule,
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
