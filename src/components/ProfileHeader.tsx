import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-md"
      />
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-foreground/70">{bio}</p>
    </header>
  );
}
