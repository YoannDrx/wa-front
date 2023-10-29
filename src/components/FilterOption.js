import { useTranslation } from "react-i18next";

const FilterOption = ({ title, options, selected, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h3 className="text-sm text-primary font-semibold">{title}</h3>
      <select
        className="w-40 h-10  bg-[#E4EDF1] focus:outline-none hover:border-[#37749E] border border-transparent rounded"
        onChange={onChange}
        value={selected}>
        <option value="">{t("blog.filterOption.all", { type: title.toLowerCase() })}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterOption;
