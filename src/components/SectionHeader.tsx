interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 ring-1 ring-blue-100">
        {eyebrow}
      </span>

      <h1 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
        {description}
      </p>
    </header>
  );
}
