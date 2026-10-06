interface AvatarProps {
  src: string;
  name: string;
  online: boolean;
}

export default function Avatar({ src, name, online }: AvatarProps) {
  return (
    <div className="relative shrink-0">
      <div className="group/avatar h-16 w-16 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/80">
        <img
          src={src}
          alt={`${name}'s profile`}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover/avatar:scale-110 group-hover/avatar:saturate-125"
          loading="lazy"
        />
      </div>

      {online && (
        <span
          aria-label="Online"
          title="Online"
          className="status-pulse absolute -bottom-1 -right-1 block h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500"
        />
      )}
    </div>
  );
}
