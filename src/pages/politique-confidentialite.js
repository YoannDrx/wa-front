import LegalDocumentPage from "@/components/LegalDocumentPage";

const policySections = [
  "privacyPolicy.definition",
  "privacyPolicy.terms-and-conditions",
  "privacyPolicy.service-description",
  "privacyPolicy.contractual-limitations",
  "privacyPolicy.intellectual-property",
  "privacyPolicy.limitations-of-liability",
  "privacyPolicy.personal-data-management",
  "privacyPolicy.data-collection-responsible",
  "privacyPolicy.data-processing-types",
  "privacyPolicy.access-rectification-opposition-rights",
  "privacyPolicy.non-disclosure-of-personal-data",
  "privacyPolicy.incident-notification",
  "privacyPolicy.security",
  "privacyPolicy.hyperlinks-cookies-tags",
  "privacyPolicy.cookies",
  "privacyPolicy.internet-tags",
  "privacyPolicy.applicable-law",
];

export default function PolitiqueConfidentialite() {
  return (
    <LegalDocumentPage
      titleKey="privacyPolicy.title"
      descriptionKey="privacyPolicy.pageDescriptionSEO"
      introKey="privacyPolicy.intro"
      sections={policySections}
    />
  );
}
