import SectionHeader from "../components/SectionHeader";
import ProfileGrid from "../components/ProfileGrid";
import { profiles } from "../data/profiles";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <SectionHeader
          eyebrow="Community"
          title="Meet the people behind the work."
          description="Connect with talented designers, engineers, and product thinkers. Follow the people you want to keep up with."
        />
        <ProfileGrid profiles={profiles} />
      </div>
    </main>
  );
}
