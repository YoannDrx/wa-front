export default function DateBadge({ date }) {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("fr-FR", { month: "short" }).toUpperCase().replace(".", "");
  return (
    <div className="bg-primary min-w-16 min-h-16 flex flex-col justify-center items-center px-4">
      <span className="text-white font-bold text-lg">{day}</span>
      <span className="text-white text-sm">{month}</span>
    </div>
  );
}
