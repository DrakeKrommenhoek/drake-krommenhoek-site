const TOKEN = /\s*\[[A-Z][A-Z ]*:[^\]]+\]/g;

/** Text with every [TOKEN: ...] placeholder removed. */
export const strip = (text: string) => text.replace(TOKEN, '').trim();

/** Empty once tokens are removed, or only a label left over like "Reading:". */
export const isBlank = (text: string) => strip(text) === '' || strip(text).endsWith(':');
