import React from 'react';
import {Button} from "@/components/ui/button";
import {AnimatePresence, motion} from "motion/react";
import {DynamicIcon} from "lucide-react/dynamic";

function MoreButton({filterOpen, setFilterOpen}: { filterOpen: boolean, setFilterOpen: (open: boolean) => void }) {
	return (
		<Button
			onClick={() => setFilterOpen(!filterOpen)}
			type="button"
			variant="link"
			className="flex flex-col rounded-full text-sm hover:!bg-none py-1"
		>
			<AnimatePresence initial={false} mode="wait">
				<motion.div
					key={filterOpen ? 'less' : 'more'}
					initial={{
						rotate: filterOpen ? '-90deg' : '90deg',
					}}
					animate={{
						rotate: '0deg',
						transition: {
							type: 'tween',
							duration: 0.15,
							ease: 'circOut'
						}
					}}
					exit={{
						rotate: filterOpen ? -90 : 90,
						transition: {
							type: "tween",
							duration: 0.15,
							ease: "circIn",
						},
					}}
				>
					<DynamicIcon name={filterOpen ? "minus" : "plus"} className="text-[#4F4F4F] size-6"/>
				</motion.div>
			</AnimatePresence>
			<motion.span
				initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}}
				key={filterOpen ? 'less-text' : 'more-text'}
			>
				{filterOpen ? 'Voir moins' : 'Voir plus'}
			</motion.span>
		</Button>
	);
}

export default MoreButton;