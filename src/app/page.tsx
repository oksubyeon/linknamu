import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center px-6 pb-10 pt-20">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-10 flex w-full flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-16 text-xs font-medium tracking-widest text-stone-400 dark:text-stone-500">
        링크나무
      </footer>
    </main>
  );
}
