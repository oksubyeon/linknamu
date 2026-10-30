import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover shadow-[0_12px_32px_-12px_rgba(160,82,45,0.55)] ring-4 ring-white/80 dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)] dark:ring-white/10"
          priority
        />
      ) : (
        <div
          aria-hidden
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-rose-400 text-4xl font-bold text-white shadow-[0_12px_32px_-12px_rgba(160,82,45,0.55)] ring-4 ring-white/80 dark:ring-white/10"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 break-keep text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">{bio}</p>
    </section>
  );
}
