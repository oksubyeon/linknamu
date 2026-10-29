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
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          priority
        />
      ) : (
        <div
          aria-hidden
          className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500 text-4xl font-bold text-white ring-2 ring-gray-200 dark:ring-gray-700"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
