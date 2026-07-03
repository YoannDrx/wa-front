import { useState } from "react";
import FilterOption from "./FilterOption";
import { useTranslation } from "react-i18next";
import { FaFilter, FaTimes } from "react-icons/fa";

const Sidebar = ({ setFilter, authors }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ author: "" });

  const handleChange = (field) => (value) => {
    const nextFilters = { ...filters, [field]: value };
    setFilters(nextFilters);
    setFilter(nextFilters);
  };

  const clearFilters = () => {
    const nextFilters = { author: "", category: "" };
    setFilters(nextFilters);
    setFilter(nextFilters);
  };

  const hasFilter = filters.author;

  return (
    <div className="rounded-none">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="mb-0 text-lg font-bold">{t("blog.sidebar.filters")}</h2>
        <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-primary text-white">
          <FaFilter aria-hidden="true" />
        </span>
      </div>

      <FilterOption
        title={t("blog.sidebar.author")}
        options={authors}
        selected={filters.author}
        onChange={handleChange("author")}
      />
      {hasFilter && (
        <button
          type="button"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-primary/20 bg-white px-4 py-3 text-sm font-bold text-primary transition hover:border-primary hover:bg-light-blue"
          onClick={clearFilters}>
          <FaTimes aria-hidden="true" className="text-xs" />
          {t("blog.filterOption.delete")}
        </button>
      )}
    </div>
  );
};

export default Sidebar;
