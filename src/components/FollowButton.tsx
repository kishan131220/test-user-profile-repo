import { Check, UserPlus } from "lucide-react";

interface FollowButtonProps {
  following: boolean;
  onClick: () => void;
}

export default function FollowButton({
  following,
  onClick,
}: FollowButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={following}
      onClick={onClick}
      className={[
        "inline-flex min-w-28 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold cursor-pointer",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100",
        following
          ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
          : "bg-slate-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:text-black",
      ].join(" ")}
    >
      {following ? <Check size={16} strokeWidth={2.5} /> : <UserPlus size={16} />}
      <span>{following ? "Following" : "Follow"}</span>
    </button>
  );
}