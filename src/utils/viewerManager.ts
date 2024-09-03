import { Viewer, Ion, Terrain } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const defaultConstructorOptions: Viewer.ConstructorOptions = {
	animation: false, // 是否显示动画控件（默认播放、暂停控制）
	baseLayerPicker: false, // 是否显示基础图层选择器控件，用于切换底图和影像图层
	fullscreenButton: false, // 是否显示全屏按钮
	vrButton: false, // 是否显示 VR 模式按钮
	geocoder: false, // 是否启用地理编码器（搜索框），可以是布尔值或自定义地理编码服务数组
	homeButton: false, // 是否显示主页按钮，点击后视图将返回初始位置
	infoBox: false, // 是否显示信息框，点击图形对象时显示详细信息
	sceneModePicker: false, // 是否显示场景模式选择器（2D、3D、Columbus View）
	selectionIndicator: false, // 是否显示选择指示器，点击对象时高亮显示
	timeline: false, // 是否显示时间轴，用于时间控件
	navigationHelpButton: false, // 是否显示导航帮助按钮，提供基本操作说明
	navigationInstructionsInitiallyVisible: false, // 是否初始显示导航帮助信息
	scene3DOnly: false, // 是否仅显示 3D 场景模式，不支持 2D 和 Columbus View
	shouldAnimate: false, // 是否启用场景动画
	// clockViewModel?: ClockViewModel; // 自定义时钟视图模型
	// selectedImageryProviderViewModel?: ProviderViewModel; // 默认选择的影像提供者视图模型
	// imageryProviderViewModels?: ProviderViewModel[]; // 可选的影像提供者视图模型列表
	// selectedTerrainProviderViewModel?: ProviderViewModel; // 默认选择的地形提供者视图模型
	// terrainProviderViewModels?: ProviderViewModel[]; // 可选的地形提供者视图模型列表
	//   baseLayer?: ImageryLayer | false; // 初始基础图层，或禁用基础图层
	//   ellipsoid?: Ellipsoid; // 自定义椭球体，默认为 WGS84
	//   terrainProvider?: TerrainProvider; // 地形提供者，用于加载地形数据
	terrain: Terrain.fromWorldTerrain(), // 自定义地形配置
	//   skyBox?: SkyBox | false; // 自定义天空盒，或禁用天空盒
	//   skyAtmosphere?: SkyAtmosphere | false; // 自定义天空大气效果，或禁用大气效果
	//   fullscreenElement?: Element | string; // 进入全屏模式时全屏的元素，可以是 DOM 元素或 CSS 选择器
	//   useDefaultRenderLoop?: boolean; // 是否使用默认的渲染循环
	// targetFrameRate: 60, // 目标帧率（FPS），控制渲染的帧率
	//   showRenderLoopErrors?: boolean; // 是否显示渲染循环错误提示
	useBrowserRecommendedResolution: true, // 是否使用浏览器推荐的分辨率
	//   automaticallyTrackDataSourceClocks?: boolean; // 是否自动跟踪数据源中的时钟设置
	//   contextOptions?: ContextOptions; // WebGL 上下文选项配置
	//   sceneMode?: SceneMode; // 初始场景模式（2D, 3D, Columbus View）
	//   mapProjection?: MapProjection; // 自定义地图投影
	//   globe?: Globe | false; // 自定义地球对象，或禁用地球显示
	//   orderIndependentTranslucency?: boolean; // 是否启用顺序无关的透明度
	creditContainer: document.createElement('div'), // 显示版权信息的容器，可以是 DOM 元素或 CSS 选择器
	//   creditViewport?: Element | string; // 用于放置版权视口的元素
	//   dataSources?: DataSourceCollection; // 初始加载的数据源集合
	//   shadows?: boolean; // 是否启用阴影效果
	//   terrainShadows?: ShadowMode; // 地形阴影模式配置
	//   mapMode2D?: MapMode2D; // 2D 模式下的地图模式配置
	//   projectionPicker?: boolean; // 是否显示投影选择器
	//   blurActiveElementOnCanvasFocus?: boolean; // 当画布获得焦点时，是否失去当前活动元素的焦点
	//   requestRenderMode?: boolean; // 是否启用请求渲染模式，仅在请求时渲染
	//   maximumRenderTimeChange?: number; // 在请求渲染模式下，允许的最大渲染时间变化
	//   depthPlaneEllipsoidOffset?: number; // 深度平面与椭球体之间的偏移
	//   msaaSamples?: number; // 多重采样抗锯齿的样本数
};

class ViewerManager {
	private static instance: Viewer | null = null;

	static initialize(containerId: string, options?: Viewer.ConstructorOptions) {
		if (!ViewerManager.instance) {
			Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN;

			ViewerManager.instance = new Viewer(containerId, {
				...defaultConstructorOptions,
				...options,
			});
		}
		return ViewerManager.instance;
	}

	static getViewer() {
		if (!ViewerManager.instance) {
			throw new Error('Viewer is not initialized. Call initialize() first.');
		}
		return ViewerManager.instance;
	}

	static destroy() {
		if (ViewerManager.instance) {
			ViewerManager.instance.destroy();
			ViewerManager.instance = null;
		}
	}
}

export default ViewerManager;
