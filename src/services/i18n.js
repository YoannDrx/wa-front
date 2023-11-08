import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import DE from "@/components/lang/DE";

export const readableLocale = (locale) => {
  switch (locale) {
    case "fr":
      return (
        <div className="gap-2 flex">
          <FR id={39658475391358480} /> Français
        </div>
      );
    case "en":
      return (
        <div className="gap-2 flex">
          <UK id={39658475391} /> English
        </div>
      );
    case "de":
      return (
        <div className="gap-2 flex">
          <DE id={39658145472} /> Deutsch
        </div>
      );
    default:
      return (
        <div className="gap-2 flex">
          <FR id={39678358473} /> Français
        </div>
      );
  }
};
