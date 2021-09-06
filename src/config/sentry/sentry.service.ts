import { Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { SentryEntry } from './sentry.interceptor';

@Injectable()
export class SentryService {
  private isInit = false;

  constructor() {
    Sentry.init({
      dsn: '',
    });

    this.isInit = true;
  }

  addLog(severity: Sentry.Severity, entry: SentryEntry, err: Error | string) {
    if (!this.isInit) {
      return;
    }

    Sentry.withScope((scope) => {
      scope.setExtra('body', entry.body);
      scope.setExtra('origin', entry.origin);
      scope.setExtra('action', entry.action);
      scope.setLevel(severity);

      typeof err === 'string'
        ? Sentry.captureMessage(err)
        : Sentry.captureException(err);
    });
  }
}
