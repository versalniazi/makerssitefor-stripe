import type { DesignPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

export default function PackageGrid({ packages }: { packages: DesignPackage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
