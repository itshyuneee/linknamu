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
        width={128}
        height={128}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-glass-border shadow-[0_14px_30px_-10px_var(--color-shadow-tint),0_4px_10px_-4px_var(--color-shadow-tint)] sm:h-32 sm:w-32"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-foreground/65">
        {bio}
      </p>
    </header>
  );
}
