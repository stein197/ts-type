// TODO: Take everything from https://html.spec.whatwg.org/ instead of https://developer.mozilla.org/en
// TODO: Add documentation per each entry
// TODO: Automatic web data scraping
// TODO: Should we allow arrays as values?
import type {mime} from "./MIME";

export type ElementAttributesMap = HTMLElementAttributesMap & SVGElementAttributesMap & MathMLElementAttributesMap;

export type HTMLElementAttributesMap = {
	"a": HTMLAnchorElementAttributes;
	"abbr": GlobalAttributes;
	"acronym": GlobalAttributes;
	"address": GlobalAttributes;
	"applet": HTMLAppletElementAttributes;
	"area": HTMLAreaElementAttributes;
	"article": GlobalAttributes;
	"aside": GlobalAttributes;
	"audio": HTMLAudioElementAttributes;
	"b": GlobalAttributes;
	"base": HTMLBaseElementAttributes;
	"basefont": HTMLFontElementAttributes;
	"bdi": GlobalAttributes;
	"bdo": GlobalAttributes;
	"bgsound": HTMLBgSoundElementAttributes;
	"big": GlobalAttributes;
	"blink": GlobalAttributes;
	"blockquote": HTMLBlockquoteElementAttributes;
	"body": HTMLBodyElementAttributes;
	"br": GlobalAttributes;
	"button": HTMLButtonElementAttributes;
	"canvas": HTMLCanvasElementAttributes;
	"caption": HTMLCaptionElementAttributes;
	"center": GlobalAttributes;
	"cite": GlobalAttributes;
	"code": GlobalAttributes;
	"col": HTMLColElementAttributes;
	"colgroup": HTMLColElementAttributes;
	"content": HTMLContentElementAttributes;
	"data": HTMLDataElementAttributes;
	"datalist": GlobalAttributes;
	"dd": HTMLDDElementAttributes;
	"del": HTMLDelElementAttributes;
	"details": HTMLDetailsElementAttributes;
	"dfn": GlobalAttributes;
	"dialog": HTMLDialogElementAttributes;
	"dir": HTMLDirElementAttributes;
	"div": GlobalAttributes;
	"dl": GlobalAttributes;
	"dt": GlobalAttributes;
	"em": GlobalAttributes;
	"embed": HTMLEmbedElementAttributes;
	"fieldset": HTMLFieldSetElementAttributes;
	"figcaption": GlobalAttributes;
	"figure": GlobalAttributes;
	"font": HTMLFontElementAttributes;
	"footer": GlobalAttributes;
	"form": HTMLFormElementAttributes;
	"frame": HTMLFrameElementAttributes;
	"frameset": HTMLFrameSetElementAttributes;
	"h1": GlobalAttributes;
	"h2": GlobalAttributes;
	"h3": GlobalAttributes;
	"h4": GlobalAttributes;
	"h5": GlobalAttributes;
	"h6": GlobalAttributes;
	"head": HTMLHeadElementAttributes;
	"header": GlobalAttributes;
	"hgroup": GlobalAttributes;
	"hr": GlobalAttributes;
	"html": HTMLHtmlElementAttributes;
	"i": GlobalAttributes;
	"iframe": HTMLIFrameElementAttributes;
	"img": HTMLImageElementAttributes;
	"input": HTMLInputElementAttributes;
	"ins": HTMLInsElementAttributes;
	"kbd": GlobalAttributes;
	"keygen": HTMLKeygenElementAttributes;
	"label": HTMLLabelElementAttributes;
	"legend": GlobalAttributes;
	"li": HTMLLIElementAttributes;
	"link": HTMLLinkElementAttributes;
	"main": GlobalAttributes;
	"map": HTMLMapElementAttributes;
	"mark": GlobalAttributes;
	"marquee": HTMLMarqueeElementAttributes;
	"menu": GlobalAttributes;
	"menuitem": HTMLMenuItemAttributes;
	"meta": HTMLMetaElementAttributes;
	"meter": HTMLMeterElementAttributes;
	"nav": GlobalAttributes;
	"nobr": GlobalAttributes;
	"noembed": GlobalAttributes;
	"noframes": GlobalAttributes;
	"noscript": GlobalAttributes;
	"object": HTMLObjectElementAttributes;
	"ol": HTMLOListElementAttributes;
	"optgroup": HTMLOptGroupElementAttributes;
	"option": HTMLOptionElementAttributes;
	"output": HTMLOutputElementAttributes;
	"p": GlobalAttributes;
	"param": HTMLParamElementAttributes;
	"picture": GlobalAttributes;
	"plaintext": GlobalAttributes;
	"portal": HTMLPortalElementAttributes;
	"pre": HTMLPreElementAttributes;
	"progress": HTMLProgressElementAttributes;
	"q": HTMLQuoteElementAttributes;
	"rb": GlobalAttributes;
	"rp": GlobalAttributes;
	"rt": GlobalAttributes;
	"rtc": GlobalAttributes;
	"ruby": GlobalAttributes;
	"s": GlobalAttributes;
	"samp": GlobalAttributes;
	"script": HTMLScriptElementAttributes;
	"section": GlobalAttributes;
	"select": HTMLSelectElementAttributes;
	"shadow": GlobalAttributes;
	"slot": HTMLSlotElementAttributes;
	"small": GlobalAttributes;
	"source": HTMLSourceElementAttributes;
	"spacer": HTMLSpacerElenentAttributes;
	"span": GlobalAttributes;
	"strike": GlobalAttributes;
	"strong": GlobalAttributes;
	"style": HTMLStyleElementAttributes;
	"sub": GlobalAttributes;
	"summary": GlobalAttributes;
	"sup": GlobalAttributes;
	"table": HTMLTableElementAttributes;
	"tbody": HTMLTableBodyElementAttributes;
	"td": HTMLTableCellElementAttributes;
	"template": GlobalAttributes;
	"textarea": HTMLTextAreaElementAttributes;
	"tfoot": HTMLTableFootElementAttributes;
	"th": HTMLTableCellElementAttributes;
	"thead": HTMLTableHeadElementAttributes;
	"time": HTMLTimeElementAttributes;
	"title": GlobalAttributes;
	"tr": HTMLTableRowElementAttributes;
	"track": HTMLTrackElementAttributes;
	"tt": GlobalAttributes;
	"u": GlobalAttributes;
	"ul": HTMLUListElementAttributes;
	"var": GlobalAttributes;
	"video": HTMLVideoElementAttributes;
	"wbr": GlobalAttributes;
	"xmp": GlobalAttributes;
}

// TODO
export type SVGElementAttributesMap = {}

// TODO
export type MathMLElementAttributesMap = {}

type GlobalAttributes = AriaAttributes & EventHandlerAttributes & {
	[K: `data-${string}`]: string;
	"accesskey": string;
	"autocapitalize": "off" | "on" | "none" | "sentences" | "words" | "characters";
	"autofocus": "";
	"class": string | string[];
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

type HTMLAnchorElementAttributes = GlobalAttributes & {
	"download": string;
	"href": string;
	"hreflang": string; // TODO: Replace with BCP47 std
	"ping": string;
	"referrerpolicy": "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url";
	"rel": RelAttr[];
	"target": TargetAttr;
	"type": mime.All;
	"charset": string;
	"coords": number[];
	"name": string;
	"shape": ShapeAttr;
	"datafld": string;
	"datasrc": string;
	"methods": string;
	"urn": string;
}

type HTMLAppletElementAttributes = GlobalAttributes & {
	"align": "bottom" | "left" | "middle" | "right" | "top" | "absbottom" | "absmiddle" | "baseline" | "center" | "texttop";
	"alt": string;
	"archive": string;
	"code": string;
	"codebase": string;
	"datafld": string;
	"datasrc": string;
	"height": number;
	"hspace": number;
	"mayscript": string;
	"name": string;
	"object": string;
	"src": string;
	"vspace": number;
	"width": string;
}

type HTMLAreaElementAttributes = GlobalAttributes & {
	"alt": string;
	"coords": number[];
	"download": string;
	"href": string;
	"hreflang": string; // TODO: Replace with BCP47 std
	"ping": string;
	"referrerpolicy": "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
	"rel": RelAttr[];
	"shape": ShapeAttr;
	"target": TargetAttr;
	"name": string;
	"nohref": string;
	"type": string;
}

type HTMLAudioElementAttributes = GlobalAttributes & {
	"autoplay": HtmlBoolean;
	"controls": "";
	"controlslist": "nodownload" | "nofullscreen" | "noremoteplayback";
	"crossorigin": "anonymous" | "use-credentials";
	"disableremoteplayback": string;
	"loop": HtmlBoolean;
	"muted": HtmlBoolean;
	"preload": "none" | "metadata" | "auto";
	"src": string;
}

type HTMLBaseElementAttributes = GlobalAttributes & {
	"href": string;
	"target": TargetAttr;
}

type HTMLBgSoundElementAttributes = GlobalAttributes & {
	"balance": number;
	"loop": number | "infinite";
	"src": string;
	"volume": number;
}

type HTMLBlockquoteElementAttributes = GlobalAttributes & {
	"cite": string;
}

// TODO
type HTMLBodyElementAttributes = GlobalAttributes & {}

// TODO
type HTMLButtonElementAttributes = GlobalAttributes & {}

// TODO
type HTMLCanvasElementAttributes = GlobalAttributes & {}

// TODO
type HTMLCaptionElementAttributes = GlobalAttributes & {}

// TODO
type HTMLColElementAttributes = GlobalAttributes & {}

// TODO
type HTMLContentElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDDElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDataElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDelElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDetailsElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDialogElementAttributes = GlobalAttributes & {}

// TODO
type HTMLDirElementAttributes = GlobalAttributes & {}

// TODO
type HTMLEmbedElementAttributes = GlobalAttributes & {}

// TODO
type HTMLFieldSetElementAttributes = GlobalAttributes & {}

type HTMLFontElementAttributes = GlobalAttributes & {
	"color": string;
	"face": string | string[];
	"size": number;
}

// TODO
type HTMLFormElementAttributes = GlobalAttributes & {}

// TODO
type HTMLFrameElementAttributes = GlobalAttributes & {}

// TODO
type HTMLFrameSetElementAttributes = GlobalAttributes & {}

// TODO
type HTMLHeadElementAttributes = GlobalAttributes & {}

// TODO
type HTMLHtmlElementAttributes = GlobalAttributes & {}

// TODO
type HTMLIFrameElementAttributes = GlobalAttributes & {}

// TODO
type HTMLImageElementAttributes = GlobalAttributes & {}

// TODO
type HTMLInputElementAttributes = GlobalAttributes & {}

// TODO
type HTMLInsElementAttributes = GlobalAttributes & {}

// TODO
type HTMLKeygenElementAttributes = GlobalAttributes & {}

// TODO
type HTMLLIElementAttributes = GlobalAttributes & {}

// TODO
type HTMLLabelElementAttributes = GlobalAttributes & {}

// TODO
type HTMLLinkElementAttributes = GlobalAttributes & {}

// TODO
type HTMLMapElementAttributes = GlobalAttributes & {}

// TODO
type HTMLMarqueeElementAttributes = GlobalAttributes & {}

// TODO
type HTMLMenuItemAttributes = GlobalAttributes & {}

// TODO
type HTMLMetaElementAttributes = GlobalAttributes & {}

// TODO
type HTMLMeterElementAttributes = GlobalAttributes & {}

// TODO
type HTMLOListElementAttributes = GlobalAttributes & {}

// TODO
type HTMLObjectElementAttributes = GlobalAttributes & {}

// TODO
type HTMLOptGroupElementAttributes = GlobalAttributes & {}

// TODO
type HTMLOptionElementAttributes = GlobalAttributes & {}

// TODO
type HTMLOutputElementAttributes = GlobalAttributes & {}

// TODO
type HTMLParamElementAttributes = GlobalAttributes & {}

// TODO
type HTMLPortalElementAttributes = GlobalAttributes & {}

// TODO
type HTMLPreElementAttributes = GlobalAttributes & {}

// TODO
type HTMLProgressElementAttributes = GlobalAttributes & {}

// TODO
type HTMLQuoteElementAttributes = GlobalAttributes & {}

// TODO
type HTMLScriptElementAttributes = GlobalAttributes & {}

// TODO
type HTMLSelectElementAttributes = GlobalAttributes & {}

// TODO
type HTMLSlotElementAttributes = GlobalAttributes & {}

// TODO
type HTMLSourceElementAttributes = GlobalAttributes & {}

// TODO
type HTMLSpacerElenentAttributes = GlobalAttributes & {}

// TODO
type HTMLStyleElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableBodyElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableCellElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableFootElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableHeadElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTableRowElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTextAreaElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTimeElementAttributes = GlobalAttributes & {}

// TODO
type HTMLTrackElementAttributes = GlobalAttributes & {}

// TODO
type HTMLUListElementAttributes = GlobalAttributes & {}

// TODO
type HTMLVideoElementAttributes = GlobalAttributes & {}

type RelAttr = "alternate" | "archives" | "author" | "bookmark" | "dns-prefetch" | "external" | "first" | "help" | "icon" | "index" | "last" | "license" | "manifest" | "next" | "nofollow" | "noopener" | "noreferrer" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prev" | "search" | "stylesheet" | "sidebar" | "tag" | "up";

type ShapeAttr = "default" | "circle" | "rect" | "polygon" | "poly";

type TargetAttr = "_blank" | "_parent" | "_self" | "_top";

type HtmlBoolean = "" | "false" | "true" | boolean;

type HtmlUndefined = "undefined" | undefined;
