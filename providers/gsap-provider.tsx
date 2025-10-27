"use client";
import React from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,SplitText, ScrollTrigger);

function GsapProvider({ children }: { children: React.ReactNode }) {

	return (
		<>
			{children}
		</>
	);
}

export default GsapProvider;