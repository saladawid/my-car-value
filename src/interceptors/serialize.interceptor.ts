import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { UserDto } from '../users/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    //run something before request in handled by the request handler - 1
    // console.log("1. I'm running before the handler", context);

    return handler.handle().pipe(
      map((data: any) => {
        //run something before the response is sent out - 3
        return plainToInstance(UserDto, data, {
          exposeDefaultValues: true,
        });
      }),
    );
  }
}
