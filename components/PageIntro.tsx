interface PageIntroProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageIntro({ title, children }: PageIntroProps) {
  return (
    <div className="page pb-12 pt-16 sm:pt-24">
      <h1 className="max-w-[18ch] font-display text-[2.6rem] leading-[1.04] tracking-[-0.03em] sm:text-[3.75rem] lg:text-[4.5rem]">
        {title}
      </h1>
      {children && <div className="mt-6 max-w-prose text-[1.15rem] leading-relaxed text-muted">{children}</div>}
    </div>
  );
}
