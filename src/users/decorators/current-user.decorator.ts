import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//The decorator return current user using the interceptor which has assigned request.currentUser

export const CurrentUser = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log('Decorator request session user id', request.session.userId);
    console.log(
      'Decorator request custom currentUser from CurrentUserInterceptor',
      request.currentUser,
    );
    return request.currentUser;
  },
);
