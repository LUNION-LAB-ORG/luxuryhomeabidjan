import z from "zod";

export const contactFormSchema = z.object({
	requestType: z.enum(["achat", "location", "investissement"], {
		error: "Type de demande invalide"
	}),
	// Identité
	genre: z.enum(["monsieur", "madame"], {
		error: "Veuillez sélectionner un genre"
	}),
	name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
	firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères").max(100, "Le prénom ne peut pas dépasser 100 caractères"),
	email: z.email("Adresse email invalide"),
	phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres").max(15, "Le numéro de téléphone ne peut pas dépasser 15 chiffres"),

	// Besoin
	propertyType: z.enum(["appartement", "maison", "terrain", "bureau", "local_commercial"], {
		error: "Type de propriété invalide"
	}),

	// Emplacement
	location: z.string()
		.min(2, "L'emplacement doit contenir au moins 2 caractères")
		.max(100, "L'emplacement ne peut pas dépasser 100 caractères"),

	// Superficie et pièces
	surface: z.string()
		.min(1, "La superficie doit être supérieure à 0")
		.transform(
			(val) => {
				const num = Number(val);
				if (isNaN(num) || num <= 0) {
					throw new Error("La superficie doit être un nombre valide supérieur à 0");
				}
				return val;
			}
		),
	rooms: z.string()
		.min(1, "Le nombre de pièces doit être supérieur à 0"),

	// Budget
	minBudget: z.string().min(0, "Le budget minimum ne peut pas être négatif"),
	maxBudget: z.string().min(0, "Le budget maximum ne peut pas être négatif"),

	// Message
	message: z
		.string()
		.optional(),
})