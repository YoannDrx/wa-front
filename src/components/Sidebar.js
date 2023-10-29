import { useState } from "react";
import Button from "./Button";
import FilterOption from "./FilterOption";

const Sidebar = ({ setFilter, authors, categories, tags }) => {
  const [filters, setFilters] = useState({ author: "", category: "", tag: "" });

  const applyFilters = () => {
    setFilter(filters);
  };

  const handleChange = (field) => (e) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ author: "", category: "", tag: "" });
    setFilter({ author: "", category: "", tag: "" });
  };

  const hasFilter = filters.author || filters.category || filters.tag;

  return (
    <div className="mb-4 rounded-none">
      <h2 className="text-lg font-bold mb-4">Filtres</h2>
      <FilterOption title="Auteur" options={authors} selected={filters.author} onChange={handleChange("author")} />
      <FilterOption title="Catégorie" options={categories} selected={filters.category} onChange={handleChange("category")} />
      <FilterOption title="Tags" options={tags} selected={filters.tag} onChange={handleChange("tag")} />
      <Button onClick={applyFilters} className="w-full mt-4" color="primary">
        Filtrer
      </Button>
      {hasFilter && (
        <div className="text-red-600 cursor-pointer mt-2 flex items-center" onClick={clearFilters}>
          <span className="mr-2">✕</span> <span>Supprimer les filtres</span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
