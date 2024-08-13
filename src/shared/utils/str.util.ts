import { Language } from '@/shared/constants';
import { T_Language } from '@/shared/types';

export class Str {
  constructor() {}

  public static lang(text: string, language: T_Language = 'en'): string {
    const translation = Language.translate(text);
    if (language === 'id' && translation) {
      return translation;
    }
    return text;
  }
}
