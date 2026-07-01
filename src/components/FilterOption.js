import { useTranslation } from "react-i18next";
import CustomSelect from "@/components/CustomSelect";

const FilterOption = ({ title, options, selected, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <CustomSelect
        label={title}
        options={options}
        selected={selected}
        value={selected}
        onChange={onChange}
        placeholder={t("blog.filterOption.all", { type: title.toLowerCase() })}
      />
    </div>
  );
};

export default FilterOption;
