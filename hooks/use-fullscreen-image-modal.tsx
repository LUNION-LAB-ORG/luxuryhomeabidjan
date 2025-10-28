import { useState, useCallback } from 'react';

export function useFullscreenImageModal() {
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const openModal = useCallback((index?: number) => {
		if (index !== undefined) {
			setSelectedIndex(index);
		}
		setOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setOpen(false);
		setSelectedIndex(null);
	}, []);

	return {
		open,
		setOpen,
		selectedIndex,
		setSelectedIndex,
		openModal,
		closeModal
	};
}
