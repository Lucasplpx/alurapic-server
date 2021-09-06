import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SentryService } from './sentry.service';
import { Severity } from '@sentry/node';

export interface SentryEntry {
  body: any;
  origin: string;
  action: string;
}

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  constructor(private readonly sentryService: SentryService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { method, body, url } = request;

    const entry: SentryEntry = {
      action: method,
      origin: url,
      body: body,
    };

    return next.handle().pipe(
      catchError((err) => {
        const severity =
          err.status && err.status < 500 ? Severity.Warning : Severity.Error;
        this.sentryService.addLog(severity, entry, err);
        throw err;
      }),
    );
  }
}
