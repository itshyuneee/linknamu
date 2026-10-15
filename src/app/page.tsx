import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-20 sm:pt-24">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <LinkList links={profile.links} />
    </main>
  );
}
