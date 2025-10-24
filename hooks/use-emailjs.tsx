import emailjs from '@emailjs/browser';
import {toast} from "sonner";

type Props = {
	notif?: string;
	errorNotif?: string;
}

export default function useEmailJS({notif, errorNotif}: Props) {

	const sendEmail = async (values: Record<string, any>) => {
		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

		if (!serviceID || !publicKey) {
			throw new Error('EmailJS service ID or public key is not defined');
		}

		if (values) {
			toast.promise(
				emailjs.send(serviceID, 'template_213y74o', values, {publicKey}),
				{
					loading: 'Envoi du message...',
					success: notif || 'Votre message a été envoyé avec succès !',
					error: (err) => {
						console.error('EmailJS Error:', err);
						return errorNotif || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.";
					}
				}
			)
		}
	}

	return {
		sendEmail
	}
}

function toFormData(values: Record<string, any>): FormData {
	const formData = new FormData();
	for (const key in values) {
		formData.append(key, values[key]);
	}
	return formData;
}