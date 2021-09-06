import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public build() {
    return new NestResponse(this.resposta);
  }

  public comStatus(status: number) {
    this.resposta.status = status;
    return this;
  }

  public comHeaders(headers: Object) {
    this.resposta.headers = headers;
    return this;
  }

  public comBody(body: Object) {
    this.resposta.body = body;
    return this;
  }
}
