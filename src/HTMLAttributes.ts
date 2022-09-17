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

type GlobalAttributes = AriaAttributes & EventHandlerAttributes & {
	[K: `data-${string}`]: string;
	"accesskey": string;
	"autocapitalize": "off" | "on" | "none" | "sentences" | "words" | "characters";
	"autofocus": "";
	"class": string;
	"contenteditable": HtmlBoolean;
	"contextmenu": string;
	"dir": "ltr" | "rtl" | "auto";
	"draggable": HtmlBoolean;
	"enterkeyhint": "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
	"exportparts": string;
	"hidden": "";
	"id": string;
	"inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
	"is": string;
	"itemid": string;
	"itemprop": string;
	"itemref": string;
	"itemscope": "";
	"itemtype": string;
	"lang": string; // TODO: Replace with BCP47 std
	"nonce": string;
	"part": string;
	"slot": string;
	"spellcheck": HtmlBoolean;
	"style": string;
	"tabindex": number;
	"title": string;
	"translate": "" | "yes" | "no";
	"x-ms-acceleratorkey": string;
	"x-ms-format-detection": "all" | "none" | "phone";
}

type EventHandlerAttributes = {
	[K in Extract<keyof GlobalEventHandlers, `on${string}`>]: Exclude<GlobalEventHandlers[K], null> | string;
}

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
