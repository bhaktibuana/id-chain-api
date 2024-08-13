export class Language {
  public static translate(text: string): string {
    return this.translations[text] || text;
  }

  protected static readonly translations: Record<string, string> = {
    'Internal server error.': 'Terjadi kesalahan sistem.',
  };
}
