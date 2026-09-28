import { ArchiveFooter } from "@/components/archive-ui";
import { PlacesObservatory } from "@/components/places-observatory";
import { SiteHeader } from "@/components/site-header";
import { places } from "@/lib/content";

export const metadata = { title: "Field Atlas", description: "Places, coordinates, photographs, and small remembered details." };

export default function PlacesPage() {
  return <main className="world-page collection-page places-collection">
    <SiteHeader activeSection="places" />
    <PlacesObservatory observations={places} />
    <ArchiveFooter />
  </main>;
}
