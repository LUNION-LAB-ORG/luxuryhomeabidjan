import React, {useState} from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import {IBien} from "@/data/coups-de-coeur.type";
import {useFullscreenImageModal} from "@/hooks/use-fullscreen-image-modal";
import FullscreenImageModal from "@/components/biens/bien-details/fullscreen-image-modal";

function PhotoModal({home}: { home: IBien }) {
	const [open, setOpen] = useState(false);
	const { open: openImagesModal, setOpen:setOpenImagesModal, selectedIndex, setSelectedIndex, openModal } = useFullscreenImageModal();

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<button
						className="bg-black cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition max-md:hidden">
						Voir toutes les images
					</button>
				</DialogTrigger>
				<DialogContent
					className="max-w-5xl max-h-screen min-w-screen h-screen overflow-y-auto bg-white rounded-none p-6">
					<DialogHeader>
						<DialogTitle className="text-2xl font-semibold">
							Galerie
						</DialogTitle>
						<DialogDescription>
							Cliquez sur une image pour la voir en plein écran.
						</DialogDescription>
					</DialogHeader>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
						{home
							.gallery
							?.map((img, idx) => (
								<div
									key={idx}
									className="relative w-full h-64 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
									onClick={() => {
										openModal(idx);
									}}
								>
									<Image
										src={img.url}
										alt={`Image ${idx + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							))}
					</div>
				</DialogContent>
			</Dialog>
			<FullscreenImageModal
				home={home}
				open={openImagesModal}
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				setOpen={setOpenImagesModal}
			/>
		</>
	);
}

export default PhotoModal;