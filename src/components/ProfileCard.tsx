import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import type { UserProfile } from "../types/profile";

interface ProfileCardProps {
  profile: UserProfile;
  index?: number;
}

export default function ProfileCard({ profile, index = 0 }: ProfileCardProps) {
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);
  const openDetails = () => navigate(`/users/${profile.id}`);

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openDetails}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDetails();
        }
      }}
      aria-label={`View ${profile.name}'s profile`}
      className="card-enter group flex min-h-69.5 cursor-pointer flex-col rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 sm:p-6"
      style={{ animationDelay: `${index * 65}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <Avatar src={profile.avatar} name={profile.name} online={profile.online} />
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-100">
          {profile.online ? "Online" : "Offline"}
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-bold tracking-tight text-slate-950">{profile.name}</h2>
        <p className="mt-1 text-sm font-medium text-blue-600">{profile.role}</p>
        <p className="mt-3 text-sm leading-6 text-slate-500">{profile.bio}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-blue-500">View profile →</span>
        <div onClick={(event) => event.stopPropagation()}>
          <FollowButton following={following} onClick={() => setFollowing((current) => !current)} />
        </div>
      </div>
    </article>
  );
}
