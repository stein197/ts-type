// TODO: Replace arrays with union joining inferring
export declare module css {

	export type Properties = {
		"mozAppearance": RealProperties["appearance"] | VendorAppearanceProperty;
		"webkitPppearance": RealProperties["appearance"] | VendorAppearanceProperty;
		"webkitLineClamp": RealProperties["-webkit-line-clamp"];
		"webkitTextFillColor": RealProperties["-webkit-text-fill-color"];
		"webkitTextStroke": RealProperties["-webkit-text-stroke"];
		"webkitTextStrokeColor": RealProperties["-webkit-text-stroke-color"];
		"webkitTextStrokeWidth": RealProperties["-webkit-text-stroke-width"];
		"accentColor": RealProperties["accent-color"];
		"alignContent": RealProperties["align-content"];
		"alignItems": RealProperties["align-items"];
		"alignSelf": RealProperties["align-self"];
		"alignTracks": RealProperties["align-tracks"];
		"all": RealProperties["all"];
		"animation": RealProperties["animation"];
		"animationComposition": RealProperties["animation-composition"];
		"animationDelay": RealProperties["animation-delay"];
		"animationDirection": RealProperties["animation-direction"];
		"animationDuration": RealProperties["animation-duration"];
		"animationFillMode": RealProperties["animation-fill-mode"];
		"animationIterationCount": RealProperties["animation-iteration-count"];
		"animationName": RealProperties["animation-name"];
		"animationPlayState": RealProperties["animation-play-state"];
		"animationTimeline": RealProperties["animation-timeline"];
		"animationTimingFunction": RealProperties["animation-timing-function"];
		"appearance": RealProperties["appearance"];
		"aspectRatio": RealProperties["aspect-ratio"];
		"backdropFilter": RealProperties["backdrop-filter"];
		"backfaceVisibility": RealProperties["backface-visibility"];
		"background": RealProperties["background"];
		"backgroundAttachment": RealProperties["background-attachment"];
		"backgroundBlendMode": RealProperties["background-blend-mode"];
		"backgroundClip": RealProperties["background-clip"];
		"backgroundColor": RealProperties["background-color"];
		"backgroundImage": RealProperties["background-image"];
		"backgroundOrigin": RealProperties["background-origin"];
		"backgroundPosition": RealProperties["background-position"];
		"backgroundPositionX": RealProperties["background-position-x"];
		"backgroundPositionY": RealProperties["background-position-y"];
		"backgroundRepeat": RealProperties["background-repeat"];
		"backgroundSize": RealProperties["background-size"];
		"blockSize": RealProperties["block-size"];
		"border": RealProperties["border"];
		"borderBlock": RealProperties["border-block"];
		"borderBlockColor": RealProperties["border-block-color"];
		"borderBlockEnd": RealProperties["border-block-end"];
		"borderBlockEndColor": RealProperties["border-block-end-color"];
		"borderBlockEndStyle": RealProperties["border-block-end-style"];
		"borderBlockEndWidth": RealProperties["border-block-end-width"];
		"borderBlockStart": RealProperties["border-block-start"];
		"borderBlockStartColor": RealProperties["border-block-start-color"];
		"borderBlockStartStyle": RealProperties["border-block-start-style"];
		"borderBlockStartWidth": RealProperties["border-block-start-width"];
		"borderBlockStyle": RealProperties["border-block-style"];
		"borderBlockWidth": RealProperties["border-block-width"];
		"borderBottom": RealProperties["border-bottom"];
		"borderBottomColor": RealProperties["border-bottom-color"];
		"borderBottomLeftRadius": RealProperties["border-bottom-left-radius"];
		"borderBottomRightRadius": RealProperties["border-bottom-right-radius"];
		"borderBottomStyle": RealProperties["border-bottom-style"];
		"borderBottomWidth": RealProperties["border-bottom-width"];
		"borderCollapse": RealProperties["border-collapse"];
		"borderColor": RealProperties["border-color"];
		"borderEndEndRadius": RealProperties["border-end-end-radius"];
		"borderEndStartRadius": RealProperties["border-end-start-radius"];
		"borderImage": RealProperties["border-image"];
		"borderImageOutset": RealProperties["border-image-outset"];
		"borderImageRepeat": RealProperties["border-image-repeat"];
		"borderImageSlice": RealProperties["border-image-slice"];
		"borderImageSource": RealProperties["border-image-source"];
		"borderImageWidth": RealProperties["border-image-width"];
		"borderInline": RealProperties["border-inline"];
		"borderInlineColor": RealProperties["border-inline-color"];
		"borderInlineEnd": RealProperties["border-inline-end"];
		"borderInlineEndColor": RealProperties["border-inline-end-color"];
		"borderInlineEndStyle": RealProperties["border-inline-end-style"];
		"borderInlineEndWidth": RealProperties["border-inline-end-width"];
		"borderInlineStart": RealProperties["border-inline-start"];
		"borderInlineStartColor": RealProperties["border-inline-start-color"];
		"borderInlineStartStyle": RealProperties["border-inline-start-style"];
		"borderInlineStartWidth": RealProperties["border-inline-start-width"];
		"borderInlineStyle": RealProperties["border-inline-style"];
		"borderInlineWidth": RealProperties["border-inline-width"];
		"borderLeft": RealProperties["border-left"];
		"borderLeftColor": RealProperties["border-left-color"];
		"borderLeftStyle": RealProperties["border-left-style"];
		"borderLeftWidth": RealProperties["border-left-width"];
		"borderRadius": RealProperties["border-radius"];
		"borderRight": RealProperties["border-right"];
		"borderRightColor": RealProperties["border-right-color"];
		"borderRightStyle": RealProperties["border-right-style"];
		"borderRightWidth": RealProperties["border-right-width"];
		"borderSpacing": RealProperties["border-spacing"];
		"borderStartEndRadius": RealProperties["border-start-end-radius"];
		"borderStartStartRadius": RealProperties["border-start-start-radius"];
		"borderStyle": RealProperties["border-style"];
		"borderTop": RealProperties["border-top"];
		"borderTopColor": RealProperties["border-top-color"];
		"borderTopLeftRadius": RealProperties["border-top-left-radius"];
		"borderTopRightRadius": RealProperties["border-top-right-radius"];
		"borderTopStyle": RealProperties["border-top-style"];
		"borderTopWidth": RealProperties["border-top-width"];
		"borderWidth": RealProperties["border-width"];
		"bottom": RealProperties["bottom"];
		"boxDecorationBreak": RealProperties["box-decoration-break"];
		"boxShadow": RealProperties["box-shadow"];
		"boxSizing": RealProperties["box-sizing"];
		"breakAfter": RealProperties["break-after"];
		"breakBefore": RealProperties["break-before"];
		"breakInside": RealProperties["break-inside"];
		"captionSide": RealProperties["caption-side"];
		"caretColor": RealProperties["caret-color"];
		"clear": RealProperties["clear"];
		"clip": RealProperties["clip"];
		"clipPath": RealProperties["clip-path"];
		"color": RealProperties["color"];
		"colorScheme": RealProperties["color-scheme"];
		"columnCount": RealProperties["column-count"];
		"columnFill": RealProperties["column-fill"];
		"columnGap": RealProperties["column-gap"];
		"columnRule": RealProperties["column-rule"];
		"columnRuleColor": RealProperties["column-rule-color"];
		"columnRuleStyle": RealProperties["column-rule-style"];
		"columnRuleWidth": RealProperties["column-rule-width"];
		"columnSpan": RealProperties["column-span"];
		"columnWidth": RealProperties["column-width"];
		"columns": RealProperties["columns"];
		"contain": RealProperties["contain"];
		"containIntrinsicBlockSize": RealProperties["contain-intrinsic-block-size"];
		"containIntrinsicHeight": RealProperties["contain-intrinsic-height"];
		"containIntrinsicInlineSize": RealProperties["contain-intrinsic-inline-size"];
		"containIntrinsicSize": RealProperties["contain-intrinsic-size"];
		"containIntrinsicWidth": RealProperties["contain-intrinsic-width"];
		"content": RealProperties["content"];
		"contentVisibility": RealProperties["content-visibility"];
		"counterIncrement": RealProperties["counter-increment"];
		"counterReset": RealProperties["counter-reset"];
		"counterSet": RealProperties["counter-set"];
		"cursor": RealProperties["cursor"];
		"direction": RealProperties["direction"];
		"display": RealProperties["display"];
		"emptyCells": RealProperties["empty-cells"];
		"filter": RealProperties["filter"];
		"flex": RealProperties["flex"];
		"flexBasis": RealProperties["flex-basis"];
		"flexDirection": RealProperties["flex-direction"];
		"flexFlow": RealProperties["flex-flow"];
		"flexGrow": RealProperties["flex-grow"];
		"flexShrink": RealProperties["flex-shrink"];
		"flexWrap": RealProperties["flex-wrap"];
		"float": RealProperties["float"];
		"font": RealProperties["font"];
		"fontFamily": RealProperties["font-family"];
		"fontFeatureSettings": RealProperties["font-feature-settings"];
		"fontKerning": RealProperties["font-kerning"];
		"fontLanguageOverride": RealProperties["font-language-override"];
		"fontOpticalSizing": RealProperties["font-optical-sizing"];
		"fontSize": RealProperties["font-size"];
		"fontSizeAdjust": RealProperties["font-size-adjust"];
		"fontStretch": RealProperties["font-stretch"];
		"fontStyle": RealProperties["font-style"];
		"fontSynthesis": RealProperties["font-synthesis"];
		"fontVariant": RealProperties["font-variant"];
		"fontVariantAlternates": RealProperties["font-variant-alternates"];
		"fontVariantCaps": RealProperties["font-variant-caps"];
		"fontVariantEastAsian": RealProperties["font-variant-east-asian"];
		"fontVariantLigatures": RealProperties["font-variant-ligatures"];
		"fontVariantNumeric": RealProperties["font-variant-numeric"];
		"fontVariantPosition": RealProperties["font-variant-position"];
		"fontVariationSettings": RealProperties["font-variation-settings"];
		"fontWeight": RealProperties["font-weight"];
		"forcedColorAdjust": RealProperties["forced-color-adjust"];
		"gap": RealProperties["gap"];
		"grid": RealProperties["grid"];
		"gridArea": RealProperties["grid-area"];
		"gridAutoColumns": RealProperties["grid-auto-columns"];
		"gridAutoFlow": RealProperties["grid-auto-flow"];
		"gridAutoRows": RealProperties["grid-auto-rows"];
		"gridColumn": RealProperties["grid-column"];
		"gridColumnEnd": RealProperties["grid-column-end"];
		"gridColumnStart": RealProperties["grid-column-start"];
		"gridRow": RealProperties["grid-row"];
		"gridRowEnd": RealProperties["grid-row-end"];
		"gridRowStart": RealProperties["grid-row-start"];
		"gridTemplate": RealProperties["grid-template"];
		"gridTemplateAreas": RealProperties["grid-template-areas"];
		"gridTemplateColumns": RealProperties["grid-template-columns"];
		"gridTemplateRows": RealProperties["grid-template-rows"];
		"hangingPunctuation": RealProperties["hanging-punctuation"];
		"height": RealProperties["height"];
		"hyphenateCharacter": RealProperties["hyphenate-character"];
		"hyphens": RealProperties["hyphens"];
		"imageOrientation": RealProperties["image-orientation"];
		"imageRendering": RealProperties["image-rendering"];
		"imageResolution": RealProperties["image-resolution"];
		"imeMode": RealProperties["ime-mode"];
		"initialLetter": RealProperties["initial-letter"];
		"initialLetterAlign": RealProperties["initial-letter-align"];
		"inlineSize": RealProperties["inline-size"];
		"inset": RealProperties["inset"];
		"insetBlock": RealProperties["inset-block"];
		"insetBlockEnd": RealProperties["inset-block-end"];
		"insetBlockStart": RealProperties["inset-block-start"];
		"insetInline": RealProperties["inset-inline"];
		"insetInlineEnd": RealProperties["inset-inline-end"];
		"insetInlineStart": RealProperties["inset-inline-start"];
		"isolation": RealProperties["isolation"];
		"justifyContent": RealProperties["justify-content"];
		"justifyItems": RealProperties["justify-items"];
		"justifySelf": RealProperties["justify-self"];
		"justifyTracks": RealProperties["justify-tracks"];
		"left": RealProperties["left"];
		"letterSpacing": RealProperties["letter-spacing"];
		"lineBreak": RealProperties["line-break"];
		"lineHeight": RealProperties["line-height"];
		"lineHeightStep": RealProperties["line-height-step"];
		"listStyle": RealProperties["list-style"];
		"listStyleImage": RealProperties["list-style-image"];
		"listStylePosition": RealProperties["list-style-position"];
		"listStyleType": RealProperties["list-style-type"];
		"margin": RealProperties["margin"];
		"marginBlock": RealProperties["margin-block"];
		"marginBlockEnd": RealProperties["margin-block-end"];
		"marginBlockStart": RealProperties["margin-block-start"];
		"marginBottom": RealProperties["margin-bottom"];
		"marginInline": RealProperties["margin-inline"];
		"marginInlineEnd": RealProperties["margin-inline-end"];
		"marginInlineStart": RealProperties["margin-inline-start"];
		"marginLeft": RealProperties["margin-left"];
		"marginRight": RealProperties["margin-right"];
		"marginTop": RealProperties["margin-top"];
		"marginTrim": RealProperties["margin-trim"];
		"mask": RealProperties["mask"];
		"maskBorder": RealProperties["mask-border"];
		"maskBorderMode": RealProperties["mask-border-mode"];
		"maskBorderOutset": RealProperties["mask-border-outset"];
		"maskBorderRepeat": RealProperties["mask-border-repeat"];
		"maskBorderSlice": RealProperties["mask-border-slice"];
		"maskBorderSource": RealProperties["mask-border-source"];
		"maskBorderWidth": RealProperties["mask-border-width"];
		"maskClip": RealProperties["mask-clip"];
		"maskComposite": RealProperties["mask-composite"];
		"maskImage": RealProperties["mask-image"];
		"maskMode": RealProperties["mask-mode"];
		"maskOrigin": RealProperties["mask-origin"];
		"maskPosition": RealProperties["mask-position"];
		"maskRepeat": RealProperties["mask-repeat"];
		"maskSize": RealProperties["mask-size"];
		"maskType": RealProperties["mask-type"];
		"masonryAutoFlow": RealProperties["masonry-auto-flow"];
		"mathDepth": RealProperties["math-depth"];
		"mathShift": RealProperties["math-shift"];
		"mathStyle": RealProperties["math-style"];
		"maxBlockSize": RealProperties["max-block-size"];
		"maxHeight": RealProperties["max-height"];
		"maxInlineSize": RealProperties["max-inline-size"];
		"maxWidth": RealProperties["max-width"];
		"minBlockSize": RealProperties["min-block-size"];
		"minHeight": RealProperties["min-height"];
		"minInlineSize": RealProperties["min-inline-size"];
		"minWidth": RealProperties["min-width"];
		"mixBlendMode": RealProperties["mix-blend-mode"];
		"objectFit": RealProperties["object-fit"];
		"objectPosition": RealProperties["object-position"];
		"offset": RealProperties["offset"];
		"offsetAnchor": RealProperties["offset-anchor"];
		"offsetDistance": RealProperties["offset-distance"];
		"offsetPath": RealProperties["offset-path"];
		"offsetPosition": RealProperties["offset-position"];
		"offsetRotate": RealProperties["offset-rotate"];
		"opacity": RealProperties["opacity"];
		"order": RealProperties["order"];
		"orphans": RealProperties["orphans"];
		"outline": RealProperties["outline"];
		"outlineColor": RealProperties["outline-color"];
		"outlineOffset": RealProperties["outline-offset"];
		"outlineStyle": RealProperties["outline-style"];
		"outlineWidth": RealProperties["outline-width"];
		"overflow": RealProperties["overflow"];
		"overflowAnchor": RealProperties["overflow-anchor"];
		"overflowBlock": RealProperties["overflow-block"];
		"overflowClipMargin": RealProperties["overflow-clip-margin"];
		"overflowInline": RealProperties["overflow-inline"];
		"overflowWrap": RealProperties["overflow-wrap"];
		"overflowX": RealProperties["overflow-x"];
		"overflowY": RealProperties["overflow-y"];
		"overscrollBehavior": RealProperties["overscroll-behavior"];
		"overscrollBehaviorBlock": RealProperties["overscroll-behavior-block"];
		"overscrollBehaviorInline": RealProperties["overscroll-behavior-inline"];
		"overscrollBehaviorX": RealProperties["overscroll-behavior-x"];
		"overscrollBehaviorY": RealProperties["overscroll-behavior-y"];
		"padding": RealProperties["padding"];
		"paddingBlock": RealProperties["padding-block"];
		"paddingBlockEnd": RealProperties["padding-block-end"];
		"paddingBlockStart": RealProperties["padding-block-start"];
		"paddingBottom": RealProperties["padding-bottom"];
		"paddingInline": RealProperties["padding-inline"];
		"paddingInlineEnd": RealProperties["padding-inline-end"];
		"paddingInlineStart": RealProperties["padding-inline-start"];
		"paddingLeft": RealProperties["padding-left"];
		"paddingRight": RealProperties["padding-right"];
		"paddingTop": RealProperties["padding-top"];
		"pageBreakAfter": RealProperties["page-break-after"];
		"pageBreakBefore": RealProperties["page-break-before"];
		"pageBreakInside": RealProperties["page-break-inside"];
		"paintOrder": RealProperties["paint-order"];
		"perspective": RealProperties["perspective"];
		"perspectiveOrigin": RealProperties["perspective-origin"];
		"placeContent": RealProperties["place-content"];
		"placeItems": RealProperties["place-items"];
		"placeSelf": RealProperties["place-self"];
		"pointerEvents": RealProperties["pointer-events"];
		"position": RealProperties["position"];
		"printColorAdjust": RealProperties["print-color-adjust"];
		"quotes": RealProperties["quotes"];
		"resize": RealProperties["resize"];
		"right": RealProperties["right"];
		"rotate": RealProperties["rotate"];
		"rowGap": RealProperties["row-gap"];
		"rubyAlign": RealProperties["ruby-align"];
		"rubyPosition": RealProperties["ruby-position"];
		"scale": RealProperties["scale"];
		"scrollBehavior": RealProperties["scroll-behavior"];
		"scrollMargin": RealProperties["scroll-margin"];
		"scrollMarginBlock": RealProperties["scroll-margin-block"];
		"scrollMarginBlockEnd": RealProperties["scroll-margin-block-end"];
		"scrollMarginBlockStart": RealProperties["scroll-margin-block-start"];
		"scrollMarginBottom": RealProperties["scroll-margin-bottom"];
		"scrollMarginInline": RealProperties["scroll-margin-inline"];
		"scrollMarginInlineEnd": RealProperties["scroll-margin-inline-end"];
		"scrollMarginInlineStart": RealProperties["scroll-margin-inline-start"];
		"scrollMarginLeft": RealProperties["scroll-margin-left"];
		"scrollMarginRight": RealProperties["scroll-margin-right"];
		"scrollMarginTop": RealProperties["scroll-margin-top"];
		"scrollPadding": RealProperties["scroll-padding"];
		"scrollPaddingBlock": RealProperties["scroll-padding-block"];
		"scrollPaddingBlockEnd": RealProperties["scroll-padding-block-end"];
		"scrollPaddingBlockStart": RealProperties["scroll-padding-block-start"];
		"scrollPaddingBottom": RealProperties["scroll-padding-bottom"];
		"scrollPaddingInline": RealProperties["scroll-padding-inline"];
		"scrollPaddingInlineEnd": RealProperties["scroll-padding-inline-end"];
		"scrollPaddingInlineStart": RealProperties["scroll-padding-inline-start"];
		"scrollPaddingLeft": RealProperties["scroll-padding-left"];
		"scrollPaddingRight": RealProperties["scroll-padding-right"];
		"scrollPaddingTop": RealProperties["scroll-padding-top"];
		"scrollSnapAlign": RealProperties["scroll-snap-align"];
		"scrollSnapStop": RealProperties["scroll-snap-stop"];
		"scrollSnapType": RealProperties["scroll-snap-type"];
		"scrollTimeline": RealProperties["scroll-timeline"];
		"scrollTimelineAxis": RealProperties["scroll-timeline-axis"];
		"scrollTimelineName": RealProperties["scroll-timeline-name"];
		"scrollbarColor": RealProperties["scrollbar-color"];
		"scrollbarGutter": RealProperties["scrollbar-gutter"];
		"scrollbarWidth": RealProperties["scrollbar-width"];
		"shapeImageThreshold": RealProperties["shape-image-threshold"];
		"shapeMargin": RealProperties["shape-margin"];
		"shapeOutside": RealProperties["shape-outside"];
		"tabSize": RealProperties["tab-size"];
		"tableLayout": RealProperties["table-layout"];
		"textAlign": RealProperties["text-align"];
		"textAlignLast": RealProperties["text-align-last"];
		"textCombineUpright": RealProperties["text-combine-upright"];
		"textDecoration": RealProperties["text-decoration"];
		"textDecorationColor": RealProperties["text-decoration-color"];
		"textDecorationLine": RealProperties["text-decoration-line"];
		"textDecorationSkip": RealProperties["text-decoration-skip"];
		"textDecorationSkipInk": RealProperties["text-decoration-skip-ink"];
		"textDecorationStyle": RealProperties["text-decoration-style"];
		"textDecorationThickness": RealProperties["text-decoration-thickness"];
		"textEmphasis": RealProperties["text-emphasis"];
		"textEmphasisColor": RealProperties["text-emphasis-color"];
		"textEmphasisPosition": RealProperties["text-emphasis-position"];
		"textEmphasisStyle": RealProperties["text-emphasis-style"];
		"textIndent": RealProperties["text-indent"];
		"textJustify": RealProperties["text-justify"];
		"textOrientation": RealProperties["text-orientation"];
		"textOverflow": RealProperties["text-overflow"];
		"textRendering": RealProperties["text-rendering"];
		"textShadow": RealProperties["text-shadow"];
		"textSizeAdjust": RealProperties["text-size-adjust"];
		"textTransform": RealProperties["text-transform"];
		"textUnderlineOffset": RealProperties["text-underline-offset"];
		"textUnderlinePosition": RealProperties["text-underline-position"];
		"top": RealProperties["top"];
		"touchAction": RealProperties["touch-action"];
		"transform": RealProperties["transform"];
		"transformBox": RealProperties["transform-box"];
		"transformOrigin": RealProperties["transform-origin"];
		"transformStyle": RealProperties["transform-style"];
		"transition": RealProperties["transition"];
		"transitionDelay": RealProperties["transition-delay"];
		"transitionDuration": RealProperties["transition-duration"];
		"transitionProperty": RealProperties["transition-property"];
		"transitionTimingFunction": RealProperties["transition-timing-function"];
		"translate": RealProperties["translate"];
		"unicodeBidi": RealProperties["unicode-bidi"];
		"userSelect": RealProperties["user-select"];
		"verticalAlign": RealProperties["vertical-align"];
		"visibility": RealProperties["visibility"];
		"whiteSpace": RealProperties["white-space"];
		"widows": RealProperties["widows"];
		"width": RealProperties["width"];
		"willChange": RealProperties["will-change"];
		"wordBreak": RealProperties["word-break"];
		"wordSpacing": RealProperties["word-spacing"];
		"writingMode": RealProperties["writing-mode"];
		"zIndex": RealProperties["z-index"];
	}

	export type RealProperties = Merge<{
		"-moz-appearance": RealProperties["appearance"] | VendorAppearanceProperty;
		"-webkit-appearance": RealProperties["appearance"] | VendorAppearanceProperty;
		"-webkit-line-clamp": "none" | number;
		"-webkit-text-fill-color": type.Color;
		"-webkit-text-stroke": `${RealProperties["-webkit-text-stroke-width"]} ${RealProperties["-webkit-text-stroke-color"]}`;
		"-webkit-text-stroke-color": type.Color;
		"-webkit-text-stroke-width": type.BorderWidth;
		"accent-color": "auto" | type.Color;
		"align-content": "normal" | BaselinePosition | ContentDistribution | OverflowPosition<ContentPosition> | ContentPosition;
		"align-items": "normal" | "stretch" | BaselinePosition | OverflowPosition<SelfPosition> | SelfPosition;
		"align-self": "auto" | "normal" | "stretch" | BaselinePosition | OverflowPosition<SelfPosition> | SelfPosition;
		"align-tracks": "normal" | BaselinePosition | ContentDistribution | OverflowPosition<ContentPosition> | ContentPosition;
		"all": GlobalValue;
		"animation": string;
		"animation-composition": Arrayize<"replace" | "add" | "accumulate">;
		"animation-delay": Arrayize<type.Time | `${type.Time} ${type.Time}`>;
		"animation-direction": Arrayize<"normal" | "reverse" | "alternate" | "alternate-reverse">;
		"animation-duration": Arrayize<type.Time>;
		"animation-fill-mode": Arrayize<"none" | "forwards" | "backwards" | "both">;
		"animation-iteration-count": Arrayize<"infinite" | number>;
		"animation-name": string;
		"animation-play-state": Arrayize<"running" | "paused">;
		"animation-timeline": string;
		"animation-timing-function": Arrayize<type.EasingFunction>;
		"appearance": "none" | "auto" | "searchfield" | "textarea" | "push-button" | "slider-horizontal" | "checkbox" | "radio" | "square-button" | "menulist" | "listbox" | "meter" | "progress-bar" | "button" | "textfield" | "menulist-button";
		"aspect-ratio": "auto" | type.Ratio;
		"backdrop-filter": Arrayize<type.FilterFunction | fn.URL>;
		"backface-visibility": "visible" | "hidden";
		"background": Arrayize<string>;
		"background-attachment": Arrayize<"scroll" | "fixed" | "local">;
		"background-blend-mode": Arrayize<type.BlendMode>;
		"background-clip": Arrayize<"border-box" | "padding-box" | "content-box" | "text">;
		"background-color": type.Color;
		"background-image": Arrayize<type.Image>;
		"background-origin": Arrayize<"border-box" | "padding-box" | "content-box">;
		"background-position": Arrayize<type.Position>;
		"background-position-x": Arrayize<type.Position>;
		"background-position-y": Arrayize<type.Position>;
		"background-repeat": Arrayize<RepeatStyle>;
		"background-size": Arrayize<BackgroundSize>;
		"block-size": "auto" | Width;
		"border": string;
		"border-block": string;
		"border-block-color": PlainWithMaxArray<type.Color, 2>;
		"border-block-end": string;
		"border-block-end-color": type.Color;
		"border-block-end-style": type.BorderStyle;
		"border-block-end-width": type.BorderWidth;
		"border-block-start": string;
		"border-block-start-color": type.Color;
		"border-block-start-style": type.BorderStyle;
		"border-block-start-width": type.BorderWidth;
		"border-block-style": PlainWithMaxArray<type.BorderStyle, 2>;
		"border-block-width": PlainWithMaxArray<type.BorderWidth, 2>;
		"border-bottom": string;
		"border-bottom-color": type.Color;
		"border-bottom-left-radius": PlainWithMaxArray<type.Length, 2>;
		"border-bottom-right-radius": PlainWithMaxArray<type.Length, 2>;
		"border-bottom-style": type.BorderStyle;
		"border-bottom-width": type.BorderWidth;
		"border-collapse": "collapse" | "separate";
		"border-color": PlainWithMaxArray<type.Color, 4>;
		"border-end-end-radius": PlainWithMaxArray<type.Length, 2>;
		"border-end-start-radius": PlainWithMaxArray<type.Length, 2>;
		"border-image": string;
		"border-image-outset": PlainWithMaxArray<type.Length | number, 4>;
		"border-image-repeat": PlainWithMaxArray<"stretch" | "repeat" | "round" | "space", 4>;
		"border-image-slice": PlainWithMaxArray<number | type.Percentage | "fill", 4>;
		"border-image-source": "none" | type.Image | fn.URL;
		"border-image-width": PlainWithMaxArray<number | type.Length | "auto", 4>;
		"border-inline": string;
		"border-inline-color": type.Color;
		"border-inline-end": string;
		"border-inline-end-color": type.Color;
		"border-inline-end-style": type.BorderStyle;
		"border-inline-end-width": type.BorderWidth;
		"border-inline-start": string;
		"border-inline-start-color": type.Color;
		"border-inline-start-style": type.BorderStyle;
		"border-inline-start-width": type.BorderWidth;
		"border-inline-style": PlainWithMaxArray<type.BorderStyle, 2>;
		"border-inline-width": PlainWithMaxArray<type.BorderWidth, 2>;
		"border-left": string;
		"border-left-color": type.Color;
		"border-left-style": type.BorderStyle;
		"border-left-width": type.BorderWidth;
		"border-radius": string;
		"border-right": string;
		"border-right-color": type.Color;
		"border-right-style": type.BorderStyle;
		"border-right-width": type.BorderWidth;
		"border-spacing": PlainWithMaxArray<type.Length, 2>;
		"border-start-end-radius": PlainWithMaxArray<type.Length, 2>;
		"border-start-start-radius": PlainWithMaxArray<type.Length, 2>;
		"border-style": PlainWithMaxArray<type.BorderStyle, 4>;
		"border-top": string;
		"border-top-color": type.Color;
		"border-top-left-radius": PlainWithMaxArray<type.Length, 2>;
		"border-top-right-radius": PlainWithMaxArray<type.Length, 2>;
		"border-top-style": type.BorderStyle;
		"border-top-width": type.BorderWidth;
		"border-width": PlainWithMaxArray<type.BorderWidth, 4>;
		"bottom": type.Length | "auto";
		"box-decoration-break": "slice" | "clone";
		"box-shadow": Arrayize<string>;
		"box-sizing": "content-box" | "border-box";
		"break-after": BreakProperty;
		"break-before": BreakProperty;
		"break-inside": "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
		"caption-side": "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
		"caret-color": type.Color;
		"clear": "inline-start" | "inline-end" | "block-start" | "block-end" | "left" | "right" | "top" | "bottom" | "none";
		"clip": "auto" | type.Rect;
		"clip-path": "none" | fn.URL | "fill-box" | "stroke-box" | "view-box" | "margin-box" | "border-box" | "padding-box" | "content-box" | ["fill-box" | "stroke-box" | "view-box" | "margin-box" | "border-box" | "padding-box" | "content-box", type.Shape?];
		"color": type.Color;
		"color-scheme": string;
		"column-count": "auto" | number;
		"column-fill": "auto" | "balance" | "balance-all";
		"column-gap": "normal" | type.Length;
		"column-rule": string;
		"column-rule-color": type.Color;
		"column-rule-style": type.BorderStyle;
		"column-rule-width": type.BorderWidth;
		"column-span": "none" | "all";
		"column-width": "auto" | type.Length;
		"columns": string;
		"contain": "none" | "strict" | "content" | Arrayize<"size" | "layout" | "style" | "paint">;
		"contain-intrinsic-block-size": ContainIntrinsicProperty;
		"contain-intrinsic-height": ContainIntrinsicProperty;
		"contain-intrinsic-inline-size": ContainIntrinsicProperty;
		"contain-intrinsic-size": PlainWithMaxArray<ContainIntrinsicProperty, 2>;
		"contain-intrinsic-width": ContainIntrinsicProperty;
		"content": string;
		"content-visibility": "auto" | "visible" | "hidden";
		"counter-increment": string;
		"counter-reset": string;
		"counter-set": string;
		"cursor": string | [fn.URL, number, number, CursorProperty] | [fn.URL, number, number, CursorProperty];
		"direction": "ltr" | "rtl";
		"display": DisplayOutside | DisplayInside | [DisplayOutside, DisplayInside] | [DisplayOutside, DisplayInside | "math"] | DisplayListItem | DisplayInternal | DisplayBox | DisplayLegacy | "math";
		"empty-cells": "show" | "hide";
		"filter": "none" | Arrayize<type.FilterFunction>;
		"flex": string;
		"flex-basis": "auto" | "content" | "max-content" | "min-content" | "fit-content" | type.Length;
		"flex-direction": "row" | "row-reverse" | "column" | "column-reverse";
		"flex-flow": FlexDirection | FlexWrap | [FlexDirection, FlexWrap];
		"flex-grow": number;
		"flex-shrink": number;
		"flex-wrap": FlexWrap;
		"float": "block-start" | "block-end" | "inline-start" | "inline-end" | "snap-block" | fn.SnapBlock | "snap-inline" | fn.SnapInline | "left" | "right" | "top" | "bottom" | "none" | "footnote";
		"font": string;
		"font-family": Arrayize<string>;
		"font-feature-settings": string;
		"font-kerning": "auto" | "normal" | "none";
		"font-language-override": string;
		"font-optical-sizing": "auto" | "none";
		"font-size": type.Length | "math" | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large" | "smaller" | "larger";
		"font-size-adjust": number | ["ex-height" | "cap-height" | "ch-width" | "ic-width" | "ic-height", number];
		"font-stretch": type.Percentage | "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";
		"font-style": "normal" | "italic" | "oblique" | ["oblique", type.Angle];
		"font-synthesis": "none" | Arrayize<"weight" | "style" | "small-caps">;
		"font-variant": string;
		"font-variant-alternates": "normal" | Arrayize<"historical-forms" | fn.FontFunction>;
		"font-variant-caps": "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";
		"font-variant-east-asian": "normal" | Arrayize<"jis78" | "jis83" | "jis90" | "jis04" | "simplified" | "traditional" | "full-width" | "proportional-width" | "ruby">;
		"font-variant-ligatures": "normal" | "none" | Arrayize<"common-ligatures" | "no-common-ligatures" | "discretionary-ligatures" | "no-discretionary-ligatures" | "historical-ligatures" | "no-historical-ligatures" | "contextual" | "no-contextual">;
		"font-variant-numeric": "normal" | Arrayize<"ordinal" | "slashed-zero" | "lining-nums" | "oldstyle-nums" | "proportional-nums" | "tabular-nums" | "diagonal-fractions" | "stacked-fractions">;
		"font-variant-position": "normal" | "sub" | "super";
		"font-variation-settings": "normal" | Arrayize<[string, number]>;
		"font-weight": "bolder" | "lighter" | "normal" | "bold" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
		"forced-color-adjust": "auto" | "none" | "preserve-parent-color";
		"gap": PlainWithMaxArray<type.Length | fn.Calc, 2>;
		"grid": string;
		"grid-area": string;
		"grid-auto-columns": string;
		"grid-auto-flow": "row" | "column" | "dense" | ["row" | "column", "dense"];
		"grid-auto-rows": string;
		"grid-column": string;
		"grid-column-end": string;
		"grid-column-start": string;
		"grid-row": string;
		"grid-row-end": string;
		"grid-row-start": string;
		"grid-template": string;
		"grid-template-areas": string;
		"grid-template-columns": string;
		"grid-template-rows": string;
		"hanging-punctuation": "none" | Arrayize<"first" | "force-end" | "allow-end" | "last">;
		"height": "auto" | "fit-content" | fn.Clamp | Width;
		"hyphenate-character": string;
		"hyphens": "none" | "manual" | "auto";
		"image-orientation": "none" | "from-image" | Arrayize<type.Angle | "flip">;
		"image-rendering": "auto" | "smooth" | "high-quality" | "pixelated" | "crisp-edges";
		"image-resolution": Arrayize<"from-image" | type.Resolution> | "snap";
		"ime-mode": "auto" | "normal" | "active" | "inactive" | "disabled";
		"initial-letter": "normal" | [number, number] | [number, ("drop" | "raise")?] | ["drop" | "raise", number];
		"initial-letter-align": "border-box" | "alphabetic" | "ideographic" | "hanging" | "leading";
		"inline-size": "auto" | Width;
		"inset": "auto" | type.Length | MaxArray<type.Length, 4>;
		"inset-block": "auto" | type.Length | MaxArray<type.Length, 2>;
		"inset-block-end": "auto" | type.Length;
		"inset-block-start": "auto" | type.Length;
		"inset-inline": "auto" | type.Length | MaxArray<type.Length, 2>;
		"inset-inline-end": "auto" | type.Length;
		"inset-inline-start": "auto" | type.Length;
		"isolation": "auto" | "isolate";
		"justify-content": "normal" | ContentDistribution | ContentPosition | "left" | "right" | OverflowPosition<ContentPosition | "left" | "right">;
		"justify-items": "normal" | "stretch" | BaselinePosition | OverflowPosition<SelfPosition | "left" | "right"> | SelfPosition | "left" | "right" | "legacy" | ["legacy", "left" | "right" | "center"];
		"justify-self": "auto" | "normal" | "stretch" | BaselinePosition | OverflowPosition<SelfPosition | "left" | "right"> | SelfPosition | "left" | "right";
		"justify-tracks": Arrayize<"normal" | ContentDistribution | ContentPosition | "left" | "right" | OverflowPosition<ContentPosition | "left" | "right">>
		"left": "auto" | type.Length;
		"letter-spacing": "normal" | type.Length;
		"line-break": "auto" | "loose" | "normal" | "strict" | "anywhere";
		"line-height": "normal" | number | type.Length;
		"line-height-step": type.Length;
		"list-style": Arrayize<type.ListStylePosition | type.ListStyleImage | type.ListStyleType>;
		"list-style-image": type.ListStyleImage;
		"list-style-position": type.ListStylePosition;
		"list-style-type": type.ListStyleType;
		"margin": PlainWithMaxArray<"auto" | type.Length, 4>;
		"margin-block": PlainWithMaxArray<"auto" | type.Length, 2>;
		"margin-block-end": "auto" | type.Length;
		"margin-block-start": "auto" | type.Length;
		"margin-bottom": "auto" | type.Length;
		"margin-inline": PlainWithMaxArray<"auto" | type.Length, 2>;
		"margin-inline-end": "auto" | type.Length;
		"margin-inline-start": "auto" | type.Length;
		"margin-left": "auto" | type.Length;
		"margin-right": "auto" | type.Length;
		"margin-top": "auto" | type.Length;
		"margin-trim": "none" | "block" | "inline" | "in-flow" | "all" | Arrayize<"block-start" | "inline-start" | "block-end" | "inline-end">;
		"mask": string | Arrayize<RealProperties["mask-clip"] | RealProperties["mask-composite"] | RealProperties["mask-image"] | RealProperties["mask-mode"] | RealProperties["mask-origin"] | RealProperties["mask-position"] | RealProperties["mask-repeat"] | RealProperties["mask-size"]>;
		"mask-border": string | Arrayize<RealProperties["mask-border-mode"] | RealProperties["mask-border-outset"] | RealProperties["mask-border-repeat"] | RealProperties["mask-border-slice"] | RealProperties["mask-border-source"] | RealProperties["mask-border-width"]>;
		"mask-border-mode": "alpha" | "luminance";
		"mask-border-outset": PlainWithMaxArray<number | type.Length, 4>;
		"mask-border-repeat": PlainWithMaxArray<"stretch" | "repeat" | "round" | "space", 2>;
		"mask-border-slice": number | type.Percentage | [number | type.Percentage, "fill"?] | [number | type.Percentage, number | type.Percentage, "fill"?] | [number | type.Percentage, number | type.Percentage, number | type.Percentage, "fill"?] | [number | type.Percentage, number | type.Percentage, number | type.Percentage, number | type.Percentage, "fill"?];
		"mask-border-source": "none" | type.Image;
		"mask-border-width": PlainWithMaxArray<"auto" | number | type.Length, 4>;
		"mask-clip": Arrayize<GeometryBox>;
		"mask-composite": Arrayize<"add" | "substract" | "intersect" | "exclude">;
		"mask-image": Arrayize<"none" | type.Image>;
		"mask-mode": Arrayize<"alpha" | "luminance" | "match-source">;
		"mask-origin": Arrayize<GeometryBox>;
		"mask-position": Arrayize<type.Position>;
		"mask-repeat": Arrayize<RepeatStyle>;
		"mask-size": Arrayize<BackgroundSize>;
		"mask-type": "alpha" | "luminance";
		"masonry-auto-flow": "pack" | "next" | "definite-first" | "ordered" | ["pack" | "next", "definite-first" | "ordered"] | ["definite-first" | "ordered", "pack" | "next"];
		"math-depth": number | "auto-add" | fn.Add;
		"math-shift": "normal" | "compact";
		"math-style": "normal" | "compact";
		"max-block-size": "none" | Width;
		"max-height": "none" | Width;
		"max-inline-size": "none" | Width;
		"max-width": "none" | Width;
		"min-block-size": Width;
		"min-height": "auto" | Width;
		"min-inline-size": Width;
		"min-width": "auto" | Width;
		"mix-blend-mode": "plus-darker" | "plus-lighter" | type.BlendMode;
		"object-fit": "fill" | "contain" | "cover" | "none" | "scale-down";
		"object-position": type.Position;
		"offset": Arrayize<RealProperties["offset-anchor"] | RealProperties["offset-distance"] | RealProperties["offset-path"] | RealProperties["offset-position"] | RealProperties["offset-rotate"]>;
		"offset-anchor": "auto" | type.Position;
		"offset-distance": type.Length;
		"offset-path": "none" | fn.Ray | fn.URL | type.Shape | CoordBox | [type.Shape, CoordBox];
		"offset-position": "auto" | type.Position;
		"offset-rotate": "auto" | "rotate" | type.Angle | ["auto" | "rotate", type.Angle];
		"opacity": type.Alpha;
		"order": number;
		"orphans": number;
		"outline": string | Arrayize<RealProperties["outline-color"] | RealProperties["outline-style"] | RealProperties["outline-width"]>;
		"outline-color": type.Color;
		"outline-offset": type.Length;
		"outline-style": type.BorderStyle;
		"outline-width": type.BorderWidth;
		"overflow": PlainWithMaxArray<"visible" | "hidden" | "clip" | "scroll" | "auto" | "overlay" | "-moz-scrollbars-none" | "-moz-scrollbars-horizontal" | "-moz-scrollbars-vertical" | "-moz-hidden-unscrollable", 2>;
		"overflow-anchor": "auto" | "none";
		"overflow-block": "visible" | "hidden" | "scroll" | "auto";
		"overflow-clip-margin": "content-box" | "padding-box" | "border-box" | type.Length;
		"overflow-inline": "visible" | "hidden" | "scroll" | "auto";
		"overflow-wrap": "normal" | "break-word" | "anywhere";
		"overflow-x": "visible" | "hidden" | "clip" | "scroll" | "auto";
		"overflow-y": "visible" | "hidden" | "clip" | "scroll" | "auto";
		"overscroll-behavior": PlainWithMaxArray<"contain" | "none" | "auto", 2>;
		"overscroll-behavior-block": "contain" | "none" | "auto";
		"overscroll-behavior-inline": "contain" | "none" | "auto";
		"overscroll-behavior-x": "contain" | "none" | "auto";
		"overscroll-behavior-y": "contain" | "none" | "auto";
		"padding": PlainWithMaxArray<type.Length, 4>;
		"padding-block": PlainWithMaxArray<type.Length, 2>;
		"padding-block-end": type.Length;
		"padding-block-start": type.Length;
		"padding-bottom": type.Length;
		"padding-inline": PlainWithMaxArray<type.Length, 2>;
		"padding-inline-end": type.Length;
		"padding-inline-start": type.Length;
		"padding-left": type.Length;
		"padding-right": type.Length;
		"padding-top": type.Length;
		"page-break-after": "auto" | "always" | "avoid" | "left" | "right" | "inherit";
		"page-break-before": "auto" | "always" | "avoid" | "left" | "right" | "inherit";
		"page-break-inside": "avoid" | "auto";
		// TODO
		"paint-order": any;
		// TODO
		"perspective": any;
		// TODO
		"perspective-origin": any;
		// TODO
		"place-content": any;
		// TODO
		"place-items": any;
		// TODO
		"place-self": any;
		// TODO
		"pointer-events": any;
		// TODO
		"position": any;
		// TODO
		"print-color-adjust": any;
		// TODO
		"quotes": any;
		// TODO
		"resize": any;
		// TODO
		"right": any;
		// TODO
		"rotate": any;
		// TODO
		"row-gap": any;
		// TODO
		"ruby-align": any;
		// TODO
		"ruby-position": any;
		// TODO
		"scale": any;
		// TODO
		"scroll-behavior": any;
		// TODO
		"scroll-margin": any;
		// TODO
		"scroll-margin-block": any;
		// TODO
		"scroll-margin-block-end": any;
		// TODO
		"scroll-margin-block-start": any;
		// TODO
		"scroll-margin-bottom": any;
		// TODO
		"scroll-margin-inline": any;
		// TODO
		"scroll-margin-inline-end": any;
		// TODO
		"scroll-margin-inline-start": any;
		// TODO
		"scroll-margin-left": any;
		// TODO
		"scroll-margin-right": any;
		// TODO
		"scroll-margin-top": any;
		// TODO
		"scroll-padding": any;
		// TODO
		"scroll-padding-block": any;
		// TODO
		"scroll-padding-block-end": any;
		// TODO
		"scroll-padding-block-start": any;
		// TODO
		"scroll-padding-bottom": any;
		// TODO
		"scroll-padding-inline": any;
		// TODO
		"scroll-padding-inline-end": any;
		// TODO
		"scroll-padding-inline-start": any;
		// TODO
		"scroll-padding-left": any;
		// TODO
		"scroll-padding-right": any;
		// TODO
		"scroll-padding-top": any;
		// TODO
		"scroll-snap-align": any;
		// TODO
		"scroll-snap-stop": any;
		// TODO
		"scroll-snap-type": any;
		// TODO
		"scroll-timeline": any;
		// TODO
		"scroll-timeline-axis": any;
		// TODO
		"scroll-timeline-name": any;
		// TODO
		"scrollbar-color": any;
		// TODO
		"scrollbar-gutter": any;
		// TODO
		"scrollbar-width": any;
		// TODO
		"shape-image-threshold": any;
		// TODO
		"shape-margin": any;
		// TODO
		"shape-outside": any;
		// TODO
		"tab-size": any;
		// TODO
		"table-layout": any;
		// TODO
		"text-align": any;
		// TODO
		"text-align-last": any;
		// TODO
		"text-combine-upright": any;
		// TODO
		"text-decoration": any;
		// TODO
		"text-decoration-color": any;
		// TODO
		"text-decoration-line": any;
		// TODO
		"text-decoration-skip": any;
		// TODO
		"text-decoration-skip-ink": any;
		// TODO
		"text-decoration-style": any;
		// TODO
		"text-decoration-thickness": any;
		// TODO
		"text-emphasis": any;
		// TODO
		"text-emphasis-color": any;
		// TODO
		"text-emphasis-position": any;
		// TODO
		"text-emphasis-style": any;
		// TODO
		"text-indent": any;
		// TODO
		"text-justify": any;
		// TODO
		"text-orientation": any;
		// TODO
		"text-overflow": any;
		// TODO
		"text-rendering": any;
		// TODO
		"text-shadow": any;
		// TODO
		"text-size-adjust": any;
		// TODO
		"text-transform": any;
		// TODO
		"text-underline-offset": any;
		// TODO
		"text-underline-position": any;
		// TODO
		"top": any;
		// TODO
		"touch-action": any;
		// TODO
		"transform": any;
		// TODO
		"transform-box": any;
		// TODO
		"transform-origin": any;
		// TODO
		"transform-style": any;
		// TODO
		"transition": any;
		// TODO
		"transition-delay": any;
		// TODO
		"transition-duration": any;
		// TODO
		"transition-property": any;
		// TODO
		"transition-timing-function": any;
		// TODO
		"translate": any;
		// TODO
		"unicode-bidi": any;
		// TODO
		"user-select": any;
		// TODO
		"vertical-align": any;
		// TODO
		"visibility": any;
		// TODO
		"white-space": any;
		// TODO
		"widows": any;
		// TODO
		"width": any;
		// TODO
		"will-change": any;
		// TODO
		"word-break": any;
		// TODO
		"word-spacing": any;
		// TODO
		"writing-mode": any;
		// TODO
		"z-index": any;
	}, GlobalValue>;

	export type SVGProperties = {
		"alignmentBaseline": RealSVGProperties["alignment-baseline"];
		"baselineShift": RealSVGProperties["baseline-shift"];
		"clip": RealSVGProperties["clip"];
		"clipPath": RealSVGProperties["clip-path"];
		"clipRule": RealSVGProperties["clip-rule"];
		"color": RealSVGProperties["color"];
		"colorInterpolation": RealSVGProperties["color-interpolation"];
		"colorInterpolationFilters": RealSVGProperties["color-interpolation-filters"];
		"colorProfile": RealSVGProperties["color-profile"];
		"colorRendering": RealSVGProperties["color-rendering"];
		"cursor": RealSVGProperties["cursor"];
		"d": RealSVGProperties["d"];
		"direction": RealSVGProperties["direction"];
		"display": RealSVGProperties["display"];
		"dominantBaseline": RealSVGProperties["dominant-baseline"];
		"enableBackground": RealSVGProperties["enable-background"];
		"fill": RealSVGProperties["fill"];
		"fillOpacity": RealSVGProperties["fill-opacity"];
		"fillRule": RealSVGProperties["fill-rule"];
		"filter": RealSVGProperties["filter"];
		"floodColor": RealSVGProperties["flood-color"];
		"floodOpacity": RealSVGProperties["flood-opacity"];
		"fontFamily": RealSVGProperties["font-family"];
		"fontSize": RealSVGProperties["font-size"];
		"fontSizeAdjust": RealSVGProperties["font-size-adjust"];
		"fontStretch": RealSVGProperties["font-stretch"];
		"fontStyle": RealSVGProperties["font-style"];
		"fontVariant": RealSVGProperties["font-variant"];
		"fontWeight": RealSVGProperties["font-weight"];
		"glyphOrientationHorizontal": RealSVGProperties["glyph-orientation-horizontal"];
		"glyphOrientationVertical": RealSVGProperties["glyph-orientation-vertical"];
		"imageRendering": RealSVGProperties["image-rendering"];
		"kerning": RealSVGProperties["kerning"];
		"letterSpacing": RealSVGProperties["letter-spacing"];
		"lightingColor": RealSVGProperties["lighting-color"];
		"markerEnd": RealSVGProperties["marker-end"];
		"markerMid": RealSVGProperties["marker-mid"];
		"markerStart": RealSVGProperties["marker-start"];
		"mask": RealSVGProperties["mask"];
		"opacity": RealSVGProperties["opacity"];
		"overflow": RealSVGProperties["overflow"];
		"pointerEvents": RealSVGProperties["pointer-events"];
		"shapeRendering": RealSVGProperties["shape-rendering"];
		"solidColor": RealSVGProperties["solid-color"];
		"solidOpacity": RealSVGProperties["solid-opacity"];
		"stopColor": RealSVGProperties["stop-color"];
		"stopOpacity": RealSVGProperties["stop-opacity"];
		"stroke": RealSVGProperties["stroke"];
		"strokeDasharray": RealSVGProperties["stroke-dasharray"];
		"strokeDashoffset": RealSVGProperties["stroke-dashoffset"];
		"strokeLinecap": RealSVGProperties["stroke-linecap"];
		"strokeLinejoin": RealSVGProperties["stroke-linejoin"];
		"strokeMiterlimit": RealSVGProperties["stroke-miterlimit"];
		"strokeOpacity": RealSVGProperties["stroke-opacity"];
		"strokeWidth": RealSVGProperties["stroke-width"];
		"textAnchor": RealSVGProperties["text-anchor"];
		"textDecoration": RealSVGProperties["text-decoration"];
		"textRendering": RealSVGProperties["text-rendering"];
		"transform": RealSVGProperties["transform"];
		"unicodeBidi": RealSVGProperties["unicode-bidi"];
		"vectorEffect": RealSVGProperties["vector-effect"];
		"visibility": RealSVGProperties["visibility"];
		"wordSpacing": RealSVGProperties["word-spacing"];
		"writingMode": RealSVGProperties["writing-mode"];
	}

	export type RealSVGProperties = {
		// TODO
		"alignment-baseline": any;
		// TODO
		"baseline-shift": any;
		// TODO
		"clip": any;
		// TODO
		"clip-path": any;
		// TODO
		"clip-rule": any;
		// TODO
		"color": any;
		// TODO
		"color-interpolation": any;
		// TODO
		"color-interpolation-filters": any;
		// TODO
		"color-profile": any;
		// TODO
		"color-rendering": any;
		// TODO
		"cursor": any;
		// TODO
		"d": any;
		// TODO
		"direction": any;
		// TODO
		"display": any;
		// TODO
		"dominant-baseline": any;
		// TODO
		"enable-background": any;
		// TODO
		"fill": any;
		// TODO
		"fill-opacity": any;
		// TODO
		"fill-rule": any;
		// TODO
		"filter": any;
		// TODO
		"flood-color": any;
		// TODO
		"flood-opacity": any;
		// TODO
		"font-family": any;
		// TODO
		"font-size": any;
		// TODO
		"font-size-adjust": any;
		// TODO
		"font-stretch": any;
		// TODO
		"font-style": any;
		// TODO
		"font-variant": any;
		// TODO
		"font-weight": any;
		// TODO
		"glyph-orientation-horizontal": any;
		// TODO
		"glyph-orientation-vertical": any;
		// TODO
		"image-rendering": any;
		// TODO
		"kerning": any;
		// TODO
		"letter-spacing": any;
		// TODO
		"lighting-color": any;
		// TODO
		"marker-end": any;
		// TODO
		"marker-mid": any;
		// TODO
		"marker-start": any;
		// TODO
		"mask": any;
		// TODO
		"opacity": any;
		// TODO
		"overflow": any;
		// TODO
		"pointer-events": any;
		// TODO
		"shape-rendering": any;
		// TODO
		"solid-color": any;
		// TODO
		"solid-opacity": any;
		// TODO
		"stop-color": any;
		// TODO
		"stop-opacity": any;
		// TODO
		"stroke": any;
		// TODO
		"stroke-dasharray": any;
		// TODO
		"stroke-dashoffset": any;
		// TODO
		"stroke-linecap": any;
		// TODO
		"stroke-linejoin": any;
		// TODO
		"stroke-miterlimit": any;
		// TODO
		"stroke-opacity": any;
		// TODO
		"stroke-width": any;
		// TODO
		"text-anchor": any;
		// TODO
		"text-decoration": any;
		// TODO
		"text-rendering": any;
		// TODO
		"transform": any;
		// TODO
		"unicode-bidi": any;
		// TODO
		"vector-effect": any;
		// TODO
		"visibility": any;
		// TODO
		"word-spacing": any;
		// TODO
		"writing-mode": any;
	}

	type GlobalValue = "inherit" | "initial" | "unset" | "revert" | "revert-layer";

	type BaselinePosition = "baseline" | ["first" | "last", "baseline"];

	type ContentDistribution = "space-between" | "space-around" | "space-evenly" | "stretch";

	type ContentPosition = "center" | "start" | "end" | "flex-start" | "flex-end";

	type SelfPosition = ContentPosition | "self-start" | "self-end";

	type OverflowPosition<T extends string> = ["safe" | "unsafe", T];

	type VendorAppearanceProperty = "attachment" | "borderless-attachment" | "button-bevel" | "caps-lock-indicator" | "caret" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "color-well" | "continuous-capacity-level-indicator" | "default-button" | "discrete-capacity-level-indicator" | "inner-spin-button" | "image-controls-button" | "list-button" | "listitem" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-volume-slider" | "media-fullscreen-volume-slider-thumb" | "media-mute-button" | "media-play-button" | "media-overlay-play-button" | "media-return-to-realtime-button" | "media-rewind-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-toggle-closed-captions-button" | "media-slider" | "media-sliderthumb" | "media-volume-slider-container" | "media-volume-slider-mute-button" | "media-volume-slider" | "media-volume-sliderthumb" | "media-controls-background" | "media-controls-dark-bar-background" | "media-controls-fullscreen-background" | "media-controls-light-bar-background" | "media-current-time-display" | "media-time-remaining-display" | "menulist-text" | "menulist-textfield" | "meterbar" | "number-input" | "progress-bar-value" | "progressbar" | "progressbar-vertical" | "range" | "range-thumb" | "rating-level-indicator" | "relevancy-level-indicator" | "scale-horizontal" | "scalethumbend" | "scalethumb-horizontal" | "scalethumbstart" | "scalethumbtick" | "scalethumb-vertical" | "scale-vertical" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "searchfield-decoration" | "searchfield-results-decoration" | "searchfield-results-button" | "searchfield-cancel-button" | "snapshotted-plugin-overlay" | "sheet" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | "textfield-multiline" | "-apple-pay-button";

	type BreakProperty = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";

	type ContainIntrinsicProperty = "none" | type.Length | ["auto", type.Length];

	type CursorProperty = "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out";

	type DisplayOutside = "block" | "inline" | "run-in";

	type DisplayInside = "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby";

	type DisplayListItem = "list-item" | [DisplayOutside, "list-item"] | ["flow" | "flow-root", "list-item"] | [DisplayOutside, "flow" | "flow-root", "list-item"];

	type DisplayInternal = "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption" | "ruby-base" | "ruby-text" | "ruby-base-container" | "ruby-text-container";

	type DisplayBox = "contents" | "none";

	type DisplayLegacy = "inline-block" | "inline-table" | "inline-flex" | "inline-grid";

	type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

	type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

	type GeometryBox = "no-clip" | "fill-box" | "stroke-box" | "view-box" | "margin-box" | "border-box" | "padding-box" | "content-box";

	type RepeatStyle = "repeat-x" | "repeat-y" | PlainWithMaxArray<"repeat" | "space" | "round" | "no-repeat", 2>

	type BackgroundSize = "cover" | "contain" | PlainWithMaxArray<"auto" | type.Length, 2>;

	type Width = type.Length | "max-content" | "min-content" | fn.FitContent;

	type CoordBox = "content-box" | "padding-box" | "border-box" | "fill-box" | "stroke-box" | "view-box";

	// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
	export module type {

		export type Alpha = number | Percentage;

		export type Angle = `${number}${"deg" | "grad" | "rad" | "turn" | "%"}` | 0;

		export type Shape = `${"inset" | "circle" | "ellipse" | "polygon" | "path"}(${string})`;

		export type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";

		export type BorderStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

		export type BorderWidth = "thin" | "medium" | "thick" | Length;

		export type Color = number | `#${string}` | "black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fuchsia" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua" | "orange" | "aliceblue" | "antiquewhite" | "aquamarine" | "azure" | "beige" | "bisque" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "limegreen" | "linen" | "magenta" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "oldlace" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "whitesmoke" | "yellowgreen" | "rebeccapurple" | "transparent" | fn.ColorFunction;

		export type EasingFunction = "linear" | `linear(${string})` | "ease" | "ease-in" | "ease-out" | "ease-in-out" | `cubic-bezier(${string})` | "step-start" | "step-end" | `steps(${number})` | `steps(${number}, ${"jump-start" | "jump-end" | "jump-none" | "jump-both" | "start" | "end"})`

		export type FilterFunction = fn.FilterFunction;

		export type Flex = `${number}fr`;

		export type Frequency = `${number}${"Hz" | "kHz" | "%"}` | 0;

		export type Gradient = fn.LinearGradient | fn.RepeatingLinearGradient | fn.RadialGradient | fn.RepeatingRadialGradient | fn.ConicGradient | fn.RepeatingConicGradient;

		export type Image = fn.ImageFunction | fn.URL;

		export type Length = `${number}${"cap" | "ch" | "em" | "ex" | "ic" | "lh" | "rem" | "rlh" | "vh" | "vw" | "vi" | "vb" | "vmin" | "vmax" | "px" | "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "%"}` | 0;

		export type ListStylePosition = "inside" | "outside";

		export type ListStyleImage = "none" | Image;

		export type ListStyleType = string;

		export type Percentage = `${number}%`;

		// TODO: Refactor it, replace template types with tuples
		export type Position = ("left" | "center" | "right" | "top" | "bottom" | "start" | "end" | Length) | (`${"left" | "center" | "right" | "x-start" | "x-end" | Length} ${"top" | "center" | "bottom" | "y-start" | "y-end" | Length}`) | (`${"center" | ("left" | "right" | "x-start" | "x-end") | (`left ${Length}` | `right ${Length}` | `x-start ${Length}` | `x-end ${Length}`)} ${"center" | ("top" | "bottom" | "y-start" | "y-end") | (`top ${Length}` | `bottom ${Length}` | `y-start ${Length}` | `y-end ${Length}`)}`) | (`${"center" | ("start" | "end") | (`start ${Length}` | `end ${Length}`)} ${"center" | ("start" | "end") | (`start ${Length}` | `end ${Length}`)}`);

		export type Ratio = `${number} / ${number}`;

		export type Rect = `rect(${string})`;

		export type Resolution = `${number}${"dpi" | "dpcm" | "dppx" | "x"}`;

		export type Time = `${number}${"s" | "ms" | "%"}` | 0;

		export type TransformFunction = fn.TransformFunction;
	}

	// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
	export module fn {

		export type TransformFunction = Matrix | Matrix3D | Perspective | Rotate | Rotate3D | RotateX | RotateY | RotateZ | Scale | Scale3D | ScaleX | ScaleY | ScaleZ | Skew | SkewX | SkewX | Translate | Translate3D | TranslateX | TranslateY | TranslateZ;

		export type MathFunction = Add | Calc | Min | Max | Clamp | Round | Mod | Rem | Sin | Cos | Tan | Asin | Acos | Atan | Atan2 | Pow | Sqrt | Hypot | Log | Exp | Abs | Sign;

		export type FilterFunction = Blur | Brightness | Contrast | DropShadow | Grayscale | HueRotate | Invert | Opacity | Saturate | Sepia;

		export type ColorFunction = Color | ColorMix | ColorContrast | DeviceCMYK | HSL | HSLA | HWB | LAB | LCH | OKLAB | OKLCH | RGB | RGBA;

		export type ImageFunction = ConicGradient | Image | ImageSet | LinearGradient | RadialGradient | RepeatingLinearGradient | RepeatingRadialGradient | RepeatingConicGradient | CrossFade | Element | Paint;

		export type CounterFunction = Counter | Counters | Symbols;

		export type FontFunction = Stylistic | Styleset | CharacterVariant | Swash | Ornaments | Annotation;

		export type ShapeFunction = Circle | Ellipse | Inset | Polygon | Path;

		export type ReferenceFunction = Attr | Env | URL | Var;

		export type Grid = FitContent | MinMax | Repeat;

		export type Matrix = `matrix(${number}, ${number}, ${number}, ${number}, ${number}, ${number})`;

		export type Matrix3D = `matrix3d(${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number}, ${number})`;

		export type Perspective = `perspective(${string})`;

		export type Rotate = `rotate(${string})`;

		export type Rotate3D = `rotate(${string})`;

		export type RotateX = `rotateX(${string})`;

		export type RotateY = `rotateY(${string})`;

		export type RotateZ = `rotateZ(${string})`;

		export type Scale = `scale(${string})`;

		export type Scale3D = `scale3d(${number}, ${number}, ${number})`;

		export type ScaleX = `scaleX(${number})`;

		export type ScaleY = `scaleY(${number})`;

		export type ScaleZ = `scaleZ(${number})`;

		export type Skew = `skew(${string})`;

		export type SkewX = `skewX(${string})`;

		export type SkewY = `skewY(${string})`;

		export type Translate = `translate(${string})`;

		export type Translate3D = `translate3d(${string})`;

		export type TranslateX = `translateX(${string})`;

		export type TranslateY = `translateY(${string})`;

		export type TranslateZ = `translateZ(${string})`;

		export type Add = `add(${string})`;

		export type Calc = `calc(${string})`;

		export type Min = `min(${string})`;

		export type Max = `max(${string})`;

		export type Clamp = `clamp(${string})`;

		export type Round = `round(${string})`;

		export type Mod = `mod(${string})`;

		export type Rem = `rem(${string})`;

		export type Sin = `sin(${string})`;

		export type Cos = `cos(${string})`;

		export type Tan = `tan(${string})`;

		export type Asin = `asin(${string})`;

		export type Acos = `acos(${string})`;

		export type Atan = `atan(${string})`;

		export type Atan2 = `atan2(${string})`;

		export type Pow = `pow(${string})`;

		export type Sqrt = `sqrt(${string})`;

		export type Hypot = `hypot(${string})`;

		export type Log = `log(${string})`;

		export type Exp = `exp(${string})`;

		export type Abs = `abs(${string})`;

		export type Sign = `sign(${string})`;

		export type Blur = `blur(${string})`;

		export type Brightness = `brightness(${string})`;

		export type Contrast = `contrast(${string})`;

		export type DropShadow = `drop-shadow(${string})`;

		export type Grayscale = `grayscale(${string})`;

		export type HueRotate = `hue-rotate(${string})`;

		export type Invert = `invert(${string})`;

		export type Opacity = `opacity(${string})`;

		export type Saturate = `saturate(${string})`;

		export type Sepia = `sepia(${string})`;

		export type Color = `color(${string})`;

		export type ColorMix = `color-mix(${string})`;

		export type ColorContrast = `color-contrast(${string})`;

		export type DeviceCMYK = `device-cmyk(${string})`;

		export type HSL = `hsl(${string})`;

		export type HSLA = `hsla(${string})`;

		export type HWB = `hvb(${string})`;

		export type LAB = `lab(${string})`;

		export type LCH = `lch(${string})`;

		export type OKLAB = `oklab(${string})`;

		export type OKLCH = `oklch(${string})`;

		export type RGB = `rgb(${string})`;

		export type RGBA = `rgba(${string})`;

		export type ConicGradient = `conic-gradient(${string})`;

		export type Image = `image(${string})`;

		export type ImageSet = `image-set(${string})`;

		export type LinearGradient = `linear-gradient(${string})`;

		export type RadialGradient = `radial-gradient(${string})`;

		export type RepeatingLinearGradient = `repeating-linear-gradient(${string})`;

		export type RepeatingRadialGradient = `repeating-radial-gradient(${string})`;

		export type RepeatingConicGradient = `repeating-conic-gradient(${string})`;

		export type CrossFade = `cross-fade(${string})`;

		export type Element = `element(${string})`;

		export type MozElement = `-moz-element(${string})`;

		export type Paint = `paint(${string})`;

		export type Counter = `counter(${string})`;

		export type Counters = `counters(${string})`;

		export type Symbols = `symbols(${string})`;

		export type Stylistic = `stylistic(${string})`;

		export type Styleset = `styleset(${string})`;

		export type CharacterVariant = `character-variant(${string})`;

		export type Swash = `swash(${string})`;

		export type Ornaments = `ornaments(${string})`;

		export type Annotation = `annotation(${string})`;

		export type Circle = `circle(${string})`;

		export type Ellipse = `ellipse(${string})`;

		export type Inset = `inset(${string})`;

		export type Polygon = `polygon(${string})`;

		export type Path = `path(${string})`;

		export type Attr = `attr(${string})`;

		export type Env = `env(${string})`;

		export type URL = `url(${string})`;

		export type Var = `var(${string})`;

		export type FitContent = `fit-content(${string})`;

		export type MinMax = `minmax(${string})`;

		export type Repeat = `repeat(${string})`;

		export type SnapBlock = `snap-block(${string})`;

		export type SnapInline = `snap-inline(${string})`;

		export type Ray = `ray(${string})`;
	}
}

type Merge<T extends object, U> = {
	[K in keyof T]: T[K] | U;
}

// TODO: Try to replace it with repeating string pattern type
type Arrayize<T> = T | T[];

type MaxArray<T, L extends number, U extends T[] = [T]> = U extends {length: L} ? U : (U | MaxArray<T, L, [...U, T]>);

type PlainWithMaxArray<T, L extends number> = T | MaxArray<T, L>;
