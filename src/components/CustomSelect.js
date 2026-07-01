import { useEffect, useId, useRef, useState } from "react";

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
        className="flex min-h-12 w-full items-center justify-between border border-primary/25 bg-white px-4 py-3 text-left font-semibold text-neutral shadow-sm transition hover:border-primary hover:bg-light-blue/50 focus:border-primary focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}>
        <span>{selectedLabel}</span>
        <span aria-hidden="true" className={`text-primary transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto border border-primary/20 bg-white p-1 shadow-[0_18px_45px_rgba(17,50,72,0.16)]">
          {normalizedOptions.map((option) => (
            <button
              key={option.value || "all"}
              type="button"
              role="option"
              aria-selected={option.value === activeOption}
              className={[
                "block w-full px-3 py-2 text-left text-sm transition",
                option.value === activeOption ? "bg-primary text-white" : "text-neutral hover:bg-light-blue",
              ].join(" ")}
              onClick={() => selectOption(option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
