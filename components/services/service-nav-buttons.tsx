import React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

type Props = {
	onPrev?: () => void;
	onNext?: () => void;
	prevLabel?: string;
	nextLabel?: string;
	disabledPrev?: boolean;
	disabledNext?: boolean;
	className?: string;
};

export default function ServiceNavButtons({
	                                          onPrev,
	                                          onNext,
	                                          prevLabel = "Service précédent",
	                                          nextLabel = "Service suivant",
	                                          disabledPrev = false,
	                                          disabledNext = false,
	                                          className = "",
                                          }: Props) {
	return (
		<div className={`flex justify-between max-w-6xl mx-auto py-10 ${className}`}>
			<div className="flex gap-4 items-center">
				<Button
					variant="outline"
					className="rounded-full flex items-center justify-center"
					onClick={onPrev}
					disabled={disabledPrev}
					aria-label={prevLabel}
				>
					<ChevronLeft className="size-8"/>
				</Button>
				<span className="self-center text-sm font-medium">{prevLabel}</span>
			</div>

			<div className="flex gap-4 items-center">
				<span className="self-center text-sm font-medium">{nextLabel}</span>
				<Button
					variant="outline"
					className="rounded-full flex items-center justify-center"
					onClick={onNext}
					disabled={disabledNext}
					aria-label={nextLabel}
				>
					<ChevronRight className="size-8"/>
				</Button>
			</div>
		</div>
	);
}