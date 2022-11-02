// TODO: Take everything from https://html.spec.whatwg.org/ instead of https://developer.mozilla.org/en
// TODO: Add documentation per each entry
// TODO: Automatic web data scraping
// TODO: Should we allow arrays as values?
// TODO: Mark deprecated elements and attributes
// TODO: Add AnimationTimingAttributes, AnimationValueAttributes, etc.
import type {mime} from "./MIME";
import type {css} from "./CSS";

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
	"tbody": HTMLTableSectionElementAttributes;
	"td": HTMLTableCellElementAttributes;
	"template": GlobalAttributes;
	"textarea": HTMLTextAreaElementAttributes;
	"tfoot": HTMLTableSectionElementAttributes;
	"th": HTMLTableCellElementAttributes;
	"thead": HTMLTableSectionElementAttributes;
	"time": HTMLTimeElementAttributes;
	"title": GlobalAttributes;
	"tr": HTMLTableSectionElementAttributes;
	"track": HTMLTrackElementAttributes;
	"tt": GlobalAttributes;
	"u": GlobalAttributes;
	"ul": HTMLUListElementAttributes;
	"var": GlobalAttributes;
	"video": HTMLVideoElementAttributes;
	"wbr": GlobalAttributes;
	"xmp": GlobalAttributes;
}

export type SVGElementAttributesMap = {
	"altGlyph": SVGAltGlyphElementAttributes;
	"altGlyphDef": SVGGlobalAttributes;
	"altGlyphItem": SVGGlobalAttributes;
	"animate": SVGAnimateElementAttributes;
	"animateMotion": SVGAnimateMotionElementAttributes;
	"animateTransform": SVGAnimateTransformElementAttributes;
	"circle": SVGCircleElementAttributes;
	"clipPath": SVGClipPathElementAttributes;
	"color-profile": any;
	"cursor": SVGCursorElementAttributes;
	"defs": SVGGlobalAttributes;
	"desc": SVGGlobalAttributes;
	"ellipse": SVGEllipseElementAttributes;
	"feBlend": SVGFEBlendElementAttributes;
	"feColorMatrix": SVGFEColorMatrixElementAttributes;
	"feComponentTransfer": SVGFEComponentTransferElementAttributes;
	"feComposite": SVGFECompositeElementAttributes;
	"feConvolveMatrix": SVGFEConvolveMatrixElementAttributes;
	"feDiffuseLighting": SVGFEDiffuseLightingElementAttributes;
	"feDisplacementMap": SVGFEDisplacementMapElementAttributes;
	"feDistantLight": SVGFEDistantLightElementAttributes;
	"feFlood": SVGFEFloodElementAttributes;
	"feFuncA": SVGFEFuncAElementAttrinutes;
	"feFuncB": SVGFEFuncBElementAttrinutes;
	"feFuncG": SVGFEFuncGElementAttrinutes;
	"feFuncR": SVGFEFuncRElementAttrinutes;
	"feGaussianBlur": SVGFEGaussianBlurElementAttributes;
	"feImage": SVGFEImageElementAttributes;
	"feMerge": SVGFEMergeElementAttributes;
	"feMergeNode": SVGFEMergeNodeElementAttributes;
	"feMorphology": SVGFEMorphologyElementAttributes;
	"feOffset": SVGFEOffsetElementAttributes;
	"fePointLight": SVGFEPointLightElementAttributes;
	"feSpecularLighting": SVGFESpecularLightingElementAttributes;
	"feSpotLight": SVGFESpotLightElementAttributes;
	"feTile": SVGFETileElementAttributes;
	"feTurbulence": SVGFETurbulenceElementAttributes;
	"filter": SVGFilterElementAttributes;
	"font": SVGFontElementAttributes;
	"font-face": SVGFontFaceElementAttributes;
	"font-face-format": SVGFontFaceFormatElementAttributes;
	"font-face-name": SVGFontFaceNameElementAttributes;
	"font-face-src": SVGGlobalAttributes;
	"font-face-uri": SVGFontFaceURIElementAttributes;
	"foreignObject": SVGForeignObjectElementAttributes;
	"g": SVGGlobalAttributes;
	"glyph": SVGGlyphElementAttributes;
	"glyphRef": SVGGlyphRefElementAttributes;
	"hkern": SVGHKernElementAttributes;
	"image": SVGImageElementAttributes;
	"line": SVGLineElementAttributes;
	"linearGradient": SVGLinearGradientElementAttributes;
	"marker": SVGMarkerElementAttributes;
	"mask": SVGMaskElementAttributes;
	"metadata": SVGMetadataElementAttributes;
	"missing-glyph": SVGMissingGlyphElementAttributes;
	"mpath": SVGMPathElementAttributes;
	"path": SVGPathElementAttributes;
	"pattern": SVGPatternElementAttributes;
	"polygon": SVGPolygonElementAttributes;
	"polyline": SVGPolylineElementAttributes;
	"radialGradient": SVGRadialGradientElementAttributes;
	"rect": SVGRectElementAttributes;
	"set": SVGSetElement;
	"stop": SVGStopElementAttributes;
	"svg": SVGSVGElementAttributes;
	"switch": SVGSwitchElementAttributes;
	"symbol": SVGSymbolElementAttributes;
	"text": SVGTextElementAttributes;
	"textPath": SVGTextPathElementAttributes;
	"tref": SVGGlobalAttributes;
	"tspan": SVGTSpanElementAttributes;
	"use": SVGUseElementAttributes;
	"view": SVGViewElementAttributes;
	"vkern": SVGVkernElementAttributes;
}

// TODO
export type MathMLElementAttributesMap = {}

type GlobalAttributes = AriaAttributes & DataAttributes & EventHandlerAttributes & {
	"accesskey": string;
	"autocapitalize": OnOffUnion | "none" | "sentences" | "words" | "characters";
	"autofocus": "";
	"class": string | string[];
	"contenteditable": BooleanUnion;
	"contextmenu": string;
	"dir": "ltr" | "rtl" | "auto";
	"draggable": BooleanUnion;
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
	"spellcheck": BooleanUnion;
	"style": string | css.RealProperties;
	"tabindex": number;
	"title": string;
	"translate": "" | YesNoUnion;
	"x-ms-acceleratorkey": string;
	"x-ms-format-detection": "all" | "none" | "phone";
}

type SVGGlobalAttributes = AriaAttributes & DataAttributes & EventHandlerAttributes & {
	"id": string;
	"tabindex": number;
	"lang": string; // TODO: Replace with BCP47 std
	"xml:space": string;
	"class": string | string[];
	"style": string | css.RealSVGProperties;
	"requiredExtensions": string;
	"requiredFeatures": string;
	"systemLanguage": string;
}

type SVGAnimationAttributes = {
	"begin": string;
	"dur": string;
	"end": string;
	"min": string;
	"max": string;
	"restart": "always" | "whenNotActive" | "never";
	"repeatCount": number | "indefinite";
	"repeatDur": string;
	"calcMode": "discrete" | "linear" | "paced" | "spline";
	"values": string;
	"keyTimes": string;
	"keySplines": string;
	"from": string;
	"to": string;
	"by": string;
	"attributeName": string;
	"additive": "replace" | "sum";
	"accumulate": "none" | "sum";
	"onbegin": string | ((e: any) => void);
	"onend": string | ((e: any) => void);
	"onrepeat": string | ((e: any) => void);
}

type DataAttributes = {
	[K: `data-${string}`]: string;
}

type EventHandlerAttributes = {
	[K in Extract<keyof GlobalEventHandlers, `on${string}`>]: Exclude<GlobalEventHandlers[K], null> | string;
}

type AriaAttributes = {
	"aria-activedescendant": string;
	"aria-atomic": BooleanUnion;
	"aria-autocomplete": "none" | "inline" | "list" | "both";
	"aria-braillelabel": string;
	"aria-brailleroledescription": string;
	"aria-busy": BooleanUnion;
	"aria-checked": BooleanUnion | "mixed";
	"aria-colcount": number;
	"aria-colindex": number;
	"aria-colindextext": string;
	"aria-colspan": number;
	"aria-controls": string;
	"aria-current": BooleanUnion | "page" | "step" | "location" | "date" | "time";
	"aria-describedby": string;
	"aria-description": string;
	"aria-details": string;
	"aria-disabled": BooleanUnion;
	"aria-dropeffect": "copy" | "execute" | "link" | "move" | "none" | "popup";
	"aria-errormessage": string;
	"aria-expanded": BooleanUnion | UndefinedUnion;
	"aria-flowto": string;
	"aria-grabbed": BooleanUnion | UndefinedUnion;
	"aria-haspopup": BooleanUnion | "menu" | "listbox" | "tree" | "grid" | "dialog";
	"aria-hidden": BooleanUnion | UndefinedUnion;
	"aria-invalid": BooleanUnion | "grammar" | "spelling";
	"aria-keyshortcuts": string;
	"aria-label": string;
	"aria-labelledby": string;
	"aria-level": number;
	"aria-live": "assertive" | "off" | "polite";
	"aria-modal": BooleanUnion;
	"aria-multiline": BooleanUnion;
	"aria-multiselectable": BooleanUnion;
	"aria-orientation": UndefinedUnion | OrientationUnion;
	"aria-owns": string;
	"aria-placeholder": string;
	"aria-posinset": number;
	"aria-pressed": BooleanUnion | UndefinedUnion | "mixed";
	"aria-readonly": BooleanUnion;
	"aria-relevant": "additions" | "all" | "removals" | "text" | "additions text";
	"aria-required": BooleanUnion;
	"aria-roledescription": string;
	"aria-rowcount": number;
	"aria-rowindex": number;
	"aria-rowindextext": string;
	"aria-rowspan": number;
	"aria-selected": BooleanUnion | UndefinedUnion;
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
	"referrerpolicy": Exclude<attr.ReferrerPolicy, "no-referrer" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin">;
	"rel": attr.Rel[];
	"target": attr.Target;
	"type": mime.All;
	"charset": string;
	"coords": number[];
	"name": string;
	"shape": attr.Shape;
	"datafld": string;
	"datasrc": string;
	"methods": string;
	"urn": string;
}

type HTMLAppletElementAttributes = GlobalAttributes & {
	"align": attr.Align | "middle"| "absbottom" | "absmiddle" | "baseline" | "center" | "texttop";
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
	"referrerpolicy": attr.ReferrerPolicy;
	"rel": attr.Rel[];
	"shape": attr.Shape;
	"target": attr.Target;
	"name": string;
	"nohref": string;
	"type": string;
}

type HTMLAudioElementAttributes = GlobalAttributes & {
	"autoplay": BooleanUnion;
	"controls": "";
	"controlslist": "nodownload" | "nofullscreen" | "noremoteplayback";
	"crossorigin": attr.CrossOrigin;
	"disableremoteplayback": string;
	"loop": BooleanUnion;
	"muted": BooleanUnion;
	"preload": "none" | "metadata" | "auto";
	"src": string;
}

type HTMLBaseElementAttributes = GlobalAttributes & {
	"href": string;
	"target": attr.Target;
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

type HTMLBodyElementAttributes = GlobalAttributes & WindowEventHandlersAttributes & {
	"alink": string;
	"background": string;
	"bgcolor": string;
	"bottommargin": string;
	"leftmargin": string;
	"link": string;
	"rightmargin": string;
	"text": string;
	"topmargin": string;
	"vlink": string;
}

type WindowEventHandlersAttributes = {
	[K in Extract<keyof WindowEventHandlers, `on${string}`>]: Exclude<WindowEventHandlers[K], null> | string;
}

type HTMLButtonElementAttributes = GlobalAttributes & {
	"autocomplete": OnOffUnion;
	"disabled": BooleanUnion;
	"form": string;
	"formaction": string;
	"formenctype": attr.Enctype;
	"formmethod": attr.Method;
	"formnovalidate": BooleanUnion;
	"formtarget": attr.Target;
	"name": string;
	"type": "submit" | "reset" | "button";
	"value": string;
}

type HTMLCanvasElementAttributes = GlobalAttributes & {
	"height": number;
	"width": number;
	"moz-opaque": string;
}

type HTMLCaptionElementAttributes = GlobalAttributes & {
	"align": attr.Align;
}

type HTMLColElementAttributes = GlobalAttributes & {
	"span": number;
	"align": "left" | "center" | "right" | "justify";
}

type HTMLContentElementAttributes = GlobalAttributes & {
	"select": string | string[];
}

type HTMLDDElementAttributes = GlobalAttributes & {
	"nowrap": YesNoUnion;
}

type HTMLDataElementAttributes = GlobalAttributes & {
	"value": string;
}

type HTMLDelElementAttributes = GlobalAttributes & {
	"cite": string;
	"datetime": string; // TODO: Use Date in addition?
}

type HTMLDetailsElementAttributes = GlobalAttributes & {
	"open": BooleanUnion;
}

type HTMLDialogElementAttributes = GlobalAttributes & {
	"open": BooleanUnion;
}

type HTMLDirElementAttributes = GlobalAttributes & {
	"compact": BooleanUnion;
}

type HTMLEmbedElementAttributes = GlobalAttributes & {
	"width": number;
	"height": number;
	"src": string;
	"type": mime.All;
}

type HTMLFieldSetElementAttributes = GlobalAttributes & {
	"disabled": BooleanUnion;
	"form": string;
	"name": string;
}

type HTMLFontElementAttributes = GlobalAttributes & {
	"color": string;
	"face": string | string[];
	"size": number;
}

type HTMLFormElementAttributes = GlobalAttributes & {
	"accept": mime.All;
	"accept-charset": string | string[];
	"autocomplete": attr.Autocomplete;
	"name": string;
	"rel": attr.Rel[];
	"action": string;
	"enctype": attr.Enctype;
	"method": attr.Method | "dialog";
	"novalidate": BooleanUnion;
	"target": attr.Target;
}

type HTMLFrameElementAttributes = GlobalAttributes & {
	"src": string;
	"name": string;
	"noresize": string;
	"scrolling": YesNoUnion;
	"marginwidth": number;
	"marginheight": number;
	"frameborder": string;
}

type HTMLFrameSetElementAttributes = GlobalAttributes & {
	"cols": number;
	"rows": number;
}

type HTMLHeadElementAttributes = GlobalAttributes & {
	"profile": string;
}

type HTMLHtmlElementAttributes = GlobalAttributes & {
	"manifest": string;
	"version": string;
	"xmlns": string;
}

type HTMLIFrameElementAttributes = GlobalAttributes & {
	"allow": string; // TODO: Take values from HTTP Feature-Policy header
	"allowfullscreen": BooleanUnion;
	"allowpaymentrequest": BooleanUnion;
	"csp": string; // TODO: Take values from Content Security Policy
	"fetchpriority": attr.FetchPriority;
	"width": number;
	"height": number;
	"loading": attr.Loading;
	"name": string;
	"referrerpolicy": attr.ReferrerPolicy;
	"sandbox": "allow-downloads-without-user-activation" | "allow-downloads" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation";
	"src": string;
	"srcdoc": string;
}

type HTMLImageElementAttributes = GlobalAttributes & {
	"alt": string;
	"crossorigin": attr.CrossOrigin;
	"decoding": "sync" | "async" | "auto";
	"fetchpriority": attr.FetchPriority;
	"width": number;
	"height": number;
	"ismap": BooleanUnion;
	"loading": attr.Loading;
	"referrerpolicy": attr.ReferrerPolicy;
	"sizes": string | string[];
	"src": string;
	"srcset": string | string[];
	"usemap": string;
	"align": attr.Align | "middle";
	"border": number;
	"hspace": number;
	"longdesc": string;
	"name": string;
	"vspace": number;
}

type HTMLInputElementAttributes = GlobalAttributes & {
	"accept": string;
	"alt": string;
	"autocomplete": attr.Autocomplete;
	"capture": string;
	"checked": BooleanUnion;
	"dirname": string;
	"disabled": BooleanUnion;
	"form": string;
	"formaction": string;
	"formenctype": attr.Enctype;
	"formmethod": attr.Method;
	"formnovalidate": BooleanUnion;
	"formtarget": attr.Target;
	"width": number;
	"height": number;
	"inputmode": "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
	"list": string;
	"max": number | string;
	"maxlength": number;
	"min": number | string;
	"minlength": number;
	"multiple": BooleanUnion;
	"name": string;
	"pattern": RegExp;
	"placeholder": string;
	"readonly": BooleanUnion;
	"required": BooleanUnion;
	"size": number;
	"src": string;
	"step": number;
	"type": "button" | "checkbox" | "color" | "date" | "datetime" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
	"value": number | string; // Add date support?
}

type HTMLInsElementAttributes = GlobalAttributes & {
	"cite": string;
	"datetime": string;
}

type HTMLKeygenElementAttributes = GlobalAttributes & {
	"challenge": string;
	"disabled": BooleanUnion;
	"form": string;
	"keytype": string;
	"name": string;
}

type HTMLLIElementAttributes = GlobalAttributes & {
	"value": number;
	"type": attr.ListType;
}

type HTMLLabelElementAttributes = GlobalAttributes & {
	"for": string;
}

type HTMLLinkElementAttributes = GlobalAttributes & {
	"as": "audio" | "document" | "embed" | "fetch" | "font" | "image" | "object" | "script" | "style" | "track" | "video" | "worker";
	"crossorigin": attr.CrossOrigin;
	"disabled": BooleanUnion;
	"fetchpriority": attr.FetchPriority;
	"href": string;
	"hreflang": string; // TODO: Replace with BCP47 std
	"imagesizes": string;
	"imagesrcset": string;
	"integrity": string;
	"media": string;
	"prefetch": string;
	"referrerpolicy": Exclude<attr.ReferrerPolicy, "same-origin" | "strict-origin" | "strict-origin-when-cross-origin">;
	"rel": attr.Rel;
	"sizes": string;
	"type": mime.All;
}

type HTMLMapElementAttributes = GlobalAttributes & {
	"name": string;
}

type HTMLMarqueeElementAttributes = GlobalAttributes & {
	"behavior": "scroll" | "slide" | "alternate";
	"bgcolor": string;
	"direction": "left" | "right" | "up" | "down";
	"width": number;
	"height": number;
	"hspace": number;
	"vspace": number;
	"loop": number;
	"scrollamount": number;
	"scrolldelay": number;
	"truespeed": string;
}

type HTMLMenuItemAttributes = GlobalAttributes & {
	"checked": BooleanUnion;
	"command": string;
	"default": BooleanUnion;
	"disabled": BooleanUnion;
	"icon": string;
	"lavel": string;
	"radiogroup": string;
	"type": "command" | "checkbox" | "radio";
}

type HTMLMetaElementAttributes = GlobalAttributes & {
	"charset": string;
	"content": string;
	"http-equiv": "content-language" | "content-type" | "default-style" | "refresh" | "set-cookie" | "x-ua-compatible" | "content-security-policy";
	"name": string;
}

type HTMLMeterElementAttributes = GlobalAttributes & {
	"value": number;
	"min": number;
	"max": number;
	"low": number;
	"high": number;
	"optimum": number;
}

type HTMLOListElementAttributes = GlobalAttributes & {
	"reversed": BooleanUnion;
	"start": number;
	"type": attr.ListType;
}

type HTMLObjectElementAttributes = GlobalAttributes & {
	"archive": string | string[];
	"border": number;
	"classid": string;
	"codebase": string;
	"codetype": mime.All;
	"data": string;
	"declare": BooleanUnion;
	"form": string;
	"width": number;
	"height": number;
	"name": string;
	"standby": string;
	"type": mime.All;
	"usemap": string;
}

type HTMLOptGroupElementAttributes = GlobalAttributes & {
	"disabled": BooleanUnion;
	"label": string;
}

type HTMLOptionElementAttributes = GlobalAttributes & {
	"disabled": BooleanUnion;
	"label": string;
	"selected": BooleanUnion;
	"value": string;
}

type HTMLOutputElementAttributes = GlobalAttributes & {
	"for": string;
	"form": string;
	"name": string;
}

type HTMLParamElementAttributes = GlobalAttributes & {
	"name": string;
	"value": string;
	"type": mime.All;
	"valuetype": "data" | "ref" | "object";
}

type HTMLPortalElementAttributes = GlobalAttributes & {
	"referrerpolicy": attr.ReferrerPolicy;
	"src": string;
}

type HTMLPreElementAttributes = GlobalAttributes & {
	"cols": number;
	"width": number;
	"wrap": string;
}

type HTMLProgressElementAttributes = GlobalAttributes & {
	"max": number;
	"value": number;
}

type HTMLQuoteElementAttributes = GlobalAttributes & {
	"cite": string;
}

type HTMLScriptElementAttributes = GlobalAttributes & {
	"async": string;
	"crossorigin": attr.CrossOrigin;
	"defer": BooleanUnion;
	"fetchpriority": attr.FetchPriority;
	"integrity": string;
	"nomodule": BooleanUnion;
	"nonce": string;
	"referrerpolicy": attr.ReferrerPolicy;
	"src": string;
	"type": "module" | mime.All;
	"charset": string;
	"language": string;
}

type HTMLSelectElementAttributes = GlobalAttributes & {
	"autocomplete": attr.Autocomplete;
	"disabled": BooleanUnion;
	"form": string;
	"multiple": BooleanUnion;
	"name": string;
	"required": BooleanUnion;
	"size": string;
}

type HTMLSlotElementAttributes = GlobalAttributes & {
	"name": string;
}

type HTMLSourceElementAttributes = GlobalAttributes & {
	"sizes": string | string[];
	"src": string;
	"srcset": string | string[];
	"type": mime.All;
	"media": string;
}

type HTMLSpacerElenentAttributes = GlobalAttributes & {
	"type": OrientationUnion | "block";
	"width": number;
	"height": number;
	"size": number;
	"align": "left" | "right" | "center";
}

type HTMLStyleElementAttributes = GlobalAttributes & {
	"media": string;
	"nonce": string;
	"type": "" | "text/css";
}

type HTMLTableSectionElementAttributes = GlobalAttributes & {
	"align": "left" | "center" | "right" | "justify" | "char";
	"bgcolor": string;
	"char": string;
	"charoff": number;
	"valign": "baseline" | "bottom" | "middle" | "top";
}

type HTMLTableCellElementAttributes = GlobalAttributes & HTMLTableSectionElementAttributes & {
	"colspan": number;
	"headers": string | string[];
	"rowspan": number;
	"abbr": string;
	"axis": string | string[];
	"width": number;
	"height": number;
	"scope": string;
}

type HTMLTableElementAttributes = GlobalAttributes & {
	"align": "left" | "center" | "right";
	"bgcolor": string;
	"border": number;
	"cellpadding": number;
	"cellspacing": number;
	"frame": string;
	"rules": "none" | "groups" | "rows" | "columns" | "all";
	"summary": string;
	"width": number;
}

type HTMLTextAreaElementAttributes = GlobalAttributes & {
	"autocomplete": attr.Autocomplete;
	"autocorrect": OnOffUnion;
	"cols": number;
	"disabled": BooleanUnion;
	"form": string;
	"maxlength": number;
	"name": string;
	"placeholder": string;
	"readonly": string;
	"required": string;
	"rows": number;
	"spellcheck": BooleanUnion | "default";
	"wrap": "hard" | "soft" | "off";
}

type HTMLTimeElementAttributes = GlobalAttributes & {
	"datetime": string; // Date?
}

type HTMLTrackElementAttributes = GlobalAttributes & {
	"default": string;
	"kind": "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
	"label": string;
	"src": string;
	"srclang": string; // TODO: Replace with BCP47 std
}

type HTMLUListElementAttributes = GlobalAttributes & {
	"compact": string;
	"type": "circle" | "disc" | "square";
}

type HTMLVideoElementAttributes = GlobalAttributes & {
	"autoplay": BooleanUnion;
	"autopictureinpicture": BooleanUnion;
	"controls": string;
	"controlslist": ("nodownload" | "nofullscreen" | "noremoteplayback")[];
	"crossorigin": attr.CrossOrigin;
	"disablepictureinpicture": string;
	"disableremoteplayback": BooleanUnion;
	"width": number;
	"height": number;
	"loop": BooleanUnion;
	"muted": BooleanUnion;
	"playsinline": BooleanUnion;
	"poster": BooleanUnion;
	"preload": "none" | "metadata" | "auto" | "";
	"src": string;
}

type SVGAltGlyphElementAttributes = SVGGlobalAttributes & {
	"x": number | string | number[];
	"y": number | string | number[];
	"dx": number | string | number[];
	"dy": number | string | number[];
	"rotate": number | number[];
	"glyphRef": string;
	"fill": css.type.Color;
	"format": string;
	"xlink:href": string;
	"xlink:type": "simple";
	"xlink:role": string;
	"xlink:arcrole": string;
	"xlink:title": string;
	"xlink:show": "new" | "replace" | "embed" | "other" | "none";
}

type SVGAnimateElementAttributes = SVGGlobalAttributes & SVGAnimationAttributes & {
	"fill": "freeze" | "remove";
}

type SVGAnimateMotionElementAttributes = SVGGlobalAttributes & SVGAnimationAttributes & {
	"fill": "freeze" | "remove";
	"keyPoints": string;
	"path": string;
	"rotate": number | "auto" | "auto-reverse";
}

type SVGAnimateTransformElementAttributes = SVGGlobalAttributes & {
	"fill": "freeze" | "remove";
	"type": "translate" | "scale" | "rotate" | "skewX" | "skewY";
}

type SVGCircleElementAttributes = SVGGlobalAttributes & {
	"cx": number | css.type.Length;
	"cy": number | css.type.Length;
	"r": number | css.type.Length;
	"pathLength": number;
}

type SVGClipPathElementAttributes = SVGGlobalAttributes & {
	"clipPathUnits": "userSpaceOnUse" | "objectBoundingBox";
}

type SVGCursorElementAttributes = SVGGlobalAttributes & {
	"x": string;
	"y": string;
	"xlink:href": string;
}

type SVGEllipseElementAttributes = SVGGlobalAttributes & {
	"cx": number | css.type.Length;
	"cy": number | css.type.Length;
	"rx": "auto" | number | css.type.Length;
	"ry": "auto" | number | css.type.Length;
	"pathLength": number;
}

type SVGFEBlendElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"in2": string;
	"mode": css.type.BlendMode;
}

type SVGFEColorMatrixElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"type": "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
	"values": string;
}

type SVGFEComponentTransferElementAttributes = SVGGlobalAttributes & {
	"in": string;
}

type SVGFECompositeElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"in2": string;
	"operator": "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
	"k1": number;
	"k2": number;
	"k3": number;
	"k4": number;
}

type SVGFEConvolveMatrixElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"order": number;
	"kernelMatrix": string | number[];
	"divisor": number;
	"bias": number;
	"targetX": string;
	"targetY": string;
	"edgeMode": attr.EdgeMode;
	"kernelUnitLength": number;
	"preserveAlpha": BooleanUnion;
}

// TODO
type SVGFEDiffuseLightingElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEDisplacementMapElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEDistantLightElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEFloodElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEFuncAElementAttrinutes = SVGGlobalAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

// TODO
type SVGFEFuncBElementAttrinutes = SVGGlobalAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

// TODO
type SVGFEFuncGElementAttrinutes = SVGGlobalAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

// TODO
type SVGFEFuncRElementAttrinutes = SVGGlobalAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

// TODO
type SVGFEGaussianBlurElementAttributes = SVGGlobalAttributes & {
	"edgeMode": attr.EdgeMode;
}

// TODO
type SVGFEImageElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEMergeElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEMergeNodeElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEMorphologyElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEOffsetElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFEPointLightElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFESpecularLightingElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFESpotLightElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFETileElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFETurbulenceElementAttributes = SVGGlobalAttributes & {
	"type": "fractalNoise" | "turbulence";
}

// TODO
type SVGFilterElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFontElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFontFaceElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFontFaceFormatElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFontFaceNameElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGFontFaceURIElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGForeignObjectElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGGlyphElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGGlyphRefElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGHKernElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGImageElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGLineElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGLinearGradientElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGMarkerElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGMaskElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGMetadataElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGMissingGlyphElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGMPathElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGPathElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGPatternElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGPolygonElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGPolylineElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGRadialGradientElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGRectElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGSetElement = SVGGlobalAttributes & {
	"fill": "freeze" | "remove";
}

// TODO
type SVGStopElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGSVGElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGSwitchElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGSymbolElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGTextElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGTextPathElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGTSpanElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGUseElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGViewElementAttributes = SVGGlobalAttributes & {}

// TODO
type SVGVkernElementAttributes = SVGGlobalAttributes & {}

type BooleanUnion = "" | "false" | "true" | boolean;

type YesNoUnion = "yes" | "no";

type OnOffUnion = "on" | "off";

type OrientationUnion = "horizontal" | "vertical";

type UndefinedUnion = "undefined" | undefined;

declare module attr {

	type Align = "top" | "bottom" | "left" | "right";
	
	type Autocomplete = OnOffUnion | "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo"
	
	type CrossOrigin = "" | "anonymous" | "use-credentials";

	type EdgeMode = "duplicate" | "wrap" | "none";
	
	type Enctype = "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
	
	type FetchPriority = "high" | "low" | "auto";
	
	type ListType = "a" | "A" | "i" | "I" | "1";
	
	type Loading = "eager" | "lazy";
	
	type Method = "get" | "post";
	
	type ReferrerPolicy = "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
	
	type Rel = "alternate" | "archives" | "author" | "bookmark" | "dns-prefetch" | "external" | "first" | "help" | "icon" | "index" | "last" | "license" | "manifest" | "next" | "nofollow" | "noopener" | "noreferrer" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prev" | "search" | "stylesheet" | "sidebar" | "tag" | "up";
	
	type Shape = "default" | "circle" | "rect" | "polygon" | "poly";
	
	type Target = "_blank" | "_parent" | "_self" | "_top";
}
