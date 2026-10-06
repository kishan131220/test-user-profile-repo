import { useMemo } from "react";
import { ArrowLeft, BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { profiles } from "../data/profiles";

export default function UserDetailsPage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const profile = useMemo(() => profiles.find((item) => item.id === Number(userId)), [userId]);

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-xl font-bold text-slate-500">?</div>
          <h1 className="mt-5 text-2xl font-bold text-slate-950">Profile not found</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">The profile you're looking for doesn't exist or may have been removed.</p>
          <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">Back to profiles</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
        <button type="button" onClick={() => navigate(-1)} className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition cursor-pointer hover:bg-white hover:text-slate-950 hover:shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to profiles
        </button>

        <section className="mt-5 overflow-hidden rounded-4xl border border-slate-200/80 bg-white shadow-sm">
          <div className="h-32 bg-linear-to-r from-blue-50 via-slate-50 to-indigo-50 sm:h-44" />
          <div className="px-5 pb-7 sm:px-8 sm:pb-9 lg:px-10">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
              <div className="relative w-fit">
                <div className="h-24 w-24 overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-lg sm:h-32 sm:w-32">
                  <img src={profile.avatar} alt={`${profile.name}'s profile`} className="h-full w-full object-cover" />
                </div>
                {profile.online && <span title="Online" className="status-pulse absolute bottom-0 right-0 h-5 w-5 rounded-full border-4 border-white bg-emerald-500" />}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{profile.name}</h1>
              </div>
              <p className="mt-2 text-base font-semibold text-blue-600">{profile.role}</p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">About</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{profile.bio}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">Passionate about creating thoughtful digital products, collaborating with cross-functional teams, and turning complex problems into simple experiences.</p>
              </div>

              <aside className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <h2 className="text-sm font-bold text-slate-950">Profile details</h2>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100"><BriefcaseBusiness size={17} /></span><span>{profile.role}</span></div>
                  <div className="flex items-center gap-3 text-sm text-slate-600"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100"><MapPin size={17} /></span><span>Remote · Worldwide</span></div>
                  <div className="flex items-center gap-3 text-sm text-slate-600"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100"><Mail size={17} /></span><span>Available for collaboration</span></div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
