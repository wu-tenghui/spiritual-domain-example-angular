import {Injectable, TemplateRef} from '@angular/core';

import {NzMessageDataFilled, NzMessageDataOptions, NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private message: NzMessageService) {
  }

  public success(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.success(content, options);
  }

  public info(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.info(content, options);
  }

  public warning(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.warning(content, options);
  }

  public error(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.error(content, options);
  }

  public loading(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageDataFilled {
    return this.message.loading(content, options);
  }

  public create(
    type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string,
    content: string | TemplateRef<void>,
    options?: NzMessageDataOptions
  ): NzMessageDataFilled {
    return this.message.create(type, content, options);
  }

}
