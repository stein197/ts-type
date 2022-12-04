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
	"metadata": SVGGlobalAttributes;
	"missing-glyph": SVGMissingGlyphElementAttributes;
	"mpath": SVGGlobalAttributes;
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

export type MathMLElementAttributesMap = {
	"math": MathMLMathElementAttributes;
	"maction": MathMLMactionElementAttributes;
	"annotation": MathMLAnnotationElementAttributes;
	"annotation-xml": MathMLAnnotationXMLElementAttributes;
	"menclose": MathMLMencloseElementAttributes;
	"merror": MathMLGlobalAttributes;
	"mfenced": MathMLMfencedElementAttributes;
	"mfrac": MathMLMfracElementAttributes;
	"mi": MathMLGlobalAttributes;
	"mmultiscripts": MathMLMmultiscriptsElementAttributes;
	"mn": MathMLGlobalAttributes;
	"none": MathMLNoneElementAttributes;
	"mo": MathMLMoElementAttributes;
	"mover": MathMLMoverElementAttributes;
	"mpadded": MathMLMpaddedElementAttributes;
	"mphantom": MathMLGlobalAttributes;
	"mprescripts": MathMLMprescriptsElementAttributes;
	"mroot": MathMLGlobalAttributes;
	"mrow": MathMLGlobalAttributes;
	"ms": MathMLMsElementAttributes;
	"semantics": MathMLSemanticsElementAttributes;
	"mspace": MathMLMspaceElementAttributes;
	"msqrt": MathMLGlobalAttributes;
	"mstyle": MathMLMstyleElementAttributes;
	"msub": MathMLMsubElementAttributes;
	"msup": MathMLMsupElementAttributes;
	"msubsup": MathMLMsubsupElementAttributes;
	"mtable": MathMLMtableElementAttributes;
	"mtd": MathMLMtdElementAttributes;
	"mtext": MathMLGlobalAttributes;
	"mtr": MathMLMtrElementAttributes;
	"munder": MathMLMunderElementAttributes;
	"munderover": MathMLMunderoverElementAttributes;
}

type GlobalAttributes = AriaAttributes & DataAttributes & EventHandlerAttributes & css.RealSVGProperties & {
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

type SVGGlobalAttributes = AriaAttributes & DataAttributes & EventHandlerAttributes & css.RealSVGProperties & {
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

type SVGFilterAttributes = {
	"height": "auto" | number | css.type.Length;
	"width": "auto" | number | css.type.Length;
	"result": string;
	"x": "auto" | number | css.type.Length;
	"y": "auto" | number | css.type.Length;
}

type SVGTransferAttributes = {
	"type": string;
	"tableValues": string | number | number[];
	"slope": number;
	"intercept": number;
	"amplitude": number;
	"exponent": number;
	"offset": string;
}

type SVGXLinkAttributes = {
	"xlink:href": string;
	"xlink:type": string;
	"xlink:role": string;
	"xlink:arcrole": string;
	"xlink:title": string;
	"xlink:show": string;
	"xlink:actuate": string;
}

type SVGGraphicalEventAttributes = {
	"onactivate": string | ((e: any) => void);
	"onfocusin": string | ((e: any) => void);
	"onfocusout": string | ((e: any) => void);
}

type MathMLGlobalAttributes = EventHandlerAttributes & DataAttributes & {
	"class": string | string[];
	"dir": "ltr" | "rtl";
	"displaystyle": BooleanUnion;
	"id": string;
	"mathbackground": css.type.Color;
	"mathcolor": css.type.Color;
	"mathsize": css.type.Length;
	"mathvariant": "normal" | "bold" | "italic" | "bold-italic" | "double-struck" | "bold-fraktur" | "script" | "bold-script" | "fraktur" | "sans-serif" | "bold-sans-serif" | "sans-serif-italic" | "sans-serif-bold-italic" | "monospace" | "initial" | "tailed" | "looped" | "stretched";
	"nonce": string;
	"scriptlevel": number | `${number}`;
	"style": string | css.RealProperties;
	"tabindex": number | `${number}`;
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
	"clipPathUnits": attr.Unit;
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

type SVGFEDiffuseLightingElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"surfaceScale": number;
	"diffuseConstant": number;
	"kernelUnitLength": number;
}

type SVGFEDisplacementMapElementAttributes = SVGGlobalAttributes & {
	"in": string;
	"in2": string;
	"scale": number;
	"xChannelSelector": "R" | "G" | "B" | "A";
	"yChannelSelector": "R" | "G" | "B" | "A";
}

type SVGFEDistantLightElementAttributes = SVGGlobalAttributes & {
	"azimuth": number;
	"elevation": number;
}

type SVGFEFloodElementAttributes = SVGGlobalAttributes & {
	"flood-color": css.type.Color;
	"flood-opacity": css.type.Alpha;
}

type SVGFEFuncAElementAttrinutes = SVGGlobalAttributes & SVGTransferAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

type SVGFEFuncBElementAttrinutes = SVGGlobalAttributes & SVGTransferAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

type SVGFEFuncGElementAttrinutes = SVGGlobalAttributes & SVGTransferAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

type SVGFEFuncRElementAttrinutes = SVGGlobalAttributes & SVGTransferAttributes & {
	"type": "identity" | "table" | "discrete" | "linear" | "gamma";
}

type SVGFEGaussianBlurElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"in": string;
	"stdDeviation": number;
	"edgeMode": attr.EdgeMode;
}

type SVGFEImageElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & SVGXLinkAttributes & {
	"preserveAspectRatio": attr.PreserveAspectRatio;
}

type SVGFEMergeElementAttributes = SVGGlobalAttributes & SVGFilterAttributes;

type SVGFEMergeNodeElementAttributes = SVGGlobalAttributes & {
	"in": string;
}

type SVGFEMorphologyElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"in": string;
	"operator": "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
	"radius": number;
}

type SVGFEOffsetElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"in": string;
	"dx": number;
	"dy": number;
}

type SVGFEPointLightElementAttributes = SVGGlobalAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"z": number | css.type.Length;
}

type SVGFESpecularLightingElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"in": string;
	"surfaceScale": number;
	"specularConstant": number;
	"specularExponent": number;
	"kernelUnitLength": number;
}

type SVGFESpotLightElementAttributes = SVGGlobalAttributes & {
	"x": number;
	"y": number;
	"z": number;
	"pointsAtX": number;
	"pointsAtY": number;
	"pointsAtZ": number;
	"specularExponent": number;
	"limitingConeAngle": number;
}

type SVGFETileElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"in": string;
}

type SVGFETurbulenceElementAttributes = SVGGlobalAttributes & SVGFilterAttributes & {
	"baseFrequency": number;
	"numOctaves": number;
	"seed": number;
	"stitchTiles": "noStitch" | "stitch";
	"type": "fractalNoise" | "turbulence";
}

type SVGFilterElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"width": number | css.type.Length;
	"height": number | css.type.Length;
	"filterRes": number;
	"filterUnits": attr.Unit;
	"primitiveUnits": attr.Unit;
}

type SVGFontElementAttributes = SVGGlobalAttributes & {
	"horiz-origin-x": number;
	"horiz-origin-y": number;
	"horiz-adv-x": number;
	"vert-origin-x": number;
	"vert-origin-y": number;
	"vert-adv-y": number;
}

type SVGFontFaceElementAttributes = SVGGlobalAttributes & {
	"font-family": string;
	"font-style": "normal" | "italic" | "oblique";
	"font-variant": string;
	"font-weight": css.RealProperties["font-weight"];
	"font-stretch": css.RealProperties["font-stretch"];
	"font-size": css.RealProperties["font-size"];
	"unicode-range": string;
	"units-per-em": number;
	"panose-1": [number, number, number, number, number, number, number, number, number, number];
	"stemv": number;
	"stemh": number;
	"slope": number;
	"cap-height": number;
	"x-height": number;
	"accent-height": number;
	"ascent": number;
	"descent": number;
	"widths": number;
	"bbox": string;
	"ideographic": number;
	"alphabetic": number;
	"mathematical": number;
	"hanging": number;
	"v-ideographic": number;
	"v-alphabetic": number;
	"v-mathematical": number;
	"v-hanging": number;
	"underline-position": number;
	"underline-thickness": number;
	"strikethrough-position": number;
	"strikethrough-thickness": number;
	"overline-position": number;
	"overline-thickness": number;
}

type SVGFontFaceFormatElementAttributes = SVGGlobalAttributes & {
	"string": string;
}

type SVGFontFaceNameElementAttributes = SVGGlobalAttributes & {
	"name": string;
}

type SVGFontFaceURIElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes;

type SVGForeignObjectElementAttributes = SVGGlobalAttributes & {
	"height": number | css.type.Length;
	"width": number | css.type.Length;
	"x": number | css.type.Length;
	"y": number | css.type.Length;
}

type SVGGlyphElementAttributes = SVGGlobalAttributes & {
	"d": string;
	"horiz-adv-x": number;
	"vert-origin-x": number;
	"vert-origin-y": number;
	"vert-adv-y": number;
	"unicode": string;
	"glyph-name": string;
	"orientation": "h" | "v";
	"arabic-form": "initial" | "medial" | "terminal" | "isolated";
	"lang": string;
}

type SVGGlyphRefElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"dx": number;
	"dy": number;
	"glyphRef": number;
	"format": number;
}

type SVGHKernElementAttributes = SVGGlobalAttributes & {
	"u1": string | string[];
	"g1": string | string[];
	"u2": string | string[];
	"g2": string | string[];
	"k": number;
}

type SVGImageElementAttributes = SVGGlobalAttributes & SVGGraphicalEventAttributes & SVGXLinkAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"width": "auto" | number | css.type.Length;
	"height": "auto" | number | css.type.Length;
	"href": string;
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"crossorigin": "anonymous" | "use-credentials" | "";
}

type SVGLineElementAttributes = SVGGlobalAttributes & {
	"x1": number | css.type.Length;
	"y1": number | css.type.Length;
	"x2": number | css.type.Length;
	"y2": number | css.type.Length;
	"pathLength": number;
}

type SVGLinearGradientElementAttributes = SVGGlobalAttributes & {
	"gradientUnits": attr.Unit;
	"gradientTransform": string;
	"href": string;
	"spreadMethod": "pad" | "reflect" | "repeat";
	"x1": number | css.type.Length;
	"x2": number | css.type.Length;
	"y1": number | css.type.Length;
	"y2": number | css.type.Length;
}

type SVGMarkerElementAttributes = SVGGlobalAttributes & {
	"markerHeight": number | css.type.Length;
	"markerUnits": "userSpaceOnUse" | "strokeWidth";
	"markerWidth": number | css.type.Length;
	"orient": "auto" | "auto-start-reverse" | number | css.type.Length;
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"refX": "left" | "center" | "right" | number | css.type.Length;
	"refY": "top" | "center" | "bottom" | number | css.type.Length;
	"viewBox": number[];
}

type SVGMaskElementAttributes = SVGGlobalAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"width": number | css.type.Length;
	"height": number | css.type.Length;
	"maskContentUnits": attr.Unit;
	"maskUnits": attr.Unit;
}

type SVGMissingGlyphElementAttributes = SVGGlobalAttributes & {
	"d": string;
	"horiz-adv-x": number;
	"vert-origin-x": number;
	"vert-origin-y": number;
	"vert-adv-y": number;
}

type SVGPathElementAttributes = SVGGlobalAttributes & {
	"d": string;
	"pathLength": number;
}

type SVGPatternElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"width": number | css.type.Length;
	"height": number | css.type.Length;
	"href": string;
	"patternContentUnits": attr.Unit;
	"patternTransform": string;
	"patternUnits": attr.Unit;
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"viewBox": number[];
}

type SVGPolygonElementAttributes = SVGGlobalAttributes & {
	"points": number[];
	"pathLength": number;
}

type SVGPolylineElementAttributes = SVGGlobalAttributes & {
	"points": number[];
	"pathLength": number;
}

type SVGRadialGradientElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"cx": number | css.type.Length;
	"cy": number | css.type.Length;
	"fr": number | css.type.Length;
	"fx": number | css.type.Length;
	"fy": number | css.type.Length;
	"gradientUnits": attr.Unit;
	"gradientTransform": string;
	"href": string;
	"r": number | css.type.Length;
	"spreadMethod": "pad" | "reflect" | "repeat";
}

type SVGRectElementAttributes = SVGGlobalAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"width": "auto" | number | css.type.Length;
	"height": "auto" | number | css.type.Length;
	"rx": "auto" | number | css.type.Length;
	"ry": "auto" | number | css.type.Length;
	"pathLength": number;
}

type SVGSetElement = SVGGlobalAttributes & SVGAnimationAttributes & {
	"fill": "freeze" | "remove";
}

type SVGStopElementAttributes = SVGGlobalAttributes & {
	"offset": number | css.type.Percentage;
	"stop-color": css.type.Color;
	"stop-opacity": number;
}

type SVGSVGElementAttributes = SVGGlobalAttributes & {
	"baseProfile": string;
	"contentScriptType": string;
	"contentStyleType": string;
	"width": number | css.type.Length;
	"height": number | css.type.Length;
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"version": string;
	"viewBox": number[];
}

type SVGSwitchElementAttributes = SVGGlobalAttributes & SVGGraphicalEventAttributes;

type SVGSymbolElementAttributes = SVGGlobalAttributes & {
	"width": "auto" | number | css.type.Length;
	"height": "auto" | number | css.type.Length;
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"refX": "left" | "center" | "right" | number | css.type.Length;
	"refY": "top" | "center" | "bottom" | number | css.type.Length;
	"viewBox": number[];
}

type SVGTextElementAttributes = SVGGlobalAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"dx": number | css.type.Length;
	"dy": number | css.type.Length;
	"rotate": number[];
	"lengthAdjust": "spacing" | "spacingAndGlyphs";
	"textLength": number | css.type.Length;
}

type SVGTextPathElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"href": string;
	"lengthAdjust": "spacing" | "spacingAndGlyphs";
	"method": "aligh" | "stretch";
	"path": string;
	"side": "left" | "right";
	"spacing": "auto" | "exact";
	"startOffset": number | css.type.Length;
	"textLength": number | css.type.Length;
}

type SVGTSpanElementAttributes = SVGGlobalAttributes & {
	"x": number | css.type.Length;
	"y": number | css.type.Length;
	"dx": number | css.type.Length;
	"dy": number | css.type.Length;
	"rotate": number[];
	"lengthAdjust": "spacing" | "spacingAndGlyphs";
	"textLength": number | css.type.Length;
}

type SVGUseElementAttributes = SVGGlobalAttributes & SVGXLinkAttributes & {
	"href": string;
	"x": number;
	"y": number;
	"width": number | css.type.Length;
	"height": number | css.type.Length;
}

type SVGViewElementAttributes = SVGGlobalAttributes & {
	"viewBox": number[];
	"preserveAspectRatio": attr.PreserveAspectRatio;
	"zoomAndPan": "disable" | "magnify";
	"viewTarget": string;
}

type SVGVkernElementAttributes = SVGGlobalAttributes & {
	"u1": string | string[];
	"g1": string | string[];
	"u2": string | string[];
	"g2": string | string[];
	"k": number;
}

type MathMLMathElementAttributes = MathMLGlobalAttributes & {
	"display": "block" | "inline";
}

type MathMLMactionElementAttributes = MathMLGlobalAttributes & {
	"actiontype": "statusline" | "toggle";
	"selection": string;
}

type MathMLAnnotationElementAttributes = MathMLGlobalAttributes & {
	"encoding": string;
	"src": string;
}

type MathMLAnnotationXMLElementAttributes = MathMLGlobalAttributes & {
	"encoding": string;
	"src": string;
}

type MathMLMencloseElementAttributes = MathMLGlobalAttributes & {
	"notation": Arrayize<"longdiv" | "actuarial" | "box" | "roundedbox" | "circle" | "left" | "right" | "top" | "bottom" | "updiagonalstrike" | "downdiagonalstrike" | "verticalstrike" | "horizontalstrike" | "madruwb" | "updiagonalarrow" | "phasorangle">;
}

type MathMLMfencedElementAttributes = MathMLGlobalAttributes & {
	"close": string;
	"open": string;
	"separators": string;
}

type MathMLMfracElementAttributes = MathMLGlobalAttributes & {
	"denomalign": "left" | "center" | "right";
	"linethickness": css.type.Length;
	"numalign": "left" | "center" | "right";
}

type MathMLMmultiscriptsElementAttributes = MathMLGlobalAttributes & {
	"subscriptshift": css.type.Length;
	"superscriptshift": css.type.Length;
}

type MathMLNoneElementAttributes = MathMLGlobalAttributes & {
	"subscriptshift": css.type.Length;
	"superscriptshift": css.type.Length;
}

type MathMLMoElementAttributes = MathMLGlobalAttributes & {
	"accent": BooleanUnion;
	"fence": BooleanUnion;
	"lspace": css.type.Length;
	"maxsize": css.type.Length;
	"minsize": css.type.Length;
	"movablelimits": BooleanUnion;
	"rspace": css.type.Length;
	"separator": BooleanUnion;
	"stretchy": BooleanUnion;
	"symmetric": BooleanUnion;
}

type MathMLMoverElementAttributes = MathMLGlobalAttributes & {
	"accent": BooleanUnion;
}

type MathMLMpaddedElementAttributes = MathMLGlobalAttributes & {
	"depth": css.type.Length;
	"height": css.type.Length;
	"lspace": css.type.Length;
	"voffset": css.type.Length;
	"width": css.type.Length;
}

type MathMLMprescriptsElementAttributes = MathMLGlobalAttributes & {
	"subscriptshift": css.type.Length;
	"superscriptshift": css.type.Length;
}

type MathMLMsElementAttributes = MathMLGlobalAttributes & {
	"lquote": string;
	"rquote": string;
}

type MathMLSemanticsElementAttributes = MathMLGlobalAttributes & {
	"encoding": string;
	"src": string;
}

type MathMLMspaceElementAttributes = MathMLGlobalAttributes & {
	"depth": css.type.Length;
	"height": css.type.Length;
	"width": css.type.Length;
}

type MathMLMstyleElementAttributes = MathMLGlobalAttributes & {
	"background": css.RealProperties["background-color"];
	"color": css.RealProperties["color"];
	"fontsize": css.RealProperties["font-size"];
	"fontstyle": css.RealProperties["font-style"];
	"fontweight": css.RealProperties["font-weight"];
	"scriptminsize": css.type.Length;
	"scriptsizemultiplier": number | `${number}`;
}

type MathMLMsubElementAttributes = MathMLGlobalAttributes & {
	"subscriptshift": css.type.Length;
}

type MathMLMsupElementAttributes = MathMLGlobalAttributes & {
	"superscriptshift": css.type.Length;
}

type MathMLMsubsupElementAttributes = MathMLGlobalAttributes & {
	"subscriptshift": css.type.Length;
	"superscriptshift": css.type.Length;
}

type MathMLMtableElementAttributes = MathMLGlobalAttributes & {
	"align": "axis" | "baseline" | "bottom" | "center" | "top" | `axis ${number}` | `baseline ${number}` | `bottom ${number}` | `center ${number}` | `top ${number}`;
	"columnalign": Arrayize<"left" | "right" | "center">;
	"columnlines": Arrayize<"none" | "solid" | "dashed">;
	"columnspacing": Arrayize<css.type.Length>;
	"frame": "none" | "solid" | "dashed";
	"framespacing": css.type.Length;
	"rowalign": Arrayize<"axis" | "baseline" | "bottom" | "center" | "top">;
	"rowlines": Arrayize<"none" | "solid" | "dashed">;
	"rowspacing": Arrayize<css.type.Length>;
	"width": css.type.Length;
}

type MathMLMtdElementAttributes = MathMLGlobalAttributes & {
	"columnspan": number | `${number}`;
	"rowspan": number | `${number}`;
	"columnalign": "left" | "center" | "right";
	"rowalign": "axis" | "baseline" | "bottom" | "center" | "top";
}

type MathMLMtrElementAttributes = MathMLGlobalAttributes & {
	"columnalign": Arrayize<"left" | "center" | "right">;
	"rowalign": "axis" | "baseline" | "bottom" | "center" | "top";
}

type MathMLMunderElementAttributes = MathMLGlobalAttributes & {
	"accentunder": BooleanUnion;
}

type MathMLMunderoverElementAttributes = MathMLGlobalAttributes & {
	"accent": BooleanUnion;
	"accentunder": BooleanUnion;
}

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

	type PreserveAspectRatio = "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax" | ["xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", "meet" | "slice"];
	
	type ReferrerPolicy = "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
	
	type Rel = "alternate" | "archives" | "author" | "bookmark" | "dns-prefetch" | "external" | "first" | "help" | "icon" | "index" | "last" | "license" | "manifest" | "next" | "nofollow" | "noopener" | "noreferrer" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prev" | "search" | "stylesheet" | "sidebar" | "tag" | "up";
	
	type Shape = "default" | "circle" | "rect" | "polygon" | "poly";
	
	type Target = "_blank" | "_parent" | "_self" | "_top";

	type Unit = "userSpaceOnUse" | "objectBoundingBox";
}

type Arrayize<T> = T | T[];
