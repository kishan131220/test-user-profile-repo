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

  const openDetails = () => {
    navigate(`/users/${profile.id}`);
  };

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
      className="
        group relative flex min-h-69.5 cursor-pointer flex-col
        overflow-hidden rounded-3xl
        border border-slate-200/80
        bg-white p-5
        shadow-sm
        transition-[transform,box-shadow,border-color]
        duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_20px_45px_-15px_rgba(15,23,42,0.18)]

        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-blue-100

        sm:p-6
      "
      style={{
        animationDelay: `${index * 65}ms`,
      }}
    >
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-linear-to-r from-transparent via-blue-400/60 to-transparent
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className="
            transition-transform
            duration-300
            ease-out
            group-hover:-translate-y-0.5
          "
        >
          <Avatar
            src={profile.avatar}
            name={profile.name}
            online={profile.online}
          />
        </div>

        <span
          className="
            rounded-full
            bg-slate-50
            px-3 py-1
            text-xs font-medium
            text-slate-500
            ring-1 ring-slate-100
            transition-all duration-300
            group-hover:bg-blue-50
            group-hover:text-blue-600
            group-hover:ring-blue-100
          "
        >
          {profile.online ? "Online" : "Offline"}
        </span>
      </div>

      <div className="mt-5">
        <h2
          className="
            text-lg font-bold tracking-tight text-slate-950
            transition-colors duration-300
            group-hover:text-blue-700
          "
        >
          {profile.name}
        </h2>

        <p
          className="
            mt-1 text-sm font-medium text-blue-600
            transition-colors duration-300
            group-hover:text-blue-700
          "
        >
          {profile.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">{profile.bio}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <span
          className="
            inline-flex items-center gap-1
            text-xs font-semibold
            text-slate-400
            transition-all duration-300
            group-hover:gap-2
            group-hover:text-blue-600
          "
        >
          View profile
          <span
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </span>

        <div onClick={(event) => event.stopPropagation()}>
          <FollowButton
            following={following}
            onClick={() => setFollowing((current) => !current)}
          />
        </div>
      </div>
    </article>
  );
}
