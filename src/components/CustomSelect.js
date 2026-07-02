import { useEffect, useId, useRef, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

export default function CustomSelect({ label, options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listboxId = useId();
  const activeOption = value || "";
  const normalizedOptions = [{ value: "", label: placeholder }, ...options.map((option) => ({ value: option, label: option }))];
  const selectedLabel = normalizedOptions.find((option) => option.value === activeOption)?.label || placeholder;

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const selectOption = (nextValue) => {
    onChange(nextValue);
    setOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((current) => !current);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const currentIndex = normalizedOptions.findIndex((option) => option.value === activeOption);
      const nextIndex = Math.max(0, Math.min(normalizedOptions.length - 1, currentIndex + direction));
      selectOption(normalizedOptions[nextIndex].value);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      {label && <span className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary">{label}</span>}
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between gap-3 rounded-[6px] border border-primary/20 bg-white px-4 py-3 text-left font-semibold text-neutral shadow-[0_12px_30px_rgba(17,50,72,0.08)] transition hover:-translate-y-0.5 hover:border-primary hover:bg-light-blue/55 focus:border-primary focus:outline-none focus:shadow-[0_0_0_4px_rgba(55,116,158,0.13)]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}>
        <span className="truncate">{selectedLabel}</span>
        <FaChevronDown aria-hidden="true" className={`shrink-0 text-sm text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-[6px] border border-primary/20 bg-white p-1 shadow-[0_18px_45px_rgba(17,50,72,0.16)]">
          {normalizedOptions.map((option) => (
            <button
              key={option.value || "all"}
              type="button"
              role="option"
              aria-selected={option.value === activeOption}
              className={[
                "flex w-full items-center justify-between gap-3 rounded-[4px] px-3 py-2.5 text-left text-sm transition",
                option.value === activeOption ? "bg-primary text-white" : "text-neutral hover:bg-light-blue hover:text-primary",
              ].join(" ")}
              onClick={() => selectOption(option.value)}>
              <span className="truncate">{option.label}</span>
              {option.value === activeOption && <FaCheck aria-hidden="true" className="shrink-0 text-xs" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
