import ProfileCard from "./ProfileCard";
import type { UserProfile } from "../types/profile";

interface ProfileGridProps {
  profiles: UserProfile[];
}

export default function ProfileGrid({ profiles }: ProfileGridProps) {
  return (
    <section
      aria-label="User profiles"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {profiles.map((profile, index) => (
        <ProfileCard key={profile.id} profile={profile} index={index} />
      ))}
    </section>
  );
}