import { z } from 'zod';
import {
  currencyEnum,
  listingTypeEnum,
  pricePeriodEnum,
  propertyStatusEnum,
} from '@/features/properties/types/property.type';

export const PropertySchema = z.object({
  title: z.string(),
  coupDeCoeur: z.boolean().default(false),
  description: z.string().nullable(),
  listingType: z.enum(listingTypeEnum),
  currency: z.enum(currencyEnum),
  price: z.number(),
  secondaryPrice: z.number().optional(),
  pricePeriod: z.enum(pricePeriodEnum),
  area: z.string().nullable(),
  landArea: z.string().nullable(),
  rooms: z.number().nullable(),
  bedrooms: z.number().nullable(),
  bathrooms: z.number().nullable(),
  garages: z.number().nullable(),
  garageCapacity: z.number().nullable(),
  yearBuilt: z.number().nullable(),
  cityId: z.string(),
  communeId: z.string().nullable(),
  areaId: z.string().nullable(),
  latitude: z.string().nullable(),
  longitude: z.string().nullable(),
  categoryId: z.string(),
  amenities: z.array(z.string()).optional(),
  status: z
    .enum(propertyStatusEnum)
    .default(propertyStatusEnum.DRAFT),
  images: z.array(
    z.instanceof(File)
      .refine(
        (file) => file.type.startsWith('image/'),
        { message: 'Seuls les fichiers image sont autorisés' },
      ).refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'La taille de chaque image ne doit pas dépasser 5 Mo',
    }),
  ),
  video: z
    .instanceof(File)
    .refine(
      (file) => file.type.startsWith('video/'),
      { message: 'Seuls les vidéos sont acceptées' },
    ).refine((file) => file.size <= 50 * 1024 * 1024, {
      message: 'La taille de la vidéo ne doit pas dépasser 50 Mo',
    }).optional(),
});

export type PropertyDetailsDto = z.infer<typeof PropertySchema>;