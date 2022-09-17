// TODO: Take everything from https://html.spec.whatwg.org/ instead of https://developer.mozilla.org/en
// TODO: Add documentation per each entry
// TODO: Automatic web data scraping

export type ElementAttributesMap = HTMLElementAttributesMap & SVGElementAttributesMap & MathMLElementAttributesMap;

// TODO
export type HTMLElementAttributesMap = {}

// TODO
export type SVGElementAttributesMap = {}

// TODO
export type MathMLElementAttributesMap = {}

// TODO
type GlobalAttributes = AriaAttributes & {}

type AriaAttributes = {
	"aria-activedescendant": string;
	"aria-atomic": HtmlBoolean;
	"aria-autocomplete": "none" | "inline" | "list" | "both";
	"aria-braillelabel": string;
	"aria-brailleroledescription": string;
	"aria-busy": HtmlBoolean;
	"aria-checked": HtmlBoolean | "mixed";
	"aria-colcount": number;
	"aria-colindex": number;
	"aria-colindextext": string;
	"aria-colspan": number;
	"aria-controls": string;
	"aria-current": HtmlBoolean | "page" | "step" | "location" | "date" | "time";
	"aria-describedby": string;
	"aria-description": string;
	"aria-details": string;
	"aria-disabled": HtmlBoolean;
	"aria-dropeffect": "copy" | "execute" | "link" | "move" | "none" | "popup";
	"aria-errormessage": string;
	"aria-expanded": HtmlBoolean | HtmlUndefined;
	"aria-flowto": string;
	"aria-grabbed": HtmlBoolean | HtmlUndefined;
	"aria-haspopup": HtmlBoolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
	"aria-hidden": HtmlBoolean | HtmlUndefined;
	"aria-invalid": HtmlBoolean | "grammar" | "spelling";
	"aria-keyshortcuts": string;
	"aria-label": string;
	"aria-labelledby": string;
	"aria-level": number;
	"aria-live": "assertive" | "off" | "polite";
	"aria-modal": HtmlBoolean;
	"aria-multiline": HtmlBoolean;
	"aria-multiselectable": HtmlBoolean;
	"aria-orientation": HtmlUndefined | "horizontal" | "vertical";
	"aria-owns": string;
	"aria-placeholder": string;
	"aria-posinset": number;
	"aria-pressed": HtmlBoolean | HtmlUndefined | "mixed";
	"aria-readonly": HtmlBoolean;
	"aria-relevant": "additions" | "all" | "removals" | "text" | "additions text";
	"aria-required": HtmlBoolean;
	"aria-roledescription": string;
	"aria-rowcount": number;
	"aria-rowindex": number;
	"aria-rowindextext": string;
	"aria-rowspan": number;
	"aria-selected": HtmlBoolean | HtmlUndefined;
	"aria-setsize": number;
	"aria-sort": "ascending" | "descending" | "none" | "other";
	"aria-valuemax": number;
	"aria-valuemin": number;
	"aria-valuenow": number;
	"aria-valuetext": string;
}

type HtmlBoolean = "false" | "true" | boolean;

type HtmlUndefined = "undefined" | undefined;
