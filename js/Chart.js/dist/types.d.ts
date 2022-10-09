import { E as Element, C as ChartEvent$3, A as ActiveElement, P as Point$1, a as AnyObject, n as noop, T as TimeUnit, D as DateAdapter$1 } from './chunks/helpers.core.js';
export { ar as ActiveDataPoint, A as ActiveElement, aW as Align, f as Animation, cf as AnimationEvent, aT as AnimationOptions, aP as AnimationSpec, g as Animations, aQ as AnimationsSpec, ce as Animator, b0 as ArcBorderRadius, o as ArcElement, b2 as ArcHoverOptions, b1 as ArcOptions, a$ as ArcProps, B as BarController, a3 as BarControllerChartOptions, a2 as BarControllerDatasetOptions, p as BarElement, bf as BarHoverOptions, bd as BarOptions, bc as BarProps, t as BasePlatform, u as BasicPlatform, bH as BorderOptions, be as BorderRadius, b as BubbleController, a4 as BubbleControllerDatasetOptions, a5 as BubbleDataPoint, bN as CartesianScaleOptions, bU as CartesianScaleTypeRegistry, bK as CartesianTickOptions, H as CategoryScale, bO as CategoryScaleOptions, h as Chart, ch as ChartArea, aL as ChartComponent, aE as ChartComponentLike, cb as ChartConfiguration, cc as ChartConfigurationCustomTypesPerDataset, c9 as ChartData, ca as ChartDataCustomTypesPerDataset, c7 as ChartDataset, c8 as ChartDatasetCustomTypesPerDataset, c5 as ChartDatasetProperties, c6 as ChartDatasetPropertiesCustomTypesPerDataset, C as ChartEvent, as as ChartItem, aq as ChartMeta, c2 as ChartOptions, bZ as ChartType, bY as ChartTypeRegistry, cg as Color, aY as CommonElementOptions, aZ as CommonHoverOptions, bm as ComplexFillTarget, a1 as ControllerDatasetOptions, aO as CoreChartOptions, aN as CoreInteractionOptions, aH as CoreScaleOptions, c0 as DatasetChartOptions, i as DatasetController, av as DatasetControllerChartComponent, D as DateAdapter, w as Decimation, bi as DecimationAlgorithm, bj as DecimationOptions, c3 as DefaultDataPoint, aw as Defaults, v as DomPlatform, ac as DoughnutAnimationOptions, c as DoughnutController, ad as DoughnutControllerChartOptions, ab as DoughnutControllerDatasetOptions, ae as DoughnutDataPoint, af as DoughnutMetaExtensions, cd as EasingFunction, E as Element, bh as ElementChartOptions, bg as ElementOptionsByType, bB as ExtendedPlugin, bl as FillTarget, F as Filler, bn as FillerControllerDatasetOptions, bk as FillerOptions, aU as FontSpec, bI as GridLineOptions, I as Interaction, aM as InteractionAxis, az as InteractionItem, aC as InteractionMode, aA as InteractionModeFunction, aB as InteractionModeMap, ay as InteractionOptions, ci as LayoutItem, cj as LayoutPosition, x as Legend, bp as LegendElement, bo as LegendItem, bq as LegendOptions, L as LineController, a7 as LineControllerChartOptions, a6 as LineControllerDatasetOptions, q as LineElement, b5 as LineHoverOptions, b4 as LineOptions, b3 as LineProps, J as LinearScale, bP as LinearScaleOptions, K as LogarithmicScale, bQ as LogarithmicScaleOptions, ax as Overrides, c4 as ParsedDataType, a0 as ParsingOptions, ai as PieAnimationOptions, d as PieController, ah as PieControllerChartOptions, ag as PieControllerDatasetOptions, aj as PieDataPoint, ak as PieMetaExtensions, aD as Plugin, bG as PluginChartOptions, bF as PluginOptionsByType, P as Point, s as PointElement, b9 as PointHoverOptions, b8 as PointOptions, bb as PointPrefixedHoverOptions, ba as PointPrefixedOptions, b6 as PointProps, b7 as PointStyle, am as PolarAreaAnimationOptions, e as PolarAreaController, an as PolarAreaControllerChartOptions, al as PolarAreaControllerDatasetOptions, R as RadarController, ap as RadarControllerChartOptions, ao as RadarControllerDatasetOptions, M as RadialLinearScale, bT as RadialLinearScaleOptions, bV as RadialScaleTypeRegistry, bS as RadialTickOptions, aF as Registry, j as Scale, c1 as ScaleChartOptions, b$ as ScaleOptions, b_ as ScaleOptionsByType, bX as ScaleType, bW as ScaleTypeRegistry, S as ScatterController, aa as ScatterControllerChartOptions, a8 as ScatterControllerDatasetOptions, a9 as ScatterDataPoint, W as Scriptable, Z as ScriptableAndArray, $ as ScriptableAndArrayOptions, Y as ScriptableAndScriptableOptions, bL as ScriptableCartesianScaleContext, bM as ScriptableChartContext, U as ScriptableContext, V as ScriptableLineSegmentContext, X as ScriptableOptions, aI as ScriptableScaleContext, aJ as ScriptableScalePointLabelContext, bC as ScriptableTooltipContext, a_ as Segment, y as SubTitle, aV as TextAlign, aG as Tick, bJ as TickOptions, k as Ticks, N as TimeScale, bR as TimeScaleOptions, O as TimeSeriesScale, T as TimeUnit, z as Title, br as TitleOptions, G as Tooltip, bA as TooltipCallbacks, bE as TooltipItem, bu as TooltipLabelStyle, bv as TooltipModel, bD as TooltipOptions, bw as TooltipPosition, bz as TooltipPositioner, bx as TooltipPositionerFunction, by as TooltipPositionerMap, bs as TooltipXAlignment, bt as TooltipYAlignment, aR as TransitionSpec, aS as TransitionsSpec, aK as TypedRegistry, au as UpdateMode, at as UpdateModeEnum, aX as VisualElement, _ as _adapters, l as defaults, m as layouts, Q as registerables, r as registry } from './chunks/helpers.core.js';

/**
 * @typedef { import("./core.controller").default } Chart
 * @typedef { import("../../types").ChartEvent } ChartEvent
 * @typedef { import("../plugins/plugin.tooltip").default } Tooltip
 */
/**
 * @callback filterCallback
 * @param {{plugin: object, options: object}} value
 * @param {number} [index]
 * @param {array} [array]
 * @param {object} [thisArg]
 * @return {boolean}
 */
declare class PluginService {
    _init: any[];
    /**
       * Calls enabled plugins for `chart` on the specified hook and with the given args.
       * This method immediately returns as soon as a plugin explicitly returns false. The
       * returned value can be used, for instance, to interrupt the current action.
       * @param {Chart} chart - The chart instance for which plugins should be called.
       * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
       * @param {object} [args] - Extra arguments to apply to the hook call.
     * @param {filterCallback} [filter] - Filtering function for limiting which plugins are notified
       * @returns {boolean} false if any of the plugins return false, else returns true.
       */
    notify(chart: Chart$6, hook: string, args?: object, filter?: filterCallback): boolean;
    /**
       * @private
       */
    private _notify;
    invalidate(): void;
    _oldCache: {
        plugin: any;
        options: any;
    }[];
    _cache: {
        plugin: any;
        options: any;
    }[];
    /**
       * @param {Chart} chart
       * @private
       */
    private _descriptors;
    _createDescriptors(chart: any, all: any): {
        plugin: any;
        options: any;
    }[];
    /**
       * @param {Chart} chart
       * @private
       */
    private _notifyStateChanges;
}
type Chart$6 = Chart$5;
type filterCallback = (value: {
    plugin: object;
    options: object;
}, index?: number, array?: any[], thisArg?: object) => boolean;

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
declare class Defaults {
    constructor(_descriptors: any, _appliers: any);
    animation: any;
    backgroundColor: string;
    borderColor: string;
    color: string;
    datasets: {};
    devicePixelRatio: (context: any) => any;
    elements: {};
    events: string[];
    font: {
        family: string;
        size: number;
        style: string;
        lineHeight: number;
        weight: any;
    };
    hover: {};
    hoverBackgroundColor: (ctx: any, options: any) => CanvasGradient;
    hoverBorderColor: (ctx: any, options: any) => CanvasGradient;
    hoverColor: (ctx: any, options: any) => CanvasGradient;
    indexAxis: string;
    interaction: {
        mode: string;
        intersect: boolean;
        includeInvisible: boolean;
    };
    maintainAspectRatio: boolean;
    onHover: any;
    onClick: any;
    parsing: boolean;
    plugins: {};
    responsive: boolean;
    scale: any;
    scales: {};
    showLine: boolean;
    drawActiveElementsOnTop: boolean;
    /**
       * @param {string|object} scope
       * @param {object} [values]
       */
    set(scope: string | object, values?: object): any;
    /**
       * @param {string} scope
       */
    get(scope: string): any;
    /**
       * @param {string|object} scope
       * @param {object} [values]
       */
    describe(scope: string | object, values?: object): any;
    override(scope: any, values: any): any;
    /**
       * Routes the named defaults to fallback to another scope/name.
       * This routing is useful when those target values, like defaults.color, are changed runtime.
       * If the values would be copied, the runtime change would not take effect. By routing, the
       * fallback is evaluated at each access, so its always up to date.
       *
       * Example:
       *
       * 	defaults.route('elements.arc', 'backgroundColor', '', 'color')
       *   - reads the backgroundColor from defaults.color when undefined locally
       *
       * @param {string} scope Scope this route applies to.
       * @param {string} name Property name that should be routed to different namespace when not defined here.
       * @param {string} targetScope The namespace where those properties should be routed to.
       * Empty string ('') is the root of defaults.
       * @param {string} targetName The target name in the target scope the property should be routed to.
       */
    route(scope: string, name: string, targetScope: string, targetName: string): void;
    apply(appliers: any): void;
}

/**
 * @typedef {{id: string, defaults: any, overrides?: any, defaultRoutes: any}} IChartComponent
 */
declare class TypedRegistry {
    constructor(type: any, scope: any, override: any);
    type: any;
    scope: any;
    override: any;
    items: any;
    isForType(type: any): boolean;
    /**
       * @param {IChartComponent} item
       * @returns {string} The scope where items defaults were registered to.
       */
    register(item: IChartComponent): string;
    /**
       * @param {string} id
       * @returns {object?}
       */
    get(id: string): object | null;
    /**
       * @param {IChartComponent} item
       */
    unregister(item: IChartComponent): void;
}
type IChartComponent = {
    id: string;
    defaults: any;
    overrides?: any;
    defaultRoutes: any;
};

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
declare class Registry {
    controllers: TypedRegistry;
    elements: TypedRegistry;
    plugins: TypedRegistry;
    scales: TypedRegistry;
    _typedRegistries: TypedRegistry[];
    /**
       * @param  {...any} args
       */
    add(...args: any[]): void;
    remove(...args: any[]): void;
    /**
       * @param  {...typeof DatasetController} args
       */
    addControllers(...args: (typeof DatasetController)[]): void;
    /**
       * @param  {...typeof Element} args
       */
    addElements(...args: (typeof Element)[]): void;
    /**
       * @param  {...any} args
       */
    addPlugins(...args: any[]): void;
    /**
       * @param  {...typeof Scale} args
       */
    addScales(...args: (typeof Scale$1)[]): void;
    /**
       * @param {string} id
       * @returns {typeof DatasetController}
       */
    getController(id: string): typeof DatasetController;
    /**
       * @param {string} id
       * @returns {typeof Element}
       */
    getElement(id: string): typeof Element;
    /**
       * @param {string} id
       * @returns {object}
       */
    getPlugin(id: string): object;
    /**
       * @param {string} id
       * @returns {typeof Scale}
       */
    getScale(id: string): typeof Scale$1;
    /**
       * @param  {...typeof DatasetController} args
       */
    removeControllers(...args: (typeof DatasetController)[]): void;
    /**
       * @param  {...typeof Element} args
       */
    removeElements(...args: (typeof Element)[]): void;
    /**
       * @param  {...any} args
       */
    removePlugins(...args: any[]): void;
    /**
       * @param  {...typeof Scale} args
       */
    removeScales(...args: (typeof Scale$1)[]): void;
    /**
       * @private
       */
    private _each;
    /**
       * @private
       */
    private _exec;
    /**
       * @private
       */
    private _getRegistryForType;
    /**
       * @private
       */
    private _get;
}

declare class Config {
    constructor(config: any);
    _config: any;
    _scopeCache: Map<any, any>;
    _resolverCache: Map<any, any>;
    get platform(): any;
    set type(arg: any);
    get type(): any;
    set data(arg: any);
    get data(): any;
    set options(arg: any);
    get options(): any;
    get plugins(): any;
    update(): void;
    clearCache(): void;
    /**
     * Returns the option scope keys for resolving dataset options.
     * These keys do not include the dataset itself, because it is not under options.
     * @param {string} datasetType
     * @return {string[][]}
     */
    datasetScopeKeys(datasetType: string): string[][];
    /**
     * Returns the option scope keys for resolving dataset animation options.
     * These keys do not include the dataset itself, because it is not under options.
     * @param {string} datasetType
     * @param {string} transition
     * @return {string[][]}
     */
    datasetAnimationScopeKeys(datasetType: string, transition: string): string[][];
    /**
     * Returns the options scope keys for resolving element options that belong
     * to an dataset. These keys do not include the dataset itself, because it
     * is not under options.
     * @param {string} datasetType
     * @param {string} elementType
     * @return {string[][]}
     */
    datasetElementScopeKeys(datasetType: string, elementType: string): string[][];
    /**
     * Returns the options scope keys for resolving plugin options.
     * @param {{id: string, additionalOptionScopes?: string[]}} plugin
     * @return {string[][]}
     */
    pluginScopeKeys(plugin: {
        id: string;
        additionalOptionScopes?: string[];
    }): string[][];
    /**
     * @private
     */
    private _cachedScopes;
    /**
     * Resolves the objects from options and defaults for option value resolution.
     * @param {object} mainScope - The main scope object for options
     * @param {string[][]} keyLists - The arrays of keys in resolution order
     * @param {boolean} [resetCache] - reset the cache for this mainScope
     */
    getOptionScopes(mainScope: object, keyLists: string[][], resetCache?: boolean): any;
    /**
     * Returns the option scopes for resolving chart options
     * @return {object[]}
     */
    chartOptionScopes(): object[];
    /**
     * @param {object[]} scopes
     * @param {string[]} names
     * @param {function|object} context
     * @param {string[]} [prefixes]
     * @return {object}
     */
    resolveNamedOptions(scopes: object[], names: string[], context: Function | object, prefixes?: string[]): object;
    /**
     * @param {object[]} scopes
     * @param {object} [context]
     * @param {string[]} [prefixes]
     * @param {{scriptable: boolean, indexable: boolean, allKeys?: boolean}} [descriptorDefaults]
     */
    createResolver(scopes: object[], context?: object, prefixes?: string[], descriptorDefaults?: {
        scriptable: boolean;
        indexable: boolean;
        allKeys?: boolean;
    }): any;
}

type ChartEvent$2 = ChartEvent$3;
type Point = Point$1;
declare class Chart$5 {
    static defaults: Defaults;
    static instances: {};
    static overrides: any;
    static registry: Registry;
    static version: any;
    static getChart: (key: any) => any;
    static register(...items: any[]): void;
    static unregister(...items: any[]): void;
    constructor(item: any, userConfig: any);
    config: Config;
    platform: any;
    id: number;
    ctx: any;
    canvas: any;
    width: any;
    height: any;
    _options: any;
    _aspectRatio: any;
    _layers: any[];
    _metasets: any[];
    _stacks: any;
    boxes: any[];
    currentDevicePixelRatio: any;
    chartArea: any;
    _active: any[];
    _lastEvent: ChartEvent$3;
    _listeners: {};
    /** @type {?{attach?: function, detach?: function, resize?: function}} */
    _responsiveListeners: {
        attach?: Function;
        detach?: Function;
        resize?: Function;
    };
    _sortedMetasets: any[];
    scales: {};
    _plugins: PluginService;
    $proxies: {};
    _hiddenIndices: {};
    attached: boolean;
    _animationsDisabled: boolean;
    $context: any;
    _doResize: Function;
    _dataChanges: any[];
    get aspectRatio(): any;
    set data(arg: any);
    get data(): any;
    set options(arg: any);
    get options(): any;
    get registry(): Registry;
    /**
       * @private
       */
    private _initialize;
    clear(): Chart$5;
    stop(): Chart$5;
    /**
       * Resize the chart to its container or to explicit dimensions.
       * @param {number} [width]
       * @param {number} [height]
       */
    resize(width?: number, height?: number): void;
    _resizeBeforeDraw: {
        width: number;
        height: number;
    };
    _resize(width: any, height: any): void;
    ensureScalesHaveIDs(): void;
    /**
       * Builds a map of scale ID to scale object for future lookup.
       */
    buildOrUpdateScales(): void;
    /**
       * @private
       */
    private _updateMetasets;
    /**
       * @private
       */
    private _removeUnreferencedMetasets;
    buildOrUpdateControllers(): any[];
    /**
       * Reset the elements of all datasets
       * @private
       */
    private _resetElements;
    /**
      * Resets the chart back to its state before the initial animation
      */
    reset(): void;
    update(mode: any): void;
    _minPadding: number;
    /**
     * @private
     */
    private _updateScales;
    /**
     * @private
     */
    private _checkEventBindings;
    /**
     * @private
     */
    private _updateHiddenIndices;
    /**
     * @private
     */
    private _getUniformDataChanges;
    /**
       * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
       * hook, in which case, plugins will not be called on `afterLayout`.
       * @private
       */
    private _updateLayout;
    /**
       * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
       * @private
       */
    private _updateDatasets;
    /**
       * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
       * @private
       */
    private _updateDataset;
    render(): void;
    draw(): void;
    /**
       * @private
       */
    private _getSortedDatasetMetas;
    /**
       * Gets the visible dataset metas in drawing order
       * @return {object[]}
       */
    getSortedVisibleDatasetMetas(): object[];
    /**
       * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
       * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
       * @private
       */
    private _drawDatasets;
    /**
       * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
       * hook, in which case, plugins will not be called on `afterDatasetDraw`.
       * @private
       */
    private _drawDataset;
    /**
     * Checks whether the given point is in the chart area.
     * @param {Point} point - in relative coordinates (see, e.g., getRelativePosition)
     * @returns {boolean}
     */
    isPointInArea(point: Point): boolean;
    getElementsAtEventForMode(e: any, mode: any, options: any, useFinalPosition: any): any;
    getDatasetMeta(datasetIndex: any): any;
    getContext(): any;
    getVisibleDatasetCount(): number;
    isDatasetVisible(datasetIndex: any): boolean;
    setDatasetVisibility(datasetIndex: any, visible: any): void;
    toggleDataVisibility(index: any): void;
    getDataVisibility(index: any): boolean;
    /**
       * @private
       */
    private _updateVisibility;
    hide(datasetIndex: any, dataIndex: any): void;
    show(datasetIndex: any, dataIndex: any): void;
    /**
       * @private
       */
    private _destroyDatasetMeta;
    _stop(): void;
    destroy(): void;
    toBase64Image(...args: any[]): any;
    /**
       * @private
       */
    private bindEvents;
    /**
     * @private
     */
    private bindUserEvents;
    /**
     * @private
     */
    private bindResponsiveEvents;
    /**
       * @private
       */
    private unbindEvents;
    updateHoverStyle(items: any, mode: any, enabled: any): void;
    /**
       * Get active (hovered) elements
       * @returns array
       */
    getActiveElements(): any[];
    /**
       * Set active (hovered) elements
       * @param {array} activeElements New active data points
       */
    setActiveElements(activeElements: any[]): void;
    /**
       * Calls enabled plugins on the specified hook and with the given args.
       * This method immediately returns as soon as a plugin explicitly returns false. The
       * returned value can be used, for instance, to interrupt the current action.
       * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
       * @param {Object} [args] - Extra arguments to apply to the hook call.
     * @param {import('./core.plugins').filterCallback} [filter] - Filtering function for limiting which plugins are notified
       * @returns {boolean} false if any of the plugins return false, else returns true.
       */
    notifyPlugins(hook: string, args?: any, filter?: filterCallback): boolean;
    /**
     * Check if a plugin with the specific ID is registered and enabled
     * @param {string} pluginId - The ID of the plugin of which to check if it is enabled
     * @returns {boolean}
     */
    isPluginEnabled(pluginId: string): boolean;
    /**
       * @private
       */
    private _updateHoverStyles;
    /**
       * @private
       */
    private _eventHandler;
    /**
       * Handle an event
       * @param {ChartEvent} e the event to handle
       * @param {boolean} [replay] - true if the event was replayed by `update`
     * @param {boolean} [inChartArea] - true if the event is inside chartArea
       * @return {boolean} true if the chart needs to re-render
       * @private
       */
    private _handleEvent;
    /**
     * @param {ChartEvent} e - The event
     * @param {import('../../types').ActiveElement[]} lastActive - Previously active elements
     * @param {boolean} inChartArea - Is the envent inside chartArea
     * @param {boolean} useFinalPosition - Should the evaluation be done with current or final (after animation) element positions
     * @returns {import('../../types').ActiveElement[]} - The active elements
     * @pravate
     */
    _getActiveElements(e: ChartEvent$2, lastActive: ActiveElement[], inChartArea: boolean, useFinalPosition: boolean): ActiveElement[];
}

declare class Scale$1 extends Element<AnyObject, AnyObject> {
    constructor(cfg: any);
    /** @type {string} */
    id: string;
    /** @type {string} */
    type: string;
    /** @type {any} */
    options: any;
    /** @type {CanvasRenderingContext2D} */
    ctx: CanvasRenderingContext2D;
    /** @type {Chart} */
    chart: Chart$4;
    /** @type {number} */
    top: number;
    /** @type {number} */
    bottom: number;
    /** @type {number} */
    left: number;
    /** @type {number} */
    right: number;
    /** @type {number} */
    width: number;
    /** @type {number} */
    height: number;
    _margins: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /** @type {number} */
    maxWidth: number;
    /** @type {number} */
    maxHeight: number;
    /** @type {number} */
    paddingTop: number;
    /** @type {number} */
    paddingBottom: number;
    /** @type {number} */
    paddingLeft: number;
    /** @type {number} */
    paddingRight: number;
    /** @type {string=} */
    axis: string | undefined;
    /** @type {number=} */
    labelRotation: number | undefined;
    min: any;
    max: any;
    _range: {
        min: any;
        max: any;
    };
    /** @type {Tick[]} */
    ticks: Tick[];
    /** @type {object[]|null} */
    _gridLineItems: object[] | null;
    /** @type {object[]|null} */
    _labelItems: object[] | null;
    /** @type {object|null} */
    _labelSizes: object | null;
    _length: number;
    _maxLength: number;
    _longestTextCache: {};
    /** @type {number} */
    _startPixel: number;
    /** @type {number} */
    _endPixel: number;
    _reversePixels: boolean;
    _userMax: any;
    _userMin: any;
    _suggestedMax: any;
    _suggestedMin: any;
    _ticksLength: number;
    _borderValue: number;
    _cache: {};
    _dataLimitsCached: boolean;
    $context: any;
    /**
       * @param {any} options
       * @since 3.0
       */
    init(options: any): void;
    /**
       * Parse a supported input value to internal representation.
       * @param {*} raw
       * @param {number} [index]
       * @since 3.0
       */
    parse(raw: any, index?: number): any;
    /**
       * @return {{min: number, max: number, minDefined: boolean, maxDefined: boolean}}
       * @protected
       * @since 3.0
       */
    protected getUserBounds(): {
        min: number;
        max: number;
        minDefined: boolean;
        maxDefined: boolean;
    };
    /**
       * @param {boolean} canStack
       * @return {{min: number, max: number}}
       * @protected
       * @since 3.0
       */
    protected getMinMax(canStack: boolean): {
        min: number;
        max: number;
    };
    /**
       * Get the padding needed for the scale
       * @return {{top: number, left: number, bottom: number, right: number}} the necessary padding
       * @private
       */
    private getPadding;
    /**
       * Returns the scale tick objects
       * @return {Tick[]}
       * @since 2.7
       */
    getTicks(): Tick[];
    /**
       * @return {string[]}
       */
    getLabels(): string[];
    beforeLayout(): void;
    beforeUpdate(): void;
    /**
       * @param {number} maxWidth - the max width in pixels
       * @param {number} maxHeight - the max height in pixels
       * @param {{top: number, left: number, bottom: number, right: number}} margins - the space between the edge of the other scales and edge of the chart
       *   This space comes from two sources:
       *     - padding - space that's required to show the labels at the edges of the scale
       *     - thickness of scales or legends in another orientation
       */
    update(maxWidth: number, maxHeight: number, margins: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    }): void;
    /**
       * @protected
       */
    protected configure(): void;
    _alignToPixels: any;
    afterUpdate(): void;
    beforeSetDimensions(): void;
    setDimensions(): void;
    afterSetDimensions(): void;
    _callHooks(name: any): void;
    beforeDataLimits(): void;
    determineDataLimits(): void;
    afterDataLimits(): void;
    beforeBuildTicks(): void;
    /**
       * @return {object[]} the ticks
       */
    buildTicks(): object[];
    afterBuildTicks(): void;
    beforeTickToLabelConversion(): void;
    /**
       * Convert ticks to label strings
       * @param {Tick[]} ticks
       */
    generateTickLabels(ticks: Tick[]): void;
    afterTickToLabelConversion(): void;
    beforeCalculateLabelRotation(): void;
    calculateLabelRotation(): void;
    afterCalculateLabelRotation(): void;
    afterAutoSkip(): void;
    beforeFit(): void;
    fit(): void;
    _calculatePadding(first: any, last: any, sin: any, cos: any): void;
    /**
       * Handle margins and padding interactions
       * @private
       */
    private _handleMargins;
    afterFit(): void;
    /**
       * @return {boolean}
       */
    isHorizontal(): boolean;
    /**
       * @return {boolean}
       */
    isFullSize(): boolean;
    /**
       * @param {Tick[]} ticks
       * @private
       */
    private _convertTicksToLabels;
    /**
       * @return {{ first: object, last: object, widest: object, highest: object, widths: Array, heights: array }}
       * @private
       */
    private _getLabelSizes;
    /**
       * Returns {width, height, offset} objects for the first, last, widest, highest tick
       * labels where offset indicates the anchor point offset from the top in pixels.
       * @return {{ first: object, last: object, widest: object, highest: object, widths: Array, heights: array }}
       * @private
       */
    private _computeLabelSizes;
    /**
       * Used to get the label to display in the tooltip for the given value
       * @param {*} value
       * @return {string}
       */
    getLabelForValue(value: any): string;
    /**
       * Returns the location of the given data point. Value can either be an index or a numerical value
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {*} value
       * @param {number} [index]
       * @return {number}
       */
    getPixelForValue(value: any, index?: number): number;
    /**
       * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} pixel
       * @return {*}
       */
    getValueForPixel(pixel: number): any;
    /**
       * Returns the location of the tick at the given index
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} index
       * @return {number}
       */
    getPixelForTick(index: number): number;
    /**
       * Utility for getting the pixel location of a percentage of scale
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @param {number} decimal
       * @return {number}
       */
    getPixelForDecimal(decimal: number): number;
    /**
       * @param {number} pixel
       * @return {number}
       */
    getDecimalForPixel(pixel: number): number;
    /**
       * Returns the pixel for the minimum chart value
       * The coordinate (0, 0) is at the upper-left corner of the canvas
       * @return {number}
       */
    getBasePixel(): number;
    /**
       * @return {number}
       */
    getBaseValue(): number;
    /**
       * @protected
       */
    protected getContext(index: any): any;
    /**
       * @return {number}
       * @private
       */
    private _tickSize;
    /**
       * @return {boolean}
       * @private
       */
    private _isVisible;
    /**
       * @private
       */
    private _computeGridLineItems;
    /**
       * @private
       */
    private _computeLabelItems;
    _getXAxisLabelAlignment(): string;
    _getYAxisLabelAlignment(tl: any): {
        textAlign: string;
        x: any;
    };
    /**
       * @private
       */
    private _computeLabelArea;
    /**
     * @protected
     */
    protected drawBackground(): void;
    getLineWidthForValue(value: any): any;
    /**
       * @protected
       */
    protected drawGrid(chartArea: any): void;
    /**
       * @protected
       */
    protected drawBorder(): void;
    /**
       * @protected
       */
    protected drawLabels(chartArea: any): void;
    /**
       * @protected
       */
    protected drawTitle(): void;
    draw(chartArea: any): void;
    /**
       * @return {object[]}
       * @private
       */
    private _layers;
    /**
       * Returns visible dataset metas that are attached to this scale
       * @param {string} [type] - if specified, also filter by dataset type
       * @return {object[]}
       */
    getMatchingVisibleMetas(type?: string): object[];
    /**
       * @param {number} index
       * @return {object}
       * @protected
       */
    protected _resolveTickFontOptions(index: number): object;
    /**
     * @protected
     */
    protected _maxDigits(): number;
}
type Chart$4 = Chart$5;
type Tick = {
    value: number | string;
    label?: string;
    major?: boolean;
    $context?: any;
};

declare class DatasetController {
    /**
     * @type {any}
     */
    static defaults: any;
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.LineElement).
     */
    static datasetElementType: any;
    /**
     * Element type used to generate a meta data (e.g. Chart.element.PointElement).
     */
    static dataElementType: any;
    /**
       * @param {Chart} chart
       * @param {number} datasetIndex
       */
    constructor(chart: Chart$3, datasetIndex: number);
    chart: Chart$5;
    _ctx: any;
    index: number;
    _cachedDataOpts: {};
    _cachedMeta: any;
    _type: any;
    options: any;
    /** @type {boolean | object} */
    _parsing: boolean | object;
    _data: any;
    _objectData: any;
    _sharedOptions: any;
    _drawStart: any;
    _drawCount: any;
    enableOptionSharing: boolean;
    supportsDecimation: boolean;
    $context: any;
    _syncList: any[];
    datasetElementType: any;
    dataElementType: any;
    initialize(): void;
    updateIndex(datasetIndex: any): void;
    linkScales(): void;
    getDataset(): any;
    getMeta(): any;
    /**
       * @param {string} scaleID
       * @return {Scale}
       */
    getScaleForId(scaleID: string): Scale;
    /**
       * @private
       */
    private _getOtherScale;
    reset(): void;
    /**
       * @private
       */
    private _destroy;
    /**
       * @private
       */
    private _dataCheck;
    addElements(): void;
    buildOrUpdateElements(resetNewElements: any): void;
    /**
       * Merges user-supplied and default dataset-level options
       * @private
       */
    private configure;
    /**
       * @param {number} start
       * @param {number} count
       */
    parse(start: number, count: number): void;
    /**
       * Parse array of primitive values
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [1,3,4]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id.
       * Example: {xScale0: 0, yScale0: 1}
       * @protected
       */
    protected parsePrimitiveData(meta: object, data: any[], start: number, count: number): object;
    /**
       * Parse array of arrays
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [[1,2],[3,4]]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id.
       * Example: {x: 0, y: 1}
       * @protected
       */
    protected parseArrayData(meta: object, data: any[], start: number, count: number): object;
    /**
       * Parse array of objects
       * @param {object} meta - dataset meta
       * @param {array} data - data array. Example [{x:1, y:5}, {x:2, y:10}]
       * @param {number} start - start index
       * @param {number} count - number of items to parse
       * @returns {object} parsed item - item containing index and a parsed value
       * for each scale id. _custom is optional
       * Example: {xScale0: 0, yScale0: 1, _custom: {r: 10, foo: 'bar'}}
       * @protected
       */
    protected parseObjectData(meta: object, data: any[], start: number, count: number): object;
    /**
       * @protected
       */
    protected getParsed(index: any): any;
    /**
       * @protected
       */
    protected getDataElement(index: any): any;
    /**
       * @protected
       */
    protected applyStack(scale: any, parsed: any, mode: any): any;
    /**
       * @protected
       */
    protected updateRangeFromParsed(range: any, scale: any, parsed: any, stack: any): void;
    /**
       * @protected
       */
    protected getMinMax(scale: any, canStack: any): {
        min: number;
        max: number;
    };
    getAllParsedValues(scale: any): number[];
    /**
       * @return {number|boolean}
       * @protected
       */
    protected getMaxOverflow(): number | boolean;
    /**
       * @protected
       */
    protected getLabelAndValue(index: any): {
        label: string;
        value: string;
    };
    /**
       * @private
       */
    private _update;
    /**
       * @param {string} mode
       */
    update(mode: string): void;
    draw(): void;
    /**
       * Returns a set of predefined style properties that should be used to represent the dataset
       * or the data if the index is specified
       * @param {number} index - data index
       * @param {boolean} [active] - true if hover
       * @return {object} style object
       */
    getStyle(index: number, active?: boolean): object;
    /**
       * @protected
       */
    protected getContext(index: any, active: any, mode: any): any;
    /**
       * @param {string} [mode]
       * @protected
       */
    protected resolveDatasetElementOptions(mode?: string): any;
    /**
       * @param {number} index
       * @param {string} [mode]
       * @protected
       */
    protected resolveDataElementOptions(index: number, mode?: string): any;
    /**
       * @private
       */
    private _resolveElementOptions;
    /**
       * @private
       */
    private _resolveAnimations;
    /**
       * Utility for getting the options object shared between elements
       * @protected
       */
    protected getSharedOptions(options: any): any;
    /**
       * Utility for determining if `options` should be included in the updated properties
       * @protected
       */
    protected includeOptions(mode: any, sharedOptions: any): boolean;
    /**
     * @todo v4, rename to getSharedOptions and remove excess functions
     */
    _getSharedOptions(start: any, mode: any): {
        sharedOptions: any;
        includeOptions: boolean;
    };
    /**
       * Utility for updating an element with new properties, using animations when appropriate.
       * @protected
       */
    protected updateElement(element: any, index: any, properties: any, mode: any): void;
    /**
       * Utility to animate the shared options, that are potentially affecting multiple elements.
       * @protected
       */
    protected updateSharedOptions(sharedOptions: any, mode: any, newOptions: any): void;
    /**
       * @private
       */
    private _setStyle;
    removeHoverStyle(element: any, datasetIndex: any, index: any): void;
    setHoverStyle(element: any, datasetIndex: any, index: any): void;
    /**
       * @private
       */
    private _removeDatasetHoverStyle;
    /**
       * @private
       */
    private _setDatasetHoverStyle;
    /**
       * @private
       */
    private _resyncElements;
    /**
       * @private
       */
    private _insertElements;
    updateElements(element: any, start: any, count: any, mode: any): void;
    /**
       * @private
       */
    private _removeElements;
    /**
       * @private
     */
    private _sync;
    _onDataPush(...args: any[]): void;
    _onDataPop(): void;
    _onDataShift(): void;
    _onDataSplice(start: any, count: any, ...args: any[]): void;
    _onDataUnshift(...args: any[]): void;
}
type Chart$3 = Chart$5;
type Scale = Scale$1;

declare class BarController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    /**
       * Overriding primitive data parsing since we support mixed primitive/array
       * data for float bars
       * @protected
       */
    protected parsePrimitiveData(meta: any, data: any, start: any, count: any): any[];
    /**
       * Overriding array data parsing since we support mixed primitive/array
       * data for float bars
       * @protected
       */
    protected parseArrayData(meta: any, data: any, start: any, count: any): any[];
    /**
       * Overriding object data parsing since we support mixed primitive/array
       * value-scale data for float bars
       * @protected
       */
    protected parseObjectData(meta: any, data: any, start: any, count: any): any[];
    update(mode: any): void;
    /**
       * Returns the stacks based on groups and bar visibility.
       * @param {number} [last] - The dataset index
       * @param {number} [dataIndex] - The data index of the ruler
       * @returns {string[]} The list of stack IDs
       * @private
       */
    private _getStacks;
    /**
       * Returns the effective number of stacks based on groups and bar visibility.
       * @private
       */
    private _getStackCount;
    /**
       * Returns the stack index for the given dataset based on groups and bar visibility.
       * @param {number} [datasetIndex] - The dataset index
       * @param {string} [name] - The stack name to find
     * @param {number} [dataIndex]
       * @returns {number} The stack index
       * @private
       */
    private _getStackIndex;
    /**
       * @private
       */
    private _getRuler;
    /**
       * Note: pixel values are not clamped to the scale area.
       * @private
       */
    private _calculateBarValuePixels;
    /**
       * @private
       */
    private _calculateBarIndexPixels;
}

declare class BubbleController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    /**
       * Parse array of primitive values
       * @protected
       */
    protected parsePrimitiveData(meta: any, data: any, start: any, count: any): any;
    /**
       * Parse array of arrays
       * @protected
       */
    protected parseArrayData(meta: any, data: any, start: any, count: any): any;
    /**
       * Parse array of objects
       * @protected
       */
    protected parseObjectData(meta: any, data: any, start: any, count: any): any;
    /**
       * @protected
       */
    protected getMaxOverflow(): number;
    /**
       * @protected
       */
    protected getLabelAndValue(index: any): {
        label: any;
        value: string;
    };
    update(mode: any): void;
}

declare class DoughnutController extends DatasetController {
    static id: string;
    static descriptors: {
        _scriptable: (name: any) => boolean;
        _indexable: (name: any) => boolean;
    };
    /**
     * @type {any}
     */
    static overrides: any;
    constructor(chart: any, datasetIndex: any);
    innerRadius: number;
    outerRadius: number;
    offsetX: number;
    offsetY: number;
    /**
       * Override data parsing, since we are not using scales
       */
    parse(start: any, count: any): void;
    /**
       * @private
       */
    private _getRotation;
    /**
       * @private
       */
    private _getCircumference;
    /**
       * Get the maximal rotation & circumference extents
       * across all visible datasets.
       */
    _getRotationExtents(): {
        rotation: number;
        circumference: number;
    };
    /**
     * @private
     */
    private _circumference;
    calculateTotal(): number;
    calculateCircumference(value: any): number;
    getLabelAndValue(index: any): {
        label: any;
        value: string;
    };
    getMaxBorderWidth(arcs: any): number;
    getMaxOffset(arcs: any): number;
    /**
       * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
       * @private
       */
    private _getRingWeightOffset;
    /**
       * @private
       */
    private _getRingWeight;
    /**
       * Returns the sum of all visible data set weights.
       * @private
       */
    private _getVisibleDatasetWeightTotal;
}

declare class LineController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    update(mode: any): void;
    /**
       * @protected
       */
    protected getMaxOverflow(): any;
}

declare class PolarAreaController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    constructor(chart: any, datasetIndex: any);
    innerRadius: number;
    outerRadius: number;
    getLabelAndValue(index: any): {
        label: any;
        value: string;
    };
    parseObjectData(meta: any, data: any, start: any, count: any): any[];
    update(mode: any): void;
    /**
     * @protected
     */
    protected getMinMax(): {
        min: number;
        max: number;
    };
    /**
       * @private
       */
    private _updateRadius;
    countVisibleElements(): number;
    /**
       * @private
       */
    private _computeAngle;
}

declare class PieController extends DoughnutController {
}

declare class RadarController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    /**
       * @protected
       */
    protected getLabelAndValue(index: any): {
        label: any;
        value: string;
    };
    parseObjectData(meta: any, data: any, start: any, count: any): any[];
    update(mode: any): void;
}

declare class ScatterController extends DatasetController {
    static id: string;
    /**
     * @type {any}
     */
    static overrides: any;
    /**
       * @protected
       */
    protected getLabelAndValue(index: any): {
        label: any;
        value: string;
    };
    update(mode: any): void;
    /**
       * @protected
       */
    protected getMaxOverflow(): any;
}

type controllers_BarController = BarController;
declare const controllers_BarController: typeof BarController;
type controllers_BubbleController = BubbleController;
declare const controllers_BubbleController: typeof BubbleController;
type controllers_DoughnutController = DoughnutController;
declare const controllers_DoughnutController: typeof DoughnutController;
type controllers_LineController = LineController;
declare const controllers_LineController: typeof LineController;
type controllers_PolarAreaController = PolarAreaController;
declare const controllers_PolarAreaController: typeof PolarAreaController;
type controllers_PieController = PieController;
declare const controllers_PieController: typeof PieController;
type controllers_RadarController = RadarController;
declare const controllers_RadarController: typeof RadarController;
type controllers_ScatterController = ScatterController;
declare const controllers_ScatterController: typeof ScatterController;
declare namespace controllers {
  export {
    controllers_BarController as BarController,
    controllers_BubbleController as BubbleController,
    controllers_DoughnutController as DoughnutController,
    controllers_LineController as LineController,
    controllers_PolarAreaController as PolarAreaController,
    controllers_PieController as PieController,
    controllers_RadarController as RadarController,
    controllers_ScatterController as ScatterController,
  };
}

declare class Animation$1 {
    constructor(cfg: any, target: any, prop: any, to: any);
    _active: boolean;
    _fn: any;
    _easing: any;
    _start: number;
    _duration: number;
    _total: number;
    _loop: boolean;
    _target: any;
    _prop: any;
    _from: any;
    _to: any;
    _promises: any[];
    active(): boolean;
    update(cfg: any, to: any, date: any): void;
    cancel(): void;
    tick(date: any): void;
    wait(): Promise<any>;
    _notify(resolved: any): void;
}

declare class Animations {
    constructor(chart: any, config: any);
    _chart: any;
    _properties: Map<any, any>;
    configure(config: any): void;
    /**
       * Utility to handle animation of `options`.
       * @private
       */
    private _animateOptions;
    /**
       * @private
       */
    private _createAnimations;
    /**
       * Update `target` properties to new values, using configured animations
       * @param {object} target - object to update
       * @param {object} values - new target properties
       * @returns {boolean|undefined} - `true` if animations were started
       **/
    update(target: object, values: object): boolean | undefined;
}

/**
 * @typedef { import("./core.animation").default } Animation
 * @typedef { import("./core.controller").default } Chart
 */
/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is export for typedoc
 */
declare class Animator {
    _request: any;
    _charts: Map<any, any>;
    _running: boolean;
    _lastDate: number;
    /**
       * @private
       */
    private _notify;
    /**
       * @private
       */
    private _refresh;
    /**
       * @private
       */
    private _update;
    /**
       * @private
       */
    private _getAnims;
    /**
       * @param {Chart} chart
       * @param {string} event - event name
       * @param {Function} cb - callback
       */
    listen(chart: Chart$2, event: string, cb: Function): void;
    /**
       * Add animations
       * @param {Chart} chart
       * @param {Animation[]} items - animations
       */
    add(chart: Chart$2, items: Animation[]): void;
    /**
       * Counts number of active animations for the chart
       * @param {Chart} chart
       */
    has(chart: Chart$2): boolean;
    /**
       * Start animating (all charts)
       * @param {Chart} chart
       */
    start(chart: Chart$2): void;
    running(chart: any): boolean;
    /**
       * Stop all animations for the chart
       * @param {Chart} chart
       */
    stop(chart: Chart$2): void;
    /**
       * Remove chart from Animator
       * @param {Chart} chart
       */
    remove(chart: Chart$2): boolean;
}
declare const _default$6: Animator;

type Animation = Animation$1;
type Chart$2 = Chart$5;

declare class ArcElement extends Element<AnyObject, AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    constructor(cfg: any);
    options: any;
    circumference: any;
    startAngle: any;
    endAngle: any;
    innerRadius: any;
    outerRadius: any;
    pixelMargin: number;
    fullCircles: number;
    /**
       * @param {number} chartX
       * @param {number} chartY
       * @param {boolean} [useFinalPosition]
       */
    inRange(chartX: number, chartY: number, useFinalPosition?: boolean): boolean;
    /**
       * @param {boolean} [useFinalPosition]
       */
    getCenterPoint(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    /**
       * @param {boolean} [useFinalPosition]
       */
    tooltipPosition(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    draw(ctx: any): void;
}

declare class PointElement$1 extends Element<AnyObject, AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    constructor(cfg: any);
    options: any;
    parsed: any;
    skip: any;
    stop: any;
    inRange(mouseX: any, mouseY: any, useFinalPosition: any): boolean;
    inXRange(mouseX: any, useFinalPosition: any): boolean;
    inYRange(mouseY: any, useFinalPosition: any): boolean;
    getCenterPoint(useFinalPosition: any): {
        x: unknown;
        y: unknown;
    };
    size(options: any): number;
    draw(ctx: any, area: any): void;
    getRange(): any;
}

type Segment = {
    start: number;
    end: number;
    loop: boolean;
    style?: any;
};

declare class LineElement extends Element<AnyObject, AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    static descriptors: {
        _scriptable: boolean;
        _indexable: (name: any) => boolean;
    };
    constructor(cfg: any);
    animated: boolean;
    options: any;
    _chart: any;
    _loop: any;
    _fullLoop: any;
    _path: any;
    _points: any;
    _segments: Segment[];
    _decimated: boolean;
    _pointsUpdated: boolean;
    _datasetIndex: any;
    updateControlPoints(chartArea: any, indexAxis: any): void;
    set points(arg: any);
    get points(): any;
    get segments(): Segment[];
    /**
       * First non-skipped point on this line
       * @returns {PointElement|undefined}
       */
    first(): PointElement | undefined;
    /**
       * Last non-skipped point on this line
       * @returns {PointElement|undefined}
       */
    last(): PointElement | undefined;
    /**
       * Interpolate a point in this line at the same value on `property` as
       * the reference `point` provided
       * @param {PointElement} point - the reference point
       * @param {string} property - the property to match on
       * @returns {PointElement|undefined}
       */
    interpolate(point: PointElement, property: string): PointElement | undefined;
    /**
       * Append a segment of this line to current path.
       * @param {CanvasRenderingContext2D} ctx
       * @param {object} segment
       * @param {number} segment.start - start index of the segment, referring the points array
       * @param {number} segment.end - end index of the segment, referring the points array
       * @param {boolean} segment.loop - indicates that the segment is a loop
       * @param {object} params
       * @param {boolean} params.move - move to starting point (vs line to it)
       * @param {boolean} params.reverse - path the segment from end to start
       * @param {number} params.start - limit segment to points starting from `start` index
       * @param {number} params.end - limit segment to points ending at `start` + `count` index
       * @returns {undefined|boolean} - true if the segment is a full loop (path should be closed)
       */
    pathSegment(ctx: CanvasRenderingContext2D, segment: {
        start: number;
        end: number;
        loop: boolean;
    }, params: {
        move: boolean;
        reverse: boolean;
        start: number;
        end: number;
    }): undefined | boolean;
    /**
       * Append all segments of this line to current path.
       * @param {CanvasRenderingContext2D|Path2D} ctx
       * @param {number} [start]
       * @param {number} [count]
       * @returns {undefined|boolean} - true if line is a full loop (path should be closed)
       */
    path(ctx: CanvasRenderingContext2D | Path2D, start?: number, count?: number): undefined | boolean;
    /**
       * Draw
       * @param {CanvasRenderingContext2D} ctx
       * @param {object} chartArea
       * @param {number} [start]
       * @param {number} [count]
       */
    draw(ctx: CanvasRenderingContext2D, chartArea: object, start?: number, count?: number): void;
}
type PointElement = PointElement$1;

declare class BarElement extends Element<AnyObject, AnyObject> {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    constructor(cfg: any);
    options: any;
    horizontal: any;
    base: any;
    width: any;
    height: any;
    inflateAmount: any;
    draw(ctx: any): void;
    inRange(mouseX: any, mouseY: any, useFinalPosition: any): boolean;
    inXRange(mouseX: any, useFinalPosition: any): boolean;
    inYRange(mouseY: any, useFinalPosition: any): boolean;
    getCenterPoint(useFinalPosition: any): {
        x: number;
        y: number;
    };
    getRange(axis: any): number;
}

type elements_ArcElement = ArcElement;
declare const elements_ArcElement: typeof ArcElement;
type elements_LineElement = LineElement;
declare const elements_LineElement: typeof LineElement;
type elements_BarElement = BarElement;
declare const elements_BarElement: typeof BarElement;
declare namespace elements {
  export {
    elements_ArcElement as ArcElement,
    elements_LineElement as LineElement,
    PointElement$1 as PointElement,
    elements_BarElement as BarElement,
  };
}

/**
 * @typedef { import("../core/core.controller").default } Chart
 */
/**
 * Abstract class that allows abstracting platform dependencies away from the chart.
 */
declare class BasePlatform {
    /**
       * Called at chart construction time, returns a context2d instance implementing
       * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
       * @param {HTMLCanvasElement} canvas - The canvas from which to acquire context (platform specific)
       * @param {number} [aspectRatio] - The chart options
       */
    acquireContext(canvas: HTMLCanvasElement, aspectRatio?: number): void;
    /**
       * Called at chart destruction time, releases any resources associated to the context
       * previously returned by the acquireContext() method.
       * @param {CanvasRenderingContext2D} context - The context2d instance
       * @returns {boolean} true if the method succeeded, else false
       */
    releaseContext(context: CanvasRenderingContext2D): boolean;
    /**
       * Registers the specified listener on the given chart.
       * @param {Chart} chart - Chart from which to listen for event
       * @param {string} type - The ({@link ChartEvent}) type to listen for
       * @param {function} listener - Receives a notification (an object that implements
       * the {@link ChartEvent} interface) when an event of the specified type occurs.
       */
    addEventListener(chart: Chart$1, type: string, listener: Function): void;
    /**
       * Removes the specified listener previously registered with addEventListener.
       * @param {Chart} chart - Chart from which to remove the listener
       * @param {string} type - The ({@link ChartEvent}) type to remove
       * @param {function} listener - The listener function to remove from the event target.
       */
    removeEventListener(chart: Chart$1, type: string, listener: Function): void;
    /**
       * @returns {number} the current devicePixelRatio of the device this platform is connected to.
       */
    getDevicePixelRatio(): number;
    /**
       * Returns the maximum size in pixels of given canvas element.
       * @param {HTMLCanvasElement} element
       * @param {number} [width] - content width of parent element
       * @param {number} [height] - content height of parent element
       * @param {number} [aspectRatio] - aspect ratio to maintain
       */
    getMaximumSize(element: HTMLCanvasElement, width?: number, height?: number, aspectRatio?: number): {
        width: number;
        height: number;
    };
    /**
       * @param {HTMLCanvasElement} canvas
       * @returns {boolean} true if the canvas is attached to the platform, false if not.
       */
    isAttached(canvas: HTMLCanvasElement): boolean;
    /**
     * Updates config with platform specific requirements
     * @param {import("../core/core.config").default} config
     */
    updateConfig(config: Config): void;
}
type Chart$1 = Chart$5;

/**
 * Platform class for charts without access to the DOM or to many element properties
 * This platform is used by default for any chart passed an OffscreenCanvas.
 * @extends BasePlatform
 */
declare class BasicPlatform extends BasePlatform {
    acquireContext(item: any): any;
    updateConfig(config: any): void;
}

/**
 * Platform class for charts that can access the DOM and global window/document properties
 * @extends BasePlatform
 */
declare class DomPlatform extends BasePlatform {
    /**
       * @param {HTMLCanvasElement} canvas
       * @param {number} [aspectRatio]
       * @return {CanvasRenderingContext2D|null}
       */
    acquireContext(canvas: HTMLCanvasElement, aspectRatio?: number): CanvasRenderingContext2D | null;
    /**
       * @param {Chart} chart
       * @param {string} type
       */
    removeEventListener(chart: Chart, type: string): void;
    /**
       * @param {HTMLCanvasElement} canvas
       * @param {number} [width] - content width of parent element
       * @param {number} [height] - content height of parent element
       * @param {number} [aspectRatio] - aspect ratio to maintain
       */
    getMaximumSize(canvas: HTMLCanvasElement, width?: number, height?: number, aspectRatio?: number): {
        width: any;
        height: any;
    };
}
type Chart = Chart$5;

declare function _detectPlatform(canvas: any): typeof BasicPlatform | typeof DomPlatform;

declare namespace _default$5 {
    const id: string;
    namespace defaults {
        const algorithm: string;
        const enabled: boolean;
    }
    function beforeElementsUpdate(chart: any, args: any, options: any): void;
    function destroy(chart: any): void;
    function destroy(chart: any): void;
}

declare namespace _default$4 {
    const id: string;
    function afterDatasetsUpdate(chart: any, _args: any, options: any): void;
    function afterDatasetsUpdate(chart: any, _args: any, options: any): void;
    function beforeDraw(chart: any, _args: any, options: any): void;
    function beforeDraw(chart: any, _args: any, options: any): void;
    function beforeDatasetsDraw(chart: any, _args: any, options: any): void;
    function beforeDatasetsDraw(chart: any, _args: any, options: any): void;
    function beforeDatasetDraw(chart: any, args: any, options: any): void;
    function beforeDatasetDraw(chart: any, args: any, options: any): void;
    namespace defaults {
        const propagate: boolean;
        const drawTime: string;
    }
}

declare class Legend extends Element<AnyObject, AnyObject> {
    /**
       * @param {{ ctx: any; options: any; chart: any; }} config
       */
    constructor(config: {
        ctx: any;
        options: any;
        chart: any;
    });
    _added: boolean;
    legendHitBoxes: any[];
    /**
         * @private
         */
    private _hoveredItem;
    doughnutMode: boolean;
    chart: any;
    options: any;
    ctx: any;
    legendItems: any;
    columnSizes: any[];
    lineWidths: number[];
    maxHeight: any;
    maxWidth: any;
    top: any;
    bottom: any;
    left: any;
    right: any;
    height: any;
    width: any;
    _margins: any;
    position: any;
    weight: any;
    fullSize: any;
    update(maxWidth: any, maxHeight: any, margins: any): void;
    setDimensions(): void;
    buildLabels(): void;
    fit(): void;
    /**
       * @private
       */
    private _fitRows;
    _fitCols(titleHeight: any, labelFont: any, boxWidth: any, _itemHeight: any): any;
    adjustHitBoxes(): void;
    isHorizontal(): boolean;
    draw(): void;
    /**
       * @private
       */
    private _draw;
    /**
       * @protected
       */
    protected drawTitle(): void;
    /**
       * @private
       */
    private _computeTitleHeight;
    /**
       * @private
       */
    private _getLegendItemAt;
    /**
       * Handle an event
       * @param {ChartEvent} e - The event to handle
       */
    handleEvent(e: ChartEvent$1): void;
}
declare namespace _default$3 {
    export const id: string;
    export { Legend as _element };
    export function start(chart: any, _args: any, options: any): void;
    export function start(chart: any, _args: any, options: any): void;
    export function stop(chart: any): void;
    export function stop(chart: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export function afterUpdate(chart: any): void;
    export function afterUpdate(chart: any): void;
    export function afterEvent(chart: any, args: any): void;
    export function afterEvent(chart: any, args: any): void;
    export namespace defaults {
        const display: boolean;
        const position: string;
        const align: string;
        const fullSize: boolean;
        const reverse: boolean;
        const weight: number;
        function onClick(e: any, legendItem: any, legend: any): void;
        function onClick(e: any, legendItem: any, legend: any): void;
        const onHover: any;
        const onLeave: any;
        namespace labels {
            function color(ctx: any): any;
            const boxWidth: number;
            const padding: number;
            function generateLabels(chart: any): any;
            function generateLabels(chart: any): any;
        }
        namespace title {
            export function color_1(ctx: any): any;
            export { color_1 as color };
            const display_1: boolean;
            export { display_1 as display };
            const position_1: string;
            export { position_1 as position };
            export const text: string;
        }
    }
    export namespace descriptors {
        export function _scriptable(name: any): boolean;
        export namespace labels_1 {
            export function _scriptable_1(name: any): boolean;
            export { _scriptable_1 as _scriptable };
        }
        export { labels_1 as labels };
    }
}

type ChartEvent$1 = ChartEvent$3;

declare namespace _default$2 {
    const id: string;
    function start(chart: any, _args: any, options: any): void;
    function start(chart: any, _args: any, options: any): void;
    function stop(chart: any): void;
    function stop(chart: any): void;
    function beforeUpdate(chart: any, _args: any, options: any): void;
    function beforeUpdate(chart: any, _args: any, options: any): void;
    namespace defaults {
        export const align: string;
        export const display: boolean;
        export namespace font {
            const weight: string;
        }
        export const fullSize: boolean;
        export const padding: number;
        export const position: string;
        export const text: string;
        const weight_1: number;
        export { weight_1 as weight };
    }
    namespace defaultRoutes {
        const color: string;
    }
    namespace descriptors {
        const _scriptable: boolean;
        const _indexable: boolean;
    }
}

declare class Title extends Element<AnyObject, AnyObject> {
    /**
       * @param {{ ctx: any; options: any; chart: any; }} config
       */
    constructor(config: {
        ctx: any;
        options: any;
        chart: any;
    });
    chart: any;
    options: any;
    ctx: any;
    _padding: any;
    top: number;
    bottom: any;
    left: number;
    right: any;
    width: any;
    height: any;
    position: any;
    weight: any;
    fullSize: any;
    update(maxWidth: any, maxHeight: any): void;
    isHorizontal(): boolean;
    _drawArgs(offset: any): {
        titleX: any;
        titleY: any;
        maxWidth: number;
        rotation: number;
    };
    draw(): void;
}
declare namespace _default$1 {
    export const id: string;
    export { Title as _element };
    export function start(chart: any, _args: any, options: any): void;
    export function start(chart: any, _args: any, options: any): void;
    export function stop(chart: any): void;
    export function stop(chart: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export namespace defaults {
        export const align: string;
        export const display: boolean;
        export namespace font {
            const weight: string;
        }
        export const fullSize: boolean;
        export const padding: number;
        export const position: string;
        export const text: string;
        const weight_1: number;
        export { weight_1 as weight };
    }
    export namespace defaultRoutes {
        const color: string;
    }
    export namespace descriptors {
        const _scriptable: boolean;
        const _indexable: boolean;
    }
}

declare class Tooltip extends Element<AnyObject, AnyObject> {
    /**
     * @namespace Chart.Tooltip.positioners
     */
    static positioners: {
        /**
           * Average mode places the tooltip at the average position of the elements shown
           */
        average(items: any): false | {
            x: number;
            y: number;
        };
        /**
           * Gets the tooltip position nearest of the item nearest to the event position
           */
        nearest(items: any, eventPosition: any): false | {
            x: any;
            y: any;
        };
    };
    constructor(config: any);
    opacity: number;
    _active: any[];
    _eventPosition: any;
    _size: {
        width: number;
        height: any;
    };
    _cachedAnimations: Readonly<Animations>;
    _tooltipItems: any[];
    $animations: any;
    $context: any;
    chart: any;
    options: any;
    dataPoints: {
        chart: Chart$5;
        label: any;
        parsed: any;
        raw: any;
        formattedValue: any;
        dataset: any;
        dataIndex: number;
        datasetIndex: number;
        element: Element<AnyObject, AnyObject>;
    }[];
    title: any;
    beforeBody: any;
    body: any[];
    afterBody: any;
    footer: any;
    xAlign: any;
    yAlign: any;
    x: any;
    y: any;
    height: any;
    width: number;
    caretX: any;
    caretY: any;
    labelColors: any[];
    labelPointStyles: any[];
    labelTextColors: any[];
    initialize(options: any): void;
    /**
       * @private
       */
    private _resolveAnimations;
    /**
       * @protected
       */
    protected getContext(): any;
    getTitle(context: any, options: any): any;
    getBeforeBody(tooltipItems: any, options: any): any;
    getBody(tooltipItems: any, options: any): any[];
    getAfterBody(tooltipItems: any, options: any): any;
    getFooter(tooltipItems: any, options: any): any;
    /**
       * @private
       */
    private _createItems;
    update(changed: any, replay: any): void;
    drawCaret(tooltipPoint: any, ctx: any, size: any, options: any): void;
    getCaretPosition(tooltipPoint: any, size: any, options: any): {
        x1: any;
        x2: any;
        x3: any;
        y1: any;
        y2: any;
        y3: any;
    };
    drawTitle(pt: any, ctx: any, options: any): void;
    /**
       * @private
       */
    private _drawColorBox;
    drawBody(pt: any, ctx: any, options: any): void;
    drawFooter(pt: any, ctx: any, options: any): void;
    drawBackground(pt: any, ctx: any, tooltipSize: any, options: any): void;
    /**
       * Update x/y animation targets when _active elements are animating too
       * @private
       */
    private _updateAnimationTarget;
    /**
     * Determine if the tooltip will draw anything
     * @returns {boolean} True if the tooltip will render
     */
    _willRender(): boolean;
    draw(ctx: any): void;
    /**
       * Get active elements in the tooltip
       * @returns {Array} Array of elements that are active in the tooltip
       */
    getActiveElements(): any[];
    /**
       * Set active elements in the tooltip
       * @param {array} activeElements Array of active datasetIndex/index pairs.
       * @param {object} eventPosition Synthetic event position used in positioning
       */
    setActiveElements(activeElements: any[], eventPosition: object): void;
    _ignoreReplayEvents: boolean;
    /**
       * Handle an event
       * @param {ChartEvent} e - The event to handle
       * @param {boolean} [replay] - This is a replayed event (from update)
       * @param {boolean} [inChartArea] - The event is inside chartArea
       * @returns {boolean} true if the tooltip changed
       */
    handleEvent(e: ChartEvent, replay?: boolean, inChartArea?: boolean): boolean;
    /**
       * Helper for determining the active elements for event
       * @param {ChartEvent} e - The event to handle
       * @param {InteractionItem[]} lastActive - Previously active elements
       * @param {boolean} [replay] - This is a replayed event (from update)
       * @param {boolean} [inChartArea] - The event is inside chartArea
       * @returns {InteractionItem[]} - Active elements
       * @private
       */
    private _getActiveElements;
    /**
       * Determine if the active elements + event combination changes the
       * tooltip position
       * @param {array} active - Active elements
       * @param {ChartEvent} e - Event that triggered the position change
       * @returns {boolean} True if the position has changed
       */
    _positionChanged(active: any[], e: ChartEvent): boolean;
}
declare namespace _default {
    export const id: string;
    export { Tooltip as _element };
    export { positioners };
    export function afterInit(chart: any, _args: any, options: any): void;
    export function afterInit(chart: any, _args: any, options: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export function beforeUpdate(chart: any, _args: any, options: any): void;
    export function reset(chart: any, _args: any, options: any): void;
    export function reset(chart: any, _args: any, options: any): void;
    export function afterDraw(chart: any): void;
    export function afterDraw(chart: any): void;
    export function afterEvent(chart: any, args: any): void;
    export function afterEvent(chart: any, args: any): void;
    export namespace defaults {
        export const enabled: boolean;
        export const external: any;
        export const position: string;
        export const backgroundColor: string;
        export const titleColor: string;
        export namespace titleFont {
            const weight: string;
        }
        export const titleSpacing: number;
        export const titleMarginBottom: number;
        export const titleAlign: string;
        export const bodyColor: string;
        export const bodySpacing: number;
        export const bodyFont: {};
        export const bodyAlign: string;
        export const footerColor: string;
        export const footerSpacing: number;
        export const footerMarginTop: number;
        export namespace footerFont {
            const weight_1: string;
            export { weight_1 as weight };
        }
        export const footerAlign: string;
        export const padding: number;
        export const caretPadding: number;
        export const caretSize: number;
        export const cornerRadius: number;
        export function boxHeight(ctx: any, opts: any): any;
        export function boxWidth(ctx: any, opts: any): any;
        export const multiKeyBackground: string;
        export const displayColors: boolean;
        export const boxPadding: number;
        export const borderColor: string;
        export const borderWidth: number;
        export namespace animation {
            const duration: number;
            const easing: string;
        }
        export namespace animations {
            namespace numbers {
                const type: string;
                const properties: string[];
            }
            namespace opacity {
                const easing_1: string;
                export { easing_1 as easing };
                const duration_1: number;
                export { duration_1 as duration };
            }
        }
        export { defaultCallbacks as callbacks };
    }
    export namespace defaultRoutes {
        const bodyFont_1: string;
        export { bodyFont_1 as bodyFont };
        const footerFont_1: string;
        export { footerFont_1 as footerFont };
        const titleFont_1: string;
        export { titleFont_1 as titleFont };
    }
    export namespace descriptors {
        export function _scriptable(name: any): boolean;
        export const _indexable: boolean;
        export namespace callbacks {
            const _scriptable_1: boolean;
            export { _scriptable_1 as _scriptable };
            const _indexable_1: boolean;
            export { _indexable_1 as _indexable };
        }
        export namespace animation_1 {
            const _fallback: boolean;
        }
        export { animation_1 as animation };
        export namespace animations_1 {
            const _fallback_1: string;
            export { _fallback_1 as _fallback };
        }
        export { animations_1 as animations };
    }
    export const additionalOptionScopes: string[];
}

type ChartEvent = ChartEvent$3;
declare namespace positioners {
    /**
       * Average mode places the tooltip at the average position of the elements shown
       */
    function average(items: any): false | {
        x: number;
        y: number;
    };
    /**
       * Average mode places the tooltip at the average position of the elements shown
       */
    function average(items: any): false | {
        x: number;
        y: number;
    };
    /**
       * Gets the tooltip position nearest of the item nearest to the event position
       */
    function nearest(items: any, eventPosition: any): false | {
        x: any;
        y: any;
    };
    /**
       * Gets the tooltip position nearest of the item nearest to the event position
       */
    function nearest(items: any, eventPosition: any): false | {
        x: any;
        y: any;
    };
}
declare namespace defaultCallbacks {
    export { noop as beforeTitle };
    export function title(tooltipItems: any): any;
    export function title(tooltipItems: any): any;
    export { noop as afterTitle };
    export { noop as beforeBody };
    export { noop as beforeLabel };
    export function label(tooltipItem: any): any;
    export function label(tooltipItem: any): any;
    export function labelColor(tooltipItem: any): {
        borderColor: any;
        backgroundColor: any;
        borderWidth: any;
        borderDash: any;
        borderDashOffset: any;
        borderRadius: number;
    };
    export function labelColor(tooltipItem: any): {
        borderColor: any;
        backgroundColor: any;
        borderWidth: any;
        borderDash: any;
        borderDashOffset: any;
        borderRadius: number;
    };
    export function labelTextColor(): any;
    export function labelTextColor(): any;
    export function labelPointStyle(tooltipItem: any): {
        pointStyle: any;
        rotation: any;
    };
    export function labelPointStyle(tooltipItem: any): {
        pointStyle: any;
        rotation: any;
    };
    export { noop as afterLabel };
    export { noop as afterBody };
    export { noop as beforeFooter };
    export { noop as footer };
    export { noop as afterFooter };
}

declare namespace plugins {
  export {
    _default$5 as Decimation,
    _default$4 as Filler,
    _default$3 as Legend,
    _default$2 as SubTitle,
    _default$1 as Title,
    _default as Tooltip,
  };
}

declare class CategoryScale extends Scale$1 {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    /** @type {number} */
    _startValue: number;
    _valueRange: number;
    _addedLabels: any[];
    init(scaleOptions: any): void;
    parse(raw: any, index: any): number;
    buildTicks(): {
        value: any;
    }[];
    getLabelForValue(value: any): any;
    getPixelForValue(value: any): number;
    getPixelForTick(index: any): number;
    getValueForPixel(pixel: any): number;
}

declare class LinearScaleBase extends Scale$1 {
    /** @type {number} */
    start: number;
    /** @type {number} */
    end: number;
    /** @type {number} */
    _startValue: number;
    /** @type {number} */
    _endValue: number;
    _valueRange: number;
    parse(raw: any, index: any): number;
    handleTickRangeOptions(): void;
    getTickLimit(): number;
    /**
       * @protected
       */
    protected computeTickLimit(): number;
    getLabelForValue(value: any): string;
}

declare class LinearScale extends LinearScaleBase {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    getPixelForValue(value: any): number;
    getValueForPixel(pixel: any): number;
}

declare class LogarithmicScale extends Scale$1 {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    /** @type {number} */
    start: number;
    /** @type {number} */
    end: number;
    /** @type {number} */
    _startValue: number;
    _valueRange: number;
    parse(raw: any, index: any): number;
    _zero: boolean;
    handleTickRangeOptions(): void;
    /**
       * @param {number} value
       * @return {string}
       */
    getLabelForValue(value: number): string;
    getPixelForValue(value: any): number;
    getValueForPixel(pixel: any): number;
}

declare class RadialLinearScale extends LinearScaleBase {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    static defaultRoutes: {
        'angleLines.color': string;
        'pointLabels.color': string;
        'ticks.color': string;
    };
    static descriptors: {
        angleLines: {
            _fallback: string;
        };
    };
    /** @type {number} */
    xCenter: number;
    /** @type {number} */
    yCenter: number;
    /** @type {number} */
    drawingArea: number;
    /** @type {string[]} */
    _pointLabels: string[];
    _pointLabelItems: any[];
    _padding: any;
    generateTickLabels(ticks: any): void;
    setCenterPoint(leftMovement: any, rightMovement: any, topMovement: any, bottomMovement: any): void;
    getIndexAngle(index: any): number;
    getDistanceFromCenterForValue(value: any): number;
    getValueForDistanceFromCenter(distance: any): any;
    getPointLabelContext(index: any): any;
    getPointPosition(index: any, distanceFromCenter: any, additionalAngle?: number): {
        x: number;
        y: number;
        angle: number;
    };
    getPointPositionForValue(index: any, value: any): {
        x: number;
        y: number;
        angle: number;
    };
    getBasePosition(index: any): {
        x: number;
        y: number;
        angle: number;
    };
    getPointLabelPosition(index: any): {
        left: any;
        top: any;
        right: any;
        bottom: any;
    };
    /**
       * @protected
       */
    protected drawGrid(): void;
    /**
       * @protected
       */
    protected drawLabels(): void;
}

declare class TimeScale extends Scale$1 {
    static id: string;
    /**
     * @type {any}
     */
    static defaults: any;
    /**
       * @param {object} props
       */
    constructor(props: object);
    /** @type {{data: number[], labels: number[], all: number[]}} */
    _cache: {
        data: number[];
        labels: number[];
        all: number[];
    };
    /** @type {Unit} */
    _unit: Unit;
    /** @type {Unit=} */
    _majorUnit: Unit | undefined;
    _offsets: {};
    _normalized: boolean;
    _parseOpts: {
        parser: any;
        round: any;
        isoWeekday: any;
    };
    init(scaleOpts: any, opts?: {}): void;
    _adapter: DateAdapter;
    /**
       * @param {*} raw
       * @param {number?} [index]
       * @return {number}
       */
    parse(raw: any, index?: number | null): number;
    /**
       * @private
       */
    private _getLabelBounds;
    /**
       * Returns the start and end offsets from edges in the form of {start, end}
       * where each value is a relative width to the scale and ranges between 0 and 1.
       * They add extra margins on the both sides by scaling down the original scale.
       * Offsets are added when the `offset` option is true.
       * @param {number[]} timestamps
       * @protected
       */
    protected initOffsets(timestamps?: number[]): void;
    /**
       * Generates a maximum of `capacity` timestamps between min and max, rounded to the
       * `minor` unit using the given scale time `options`.
       * Important: this method can return ticks outside the min and max range, it's the
       * responsibility of the calling code to clamp values if needed.
       * @private
       */
    private _generate;
    /**
       * @param {number} value
       * @return {string}
       */
    getLabelForValue(value: number): string;
    /**
       * Function to format an individual tick mark
       * @param {number} time
       * @param {number} index
       * @param {object[]} ticks
       * @param {string|undefined} [format]
       * @return {string}
       * @private
       */
    private _tickFormatFunction;
    /**
       * @param {object[]} ticks
       */
    generateTickLabels(ticks: object[]): void;
    /**
       * @param {number} value - Milliseconds since epoch (1 January 1970 00:00:00 UTC)
       * @return {number}
       */
    getDecimalForValue(value: number): number;
    /**
       * @param {number} value - Milliseconds since epoch (1 January 1970 00:00:00 UTC)
       * @return {number}
       */
    getPixelForValue(value: number): number;
    /**
       * @param {number} pixel
       * @return {number}
       */
    getValueForPixel(pixel: number): number;
    /**
       * @param {string} label
       * @return {{w:number, h:number}}
       * @private
       */
    private _getLabelSize;
    /**
       * @param {number} exampleTime
       * @return {number}
       * @private
       */
    private _getLabelCapacity;
    /**
       * @protected
       */
    protected getDataTimestamps(): any;
    /**
       * @protected
       */
    protected getLabelTimestamps(): number[];
    /**
       * @param {number[]} values
       * @protected
       */
    protected normalize(values: number[]): number[];
}
type Unit = TimeUnit;
type DateAdapter = DateAdapter$1;

declare class TimeSeriesScale extends TimeScale {
    /** @type {object[]} */
    _table: object[];
    /** @type {number} */
    _minPos: number;
    /** @type {number} */
    _tableRange: number;
    /**
       * @protected
       */
    protected initOffsets(): void;
    /**
       * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
       * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
       * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
       * extremity (left + width or top + height). Note that it would be more optimized to directly
       * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
       * to create the lookup table. The table ALWAYS contains at least two items: min and max.
       * @param {number[]} timestamps
       * @return {object[]}
       * @protected
       */
    protected buildLookupTable(timestamps: number[]): object[];
    /**
       * Returns all timestamps
       * @return {number[]}
       * @private
       */
    private _getTimestampsForTable;
}

type scales_CategoryScale = CategoryScale;
declare const scales_CategoryScale: typeof CategoryScale;
type scales_LinearScale = LinearScale;
declare const scales_LinearScale: typeof LinearScale;
type scales_LogarithmicScale = LogarithmicScale;
declare const scales_LogarithmicScale: typeof LogarithmicScale;
type scales_RadialLinearScale = RadialLinearScale;
declare const scales_RadialLinearScale: typeof RadialLinearScale;
type scales_TimeScale = TimeScale;
declare const scales_TimeScale: typeof TimeScale;
type scales_TimeSeriesScale = TimeSeriesScale;
declare const scales_TimeSeriesScale: typeof TimeSeriesScale;
declare namespace scales {
  export {
    scales_CategoryScale as CategoryScale,
    scales_LinearScale as LinearScale,
    scales_LogarithmicScale as LogarithmicScale,
    scales_RadialLinearScale as RadialLinearScale,
    scales_TimeScale as TimeScale,
    scales_TimeSeriesScale as TimeSeriesScale,
  };
}

export { _detectPlatform, _default$6 as animator, controllers, elements, plugins, scales };
