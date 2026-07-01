import { useState } from "react";
import Button from "./Button";
import FilterOption from "./FilterOption";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setFilter, authors }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ author: "" });

  const applyFilters = () => {
    setFilter(filters);
  };

  const handleChange = (field) => (value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    const nextFilters = { author: "", category: "" };
    setFilters(nextFilters);
    setFilter(nextFilters);
  };

  const hasFilter = filters.author;

  return (
    <div className="rounded-none">
      <h2 className="mb-5 text-lg font-bold">{t("blog.sidebar.filters")}</h2>
      <FilterOption
        title={t("blog.sidebar.author")}
        options={authors}
        selected={filters.author}
        onChange={handleChange("author")}
      />
      <Button onClick={applyFilters} className="mt-4 w-full" color="primary">
        {t("blog.sidebar.applyFilters")}
      </Button>
      {hasFilter && (
        <button type="button" className="mt-3 flex items-center text-xs font-bold text-accent underline underline-offset-4" onClick={clearFilters}>
          <span className="mr-2">✕</span> {t("blog.filterOption.delete")}
        </button>
      )}
    </div>
  );
};

export default Sidebar;
