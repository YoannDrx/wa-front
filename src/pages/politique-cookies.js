import LegalDocumentPage from "@/components/LegalDocumentPage";

const cookiesSections = [
  "cookiesPolicy.whatAreCookies",
  "cookiesPolicy.cookieTypes",
  "cookiesPolicy.managePreferences",
  "cookiesPolicy.policyUpdates",
  "cookiesPolicy.contactUs",
];

export default function PolitiqueCookies() {
  return (
    <LegalDocumentPage
      titleKey="cookiesPolicy.title"
      descriptionKey="cookiesPolicy.pageDescriptionSEO"
      introKey="cookiesPolicy.intro"
      sections={cookiesSections}
    />
  );
}
