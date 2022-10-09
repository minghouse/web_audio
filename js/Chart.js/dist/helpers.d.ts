import { Color } from '@kurkle/color';
import { aU as FontSpec, ck as TRBL, cl as TRBLCorners, ch as ChartArea, b7 as PointStyle, cg as Color$1, cm as RoundedRect, C as ChartEvent, P as Point } from './chunks/helpers.core.js';
export { cd as EasingFunction, cB as MergeOptions, cI as _capitalize, cF as _deprecated, cy as _elementsEqual, cM as _isClickEvent, cA as _merger, cE as _mergerIf, cG as _splitKey, cw as callback, cz as clone, cJ as defined, cx as each, cs as finiteOrDefault, cq as isArray, cn as isFinite, cK as isFunction, cp as isNullOrUndef, cr as isObject, cC as merge, cD as mergeIf, n as noop, cH as resolveObjectKey, cL as setsEqual, cv as toDimension, cu as toPercentage, co as uid, ct as valueOrDefault } from './chunks/helpers.core.js';

declare function isPatternOrGradient(value: unknown): value is CanvasPattern | CanvasGradient;
declare function color(value: CanvasGradient): CanvasGradient;
declare function color(value: CanvasPattern): CanvasPattern;
declare function color(value: string | {
    r: number;
    g: number;
    b: number;
    a: number;
} | [number, number, number] | [number, number, number, number]): Color;
declare function getHoverColor(value: CanvasGradient): CanvasGradient;
declare function getHoverColor(value: CanvasPattern): CanvasPattern;
declare function getHoverColor(value: string): string;

/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param value - value to find
 * @param cmp
 * @private
 */
declare function _lookup(table: number[], value: number, cmp?: (value: number) => boolean): {
    lo: number;
    hi: number;
};
declare function _lookup<T>(table: T[], value: number, cmp: (value: number) => boolean): {
    lo: number;
    hi: number;
};
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */
declare const _lookupByKey: (table: Record<string, number>[], key: string, value: number, last?: boolean) => {
    lo: number;
    hi: number;
};
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */
declare const _rlookupByKey: (table: Record<string, number>[], key: string, value: number) => {
    lo: number;
    hi: number;
};
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */
declare function _filterBetween(values: number[], min: number, max: number): number[];
interface ArrayListener<T> {
    _onDataPush?(...item: T[]): void;
    _onDataPop?(): void;
    _onDataShift?(): void;
    _onDataSplice?(index: number, deleteCount: number, ...items: T[]): void;
    _onDataUnshift?(...item: T[]): void;
}
/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the '_onData*' callbacks (e.g. _onDataPush, etc.) with same arguments.
 */
declare function listenArrayEvents<T>(array: T[], listener: ArrayListener<T>): void;
/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
declare function unlistenArrayEvents<T>(array: T[], listener: ArrayListener<T>): void;
/**
 * @param items
 */
declare function _arrayUnique<T>(items: T[]): T[];

interface CanvasFontSpec extends FontSpec {
  string: string;
}
/**
 * Parses font options and returns the font object.
 * @param {object} options - A object that contains font options to be parsed.
 * @return {object} The font object.
 */
declare function toFont(options: Partial<FontSpec>): CanvasFontSpec;

/**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */
declare function toLineHeight(value: string, size: number): number;

declare function toTRBL(value: number | Partial<TRBL>): TRBL;
declare function toTRBLCorners(value: number | Partial<TRBLCorners>): TRBLCorners;

/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param {number|object} value - If a number, set the value to all TRBL component;
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns {object} The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
declare function toPadding(
  value?: number | { top?: number; left?: number; right?: number; bottom?: number; x?:number, y?: number }
): { top: number; left: number; right: number; bottom: number; width: number; height: number };

/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param [context] - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param [index] - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param [info] - object to return information about resolution in
 * @param [info.cacheable] - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
declare function resolve<T, C>(
  inputs: undefined | T | ((c: C) => T) | readonly T[],
  context?: C,
  index?: number,
  info?: { cacheable?: boolean }
): T | undefined;


/**
 * Create a context inheriting parentContext
 * @since 3.6.0
 */
declare function createContext<P, T>(parentContext: P, context: T): P extends null ? T : P & T;

declare function clearCanvas(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D): void;

declare function clipArea(ctx: CanvasRenderingContext2D, area: ChartArea): void;

declare function unclipArea(ctx: CanvasRenderingContext2D): void;

interface DrawPointOptions {
  pointStyle: PointStyle;
  rotation?: number;
  radius: number;
  borderWidth: number;
}

declare function drawPoint(ctx: CanvasRenderingContext2D, options: DrawPointOptions, x: number, y: number): void;

declare function drawPointLegend(ctx: CanvasRenderingContext2D, options: DrawPointOptions, x: number, y: number, w: number): void;

/**
 * Converts the given font object into a CSS font string.
 * @param font a font object
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 */
declare function toFontString(font: { size: number; family: string; style?: string; weight?: string }): string | null;

interface RenderTextOpts {
  /**
   * The fill color of the text. If unset, the existing
   * fillStyle property of the canvas is unchanged.
   */
  color?: Color$1;

  /**
   * The width of the strikethrough / underline
   * @default 2
   */
  decorationWidth?: number;

  /**
   * The max width of the text in pixels
   */
  maxWidth?: number;

  /**
   * A rotation to be applied to the canvas
   * This is applied after the translation is applied
   */
  rotation?: number;

  /**
   * Apply a strikethrough effect to the text
   */
  strikethrough?: boolean;

  /**
   * The color of the text stroke. If unset, the existing
   * strokeStyle property of the context is unchanged
   */
  strokeColor?: Color$1;

  /**
   * The text stroke width. If unset, the existing
   * lineWidth property of the context is unchanged
   */
  strokeWidth?: number;

  /**
   * The text alignment to use. If unset, the existing
   * textAlign property of the context is unchanged
   */
  textAlign: CanvasTextAlign;

  /**
   * The text baseline to use. If unset, the existing
   * textBaseline property of the context is unchanged
   */
  textBaseline: CanvasTextBaseline;

  /**
   * If specified, a translation to apply to the context
   */
  translation?: [number, number];

  /**
   * Underline the text
   */
  underline?: boolean;
}

declare function renderText(
  ctx: CanvasRenderingContext2D,
  text: string | string[],
  x: number,
  y: number,
  font: CanvasFontSpec,
  opts?: RenderTextOpts
): void;

declare function addRoundedRectPath(ctx: CanvasRenderingContext2D, rect: RoundedRect): void;

interface SplinePoint {
  x: number;
  y: number;
}

/**
 * Props to Rob Spencer at scaled innovation for his post on splining between points
 * http://scaledinnovation.com/analytics/splines/aboutSplines.html
 */
declare function splineCurve(
  firstPoint: SplinePoint & { skip?: boolean },
  middlePoint: SplinePoint,
  afterPoint: SplinePoint,
  t: number
): {
  previous: SplinePoint;
  next: SplinePoint;
};

interface MonotoneSplinePoint extends SplinePoint {
  skip: boolean;
  cp1x?: number;
  cp1y?: number;
  cp2x?: number;
  cp2y?: number;
}

/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * @see https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */
declare function splineCurveMonotone(points: readonly MonotoneSplinePoint[], indexAxis?: 'x' | 'y'): void;

declare function getMaximumSize(node: HTMLElement, width?: number, height?: number, aspectRatio?: number): { width: number, height: number };
declare function getRelativePosition(
  evt: MouseEvent | ChartEvent,
  chart: { readonly canvas: HTMLCanvasElement }
): { x: number; y: number };
declare function getStyle(el: HTMLElement, property: string): string;
declare function retinaScale(
  chart: {
    currentDevicePixelRatio: number;
    readonly canvas: HTMLCanvasElement;
    readonly width: number;
    readonly height: number;
    readonly ctx: CanvasRenderingContext2D;
  },
  forceRatio: number,
  forceStyle?: boolean
): void;
declare function readUsedSize(element: HTMLElement, property: 'width' | 'height'): number | undefined;

declare function fontString(pixelSize: number, fontStyle: string, fontFamily: string): string;

/**
 * Request animation polyfill
 */
declare function requestAnimFrame(cb: () => void): void;

/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 * @param {function} fn
 * @param {*} thisArg
 * @param {function} [updateFn]
 */
declare function throttled(fn: (...args: unknown[]) => void, thisArg: unknown, updateFn?: (...args: unknown[]) => unknown[]): (...args: unknown[]) => void;

/**
 * Debounces calling `fn` for `delay` ms
 * @param {function} fn - Function to call. No arguments are passed.
 * @param {number} delay - Delay in ms. 0 = immediate invocation.
 * @returns {function}
 */
declare function debounce(fn: () => void, delay: number): () => number;

/**
 * @private
 */
declare function _pointInLine(p1: Point, p2: Point, t: number, mode?: any): {
    x: number;
    y: number;
};
/**
 * @private
 */
declare function _steppedInterpolation(p1: Point, p2: Point, t: number, mode: 'middle' | 'after' | unknown): {
    x: number;
    y: number;
};
/**
 * @private
 */
declare function _bezierInterpolation(p1: MonotoneSplinePoint, p2: MonotoneSplinePoint, t: number, mode?: any): {
    x: number;
    y: number;
};

declare function formatNumber(num: number, locale: string, options?: Intl.NumberFormatOptions): string;

/**
 * @alias Chart.helpers.math
 * @namespace
 */
declare const PI: number;
declare const TAU: number;
declare const PITAU: number;
declare const INFINITY: number;
declare const RAD_PER_DEG: number;
declare const HALF_PI: number;
declare const QUARTER_PI: number;
declare const TWO_THIRDS_PI: number;
declare const log10: (x: number) => number;
declare const sign: (x: number) => number;
declare function almostEquals(x: number, y: number, epsilon: number): boolean;
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */
declare function niceNum(range: number): number;
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
declare function _factorize(value: number): number[];
declare function isNumber(n: unknown): n is number;
declare function almostWhole(x: number, epsilon: number): boolean;
/**
 * @private
 */
declare function _setMinAndMaxByKey(array: Record<string, number>[], target: {
    min: number;
    max: number;
}, property: string): void;
declare function toRadians(degrees: number): number;
declare function toDegrees(radians: number): number;
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */
declare function _decimalPlaces(x: number): number;
declare function getAngleFromPoint(centrePoint: Point, anglePoint: Point): {
    angle: number;
    distance: number;
};
declare function distanceBetweenPoints(pt1: Point, pt2: Point): number;
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
declare function _angleDiff(a: number, b: number): number;
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
declare function _normalizeAngle(a: number): number;
/**
 * @private
 */
declare function _angleBetween(angle: number, start: number, end: number, sameAngleIsFullCircle?: boolean): boolean;
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */
declare function _limitValue(value: number, min: number, max: number): number;
/**
 * @param {number} value
 * @private
 */
declare function _int16Range(value: number): number;
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */
declare function _isBetween(value: number, start: number, end: number, epsilon?: number): boolean;

interface RTLAdapter {
    x(x: number): number;
    setWidth(w: number): void;
    textAlign(align: 'center' | 'left' | 'right'): 'center' | 'left' | 'right';
    xPlus(x: number, value: number): number;
    leftForLtr(x: number, itemWidth: number): number;
}
declare function getRtlAdapter(rtl: boolean, rectX: number, width: number): RTLAdapter;
declare function overrideTextDirection(ctx: CanvasRenderingContext2D, direction: 'ltr' | 'rtl'): void;
declare function restoreTextDirection(ctx: CanvasRenderingContext2D, original?: [string, string]): void;

export { ArrayListener, CanvasFontSpec, DrawPointOptions, HALF_PI, INFINITY, MonotoneSplinePoint, PI, PITAU, QUARTER_PI, RAD_PER_DEG, RTLAdapter, RenderTextOpts, SplinePoint, TAU, TWO_THIRDS_PI, _angleBetween, _angleDiff, _arrayUnique, _bezierInterpolation, _decimalPlaces, _factorize, _filterBetween, _int16Range, _isBetween, _limitValue, _lookup, _lookupByKey, _normalizeAngle, _pointInLine, _rlookupByKey, _setMinAndMaxByKey, _steppedInterpolation, addRoundedRectPath, almostEquals, almostWhole, clearCanvas, clipArea, color, createContext, debounce, distanceBetweenPoints, drawPoint, drawPointLegend, fontString, formatNumber, getAngleFromPoint, getHoverColor, getMaximumSize, getRelativePosition, getRtlAdapter, getStyle, isNumber, isPatternOrGradient, listenArrayEvents, log10, niceNum, overrideTextDirection, readUsedSize, renderText, requestAnimFrame, resolve, restoreTextDirection, retinaScale, sign, splineCurve, splineCurveMonotone, throttled, toDegrees, toFont, toFontString, toLineHeight, toPadding, toRadians, toTRBL, toTRBLCorners, unclipArea, unlistenArrayEvents };
