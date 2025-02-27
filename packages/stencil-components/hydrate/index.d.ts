// Generated by dts-bundle-generator v7.1.0

declare class MockAttributeMap {
	caseInsensitive: boolean;
	__items: MockAttr[];
	constructor(caseInsensitive?: boolean);
	get length(): number;
	item(index: number): MockAttr;
	setNamedItem(attr: MockAttr): void;
	setNamedItemNS(attr: MockAttr): void;
	getNamedItem(attrName: string): MockAttr;
	getNamedItemNS(namespaceURI: string | null, attrName: string): MockAttr;
	removeNamedItem(attr: MockAttr): void;
	removeNamedItemNS(attr: MockAttr): void;
	[Symbol.iterator](): {
		next: () => {
			done: boolean;
			value: MockAttr;
		};
	};
	get [Symbol.toStringTag](): string;
}
declare class MockAttr {
	private _name;
	private _value;
	private _namespaceURI;
	constructor(attrName: string, attrValue: string, namespaceURI?: string | null);
	get name(): string;
	set name(value: string);
	get value(): string;
	set value(value: string);
	get nodeName(): string;
	set nodeName(value: string);
	get nodeValue(): string;
	set nodeValue(value: string);
	get namespaceURI(): string;
	set namespaceURI(namespaceURI: string);
}
declare class MockClassList {
	private elm;
	constructor(elm: HTMLElement);
	add(...classNames: string[]): void;
	remove(...classNames: string[]): void;
	contains(className: string): boolean;
	toggle(className: string): void;
	get length(): number;
	item(index: number): string;
	toString(): string;
}
declare class MockCSSStyleDeclaration {
	private _styles;
	setProperty(prop: string, value: string): void;
	getPropertyValue(prop: string): string;
	removeProperty(prop: string): void;
	get length(): number;
	get cssText(): string;
	set cssText(cssText: string);
}
declare class MockHistory {
	private items;
	get length(): number;
	back(): void;
	forward(): void;
	go(_value: number): void;
	pushState(_state: any, _title: string, _url: string): void;
	replaceState(_state: any, _title: string, _url: string): void;
}
declare class MockIntersectionObserver {
	constructor();
	disconnect(): void;
	observe(): void;
	takeRecords(): any[];
	unobserve(): void;
}
declare class MockLocation implements Location {
	ancestorOrigins: any;
	protocol: string;
	host: string;
	hostname: string;
	port: string;
	pathname: string;
	search: string;
	hash: string;
	username: string;
	password: string;
	origin: string;
	private _href;
	get href(): string;
	set href(value: string);
	assign(_url: string): void;
	reload(_forcedReload?: boolean): void;
	replace(_url: string): void;
	toString(): string;
}
declare class MockNavigator {
	appCodeName: string;
	appName: string;
	appVersion: string;
	platform: string;
	userAgent: string;
}
declare class MockStorage {
	private items;
	key(_value: number): void;
	getItem(key: string): string;
	setItem(key: string, value: string): void;
	removeItem(key: string): void;
	clear(): void;
}
declare const nativeClearInterval: typeof clearInterval;
declare const nativeClearTimeout: typeof clearTimeout;
declare const nativeSetInterval: typeof setInterval;
declare const nativeSetTimeout: typeof setTimeout;
declare class MockWindow {
	__timeouts: Set<any>;
	__history: MockHistory;
	__elementCstr: any;
	__htmlElementCstr: any;
	__charDataCstr: any;
	__docTypeCstr: any;
	__docCstr: any;
	__docFragCstr: any;
	__domTokenListCstr: any;
	__nodeCstr: any;
	__nodeListCstr: any;
	__localStorage: MockStorage;
	__sessionStorage: MockStorage;
	__location: MockLocation;
	__navigator: MockNavigator;
	__clearInterval: typeof nativeClearInterval;
	__clearTimeout: typeof nativeClearTimeout;
	__setInterval: typeof nativeSetInterval;
	__setTimeout: typeof nativeSetTimeout;
	__maxTimeout: number;
	__allowInterval: boolean;
	URL: typeof URL;
	console: Console;
	customElements: CustomElementRegistry;
	document: Document;
	performance: Performance;
	devicePixelRatio: number;
	innerHeight: number;
	innerWidth: number;
	pageXOffset: number;
	pageYOffset: number;
	screen: Screen;
	screenLeft: number;
	screenTop: number;
	screenX: number;
	screenY: number;
	scrollX: number;
	scrollY: number;
	CustomEvent: typeof MockCustomEvent;
	Event: typeof MockEvent;
	Headers: typeof MockHeaders;
	FocusEvent: typeof MockFocusEvent;
	KeyboardEvent: typeof MockKeyboardEvent;
	MouseEvent: typeof MockMouseEvent;
	constructor(html?: string | boolean);
	addEventListener(type: string, handler: (ev?: any) => void): void;
	alert(msg: string): void;
	blur(): any;
	cancelAnimationFrame(id: any): void;
	cancelIdleCallback(id: any): void;
	get CharacterData(): any;
	set CharacterData(charDataCstr: any);
	clearInterval(id: any): void;
	clearTimeout(id: any): void;
	close(): void;
	confirm(): boolean;
	get CSS(): {
		supports: () => boolean;
	};
	get Document(): any;
	set Document(docCstr: any);
	get DocumentFragment(): any;
	set DocumentFragment(docFragCstr: any);
	get DocumentType(): any;
	set DocumentType(docTypeCstr: any);
	get DOMTokenList(): any;
	set DOMTokenList(domTokenListCstr: any);
	dispatchEvent(ev: MockEvent): boolean;
	get Element(): any;
	fetch(input: any, init?: any): any;
	focus(): any;
	getComputedStyle(_: any): any;
	get globalThis(): this;
	get history(): any;
	set history(hsty: any);
	get JSON(): JSON;
	get HTMLElement(): any;
	set HTMLElement(htmlElementCstr: any);
	get IntersectionObserver(): typeof MockIntersectionObserver;
	get localStorage(): MockStorage;
	set localStorage(locStorage: MockStorage);
	get location(): MockLocation;
	set location(val: Location | string);
	matchMedia(): {
		matches: boolean;
	};
	get Node(): any;
	get NodeList(): any;
	get navigator(): any;
	set navigator(nav: any);
	get parent(): any;
	prompt(): string;
	open(): any;
	get origin(): string;
	removeEventListener(type: string, handler: any): void;
	requestAnimationFrame(callback: (timestamp: number) => void): number;
	requestIdleCallback(callback: (deadline: {
		didTimeout: boolean;
		timeRemaining: () => number;
	}) => void): number;
	scroll(_x?: number, _y?: number): void;
	scrollBy(_x?: number, _y?: number): void;
	scrollTo(_x?: number, _y?: number): void;
	get self(): this;
	get sessionStorage(): any;
	set sessionStorage(locStorage: any);
	setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;
	setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;
	get top(): this;
	get window(): this;
	onanimationstart(): void;
	onanimationend(): void;
	onanimationiteration(): void;
	onabort(): void;
	onauxclick(): void;
	onbeforecopy(): void;
	onbeforecut(): void;
	onbeforepaste(): void;
	onblur(): void;
	oncancel(): void;
	oncanplay(): void;
	oncanplaythrough(): void;
	onchange(): void;
	onclick(): void;
	onclose(): void;
	oncontextmenu(): void;
	oncopy(): void;
	oncuechange(): void;
	oncut(): void;
	ondblclick(): void;
	ondrag(): void;
	ondragend(): void;
	ondragenter(): void;
	ondragleave(): void;
	ondragover(): void;
	ondragstart(): void;
	ondrop(): void;
	ondurationchange(): void;
	onemptied(): void;
	onended(): void;
	onerror(): void;
	onfocus(): void;
	onfocusin(): void;
	onfocusout(): void;
	onformdata(): void;
	onfullscreenchange(): void;
	onfullscreenerror(): void;
	ongotpointercapture(): void;
	oninput(): void;
	oninvalid(): void;
	onkeydown(): void;
	onkeypress(): void;
	onkeyup(): void;
	onload(): void;
	onloadeddata(): void;
	onloadedmetadata(): void;
	onloadstart(): void;
	onlostpointercapture(): void;
	onmousedown(): void;
	onmouseenter(): void;
	onmouseleave(): void;
	onmousemove(): void;
	onmouseout(): void;
	onmouseover(): void;
	onmouseup(): void;
	onmousewheel(): void;
	onpaste(): void;
	onpause(): void;
	onplay(): void;
	onplaying(): void;
	onpointercancel(): void;
	onpointerdown(): void;
	onpointerenter(): void;
	onpointerleave(): void;
	onpointermove(): void;
	onpointerout(): void;
	onpointerover(): void;
	onpointerup(): void;
	onprogress(): void;
	onratechange(): void;
	onreset(): void;
	onresize(): void;
	onscroll(): void;
	onsearch(): void;
	onseeked(): void;
	onseeking(): void;
	onselect(): void;
	onselectstart(): void;
	onstalled(): void;
	onsubmit(): void;
	onsuspend(): void;
	ontimeupdate(): void;
	ontoggle(): void;
	onvolumechange(): void;
	onwaiting(): void;
	onwebkitfullscreenchange(): void;
	onwebkitfullscreenerror(): void;
	onwheel(): void;
}
declare class MockEvent {
	bubbles: boolean;
	cancelBubble: boolean;
	cancelable: boolean;
	composed: boolean;
	currentTarget: MockElement;
	defaultPrevented: boolean;
	srcElement: MockElement;
	target: MockElement;
	timeStamp: number;
	type: string;
	constructor(type: string, eventInitDict?: EventInit);
	preventDefault(): void;
	stopPropagation(): void;
	stopImmediatePropagation(): void;
	composedPath(): MockElement[];
}
declare class MockCustomEvent extends MockEvent {
	detail: any;
	constructor(type: string, customEventInitDic?: CustomEventInit);
}
declare class MockKeyboardEvent extends MockEvent {
	code: string;
	key: string;
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	shiftKey: boolean;
	location: number;
	repeat: boolean;
	constructor(type: string, keyboardEventInitDic?: KeyboardEventInit);
}
declare class MockMouseEvent extends MockEvent {
	screenX: number;
	screenY: number;
	clientX: number;
	clientY: number;
	ctrlKey: boolean;
	shiftKey: boolean;
	altKey: boolean;
	metaKey: boolean;
	button: number;
	buttons: number;
	relatedTarget: EventTarget;
	constructor(type: string, mouseEventInitDic?: MouseEventInit);
}
declare class MockUIEvent extends MockEvent {
	detail: number | null;
	view: MockWindow | null;
	constructor(type: string, uiEventInitDic?: UIEventInit);
}
declare class MockFocusEvent extends MockUIEvent {
	relatedTarget: EventTarget | null;
	constructor(type: "blur" | "focus", focusEventInitDic?: FocusEventInit);
}
declare class MockEventListener {
	type: string;
	handler: (ev?: any) => void;
	constructor(type: string, handler: any);
}
export interface EventTarget {
	__listeners: MockEventListener[];
}
export interface SerializeNodeToHtmlOptions {
	approximateLineWidth?: number;
	excludeTagContent?: string[];
	excludeTags?: string[];
	indentSpaces?: number;
	newLines?: boolean;
	outerHtml?: boolean;
	prettyHtml?: boolean;
	removeAttributeQuotes?: boolean;
	removeBooleanAttributeQuotes?: boolean;
	removeEmptyAttributes?: boolean;
	removeHtmlComments?: boolean;
	serializeShadowRoot?: boolean;
}
declare class MockNode {
	private _nodeValue;
	nodeName: string | null;
	nodeType: number;
	ownerDocument: any;
	parentNode: MockNode | null;
	childNodes: MockNode[];
	constructor(ownerDocument: any, nodeType: number, nodeName: string | null, nodeValue: string | null);
	appendChild(newNode: MockNode): MockNode;
	append(...items: (MockNode | string)[]): void;
	prepend(...items: (MockNode | string)[]): void;
	cloneNode(deep?: boolean): MockNode;
	compareDocumentPosition(_other: MockNode): number;
	get firstChild(): MockNode | null;
	insertBefore(newNode: MockNode, referenceNode: MockNode): MockNode;
	get isConnected(): boolean;
	isSameNode(node: any): boolean;
	get lastChild(): MockNode | null;
	get nextSibling(): MockNode | null;
	get nodeValue(): string;
	set nodeValue(value: string);
	get parentElement(): any;
	set parentElement(value: any);
	get previousSibling(): MockNode | null;
	contains(otherNode: MockNode): boolean;
	removeChild(childNode: MockNode): MockNode;
	remove(): void;
	replaceChild(newChild: MockNode, oldChild: MockNode): MockNode;
	get textContent(): string;
	set textContent(value: string);
	static ELEMENT_NODE: number;
	static TEXT_NODE: number;
	static PROCESSING_INSTRUCTION_NODE: number;
	static COMMENT_NODE: number;
	static DOCUMENT_NODE: number;
	static DOCUMENT_TYPE_NODE: number;
	static DOCUMENT_FRAGMENT_NODE: number;
}
declare class MockElement extends MockNode {
	namespaceURI: string | null;
	__attributeMap: MockAttributeMap | null | undefined;
	__shadowRoot: ShadowRoot | null | undefined;
	__style: MockCSSStyleDeclaration | null | undefined;
	constructor(ownerDocument: any, nodeName: string | null);
	addEventListener(type: string, handler: (ev?: any) => void): void;
	attachShadow(_opts: ShadowRootInit): any;
	blur(): void;
	get shadowRoot(): any;
	set shadowRoot(shadowRoot: any);
	get attributes(): MockAttributeMap;
	set attributes(attrs: MockAttributeMap);
	get children(): MockElement[];
	get childElementCount(): number;
	get className(): string;
	set className(value: string);
	get classList(): MockClassList;
	click(): void;
	cloneNode(_deep?: boolean): MockElement;
	closest(selector: string): this;
	get dataset(): any;
	get dir(): string;
	set dir(value: string);
	dispatchEvent(ev: MockEvent): boolean;
	get firstElementChild(): MockElement | null;
	focus(_options?: {
		preventScroll?: boolean;
	}): void;
	getAttribute(attrName: string): any;
	getAttributeNS(namespaceURI: string | null, attrName: string): string;
	getBoundingClientRect(): {
		bottom: number;
		height: number;
		left: number;
		right: number;
		top: number;
		width: number;
		x: number;
		y: number;
	};
	getRootNode(opts?: {
		composed?: boolean;
		[key: string]: any;
	}): Node;
	get draggable(): boolean;
	set draggable(value: boolean);
	hasChildNodes(): boolean;
	get id(): string;
	set id(value: string);
	get innerHTML(): string;
	set innerHTML(html: string);
	get innerText(): string;
	set innerText(value: string);
	insertAdjacentElement(position: "beforebegin" | "afterbegin" | "beforeend" | "afterend", elm: MockHTMLElement): MockHTMLElement;
	insertAdjacentHTML(position: "beforebegin" | "afterbegin" | "beforeend" | "afterend", html: string): void;
	insertAdjacentText(position: "beforebegin" | "afterbegin" | "beforeend" | "afterend", text: string): void;
	hasAttribute(attrName: string): boolean;
	hasAttributeNS(namespaceURI: string | null, name: string): boolean;
	get hidden(): boolean;
	set hidden(isHidden: boolean);
	get lang(): string;
	set lang(value: string);
	get lastElementChild(): MockElement | null;
	matches(selector: string): boolean;
	get nextElementSibling(): any;
	get outerHTML(): string;
	get previousElementSibling(): any;
	getElementsByClassName(classNames: string): MockElement[];
	getElementsByTagName(tagName: string): MockElement[];
	querySelector(selector: string): Element;
	querySelectorAll(selector: string): Element[];
	removeAttribute(attrName: string): void;
	removeAttributeNS(namespaceURI: string | null, attrName: string): void;
	removeEventListener(type: string, handler: any): void;
	setAttribute(attrName: string, value: any): void;
	setAttributeNS(namespaceURI: string | null, attrName: string, value: any): void;
	get style(): any;
	set style(val: any);
	get tabIndex(): number;
	set tabIndex(value: number);
	get tagName(): string;
	set tagName(value: string);
	get textContent(): string;
	set textContent(value: string);
	get title(): string;
	set title(value: string);
	animate(): void;
	onanimationstart(): void;
	onanimationend(): void;
	onanimationiteration(): void;
	onabort(): void;
	onauxclick(): void;
	onbeforecopy(): void;
	onbeforecut(): void;
	onbeforepaste(): void;
	onblur(): void;
	oncancel(): void;
	oncanplay(): void;
	oncanplaythrough(): void;
	onchange(): void;
	onclick(): void;
	onclose(): void;
	oncontextmenu(): void;
	oncopy(): void;
	oncuechange(): void;
	oncut(): void;
	ondblclick(): void;
	ondrag(): void;
	ondragend(): void;
	ondragenter(): void;
	ondragleave(): void;
	ondragover(): void;
	ondragstart(): void;
	ondrop(): void;
	ondurationchange(): void;
	onemptied(): void;
	onended(): void;
	onerror(): void;
	onfocus(): void;
	onfocusin(): void;
	onfocusout(): void;
	onformdata(): void;
	onfullscreenchange(): void;
	onfullscreenerror(): void;
	ongotpointercapture(): void;
	oninput(): void;
	oninvalid(): void;
	onkeydown(): void;
	onkeypress(): void;
	onkeyup(): void;
	onload(): void;
	onloadeddata(): void;
	onloadedmetadata(): void;
	onloadstart(): void;
	onlostpointercapture(): void;
	onmousedown(): void;
	onmouseenter(): void;
	onmouseleave(): void;
	onmousemove(): void;
	onmouseout(): void;
	onmouseover(): void;
	onmouseup(): void;
	onmousewheel(): void;
	onpaste(): void;
	onpause(): void;
	onplay(): void;
	onplaying(): void;
	onpointercancel(): void;
	onpointerdown(): void;
	onpointerenter(): void;
	onpointerleave(): void;
	onpointermove(): void;
	onpointerout(): void;
	onpointerover(): void;
	onpointerup(): void;
	onprogress(): void;
	onratechange(): void;
	onreset(): void;
	onresize(): void;
	onscroll(): void;
	onsearch(): void;
	onseeked(): void;
	onseeking(): void;
	onselect(): void;
	onselectstart(): void;
	onstalled(): void;
	onsubmit(): void;
	onsuspend(): void;
	ontimeupdate(): void;
	ontoggle(): void;
	onvolumechange(): void;
	onwaiting(): void;
	onwebkitfullscreenchange(): void;
	onwebkitfullscreenerror(): void;
	onwheel(): void;
	requestFullscreen(): void;
	scrollBy(): void;
	scrollTo(): void;
	scrollIntoView(): void;
	toString(opts?: SerializeNodeToHtmlOptions): string;
}
declare class MockHTMLElement extends MockElement {
	namespaceURI: string;
	constructor(ownerDocument: any, nodeName: string);
	get tagName(): string;
	set tagName(value: string);
	get attributes(): MockAttributeMap;
	set attributes(attrs: MockAttributeMap);
}
declare class MockHeaders {
	private _values;
	constructor(init?: string[][] | Map<string, string> | any);
	append(key: string, value: string): void;
	delete(key: string): void;
	entries(): any;
	forEach(cb: (value: string, key: string) => void): void;
	get(key: string): string;
	has(key: string): boolean;
	keys(): {
		next(): {
			value: string;
			done: boolean;
		};
		[Symbol.iterator](): any;
	};
	set(key: string, value: string): void;
	values(): any;
	[Symbol.iterator](): any;
}
export declare function createWindowFromHtml(templateHtml: string, uniqueId: string): MockWindow;
export interface HydrateDocumentOptions {
	/**
	 * Build ID that will be added to `<html data-stencil-build="BUILD_ID">`. By default
	 * a random ID will be generated
	 */
	buildId?: string;
	/**
	 * Sets the `href` attribute on the `<link rel="canonical">`
	 * tag within the `<head>`. If the value is not defined it will
	 * ensure a canonical link tag is no included in the `<head>`.
	 */
	canonicalUrl?: string;
	/**
	 * Include the HTML comments and attributes used by the clientside
	 * JavaScript to read the structure of the HTML and rebuild each
	 * component. Defaults to `true`.
	 */
	clientHydrateAnnotations?: boolean;
	/**
	 * Constrain `setTimeout()` to 1ms, but still async. Also
	 * only allows `setInterval()` to fire once, also constrained to 1ms.
	 * Defaults to `true`.
	 */
	constrainTimeouts?: boolean;
	/**
	 * Sets `document.cookie`
	 */
	cookie?: string;
	/**
	 * Sets the `dir` attribute on the top level `<html>`.
	 */
	direction?: string;
	/**
	 * Component tag names listed here will not be prerendered, nor will
	 * hydrated on the clientside. Components listed here will be ignored
	 * as custom elements and treated no differently than a `<div>`.
	 */
	excludeComponents?: string[];
	/**
	 * Sets the `lang` attribute on the top level `<html>`.
	 */
	language?: string;
	/**
	 * Maximum number of components to hydrate on one page. Defaults to `300`.
	 */
	maxHydrateCount?: number;
	/**
	 * Sets `document.referrer`
	 */
	referrer?: string;
	/**
	 * Removes every `<script>` element found in the `document`. Defaults to `false`.
	 */
	removeScripts?: boolean;
	/**
	 * Removes CSS not used by elements within the `document`. Defaults to `true`.
	 */
	removeUnusedStyles?: boolean;
	/**
	 * The url the runtime uses for the resources, such as the assets directory.
	 */
	resourcesUrl?: string;
	/**
	 * Prints out runtime console logs to the NodeJS process. Defaults to `false`.
	 */
	runtimeLogging?: boolean;
	/**
	 * Component tags listed here will only be prerendered or serverside-rendered
	 * and will not be clientside hydrated. This is useful for components that
	 * are not dynamic and do not need to be defined as a custom element within the
	 * browser. For example, a header or footer component would be a good example that
	 * may not require any clientside JavaScript.
	 */
	staticComponents?: string[];
	/**
	 * The amount of milliseconds to wait for a page to finish rendering until
	 * a timeout error is thrown. Defaults to `15000`.
	 */
	timeout?: number;
	/**
	 * Sets `document.title`.
	 */
	title?: string;
	/**
	 * Sets `location.href`
	 */
	url?: string;
	/**
	 * Sets `navigator.userAgent`
	 */
	userAgent?: string;
}
export interface SerializeDocumentOptions extends HydrateDocumentOptions {
	/**
	 * Runs after the `document` has been hydrated.
	 */
	afterHydrate?(document: any): any | Promise<any>;
	/**
	 * Sets an approximate line width the HTML should attempt to stay within.
	 * Note that this is "approximate", in that HTML may often not be able
	 * to be split at an exact line width. Additionally, new lines created
	 * is where HTML naturally already has whitespace, such as before an
	 * attribute or spaces between words. Defaults to `100`.
	 */
	approximateLineWidth?: number;
	/**
	 * Runs before the `document` has been hydrated.
	 */
	beforeHydrate?(document: any): any | Promise<any>;
	/**
	 * Format the HTML in a nicely indented format.
	 * Defaults to `false`.
	 */
	prettyHtml?: boolean;
	/**
	 * Remove quotes from attribute values when possible.
	 * Defaults to `true`.
	 */
	removeAttributeQuotes?: boolean;
	/**
	 * Remove the `=""` from standardized `boolean` attributes,
	 * such as `hidden` or `checked`. Defaults to `true`.
	 */
	removeBooleanAttributeQuotes?: boolean;
	/**
	 * Remove these standardized attributes when their value is empty:
	 * `class`, `dir`, `id`, `lang`, and `name`, `title`. Defaults to `true`.
	 */
	removeEmptyAttributes?: boolean;
	/**
	 * Remove HTML comments. Defaults to `true`.
	 */
	removeHtmlComments?: boolean;
}
export interface HydrateFactoryOptions extends SerializeDocumentOptions {
	serializeToHtml: boolean;
	destroyWindow: boolean;
	destroyDocument: boolean;
}
export interface Diagnostic {
	level: "error" | "warn" | "info" | "log" | "debug";
	type: string;
	header?: string;
	language?: string;
	messageText: string;
	debugText?: string;
	code?: string;
	absFilePath?: string;
	relFilePath?: string;
	lineNumber?: number;
	columnNumber?: number;
	lines?: {
		lineIndex: number;
		lineNumber: number;
		text?: string;
		errorCharStart: number;
		errorLength?: number;
	}[];
}
export interface HydrateResults {
	buildId: string;
	diagnostics: Diagnostic[];
	url: string;
	host: string;
	hostname: string;
	href: string;
	port: string;
	pathname: string;
	search: string;
	hash: string;
	html: string;
	components: HydrateComponent[];
	anchors: HydrateAnchorElement[];
	imgs: HydrateImgElement[];
	scripts: HydrateScriptElement[];
	styles: HydrateStyleElement[];
	staticData: HydrateStaticData[];
	title: string;
	hydratedCount: number;
	httpStatus: number;
}
export interface HydrateComponent {
	tag: string;
	mode: string;
	count: number;
	depth: number;
}
export interface HydrateElement {
	[attrName: string]: string | undefined;
}
export interface HydrateAnchorElement extends HydrateElement {
	href?: string;
	target?: string;
}
export interface HydrateImgElement extends HydrateElement {
	src?: string;
}
export interface HydrateScriptElement extends HydrateElement {
	src?: string;
	type?: string;
}
export interface HydrateStyleElement extends HydrateElement {
	href?: string;
}
export interface HydrateStaticData {
	id: string;
	type: string;
	content: string;
}
export declare function renderToString(html: string | any, options?: SerializeDocumentOptions): Promise<HydrateResults>;
export declare function hydrateDocument(doc: any | string, options?: HydrateDocumentOptions): Promise<HydrateResults>;
export declare function serializeDocumentToString(doc: any, opts: HydrateFactoryOptions): string;

export {};
