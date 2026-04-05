// @ts-ignore
import bilingualScript from "./scripts/bilingual.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// This component renders nothing — the toggle button is injected into the DOM
// by bilingual.inline.ts via document.addEventListener("nav", ...)
const Bilingual: QuartzComponent = () => <></>

Bilingual.afterDOMLoaded = bilingualScript

export default (() => Bilingual) satisfies QuartzComponentConstructor
