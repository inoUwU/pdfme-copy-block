import { BLANK_PDF } from "@pdfme/common";
import type { Template } from "@pdfme/common";
import { Designer } from "@pdfme/ui";
import { Button } from "@yamada-ui/react";
import { useRef, useEffect } from "react";

export default function (): JSX.Element {
	const designerRef = useRef<HTMLDivElement | null>(null);
	const designer = useRef<Designer | null>(null);
	const template: Template = {
		basePdf: BLANK_PDF,
		schemas: [
			{
				a: {
					type: "text",
					position: { x: 0, y: 0 },
					width: 10,
					height: 10,
				},
				b: {
					type: "text",
					position: { x: 10, y: 10 },
					width: 10,
					height: 10,
				},
				c: {
					type: "text",
					position: { x: 20, y: 20 },
					width: 10,
					height: 10,
				},
			},
		],
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (designerRef.current) {
			designer.current = new Designer({
				domContainer: designerRef.current,
				template,
			});
		}
	}, []);

	return (
		<div>
			<div ref={designerRef} style={{ width: "100%", height: "100%" }} />
		</div>
	);
}
