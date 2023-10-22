import DateBadge from "./DateBadge";
import Button from "../Button";

export default function CardOverlay({title, date, description, buttonText, position = "bottom"}) {
	const isTopPosition = position === "top";

	return (
		<div
			className={`absolute ${
				isTopPosition ? "top-0 h-full" : "bottom-0 h-1/4"
			} left-0 w-full flex flex-col justify-between bg-black bg-opacity-80`}>
			<div className="flex justify-between items-center w-full">
				<span className="text-white pl-2">{title}</span>
				<DateBadge date={date} className="flex-none" />
			</div>

			{isTopPosition && (
				<>
					<div className="flex flex-col items-center px-2 pb-4">
						{description && <p className="text-gray-200 text-xs leading-relaxed mb-4">{description}</p>}
						{buttonText && <Button color="primary">{buttonText}</Button>}
					</div>
				</>
			)}
		</div>
	);
}
