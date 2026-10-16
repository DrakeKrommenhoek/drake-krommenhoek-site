import { Pending } from '@/components/Placeholder';

const SPLIT = /(\[[A-Z][A-Z ]*:[^\]]+\])/;
const IS_TOKEN = /^\[[A-Z][A-Z ]*:[^\]]+\]$/;

/** Renders text, turning tokens like [METRIC: needs confirmation] into visible placeholders. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(SPLIT).map((part, i) =>
        IS_TOKEN.test(part) ? <Pending key={i}>{part.slice(1, -1)}</Pending> : part,
      )}
    </>
  );
}
