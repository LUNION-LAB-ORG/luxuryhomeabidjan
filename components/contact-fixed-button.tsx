"use client";
import React from 'react';
import {Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure,} from "@heroui/react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {motion} from "motion/react";

function ContactFixedButton({defaultMessage, subject}: { defaultMessage?: string; subject?: string }) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<motion.div
				initial={{opacity: 0, y: 50, borderRadius:"9999px"}}
				animate={{opacity: 1, y: 0, borderRadius:"0px"}}
				transition={{duration: 0.5, delay:2}}
			>
				<Button
					className="fixed bottom-8 right-8 z-50"
					color="primary"
					onClick={onOpen}
				>
					Prendre contact ?
				</Button>
			</motion.div>
			<Drawer
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				backdrop={"blur"}
				placement="right"
				size={"xl"}
				onOpenChange={onOpenChange}
			>
				<DrawerContent className={"bg-white"}>
					{(onClose) => (
						<>
							<DrawerHeader className="flex flex-col gap-1">
								Contactez-nous
								<p className="text-sm font-normal text-gray-600">
									Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute
									demande d'information ou de support.
								</p>
							</DrawerHeader>
							<DrawerBody>
								<form className="grid md:grid-cols-2 gap-2">
									<Input
										placeholder="Votre nom"
										autoComplete="name"
										required
									/>
									<Input
										type="email"
										autoComplete="email"
										placeholder="Votre adresse e-mail"
										required
									/>
									<Input
										placeholder="téléphone"
										autoComplete="tel"
									/>
									<Select>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Vous êtes"/>
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Vous êtes :</SelectLabel>
												<SelectItem value="acheteur">Acheteur</SelectItem>
												<SelectItem value="locataire">Locataire</SelectItem>
												<SelectItem value="agent">Agent</SelectItem>
												<SelectItem value="autre">Autre</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
									<Textarea
										defaultValue={defaultMessage}
										className="col-span-full"
										placeholder="Enter your description"
									/>
								</form>
							</DrawerBody>
							<DrawerFooter>
								<Button color="danger" variant="outline" onClick={onClose}>
									Annuler
								</Button>
								<Button color="primary" onClick={onClose}>
									Envoyer
								</Button>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default ContactFixedButton;