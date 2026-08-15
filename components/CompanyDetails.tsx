import { siteConfig } from "@/lib/config";

// Registration details shown on legal pages, per Companies House.
export default function CompanyDetails() {
  return (
    <dl className="mt-6 max-w-2xl space-y-1.5 text-sm text-ink-soft/80">
      <div className="flex gap-2">
        <dt className="text-stone-600">Company:</dt>
        <dd>{siteConfig.legalBusinessName}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="text-stone-600">Company No.:</dt>
        <dd>
          {siteConfig.companyNumber} (registered in {siteConfig.companyJurisdiction})
        </dd>
      </div>
      {siteConfig.registeredOfficeAddress ? (
        <div className="flex gap-2">
          <dt className="shrink-0 text-stone-600">Registered office:</dt>
          <dd>{siteConfig.registeredOfficeAddress}</dd>
        </div>
      ) : null}
    </dl>
  );
}
