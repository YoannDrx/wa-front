import { useState } from "react";
import Button from "./Button";
import FilterOption from "./FilterOption";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setFilter, authors, categories }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ author: "", category: "" });

  const applyFilters = () => {
    setFilter(filters);
  };

  const handleChange = (field) => (e) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ author: "", category: "" });
    setFilter({ author: "", category: "" });
  };

  const hasFilter = filters.author || filters.category;

  return (
    <div className="mb-4 rounded-none">
      <h2 className="text-lg font-bold mb-4">{t("blog.sidebar.filters")}</h2>
      <FilterOption
        title={t("blog.sidebar.author")}
        options={authors}
        selected={filters.author}
        onChange={handleChange("author")}
      />
      <FilterOption
        title={t("blog.sidebar.category")}
        options={categories}
        selected={filters.category}
        onChange={handleChange("category")}
      />
      <Button onClick={applyFilters} className="w-full mt-4" color="primary">
        {t("blog.sidebar.applyFilters")}
      </Button>
      {hasFilter && (
        <div className="text-red-600 cursor-pointer mt-2 flex items-center" onClick={clearFilters}>
          <span className="mr-2 text-xs">✕</span> <span className="text-xs">{t("blog.filterOption.delete")}</span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
