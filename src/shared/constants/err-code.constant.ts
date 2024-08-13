import { Str } from '@/shared/utils';

export class ErrCode {
  private static generator(code: string, message: string) {
    return {
      code,
      message: Str.lang(message),
    };
  }

  public static 'ISE_001' = this.generator('ISE_001', 'Internal Server Error.');

  // public static 'ISE_001' = {
  //   code: 'ISE_001',
  //   message: Str.lang('Internal Server Error.'),
  // };
}
