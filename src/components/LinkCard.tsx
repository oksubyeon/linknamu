type Props = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-semibold shadow-[0_8px_24px_-12px_rgba(160,82,45,0.3)] backdrop-blur-md transition duration-200 hover:-translate-y-px hover:bg-white/65 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
