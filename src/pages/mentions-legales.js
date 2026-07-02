import LegalDocumentPage from "@/components/LegalDocumentPage";

const legalSections = ["legalMentions.juridicalInfo", "legalMentions.companyEstablishments", "legalMentions.additionalInfo"];

export default function MentionsLegales() {
  return (
    <LegalDocumentPage
      titleKey="legalMentions.title"
      descriptionKey="legalMentions.pageDescriptionSEO"
      introKey="legalMentions.intro"
      sections={legalSections}
    />
  );
}
