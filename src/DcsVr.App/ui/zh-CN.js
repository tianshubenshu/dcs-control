'use strict';
// Exact English source strings are the keys: changed upstream text falls back to English.
window.dcsZhCN = Object.fromEntries(`
Sections|功能分区
Main navigation|主导航
PERFORMANCE · VR|性能优化 · VR
Overview|概览
Feature guide|功能指南
Engine Optimizations|引擎优化
Engine|引擎
CPU Boost|CPU 加速
Quad Views|Quad Views
Framegen|帧生成
Frame generation|帧生成
Perception|视觉感知
DCS & headset|DCS 与头显
Checks|检查
Troubleshooting|故障排查
Stock DCS|恢复原版
Status at a glance|运行状态一览
What to expect|预期效果
CPU work inside DCS|DCS 内部 CPU 优化
CPU, VRAM & monitor|CPU、显存与显示器
Foveated rendering|注视点渲染
Neural rendering|神经渲染
Generation & limit|帧生成与帧率限制
Eyes & depth|眼睛与景深
Panel & in-flight keys|面板与飞行快捷键
Paths & launcher|路径与启动器
Checks & reports|检查与报告
Problems & support|问题与支持
Undo every change|撤销所有更改
Every pilot|所有玩家
Setup & safety|设置与恢复
CPU scheduling|CPU 调度
foveated rendering · VR|注视点渲染 · VR
neural rendering · VR|神经渲染 · VR
What runs when you press Launch DCS, and how your last flight went.|查看启动 DCS 时启用的功能，以及上次飞行的情况。
What each feature does, what to expect from it and what it costs, at a glance.|快速了解各项功能、预期效果和性能开销。
Makes DCS itself lighter on the CPU, on a monitor or in VR: more FPS, the same image.|降低 DCS 的 CPU 开销，适用于显示器和 VR：提升帧率，保持画面不变。
Gives DCS priority and the best CPU cores, and frees video memory and desktop resources while you fly.|提高 DCS 优先级并分配最佳 CPU 核心，飞行时释放显存和桌面资源。
Full detail where you look, lower resolution around it: less work for the GPU. Periphery stability calms the periphery.|注视区域保持清晰，外围降低分辨率以减少 GPU 负担；外围稳定功能可减少闪烁。
NVIDIA DLSS 5 neural rendering, and Foveated Super Resolution without Quad Views.|NVIDIA DLSS 5 神经渲染，以及不使用 Quad Views 时的注视点超分辨率。
NVIDIA DLSS 5 neural rendering on the focus area of Quad Views.|在 Quad Views 的注视区域应用 NVIDIA DLSS 5 神经渲染。
Generated frames between the ones DCS renders, and the DCS frame limit that goes with them.|在 DCS 渲染的帧之间插入生成帧，并设置相应的 DCS 帧率限制。
Eye distance, and how the image follows your eyes and shows depth: Pupil shift, Far depth and Depth boost.|设置瞳距，以及画面跟随眼睛和呈现深度的方式：瞳孔位移、远景深度和深度增强。
The in-headset panel (OSD) and every in-flight key, in one place.|集中设置头显状态面板（OSD）及所有飞行快捷键。
Where DCS is installed, the DCS launcher and, in VR, the headset software.|设置 DCS 安装路径、DCS 启动器，以及 VR 头显软件。
What to fix before launching, what to check yourself, and the files Launch DCS writes.|查看启动前需要解决的问题、需手动检查的项目和启动时写入的文件。
Why something in the headset does not work as expected, and a diagnostic package to attach to a report.|排查头显功能异常，并生成可附在问题报告中的诊断包。
Back to stock DCS puts DCS back exactly as it was before DCS Control: every file and setting it changed, in one step.|一步恢复 DCS Control 修改过的所有文件和设置，将 DCS 还原到使用前的状态。
Find a setting|查找设置
Find a setting (Ctrl K)|查找设置 (Ctrl K)
What's new|更新内容
What's new in this version|本版本更新内容
An update is available|有可用更新
Update|更新
Hide until DCS Control starts again|在下次启动 DCS Control 前隐藏
LAST FLIGHT|上次飞行
No flight recorded yet|暂无飞行记录
Refresh|刷新
Read from the logs after DCS exits.|DCS 退出后从日志中读取。
FOCUS AREA|注视区域
Coverage preview|覆盖范围预览
ILLUSTRATION|示意图
FOCUS|注视区域
Advanced image controls|高级图像设置
Model corrections, all at their defaults unless you changed them. Change one only to fix a specific problem you can see.|模型修正参数默认保持原值。仅在解决明确可见的画面问题时调整。
Reset to defaults|恢复默认值
Frame rate with these settings|当前设置对应的帧率
Calculated from the values below, not measured in flight.|根据下方参数计算，并非飞行实测结果。
READ-ONLY · NOTHING CHANGES UNTIL LAUNCH|只读预览 · 启动前不作更改
What happens at launch|启动时的操作
Open this page to see the plan for this PC.|打开本页以查看此电脑的执行计划。
READ FROM THE MODULE'S LOG|从模块日志读取
READ FROM THE LAYER'S LOG|从渲染层日志读取
Status in DCS|DCS 内的状态
Open this page to read the status.|打开本页以读取状态。
Test suite|测试套件
Measures the optimizations off and on inside DCS, taking turns for several minutes, and writes a report. Start it during a flight (in VR, keep the headset on and awake). In DCS, Ctrl+Alt+F11 also starts or stops it.|在 DCS 内交替关闭和开启优化，持续测量数分钟后生成报告。请在飞行中启动；VR 模式下应佩戴头显并保持唤醒。DCS 内也可用 Ctrl+Alt+F11 启动或停止。
Run test suite|运行测试套件
Open last report|打开上次报告
Open log|打开日志
What Pupil shift does and does not do|瞳孔位移的作用与限制
Does:|作用：
keeps the cockpit still against the outside world when only your eyes move.|仅转动眼睛时，让座舱相对外界保持稳定。
Does not:|不解决：
fix lens blur, distortion at the edges or sharpness.|镜片模糊、边缘畸变或清晰度问题。
It follows your eyes up to about 35° from the center.|可跟随眼睛偏离中心约 35° 的转动。
How to check it in flight|如何在飞行中验证
Pupil shift:|瞳孔位移：
look at a switch and move only your eyes left and right; the cockpit should stay still.|看向一个开关，仅左右转动眼睛，座舱应保持稳定。
Depth boost:|深度增强：
look at a distant aircraft or hill and press its key: the world gains depth, the cockpit stays the same. Use the in-flight keys to compare on and off.|看向远处的飞机或山丘并按下快捷键：外界深度应增强，座舱保持不变。可用飞行快捷键比较开关效果。
Sboys driver|Sboys 驱动
Needed for the Sboys route. Get the official 1.3.0 release, then in its tool choose About → Install driver.|Sboys 模式需要此驱动。获取官方 1.3.0 版本后，在其工具中选择 About → Install driver。
Download / verify|下载 / 验证
Import ZIP|导入 ZIP
Open Sboys tool|打开 Sboys 工具
Checks for these settings|当前设置的检查结果
Settings are checked as you change them. Check this PC also checks the headset software, drivers and write access.|修改设置时会自动检查。“检查此电脑”还会检查头显软件、驱动和写入权限。
Check this PC|检查此电脑
Export report|导出报告
Files Launch DCS writes|启动 DCS 时写入的文件
NOT REVIEWED|尚未预览
Full operation report|完整操作报告
Not reviewed yet.|尚未预览。
Detected on this PC|此电脑的检测结果
Waiting|等待中
Rescan this PC|重新扫描此电脑
Detected files & OpenXR layers|检测到的文件和 OpenXR 渲染层
LAST DCS SESSION|上次 DCS 会话
DLSS 5 on the focus area|注视区域的 DLSS 5
Explains the in-headset panel message "DLSS 5: ON but not applied": whether DLSS 5 reached the focus area of Quad Views in the last session, and if not, why.|解释头显面板的“DLSS 5: ON but not applied”提示：上次会话中 DLSS 5 是否作用于 Quad Views 注视区域，以及未生效的原因。
Open this page to read the last session.|打开本页以读取上次会话。
Diagnostic package|诊断包
One ZIP file with what is needed to understand a problem: attach it to your report on the forum or GitHub. Create it right after the flight that went wrong, before starting DCS again (DCS starts its log anew).|将排查问题所需的信息保存为 ZIP，可附在论坛或 GitHub 的问题报告中。请在异常飞行结束后立即创建，并且不要先重启 DCS（重启会覆盖日志）。
Create diagnostic package…|创建诊断包…
Updates|更新
DCS Control asks GitHub for a newer release at most every 6 hours. Nothing is downloaded until you choose Update, and only a setup signed with DCS Control's release key is installed.|DCS Control 最多每 6 小时向 GitHub 检查一次更新。选择“更新”后才会下载，仅安装通过上游发布密钥签名的安装包。注意：上游更新会覆盖此汉化界面，请先在自己的 Fork 中同步并重新构建中文版。
Check for updates when DCS Control starts|启动 DCS Control 时检查更新
Asks api.github.com for the list of releases; no other data is sent.|仅向 api.github.com 请求发布列表，不发送其他数据。
Check now|立即检查
Take the tour again|重新查看入门导览
What the package contains|诊断包包含的内容
This app's report: the profile, what was detected on this PC, the checks and the last flight.|本应用的报告：配置、此电脑的检测结果、检查结果和上次飞行记录。
DCS: dcs.log, options.lua, autoexec.cfg, the engine optimizations' log and reports, the versions of the DLSS and DirectX files in its bin folder.|DCS：dcs.log、options.lua、autoexec.cfg、引擎优化日志与报告，以及 bin 文件夹中 DLSS 和 DirectX 文件的版本。
The logs and settings of DLSS 5 (Cheeky), frame generation (OFXR), Quad Views, Pupil shift and CPU Boost.|DLSS 5（Cheeky）、帧生成（OFXR）、Quad Views、瞳孔位移和 CPU 加速的日志与设置。
Pimax Play's runtime and service logs and settings, or SteamVR's on the Sboys route.|Pimax Play 的运行时、服务日志与设置；Sboys 模式下则收集 SteamVR 的对应信息。
The OpenXR runtime and every OpenXR layer registered on this PC, Windows version, CPU and GPU with its driver.|此电脑注册的 OpenXR 运行时及渲染层、Windows 版本、CPU、GPU 和显卡驱动信息。
Only text files, each cut to its last 8 MB. Your Windows user name, PC name and e-mail addresses are replaced by <user>, <pc> and <e-mail>, and the account tokens, account ids and headset serial number in Pimax's logs are removed too. Nothing is sent anywhere: the file is saved where you choose.|仅包含文本文件，每个文件最多保留末尾 8 MB。Windows 用户名、电脑名和电子邮箱会替换为 <user>、<pc> 和 <e-mail>；Pimax 日志中的账号令牌、账号 ID 和头显序列号也会移除。不会上传任何内容，只保存到你选择的位置。
In-headset panel messages|头显面板提示
What the lines of the in-headset panel mean.|头显状态面板各项提示的含义。
STOCK DCS|恢复原版 DCS
Put DCS back as it was|将 DCS 恢复原状
The first time DCS Control changes a file, it keeps the original (or notes that there was none). Switching profiles just writes over the current files; Back to stock DCS puts every original back in one step.|DCS Control 首次修改文件时会备份原文件（或记录原本不存在）。切换配置只覆盖当前文件；“恢复原版 DCS”会一步还原所有原始文件。
Profile and launch|配置与启动
Window|窗口
Minimize|最小化
Maximize|最大化
Restore|还原
Close|关闭
Pimax headset · Pimax Play|Pimax 头显 · Pimax Play
How you fly|使用模式
On a monitor, or with any other headset: DCS runs as you set it up, with only the optimizations|使用显示器或其他头显：保留原有 DCS 设置，仅应用性能优化
Optimizations only|仅性能优化
Features|功能
Import|导入
Export|导出
Save these settings to a file|将当前设置保存到文件
Go back to the applied profile's settings|恢复已应用配置的设置
Undo changes|撤销更改
Setup|设置
Detect my setup|检测我的设置
Guided setup|设置向导
Starting|正在启动
Reading this PC's setup…|正在读取此电脑的设置…
Launch DCS|启动 DCS
Review files|预览文件更改
List every file and DCS setting Launch DCS writes for this profile. Read-only.|以只读方式列出启动此配置时将写入的所有文件和 DCS 设置。
Apply without launching|仅应用设置
Apply this profile now without starting DCS|立即应用此配置，不启动 DCS
Open Stock DCS to put back every file and setting DCS Control changed|打开恢复页面，还原 DCS Control 修改过的所有文件和设置
Back to stock DCS|恢复原版 DCS
Search settings and pages…|搜索设置和页面…
Close search|关闭搜索
Enter to open the first result|按 Enter 打开首个结果
Esc to close|按 Esc 关闭
BEFORE LAUNCH|启动前确认
Another program's dxgi.dll|其他程序的 dxgi.dll
Asked only once for this file. You can change the choice later on the DLSS 5 page (Keep another program's dxgi.dll working). Back to stock DCS always puts the original back.|对此文件只询问一次。以后可在 DLSS 5 页面更改“保留其他程序的 dxgi.dll”。恢复原版 DCS 时始终会还原原文件。
Cancel|取消
Set it aside|暂时停用
Keep it working|保留并继续加载
DETECT MY SETUP|检测我的设置
Settings found on this PC|此电脑上检测到的设置
Nothing is applied yet. Use these settings fills them in here; Launch DCS then applies them.|尚未应用任何更改。“使用这些设置”只填入界面；点击“启动 DCS”才会应用。
Use these settings|使用这些设置
FLIGHT PREPARATION|飞行准备
Close guided setup|关闭设置向导
Setup progress|设置进度
Back|上一步
Continue →|继续 →
UPDATE|更新
Release page|发布页面
Later|稍后
Update now|立即更新
Skip|跳过
Next|下一步
Done|完成
WHAT'S NEW|更新内容
This interface requires JavaScript in Microsoft Edge WebView2.|此界面需要在 Microsoft Edge WebView2 中启用 JavaScript。
Needs attention|需要处理
Working|处理中
Working…|处理中…
Applying the settings and starting DCS…|正在应用设置并启动 DCS…
Applying the settings without starting DCS…|正在应用设置，不启动 DCS…
Listing the files Launch DCS writes…|正在列出启动 DCS 时写入的文件…
Putting the original files back…|正在还原原始文件…
Correct the marked values first.|请先修正标记的数值。
Open this interface in DCS Control to connect to its local services.|请在 DCS Control 中打开此界面，以连接本地服务。
Browse|浏览
Browse…|浏览…
Off|关闭
ON|已开启
OFF|已关闭
On|开启
EXPERIMENTAL|实验性
Advanced|高级
Keep the defaults unless you are troubleshooting.|除非需要排查问题，否则请保留默认值。
Quad Views provider|Quad Views 提供方
Focus movement|注视区域跟随方式
Eye tracked|眼动追踪
Fixed (centered)|固定（居中）
Turbo mode|Turbo 模式
Alternative provider|其他提供方
Only to test another Quad Views build.|仅用于测试其他 Quad Views 构建版本。
Alternative Quad Views provider|其他 Quad Views 提供方
Off · normal stereo|关闭 · 普通双目渲染
Bundled Quad Views (recommended)|内置 Quad Views（推荐）
Pimax native Quad Views|Pimax 原生 Quad Views
Focus area|注视区域
Focus area source|注视区域参数来源
From Pimax Play's settings|读取 Pimax Play 设置
This profile|当前配置
Center resolution|中心分辨率
Peripheral resolution|外围分辨率
Horizontal FOV|水平视场
Vertical FOV|垂直视场
Focus width|注视区域宽度
Focus height|注视区域高度
Focus edge blending|注视区域边缘混合
Round focus area|圆形注视区域
Focus sharpening|注视区域锐化
Sharpening fades at the edge|边缘渐弱锐化
Periphery contrast|外围对比度
Focus ahead of fast eye movements|快速眼动预测
Steady focus while looking|凝视时稳定注视区域
Runtime file|运行时文件
Foveated Super Resolution|注视点超分辨率
Without Quad Views only. Works with or without DLSS 5.|仅在关闭 Quad Views 时可用，可独立使用或配合 DLSS 5。
DLSS 5 image|DLSS 5 图像
DLSS 5 area|DLSS 5 处理区域
Whole focus area · 10.8 ms · default|整个注视区域 · 10.8 ms · 默认
Central 80% · 7.9 ms|中央 80% · 7.9 ms
Central 70% · 6.4 ms|中央 70% · 6.4 ms
Central 50% · 4.8 ms|中央 50% · 4.8 ms
DLSS 5 fades at the focus edge|DLSS 5 效果在注视边缘渐弱
Working scale|处理分辨率比例
Process at render resolution|在渲染分辨率下处理
Intensity|强度
Model style|模型风格
Standard · default|标准 · 默认
Natural|自然
Cinematic|电影
Keep another program's dxgi.dll working|保留其他程序的 dxgi.dll
Structure & appearance|结构与外观
Defaults: 1×, masks off.|默认：1×，关闭遮罩。
Local tone|局部色调
Local structure|局部结构
Skin structure|皮肤结构
Automatic mask|自动遮罩
UI correction|界面修正
Color & transfer|色彩与迁移
Defaults: 1×.|默认：1×。
Color strength|色彩强度
Transfer strength|迁移强度
Paper white scale|纸白亮度比例
Depth & motion guides|深度与运动引导
Defaults: follow the game, 1×. Change only to fix a known guide issue.|默认：跟随游戏，1×。仅在解决已确认的引导数据问题时调整。
Depth convention|深度约定
Follow the game · default|跟随游戏 · 默认
Normal depth|正常深度
Reversed depth|反向深度
Motion scale X|水平运动矢量比例
Motion scale Y|垂直运动矢量比例
NVIDIA Optical Flow (RTX cards)|NVIDIA 光流（RTX 显卡）
FidelityFX Optical Flow (any card)|FidelityFX 光流（任意显卡）
Generated frames|生成帧数量
Auto · 2×, 3× when DCS falls behind|自动 · 2×，DCS 帧率不足时切换 3×
2× · one generated frame|2× · 插入一帧
3× · two generated frames|3× · 插入两帧
Smoothness buffer|平滑缓冲
Smooth mouse cursor|平滑鼠标光标
Optical flow resolution|光流分辨率
50% · default|50% · 默认
100% · full|100% · 完整
Optical flow quality|光流质量
Fast|快速
Medium · default|中等 · 默认
Slow · most analysis|慢速 · 最精细分析
Bidirectional flow|双向光流
Frame generation diagnostics|帧生成诊断
OFXR FPS counter|OFXR 帧率计数器
OFXR log|OFXR 日志
DCS frame limit|DCS 帧率限制
Frame limit|帧率限制
Keep the current DCS limit|保留当前 DCS 限制
Match refresh (recommended)|匹配刷新率（推荐）
Very high (300 FPS)|极高（300 FPS）
Custom limit|自定义限制
Read the refresh rate from the headset|从头显读取刷新率
Headset refresh rate|头显刷新率
Desktop VSync off|关闭桌面垂直同步
DCS priority|DCS 优先级
Normal|正常
Above normal · recommended|高于正常 · 推荐
High|高
Move VR runtime and headset services|调整 VR 运行时与头显服务的核心分配
Move background apps|调整后台应用的核心分配
Background apps|后台应用
Administrator rights|管理员权限
Flight helpers|飞行辅助
Free VRAM before flight|飞行前释放显存
Programs to close|需要关闭的程序
Reopen after the flight|飞行后重新打开
End programs that do not close|结束未响应关闭请求的程序
Pause the desktop Tobii eye tracker|暂停桌面 Tobii 眼动仪
Small DCS window in VR|VR 模式使用小型 DCS 窗口
Lower the monitor while flying|飞行时降低显示器模式
Monitor mode in flight|飞行时的显示器模式
Multi-threaded G-buffer|多线程 G-buffer
Model data allocator (parallel)|模型数据分配器（并行）
Streaming timer cache|纹理流送计时缓存
Task queue clock cache (camera motion)|任务队列时钟缓存（镜头移动）
Terrain prefetch fix|地形预取修复
Observe · count only|观察 · 仅计数
Skip repeats · recommended|跳过重复请求 · 推荐
Multi-threaded shadows|多线程阴影
Shadow caster instancing (exact)|阴影投射物实例化（保持精确）
Culling partition by real cost|按实际开销分配剔除任务
Culling partition boost|剔除任务分区优化
Texture streaming dedupe|纹理流送去重
Effect constant-buffer skip|跳过重复特效常量缓冲写入
Statistics counter without lock|无锁统计计数器
Frame memory per thread|逐线程帧内存
Redundant state filter|冗余状态过滤
Beeps|提示音
Developer mode|开发者模式
Developer payload|开发者模块
Developer settings file|开发者设置文件
Streaming timer refresh|纹理流送计时刷新间隔
Measurement hooks always on|始终启用测量钩子
DCS executable|DCS 可执行文件
DCS settings file|DCS 设置文件
Show the DCS launcher|显示 DCS 启动器
Eye distance|渲染瞳距
The headset's own (recommended)|头显自身瞳距（推荐）
DCS's custom IPD (as set in DCS)|DCS 自定义瞳距（在 DCS 中设置）
Set here|在此设置
Eye distance value|瞳距数值
Pupil shift|瞳孔位移
Eye rotation radius|眼球转动半径
Lens image distance|镜片成像距离
Periphery stability|外围稳定
Strength|强度
Far depth|远景深度
Subtle|轻微
Default|默认
Strong|强
Depth boost|深度增强
Own aircraft at true depth|本机保持真实深度
Mode|模式
Realistic (recommended)|真实（推荐）
Enhanced: more depth, not realistic|增强：深度更强，非真实比例
Normal depth up to|保持正常深度的最远距离
Full strength from|达到完整强度的起始距离
Cockpit distance|座舱判定距离
OSD: in-headset panel|OSD：头显状态面板
In-headset panel|头显状态面板
Visible at start|启动时显示
VRAM counter|显存计数器
In-flight keys|飞行快捷键
Headset runtime|头显运行时
Runtime override|指定其他运行时
Only for an OpenXR runtime that is not registered in Windows.|仅用于未在 Windows 中注册的 OpenXR 运行时。
OpenXR runtime file|OpenXR 运行时文件
ratio|比例
Choose|选择
Check|检查
Fly|飞行
Correct the marked numeric values before opening guided setup.|打开设置向导前，请先修正标记的数值。
Official setup guide ↗|官方设置指南 ↗
Check →|检查 →
Launch DCS ↗|启动 DCS ↗
What do you want to fly with?|准备使用哪些功能飞行？
Your quality settings stay as they are. Only the route and the active features change.|保留当前画质参数，仅更改使用模式和启用的功能。
Pimax (Pimax Play)|Pimax（Pimax Play）
Sboys (SteamVR)|Sboys（SteamVR）
Optimizations only (monitor or any other headset)|仅性能优化（显示器或其他头显）
Checking…|正在检查…
Ready to check|准备检查
All set|准备就绪
Fix these first|请先解决以下问题
Download / verify Sboys|下载 / 验证 Sboys
Import official ZIP|导入官方 ZIP
Files|文件
Saved Games settings|Saved Games 设置
NVIDIA DLSS 5 runtime|NVIDIA DLSS 5 运行时
Check again|重新检查
Downloading or checking official Sboys 1.3.0…|正在下载或检查官方 Sboys 1.3.0…
Opening the selected file…|正在打开所选文件…
Ready to fly|可以起飞
Press|点击
Start your headset software, then press|先启动头显软件，再点击
Keep these settings, don't launch|保留这些设置，暂不启动
Welcome to DCS Control|欢迎使用 DCS Control
It sets DCS up for your headset (or the monitor) and makes it run faster. This short tour shows where everything is. You can open it again from the Troubleshooting page.|为头显或显示器配置 DCS 并提升运行性能。本导览会介绍主要功能的位置，以后可在“故障排查”页面重新查看。
What each feature does, what to expect and what it costs, in a few lines each. A good place to start.|用简短说明介绍各项功能、预期效果和性能开销，建议从这里开始。
Pick Pimax, Sboys (SteamVR), or Optimizations only for a monitor or another headset.|选择 Pimax、Sboys（SteamVR），或为显示器和其他头显选择“仅性能优化”。
What to turn on|选择启用的功能
Tick the features you want. The arrow next to each one opens its settings.|勾选需要的功能，点击旁边的箭头可打开其设置。
Before you fly, Checks lists anything to fix, with a button that takes you to the setting.|飞行前，“检查”页面会列出需要处理的问题，点击按钮即可前往相关设置。
Always start DCS from here. It writes your profile into DCS first, then starts it.|请从这里启动 DCS，程序会先应用配置，然后启动游戏。
In flight|飞行中
The OSD shows status in the headset. Every in-flight key, and what it does, is listed on this page.|OSD 会在头显中显示运行状态。本页还列出了全部飞行快捷键及其作用。
One step puts DCS back exactly as it was before DCS Control.|一步将 DCS 恢复到使用 DCS Control 之前的状态。
Cost|开销
Needs|要求
Open →|打开 →
Where to start|从哪里开始
More FPS|提升帧率
Smoother|更流畅
New look|全新画面
Status|状态
More depth|更强深度
Steadier cockpit|更稳定的座舱
Calmer image|更稳定的画面
Undo all|全部还原
In VR|VR 模式
Then explore|进一步体验
Turn on Engine Optimizations: more FPS where the CPU is the limit, same image.|启用引擎优化：在 CPU 受限场景中提高帧率，保持画面不变。
Add Quad Views and Frame generation: the two that make the biggest difference.|添加 Quad Views 和帧生成：这两项功能通常带来最明显的改善。
DLSS 5 for a new look, Perception for depth. Try one at a time with its key.|用 DLSS 5 体验新画面，用视觉感知功能增强深度。请逐项启用并用快捷键比较。
off and on|关闭 / 开启
show or hide|显示 / 隐藏
None.|无。
Little GPU time.|少量 GPU 时间。
No GPU cost.|无 GPU 开销。
Almost no GPU cost.|几乎没有 GPU 开销。
GPU time and video memory.|GPU 时间和显存。
Under 0.1 ms per frame.|每帧低于 0.1 ms。
The bundled Quad Views.|内置 Quad Views。
The bundled Quad Views and Engine Optimizations.|内置 Quad Views 和引擎优化。
Quad Views with eye tracking.|启用眼动追踪的 Quad Views。
Right panel|右侧面板
No settings match this search.|没有匹配的设置。
Re-read|重新读取
Pimax Play settings not found|未找到 Pimax Play 设置
Pimax applies its own values.|Pimax 使用自身的参数。
How bundled Quad Views reproduces this|内置 Quad Views 如何复现这些设置
Focus share of the view|注视区域占视野比例
Focus pixel density|注视区域像素密度
Peripheral factor|外围分辨率系数
Edge blending|边缘混合
Pimax native Quad Views applies these values itself. Nothing is written to Pimax.|Pimax 原生 Quad Views 自行应用这些参数，不会写入 Pimax 设置。
Pimax Play values re-read; unchanged.|已重新读取 Pimax Play 参数，未发生变化。
Pimax Play's Quad View settings were not found.|未找到 Pimax Play 的 Quad View 设置。
Pimax Play's Quad View values changed. Launch DCS uses the new ones.|Pimax Play 的 Quad View 参数已更改，启动 DCS 时将使用新参数。
This profile's own focus values are used until Pimax Play's settings can be read. Select This profile to edit them.|读取到 Pimax Play 设置前，将使用当前配置的注视区域参数。选择“当前配置”可编辑这些参数。
Esc cancels · Backspace clears|Esc 取消 · Backspace 清除
Hold Ctrl, Alt or Shift together with another key.|请按住 Ctrl、Alt 或 Shift，再按另一个键。
This key has no usable key code. Choose another key.|此按键没有可用的键码，请换一个按键。
No update is available.|暂无可用更新。
Starting…|正在开始…
Cancel download|取消下载
This release has no installer to download: open its release page.|此版本没有可下载的安装包，请打开发布页面。
This copy has no release notes. They are on the Releases page on GitHub.|此副本未附带更新说明，可在 GitHub 的 Releases 页面查看。
Checking GitHub…|正在检查 GitHub…
Fetching the latest flight…|正在读取最近一次飞行…
Not available|不可用
Not found|未找到
Unknown|未知
Ready|就绪
Not applied|未应用
Applied|已应用
Running|运行中
Stopped|已停止
Pass|通过
Warning|警告
Error|错误
Manual|手动检查
Fix|修正
Details|详情
Not installed|未安装
Installed|已安装
Nothing to restore|无需恢复
Original files|原始文件
Restore originals|恢复原始文件
Settings changed|设置已更改
Launch ready|可以启动
Not ready|尚未就绪
`.trim().split('\n').map(line => { const separator = line.indexOf('|'); return [line.slice(0, separator), line.slice(separator + 1)]; }));

Object.assign(window.dcsZhCN, {
  "Bundled works with DLSS 5, frame generation and Periphery stability. Pimax native uses Pimax Play's own Quad Views: Pimax route only, and not with DLSS 5.": "内置版本支持 DLSS 5、帧生成和外围稳定。Pimax 原生版本使用 Pimax Play 自带的 Quad Views，仅支持 Pimax 模式，不能配合 DLSS 5。",
  "Eye tracked: the focus area follows your eyes. Fixed: it stays in the center of the view.": "眼动追踪：注视区域跟随眼睛移动。固定：注视区域始终位于视野中心。",
  "DCS starts the next frame while the headset still shows the previous one. Can help when the CPU limits FPS.": "头显仍在显示上一帧时，DCS 就开始处理下一帧。在 CPU 限制帧率时可能有帮助。",
  "Folder of another Quad Views build. Leave empty for the bundled one, which DLSS 5 needs.": "其他 Quad Views 构建版本的文件夹。留空使用内置版本；DLSS 5 需要内置版本。",
  "From Pimax Play's settings: the Quad View values you set in Pimax Play, read again at every launch (Pimax and Sboys route alike). Nothing is written to Pimax Play. This profile: set the values below, in the units of Pimax Play's Quick mode.": "读取 Pimax Play 设置：每次启动时重新读取 Pimax Play 的 Quad View 参数，适用于 Pimax 和 Sboys 模式，不修改 Pimax Play。当前配置：使用下方参数，单位与 Pimax Play 的 Quick 模式一致。",
  "Detail inside the focus area, as in Pimax Play. Above 100% is sharper and costs more GPU.": "注视区域内的细节，与 Pimax Play 的单位一致。超过 100% 更清晰，但增加 GPU 开销。",
  "Resolution around the focus area, as in Pimax Play. Lower saves GPU; bundled Quad Views needs at least 16%.": "注视区域外的分辨率，与 Pimax Play 的单位一致。越低越节省 GPU；内置 Quad Views 最低需要 16%。",
  "As in Pimax Play's Quick mode: the part of the view left outside the focus area. 33% gives a focus area 67% of the view wide.": "与 Pimax Play 的 Quick 模式一致：表示注视区域以外的视野比例。33% 对应注视区域占视野宽度的 67%。",
  "As in Pimax Play's Quick mode: 33% gives a focus area 67% of the view tall.": "与 Pimax Play 的 Quick 模式一致：33% 对应注视区域占视野高度的 67%。",
  "Without Quad Views: how much of the view's width is in full detail (1 = all of it).": "不使用 Quad Views 时，全细节区域占视野宽度的比例（1 表示全部）。",
  "Without Quad Views: how much of the view's height is in full detail (1 = all of it).": "不使用 Quad Views 时，全细节区域占视野高度的比例（1 表示全部）。",
  "Foveated Super Resolution without Quad Views: resolution around the focus area. Lower saves GPU.": "关闭 Quad Views、使用注视点超分辨率时的外围分辨率。越低越节省 GPU。",
  "How wide the edge of the focus area fades into the periphery. Wider is softer but leaves a little less area in full detail. With values from Pimax Play and its Transition Mode Off, the edge is hard (0).": "注视区域边缘向外围渐变的宽度。越宽越柔和，但完整细节区域会略小。读取 Pimax Play 参数且其 Transition Mode 关闭时，使用硬边缘（0）。",
  "On: the focus area is a circle. Off: a rectangle with rounded corners, which keeps more detail in the corners. Either way its edge fades out over Focus edge blending.": "开启：注视区域为圆形。关闭：使用圆角矩形，保留更多角落细节。两者均使用“注视区域边缘混合”设置的渐变宽度。",
  "Extra sharpening inside the focus area. 0 is off.": "为注视区域增加锐化。0 表示关闭。",
  "The sharpening fades out toward the edge of the focus area, so detail steps down gradually and the edge is harder to see. Almost no GPU cost.": "锐化向注视区域边缘逐渐减弱，使细节平滑过渡，边界更不明显。几乎没有 GPU 开销。",
  "Brings back the local contrast the periphery loses at its lower resolution, so it looks less blurry next to the focus area. Almost no GPU cost. 0 is off. Raise it slowly: too much makes the periphery shimmer (Periphery stability, below, calms that).": "恢复外围低分辨率损失的局部对比度，减少与注视区域相邻处的模糊感。几乎没有 GPU 开销，0 为关闭。请逐步增加；过高会导致外围闪烁，可用下方的外围稳定功能缓解。",
  "When your eyes jump, the focus area reaches ahead along the jump for a moment, so you land in full detail instead of waiting a frame or two (most noticeable with frame generation). No GPU cost: for that moment the focus area is a little less sharp.": "眼睛快速跳转时，短暂将注视区域提前移向目标，减少落点等待一两帧才清晰的情况（帧生成时尤为明显）。不增加 GPU 开销，但预测期间注视区域清晰度略降。",
  "Keeps the focus area still while your eyes rest (movements under half a degree), so eye-tracker noise does not make its edge shimmer. Real eye movements are followed at once.": "凝视时保持注视区域稳定（过滤小于半度的微动），防止眼动仪噪声使边缘闪烁。真正的眼睛移动会立即跟随。",
  "Runs DLSS 5 on the image. With Quad Views, only on the focus area.": "对画面应用 DLSS 5。使用 Quad Views 时，仅处理注视区域。",
  "NVIDIA's nvngx_dlssnr.dll (tested: version 310.8). On RTX 20, 30 and 40 cards, NVIDIA's file patched for them works too. Select it once: DCS Control keeps a verified copy and uses it while this field is empty.": "NVIDIA 的 nvngx_dlssnr.dll（测试版本：310.8）。RTX 20、30、40 系列也可使用针对这些显卡修补的 NVIDIA 文件。选择一次后，DCS Control 会保留验证过的副本；此字段留空时使用该副本。",
  "More FPS: DLSS at full quality only where you look, lighter around it. For stereo without Quad Views.": "提升帧率：仅在注视区域使用完整质量的 DLSS，外围降低开销。用于不启用 Quad Views 的双目渲染。",
  "How much of the focus area DLSS 5 processes; around it the image is normal DLSS. Times are GPU time for both eyes, measured on an RTX 5090 (1764×2480 per eye, full working scale).": "DLSS 5 处理注视区域的比例；其余部分使用普通 DLSS。时间为 RTX 5090、每眼 1764×2480、完整处理比例下的双眼 GPU 时间实测值。",
  "The DLSS 5 look (tone, color, detail) fades out toward the edge of the focus area, so the focus area does not stand out as a patch with a different look. No GPU cost.": "DLSS 5 的色调、颜色和细节效果在注视区域边缘逐渐减弱，避免出现风格不同的明显色块。不增加 GPU 开销。",
  "The resolution DLSS 5 works at. Lower costs less GPU and gives less detail.": "DLSS 5 处理时使用的分辨率。越低越节省 GPU，但细节越少。",
  "On: before DLSS upscaling, faster but less detail. Off: at output resolution, more detail and more GPU.": "开启：在 DLSS 放大前处理，速度更快但细节较少。关闭：在输出分辨率处理，细节更好但 GPU 开销更高。",
  "How strongly the DLSS 5 image is blended in. Default 1.": "DLSS 5 图像混合强度，默认值为 1。",
  "The look of the DLSS 5 model.": "DLSS 5 模型的画面风格。",
  "For ReShade or an overlay that puts its own dxgi.dll in DCS. On: it keeps working together with DLSS 5. Off: it is set aside while this profile is applied. Back to stock DCS puts it back either way.": "适用于在 DCS 中放置自有 dxgi.dll 的 ReShade 或叠加层。开启：与 DLSS 5 一起加载。关闭：应用此配置期间暂时停用。无论选哪项，恢复原版 DCS 时都会还原该文件。",
  "Local contrast response.": "局部对比度响应。",
  "Fine-detail reconstruction.": "精细结构重建。",
  "Detail on skin; depends on the model mask.": "皮肤细节，取决于模型遮罩。",
  "Let the model mask regions automatically.": "让模型自动遮罩不同区域。",
  "Model handling of HUD and cockpit text.": "模型对 HUD 和座舱文字的处理。",
  "Color reconstruction strength.": "色彩重建强度。",
  "Transfer response strength.": "迁移响应强度。",
  "White-level multiplier.": "白色亮度的倍率。",
  "Follow the game or force a convention.": "跟随游戏或强制使用指定深度约定。",
  "Horizontal motion vector multiplier.": "水平运动矢量的倍率。",
  "Vertical motion vector multiplier.": "垂直运动矢量的倍率。",
  "NVIDIA Optical Flow needs an NVIDIA RTX card. FidelityFX works on any graphics card.": "NVIDIA 光流需要 NVIDIA RTX 显卡。FidelityFX 适用于任意显卡。",
  "Auto: DCS renders half the refresh rate, and a second generated frame is added only while DCS cannot keep up. 3×: DCS always renders a third, with more latency and more artifacts in sideways motion.": "自动：DCS 渲染刷新率的一半，仅在帧率不足时再插入第二个生成帧。3×：DCS 始终渲染刷新率的三分之一，延迟更高，横向运动伪影更多。",
  "On: holds one extra frame, which smooths out uneven DCS frame times but adds about 11 ms of latency (one refresh at 90 Hz). In 3× it uses the extra frame only when needed. Off: lower latency, more stutter when frame times vary.": "开启：多缓存一帧，平滑 DCS 帧时间波动，但增加约 11 ms 延迟（90 Hz 下的一次刷新）。3× 模式仅在需要时使用额外帧。关闭：延迟更低，但帧时间波动时更易卡顿。",
  "Draws the mouse cursor at its in-between position in generated frames, so it moves smoothly. Where you click doesn't change.": "在生成帧中绘制鼠标光标的中间位置，使移动更平滑。不改变实际点击位置。",
  "The resolution motion is estimated at. Higher costs more GPU.": "估算运动时的分辨率。越高 GPU 开销越大。",
  "How carefully motion is estimated. Slower is more careful and costs more GPU.": "运动估算的精细程度。速度越慢，估算越精细，GPU 开销越大。",
  "Estimates motion forwards and backwards. Costs more GPU.": "同时估算正向和反向运动，增加 GPU 开销。",
  "OFXR's own FPS counter, always visible. The in-headset panel (OSD page) also shows FPS and can be hidden in flight.": "OFXR 自带的常显帧率计数器。OSD 页面的头显面板也能显示帧率，并可在飞行中隐藏。",
  "Writes OFXR's log while you fly, for troubleshooting.": "飞行时写入 OFXR 日志，用于故障排查。",
  "Match refresh: DCS renders exactly the frames the headset needs (half or a third with frame generation), so none are wasted.": "匹配刷新率：DCS 恰好渲染头显需要的帧数（启用帧生成时为一半或三分之一），避免浪费渲染性能。",
  "Pimax Play: the rate the headset runs at now, or ran at in its last session. Sboys: SteamVR's refresh rate. Off: set it below.": "Pimax Play：读取头显当前或上次会话的刷新率。Sboys：读取 SteamVR 刷新率。关闭：使用下方手动设置。",
  "Used when the refresh rate is not read from the headset, or before the headset software has reported one.": "未从头显读取刷新率，或头显软件尚未报告刷新率时使用。",
  "The most frames DCS renders per second.": "DCS 每秒最多渲染的帧数。",
  "Stops VSync of the DCS window on the monitor from holding back the frame rate. The headset keeps its own sync.": "避免显示器上 DCS 窗口的垂直同步限制帧率。头显继续使用自身的同步机制。",
  "Gives DCS priority and its best CPU cores, and moves other programs out of its way.": "提高 DCS 优先级，将其分配到最佳 CPU 核心，并调整其他程序的资源占用。",
  "Above normal suits most setups. High can starve audio, input and headset services when DCS uses every core.": "大多数配置适合“高于正常”。DCS 占满所有核心时，“高”可能挤占音频、输入和头显服务的资源。",
  "Keeps Pimax or SteamVR services off the cores DCS uses for its main and render threads.": "避免 Pimax 或 SteamVR 服务占用 DCS 主线程和渲染线程使用的核心。",
  "Moves the apps below to the slowest cores at below-normal priority while DCS runs.": "DCS 运行时，将下方应用分配到较慢的核心，并将优先级降至低于正常。",
  "Program names as in the Details tab of Task Manager, one per line, without .exe.": "程序名与任务管理器“详细信息”页一致，每行一个，不含 .exe。",
  "Asks Windows for permission (UAC) when DCS starts, so system services can be moved too. DCS itself still runs as your user. Off: those services are left as they are.": "DCS 启动时请求 Windows 管理员授权（UAC），以便调整系统服务的核心分配。DCS 本身仍以当前用户运行。关闭时保留这些系统服务的原设置。",
  "Closes the programs below when DCS starts, so their video memory is free for DCS. Each gets a normal close request first. No program or Windows setting is changed.": "DCS 启动时关闭下列程序，为 DCS 释放显存。先向每个程序发送正常关闭请求。不修改程序本身或 Windows 设置。",
  "Program names as in the Details tab of Task Manager, one per line, without .exe; * and ? are wildcards. Voice chat (Discord) and recording (OBS) are left out on purpose.": "程序名与任务管理器“详细信息”页一致，每行一个，不含 .exe；* 和 ? 可作通配符。刻意不包含语音聊天（Discord）和录制软件（OBS）。",
  "Starts the closed programs again, as your user, when DCS exits.": "DCS 退出后，以当前用户身份重新启动之前关闭的程序。",
  "After 5 seconds, ends a program that ignored the close request. Unsaved work in it is lost. Off: it keeps running.": "5 秒后强制结束忽略关闭请求的程序，其未保存的工作将丢失。关闭此项则保留这些程序继续运行。",
  "For a desktop Tobii Eye Tracker 5 or 4C next to a Pimax Crystal: its software (Tobii Experience) also takes over the headset's eye tracker, and Pimax eye tracking stops working. While DCS runs, the desktop tracker's services are paused; they start again when DCS exits. The headset's eye tracking is never touched. Asks for administrator rights (UAC) when DCS starts.": "适用于 Pimax Crystal 旁的桌面 Tobii Eye Tracker 5 或 4C：Tobii Experience 也会占用头显眼动仪，导致 Pimax 眼动追踪失效。DCS 运行时暂停桌面眼动仪服务，退出后恢复。不会调整头显眼动追踪本身。启动时请求管理员授权（UAC）。",
  "Sets the DCS window on the monitor to 1280×720, windowed. The headset image does not change; the smaller window saves some VRAM and GPU time. Back to stock DCS puts your window settings back.": "将显示器上的 DCS 窗口设为 1280×720 窗口模式，不改变头显画面，可节省部分显存和 GPU 时间。恢复原版 DCS 时还原窗口设置。",
  "Switches the main monitor to the mode below when DCS starts, and back when DCS exits. It is never saved as a Windows setting, so a restart also brings your mode back. HDR is left as it is.": "DCS 启动时将主显示器切换到下方模式，退出后还原。不将此模式保存为 Windows 设置，因此重启电脑也能恢复。保留 HDR 设置。",
  "Modes your main monitor reports. 1920×1080 at 60 Hz suits most setups.": "使用主显示器报告的模式。1920×1080、60 Hz 适合多数配置。",
  "Launch DCS (or Apply without launching) installs a small module in Saved Games\\DCS\\Scripts that DCS loads by itself. It then works every time DCS starts, also from Steam or a desktop shortcut, until you turn it off here or use Back to stock DCS. Nothing in the DCS installation changes. Tested on DCS 2.9.30 in single player.": "点击“启动 DCS”或“仅应用设置”后，会在 Saved Games\\DCS\\Scripts 中安装一个由 DCS 自动加载的小模块。此后即使从 Steam 或桌面快捷方式启动也生效，直到在此关闭或恢复原版 DCS。不修改 DCS 安装目录。已在 DCS 2.9.30 单人模式下测试。",
  "DCS draws the scene’s models one at a time on its render thread. The module prepares those draws on other CPU cores, in DCS’s exact order, and DCS plays them back. Verified: identical image. Measured: 22 to 24% more FPS on its own; with everything on, the GPU usually becomes the limit.": "DCS 原本在渲染线程上逐个绘制场景模型。本模块让其他 CPU 核心按 DCS 的原始顺序准备这些绘制命令，再交给 DCS 执行。已验证画面一致。单项实测提升 22–24% 帧率；全部开启后通常由 GPU 成为瓶颈。",
  "The threads that prepare aircraft and object models take memory from one shared pool and wait for each other. The module gives each thread its own memory. Measured: 6% more FPS, p95 frame time 9% lower.": "准备飞机和物体模型的线程原本共用一个内存池，需相互等待。此项为每个线程分配独立内存。实测帧率提升 6%，p95 帧时间降低 9%。",
  "DCS reads a precise clock every time it uses a texture, only to note when the texture was last used. The module gives it a time refreshed every millisecond instead; texture streaming works as before. Measured: 5 to 6% more FPS.": "DCS 每次使用纹理时都读取高精度时钟，仅用于记录最后使用时间。此项改为使用每毫秒刷新的缓存时间，不改变纹理流送行为。实测帧率提升 5–6%。",
  "At the start of each frame DCS works through its task queue and reads the clock for every task; with this on, that loop uses the cached time. Helps when the view moves fast (2.9 to 1.6 ms per frame on the render thread in a fast flight); no change when it is still. Needs Streaming timer cache.": "每帧开始时 DCS 遍历任务队列并为每项任务读取时钟；开启后使用缓存时间。快速移动视角时可改善表现（快速飞行中渲染线程每帧从 2.9 ms 降至 1.6 ms），静止时无变化。需要开启纹理流送计时缓存。",
  "DCS’s terrain workers ask Windows to prefetch the same memory about a million times a second. The fix skips the repeats; a prefetch is only a hint, so the image cannot change. Observe only counts the calls. Measured: about 4% less CPU for DCS, more in CPU-bound scenes.": "DCS 地形线程每秒约百万次请求 Windows 预取相同内存。本修复跳过重复请求；预取只是提示，不改变画面。“观察”仅计数。实测 DCS CPU 占用减少约 4%，CPU 受限场景收益更明显。",
  "DCS draws the shadows one object at a time on its render thread. The module prepares those draws on 8 other threads and DCS plays them back, so the render thread waits less. Verified: identical image. Measured: 3 to 5% more FPS, p95 frame time 4 to 7% lower. Total CPU use rises a little because the work moves to other cores.": "DCS 原本在渲染线程上逐个绘制物体阴影。本模块让另外 8 个线程准备命令，DCS 再执行，减少渲染线程等待。已验证画面一致。实测帧率提升 3–5%，p95 帧时间降低 4–7%。任务转移到其他核心后，CPU 总占用略升。",
  "Identical objects that cast shadows are drawn together in one go instead of one by one. The module prepares the shader versions it needs in the background (about 2.5 minutes after DCS starts) without writing anything to the DCS installation, and turns itself off on any fault. Verified: identical image. Measured: 2.8% more FPS, plus about 1.9% from planning the work off the render thread.": "将相同的阴影投射物合并绘制。本模块在后台准备需要的着色器变体（DCS 启动后约 2.5 分钟），不写入 DCS 安装目录，出现异常会自动关闭。已验证画面一致。实测帧率提升 2.8%，把规划任务移出渲染线程还可提升约 1.9%。",
  "DCS splits the search for visible objects into tasks using a fixed estimate. This splits it by what each object really costs, measured as DCS runs, so the tasks finish together. Measured: 2.75% more FPS, p95 frame time 4% lower.": "DCS 原本按固定估算值拆分可见物体搜索任务。此项根据运行时测得的实际开销拆分，使各任务同时完成。实测帧率提升 2.75%，p95 帧时间降低 4%。",
  "DCS splits the search for visible objects into 12 uneven tasks and waits for the slowest. The module splits the same work into 16; the same objects are found. Measured: 2% more FPS, p95 frame time 3% lower.": "DCS 原本将可见物体搜索拆成 12 个不均衡任务，并等待最慢的任务。此项将同样的工作拆成 16 个任务，结果不变。实测帧率提升 2%，p95 帧时间降低 3%。",
  "DCS often asks for the same texture at the same size several times within a millisecond. The repeats are skipped. Measured: 2% more FPS.": "DCS 常在一毫秒内多次请求相同纹理及相同尺寸，此项跳过重复请求。实测帧率提升 2%。",
  "The effects system sets the same data again although it is already set. The repeat is skipped. Measured together with Statistics counter without lock: 3.6% more FPS.": "特效系统有时重复设置已经设置好的数据，此项跳过重复写入。与无锁统计计数器一起实测提升 3.6% 帧率。",
  "A triangle counter used only for statistics no longer makes all model threads wait for each other.": "仅用于统计的三角形计数器不再使所有模型线程相互等待。",
  "Short-lived memory for each frame comes from one shared pool the model threads queue for. Each thread gets its own; when that runs out, the shared pool is used. Measured: 1.5% more FPS, culling 9% faster.": "每帧的临时内存原本来自模型线程共同排队使用的内存池。此项为每个线程提供独立内存，用尽时再回到共享池。实测帧率提升 1.5%，剔除速度提升 9%。",
  "DCS sets graphics state (shaders, buffers, textures) that is already set, hundreds of thousands of times a frame. The repeats are skipped. Verified: identical image. Measured: about 1.2% less CPU, 0.5 to 1% more FPS. Turns itself off after a DCS update.": "DCS 每帧数十万次设置已设置过的图形状态（着色器、缓冲区、纹理），此项跳过重复设置。已验证画面一致。实测 CPU 占用降低约 1.2%，帧率提升 0.5–1%。DCS 更新后会自动关闭。",
  "Sound feedback for the in-flight switch and the test suite.": "为飞行快捷键和测试套件提供声音反馈。",
  "Off for normal flying and for testing a release. On: for working on the module, DCS hot-reloads the payload below whenever it changes and takes every engine setting from the settings file below instead of this page.": "正常飞行和测试发布版本时请关闭。开启后用于模块开发：下方模块变化时 DCS 会热重载，并从下方设置文件读取全部引擎参数，而非使用本页设置。",
  "A DcsQvCullPayload.dll built elsewhere. While it is missing, the installed copy runs.": "其他位置构建的 DcsQvCullPayload.dll。找不到时使用已安装的副本。",
  "A DcsQvCull.ini that replaces the one this profile installs. A run_suite.flag next to it starts the test suite too.": "用自定义 DcsQvCull.ini 替代此配置安装的文件。在其旁边放置 run_suite.flag 也能启动测试套件。",
  "How often the cached time is refreshed. 1000 µs (1 ms) is far below one frame.": "缓存时间的刷新间隔。1000 µs（1 ms）远短于一帧。",
  "Normally installed only while the test suite runs. For troubleshooting; costs some CPU.": "通常只在测试套件运行期间安装。始终开启用于排查问题，会增加部分 CPU 开销。",
  "DCS.exe in the bin folder of your installation.": "DCS 安装目录 bin 文件夹中的 DCS.exe。",
  "options.lua in Saved Games\\DCS\\Config.": "Saved Games\\DCS\\Config 中的 options.lua。",
  "On: the DCS launcher opens first; press Play there. Off: Launch DCS goes straight into the game (Back to stock DCS turns the launcher back on).": "开启：先显示 DCS 启动器，再在其中点击 Play。关闭：直接启动游戏。恢复原版 DCS 时会重新启用启动器。",
  "The distance between your eyes that DCS renders with. The headset's own value (measured, or set in Pimax Play or SteamVR) gives the world its true size and depth. DCS's custom IPD changes the size of everything: leave it off unless you have a reason. Back to stock DCS restores DCS's own setting.": "DCS 渲染时使用的双眼间距。头显自身的测量值或 Pimax Play、SteamVR 设置可呈现真实的世界大小和深度。DCS 自定义 IPD 会改变所有物体的大小，无明确需要时请勿开启。恢复原版 DCS 时还原原设置。",
  "Used when Eye distance is Set here.": "“渲染瞳距”选择“在此设置”时使用。",
  "Each eye is rendered from where its pupil is. No GPU cost.": "从瞳孔实际位置渲染每只眼睛，不增加 GPU 开销。",
  "How far the pupil sits from the point the eye turns around. 10 to 11 mm fits most people.": "瞳孔到眼球转动中心的距离，10–11 mm 适合大多数人。",
  "How far away the lens shows the image. 1 to 2 m is typical; it barely matters.": "镜片呈现图像的距离，通常为 1–2 m，此参数影响很小。",
  "Steadies the periphery from frame to frame. Almost no GPU cost.": "提高外围画面在连续帧之间的稳定性，几乎没有 GPU 开销。",
  "Higher is steadier, but moving scenery can leave a faint trail. 0.5 is a good start.": "越高越稳定，但移动景物可能留下轻微拖影。建议从 0.5 开始。",
  "Adds depth between about 50 m and 2 km. Costs under 0.1 ms per frame.": "增强约 50 m 到 2 km 范围内的深度，每帧开销低于 0.1 ms。",
  "Subtle, Default or Strong. Start with Default.": "轻微、默认或强，建议先使用默认值。",
  "The world is rendered with the eyes a bit further apart, following where you look and changing slowly. The cockpit, its displays and its lighting stay at your real eye distance; the HUD is unchanged. Keep it off for landings for now.": "随注视方向缓慢增大外界渲染的双眼间距。座舱、显示屏及其照明保持真实瞳距，HUD 不变。目前降落时请关闭。",
  "Helicopters and two-seaters: the other crew station or the front seat outside your cockpit stays at its real distance instead of looking closer. Still being checked on every aircraft.": "直升机和双座机：座舱外的其他机组席位或前座保持真实距离，避免看起来过近。各机型仍在验证中。",
  "Realistic adds depth only beyond 150 m, where the headset shows less than your eyes would. Enhanced adds depth from 3 m: stronger, but the world looks smaller.": "真实：仅增强 150 m 以外、头显表现低于人眼自然感知的深度。增强：从 3 m 开始增强，效果更强，但世界看起来会变小。",
  "How much more depth far away. ×1.25 turns an eye distance of 64 mm into 80 mm.": "远处深度的增强程度。×1.25 相当于将 64 mm 瞳距增至 80 mm。",
  "Nothing changes closer than this.": "此距离以内保持不变。",
  "Full strength from this distance on; in between it grows gradually.": "从此距离起达到完整强度，在起始距离与此距离之间逐渐增强。",
  "How much more depth from 50 m on. ×1.4 turns an eye distance of 64 mm into 90 mm.": "50 m 以外的深度增强程度。×1.4 相当于将 64 mm 瞳距增至约 90 mm。",
  "Looking closer than this counts as looking at the cockpit: the world keeps the depth it had. The cockpit itself always keeps your real eye distance.": "看向此距离以内视为看向座舱，外界维持已有深度。座舱自身始终保持真实瞳距。",
  "With frame generation the panel is always available. Without it, turn this on: the panel is then drawn on its own and your frames are not touched.": "启用帧生成时始终提供状态面板。关闭帧生成时可单独开启此项，仅绘制面板，不处理游戏帧。",
  "Each flight starts with the panel shown.": "每次飞行开始时显示面板。",
  "Adds the video memory in use to the panel.": "在面板上显示已用显存。",
  "Shows or hides the OSD. Default Alt+Shift+F12.": "显示或隐藏 OSD，默认 Alt+Shift+F12。",
  "Off and on, to compare. One beep off, two beeps on. Default Alt+Shift+F11.": "开关引擎优化以比较效果。关闭一声，开启两声，默认 Alt+Shift+F11。",
  "Off and on, to compare. Default Ctrl+Shift+F12.": "开关 DLSS 5 以比较效果，默认 Ctrl+Shift+F12。",
  "Off and on, to compare. Low beep off, high beep on. Default Ctrl+Shift+F10.": "开关瞳孔位移以比较效果。关闭低音，开启高音，默认 Ctrl+Shift+F10。",
  "Off and on, to compare. Low beep off, high beep on. Default Alt+Shift+F10.": "开关深度增强以比较效果。关闭低音，开启高音，默认 Alt+Shift+F10。",
  "Off and on, to compare. Low beep off, two beeps on. Default Alt+Shift+F8.": "开关远景深度以比较效果。关闭低音，开启两声，默认 Alt+Shift+F8。",
  "The JSON file of an OpenXR runtime to use instead of the registered one. Normally leave it empty. Not used with Optimizations only.": "使用指定 OpenXR 运行时的 JSON 文件，替代已注册的运行时。通常请留空。“仅性能优化”模式不使用此项。"
});

Object.assign(window.dcsZhCN, Object.fromEntries(`
DCS renders a sharp focus area and a lower-resolution periphery.|DCS 渲染清晰的注视区域，并降低外围分辨率。
Size and sharpness of the full-detail area, in the same units as Pimax Play.|设置完整细节区域的大小与清晰度，单位与 Pimax Play 一致。
NVIDIA's neural rendering. It needs NVIDIA's runtime file, which you provide: it is not included with DCS Control.|NVIDIA 神经渲染。需要自行提供 NVIDIA 运行时文件，DCS Control 不包含该文件。
Area and working scale set the GPU cost; intensity and style set the look.|处理区域和分辨率比例决定 GPU 开销；强度和风格决定画面外观。
Adds generated frames between the frames DCS renders: DCS renders half (or a third) of the refresh rate, and the headset still gets a frame at every refresh.|在 DCS 渲染的帧之间插入生成帧：DCS 只需渲染刷新率的一半或三分之一，头显仍在每次刷新时收到一帧。
OFXR's FPS counter and log. The in-headset panel is on the OSD page.|OFXR 帧率计数器和日志。头显状态面板在 OSD 页面设置。
Set in DCS's own settings at launch. Back to stock DCS puts your values back.|启动时写入 DCS 设置，恢复原版 DCS 时还原原值。
Applied when you start DCS with Launch DCS, undone when DCS exits.|通过“启动 DCS”启动时应用，DCS 退出后撤销。
Each works on its own, with or without CPU Boost. Started with Launch DCS and undone when DCS exits.|每项均可独立使用，无需开启 CPU 加速。通过“启动 DCS”启用，DCS 退出后撤销。
All together, measured on a busy airfield in VR: about 50 to 60% more FPS depending on the scene and about 35% shorter slow frames (p95), until the GPU becomes the limit. The image does not change.|全部开启后在繁忙机场的 VR 实测：随场景不同，帧率提升约 50–60%，慢帧（p95）时间降低约 35%，直到 GPU 成为瓶颈。画面保持不变。
Detected automatically; change only if DCS is somewhere else.|自动检测。仅当 DCS 位于其他位置时修改。
The distance between your eyes that DCS renders with: it sets the size and depth of the world.|DCS 渲染使用的双眼间距，决定世界的大小和立体深度。
Your pupils move a little when your eyes turn. This renders each eye from where its pupil really is, so the cockpit stays still when only your eyes move. If the cockpit seems to move, turn it off.|眼睛转动时瞳孔位置会略微移动。此功能从瞳孔实际位置渲染每只眼睛，让仅转动眼睛时的座舱保持稳定。如感觉座舱反而移动，请关闭。
Calms the shimmer of thin lines (canopy frame, power lines, the horizon) around the focus area. The focus area itself is not touched. Bundled Quad Views only.|减少注视区域外细线（座舱框、电线、地平线）的闪烁，不改变注视区域本身。仅支持内置 Quad Views。
Distant aircraft, ships and terrain get more depth; the cockpit stays exactly as it is. Needs the bundled Quad Views and Engine Optimizations.|增强远处飞机、船舶和地形的立体深度，座舱保持不变。需要内置 Quad Views 和引擎优化。
The world outside gets more depth; the cockpit stays exactly as it is.|增强外界深度，座舱保持不变。
A small status panel in the headset: FPS, DLSS 5, Engine Optimizations, Pupil shift, Depth boost and Far depth. Show or hide it in flight with its key.|在头显中显示小型状态面板：帧率、DLSS 5、引擎优化、瞳孔位移、深度增强和远景深度。飞行时可用快捷键显示或隐藏。
Click a key, then press the new combination. Esc cancels. A key whose feature is off in this profile is greyed out.|点击按键框，再按下新的组合键。Esc 取消。当前配置未开启的功能，其快捷键会显示为灰色。
Reserved by Engine Optimizations: Ctrl+Alt+F8 to F12, Page Up and Page Down (F11 starts the test suite).|引擎优化保留快捷键：Ctrl+Alt+F8 至 F12、Page Up 和 Page Down（F11 启动测试套件）。
The headset software follows How you fly in the right panel: Pimax Play, or SteamVR for Sboys.|头显软件由右侧使用模式决定：Pimax 使用 Pimax Play，Sboys 使用 SteamVR。
On a monitor or any headset.|适用于显示器或任意头显。
Pimax headsets (and Sboys for SteamVR).|Pimax 头显（也支持 SteamVR 的 Sboys 模式）。
Experimental: new, off by default, and still being tuned. Feedback welcome.|实验功能：默认关闭，仍在调试，欢迎反馈。
Safety net|恢复保障
DCS needs less CPU time for every frame. The image stays exactly the same.|减少 DCS 每帧所需的 CPU 时间，保持画面完全一致。
The busier the scene, the bigger the gain: airfields, carriers and large missions run noticeably smoother. Little or no change when the graphics card is the limit.|场景越繁忙，收益越大：机场、航母和大型任务会明显更流畅。显卡成为瓶颈时改善很小或没有改善。
Nothing visible. The first start prepares some data for a few minutes.|没有可见画质损失，首次启动需花几分钟准备数据。
NVIDIA Threaded optimization not Off and MFAA off for DCS. Checks tells you.|DCS 的 NVIDIA“线程优化”不能设为关闭，MFAA 需关闭。“检查”页面会提示。
off and on, to compare|开关以比较效果
Steadier|更稳定
DCS gets priority and its best CPU cores; other programs step out of its way while you fly.|提高 DCS 优先级并分配最佳 CPU 核心，飞行时让其他程序减少竞争。
Steadier frame times when other programs compete for the CPU. On a quiet PC the difference is small.|其他程序竞争 CPU 时，帧时间更稳定；后台负载低时差别较小。
None. Undone when DCS exits.|无。DCS 退出后撤销。
Full detail where you look, lower resolution around it.|注视位置保留完整细节，外围降低分辨率。
Usually the biggest gain in VR. With eye tracking the sharp area follows your eyes and you rarely notice the edge.|通常是 VR 中收益最大的功能。眼动追踪让清晰区域跟随视线，通常很难察觉边缘。
A softer periphery, where thin lines can shimmer.|外围较模糊，细线可能闪烁。
Eye tracking (Pimax Crystal) for a focus area that follows your eyes.|需要眼动追踪（Pimax Crystal）才能让注视区域跟随眼睛。
Generated frames between the ones DCS renders, so the headset gets a frame at every refresh.|在 DCS 渲染的帧之间插入生成帧，使头显每次刷新都能收到一帧。
Smooth motion even when DCS can't keep up. Auto picks 2× or 3× by itself.|DCS 帧率不足时仍能保持运动流畅。自动模式会自行选择 2× 或 3×。
A little latency (more in 3×); the mouse moves at DCS's own frame rate.|增加少量延迟（3× 更高）；鼠标以 DCS 自身帧率更新。
An NVIDIA RTX card, or FidelityFX on any card.|NVIDIA RTX 显卡，或在任意显卡上使用 FidelityFX。
NVIDIA's neural rendering reworks the image; with Quad Views, only where you look.|NVIDIA 神经渲染重新处理图像；使用 Quad Views 时仅处理注视区域。
A different, more natural look of light and materials. Pair it with frame generation to keep the motion smooth.|呈现更自然的光照和材质风格，可配合帧生成保持流畅。
An NVIDIA RTX card, your own nvngx_dlssnr.dll, and DCS's Upscaling set to DLSS.|NVIDIA RTX 显卡、自行提供的 nvngx_dlssnr.dll，并在 DCS 中将 Upscaling 设为 DLSS。
A small panel in the headset: FPS and what each feature is doing right now.|在头显内显示小面板，查看帧率和各项功能的实时状态。
A quick look to see that everything runs, and to compare features with their keys.|快速确认运行状态，并用快捷键比较各项功能。
The world outside gets more stereo depth, following where you look. The cockpit stays at your real eye distance.|外界立体深度随视线增强，座舱保持真实瞳距。
Wingmen, tankers and targets look more 3D. Keep it off for landings for now.|僚机、加油机和目标更有立体感。目前降落时请关闭。
More depth for distant aircraft, ships and terrain, from about 50 m to 2 km.|增强约 50 m 到 2 km 范围内飞机、船舶和地形的深度。
Far objects stand out more. The cockpit and the HUD stay exactly as they are.|远处物体更立体，座舱和 HUD 保持不变。
Each eye is rendered from where its pupil really is.|从瞳孔的实际位置渲染每只眼睛。
The cockpit stays still when only your eyes move. Subtle, most visible on close panels.|仅转动眼睛时座舱保持稳定。效果细微，在近处仪表板上最明显。
Calms the shimmer of thin lines (canopy frame, power lines, the horizon) outside the sharp area.|减少清晰区域以外细线（座舱框、电线、地平线）的闪烁。
A quieter periphery; the sharp area is not touched.|外围画面更稳定，不改变清晰区域。
Puts back every file and setting DCS Control changed, in one step.|一步还原 DCS Control 修改过的全部文件和设置。
DCS exactly as it was before. Your profiles stay, so Launch DCS applies them again.|将 DCS 恢复原状，但保留你的配置，以后可再次启动并应用。
Use it before joining a multiplayer server, updating or repairing DCS.|进入多人服务器、更新或修复 DCS 前请先执行恢复。
DLSS 5 is on, but no image reached it. After the session, DLSS 5 on the focus area (on this page) explains the reason shown in brackets.|DLSS 5 已开启，但没有收到图像。会话结束后，本页“注视区域的 DLSS 5”会解释括号中显示的原因。
DLSS 5 stopped reporting: DCS may be loading or paused.|DLSS 5 停止报告状态，DCS 可能正在加载或暂停。
Some engine optimizations are not working. Normal for a few seconds after a mission loads; if it lasts, the Engine Optimizations page shows which ones. With a graphics driver that cannot record draws on other threads (common on AMD), Multi-threaded G-buffer and Multi-threaded shadows always show as off: they are not supported there.|部分引擎优化未工作。任务载入后的几秒内属于正常情况；若持续，请在引擎优化页查看具体项目。驱动不支持在其他线程记录绘制命令时（AMD 常见），多线程 G-buffer 和多线程阴影始终显示关闭，因为该驱动不支持这些功能。
Engine Optimizations are installed but none of them works: see the Engine Optimizations page.|引擎优化已安装，但没有任何项目生效，请查看引擎优化页面。
No eye-tracking data reaches Pupil shift: Quad Views is off, Focus movement is Fixed, or the headset's eye tracking is not running. See the Perception page.|瞳孔位移未收到眼动数据：可能是 Quad Views 关闭、注视区域设为固定，或头显眼动追踪未运行。请查看视觉感知页面。
Off · DCS as shipped|关闭 · DCS 原始状态
Off · normal stereo rendering|关闭 · 普通双目渲染
Off · original image|关闭 · 原始画面
Off · rendered frames only|关闭 · 仅渲染帧
Off · Windows scheduling|关闭 · Windows 默认调度
Whole focus area|整个注视区域
Whole view|整个视野
Standard|标准
Foveated SR|注视点超分
runtime file missing|缺少运行时文件
Foveated Super Resolution on · DLSS 5 off|注视点超分辨率开启 · DLSS 5 关闭
Bundled: Pimax native can't host DLSS 5.|已改用内置版本：Pimax 原生版本不支持 DLSS 5。
Bundled: Pimax native is Pimax-route only.|已改用内置版本：Pimax 原生版本仅支持 Pimax 模式。
DLSS 5 needs the bundled provider.|DLSS 5 需要使用内置提供方。
Pimax Play values not found.|未找到 Pimax Play 参数。
Runtime file missing.|缺少运行时文件。
Select file|选择文件
Asks for administrator rights (UAC) at launch.|启动时会请求管理员授权（UAC）。
Open|打开
Change|修改
Guide|指南
Review|预览
Grant access|授予写入权限
Back to the applied settings.|已恢复到已应用的设置。
Settings changed. Launch DCS applies them; Review files lists what it will write.|设置已更改。启动 DCS 时应用；“预览文件更改”可查看将写入的内容。
DCS is running|DCS 正在运行
Changes apply at launch|更改将在启动时应用
Check numeric values|请检查数值
Close DCS to change the configuration. The flight summary appears here when it exits.|请先关闭 DCS 再修改配置。退出后此处显示飞行摘要。
These settings are applied. Launch DCS starts DCS with them.|这些设置已应用，点击“启动 DCS”即可使用。
You changed settings since the last launch. Launch DCS applies them.|你已修改上次启动时的设置，下次启动 DCS 时会应用更改。
Nothing is applied yet. Launch DCS backs up DCS's original files, then applies these settings.|尚未应用设置。启动 DCS 时会先备份原始文件，再应用当前设置。
Correct the marked values before launching.|启动前请先修正标记的数值。
Nothing to fix|没有需要修正的问题
Must fix|必须解决
Check yourself|请手动检查
OK|正常
Nothing blocks Launch DCS.|没有阻止启动 DCS 的问题。
Nothing to check.|没有需要手动检查的项目。
The summary appears here after DCS exits.|DCS 退出后此处显示摘要。
After a flight, this shows the frame rate, frame time and what each feature did, read from the logs.|飞行结束后，从日志读取并显示帧率、帧时间及各项功能的运行情况。
Last flight|上次飞行
Headset|头显
DCS frame time|DCS 帧时间
Ran|已运行
Failed|失败
Not started|未启动
Restored|已还原
No calls|无调用
Eye tracking|眼动追踪
Reached Quad Views|已传入 Quad Views
Did not reach Quad Views|未传入 Quad Views
The focus area followed your eyes.|注视区域已跟随眼睛。
The focus area stayed in the center. Restart the headset in Pimax Play (desktop Tobii software can hold its eye tracker), then start DCS again.|注视区域固定在中心。请在 Pimax Play 中重启头显，再启动 DCS；桌面 Tobii 软件可能占用了头显眼动仪。
DCS ran, but no headset, frame generation or CPU Boost log covers this session.|DCS 已运行，但没有覆盖本次会话的头显、帧生成或 CPU 加速日志。
Not detected|未检测到
Pimax runtime|Pimax 运行时
SteamVR runtime|SteamVR 运行时
Active OpenXR runtime|当前 OpenXR 运行时
Pimax version|Pimax 版本
Settings not found|未找到设置
Closed|已关闭
DCS desktop VSync|DCS 桌面垂直同步
autoexec.cfg frame limit|autoexec.cfg 帧率限制
Unknown · check the file|未知 · 请检查文件
No autoexec.cfg|无 autoexec.cfg
Not running · check NVIDIA's frame limits yourself|未运行 · 请自行检查 NVIDIA 帧率限制
No files or OpenXR layers were found.|未找到相关文件或 OpenXR 渲染层。
Review files lists every file Launch DCS writes or changes for these settings, and every DCS setting it changes. Nothing is written until you launch.|“预览文件更改”列出此配置启动时将写入或修改的全部文件和 DCS 设置。启动前不会写入任何内容。
put the original back|还原原文件
remove it (DCS Control created it)|删除此文件（由 DCS Control 创建）
set back only the settings DCS Control changed|仅还原 DCS Control 修改的设置
Backups folder ↗|备份文件夹 ↗
Close DCS before restoring|恢复前请先关闭 DCS
Back to stock DCS puts each one back as it was before DCS Control first changed it. In DCS's settings file (options.lua) only the settings DCS Control changed go back; your own changes stay.|恢复原版 DCS 会将每个文件还原到首次修改前的状态。对于 options.lua，仅还原 DCS Control 修改的设置，保留你自行修改的内容。
What Back to stock DCS does, file by file|逐项查看恢复操作
No changes to put back|没有需要恢复的更改
DCS Control has not changed any file. Launch DCS (or Apply without launching) backs up each original the first time it changes it.|DCS Control 尚未修改任何文件。点击“启动 DCS”或“仅应用设置”时，会在首次修改各文件前备份原件。
Loaded|已加载
Load failed|加载失败
Last test report|上次测试报告
Select the DCS settings file on the DCS & headset page first.|请先在“DCS 与头显”页面选择 DCS 设置文件。
Launch DCS installs it with this profile.|启动 DCS 时将根据此配置安装模块。
Launch DCS removes it with this profile.|启动 DCS 时将根据此配置移除模块。
Used by Depth boost only: none of the optimizations run, and there is no test suite.|仅供深度增强使用：不运行引擎优化，也没有测试套件。
Developer mode is on: DCS loads the module and its settings from the developer paths, not the ones this release installs. Turn it off on the left for normal flying.|开发者模式已开启：DCS 使用开发者路径中的模块和设置，而非本版本安装的文件。正常飞行时请在左侧关闭。
The test suite is running in DCS. Keep the view still (in VR, keep the headset on); it takes about 7 minutes.|测试套件正在 DCS 中运行，约需 7 分钟。请保持视角静止；VR 模式下请持续佩戴头显。
Turn on Quad Views|开启 Quad Views
Set Focus movement|设置注视区域跟随方式
Choose the Quad Views provider|选择 Quad Views 提供方
No gaze|无眼动数据
Switched off|已关闭
Check the log|请检查日志
Not running|未运行
Waiting for both distances|正在等待两种距离
No depth from the gaze|无法从视线获得深度
Normal depth: no depth from DCS yet|正常深度：尚未从 DCS 获得深度数据
No DLSS frames|没有 DLSS 帧
No session|无会话
DLSS 5 runtime|DLSS 5 运行时
Focus views identified|已识别的注视视图
Rejections|拒绝次数
DCS ran DLSS at|DCS 运行 DLSS 的分辨率
Focus views|注视视图
Log lines|日志原文
From CheekyFoveatedDLSS-Standalone.log|来自 CheekyFoveatedDLSS-Standalone.log
DCS main and render threads|DCS 主线程与渲染线程
VR runtime and headset services|VR 运行时与头显服务
Process|进程
Admin|管理员
Yes|是
No|否
Yes · asked at launch|是 · 启动时请求
Needed · left as is|需要 · 保持原状
No processes would change.|没有需要调整的进程。
CPU Boost is off. This is what it would do when turned on.|CPU 加速已关闭。此处预览开启后将执行的操作。
Core ranking|核心性能排序
DCS log|DCS 日志
Off. This is what it would close now.|已关闭。此处预览现在会关闭的程序。
Program|程序
VRAM (approx.)|显存（估算）
Protected processes skipped|已跳过受保护的进程
Needs admin rights to close|需要管理员权限才能关闭
Total to free|预计释放总量
Per-process GPU counters; memory shared between programs can be counted twice, so the total is approximate.|使用逐进程 GPU 计数器；程序之间共享的显存可能重复计算，因此总量为估算值。
The list is empty: nothing would be closed.|列表为空，不会关闭任何程序。
Monitor while flying|飞行时的显示器
Not with Optimizations only.|“仅性能优化”模式不使用此功能。
Off. The monitor keeps its mode.|已关闭，显示器保留当前模式。
Display|显示器
No display could be read.|无法读取显示器信息。
Off. The DCS window keeps your size.|已关闭，DCS 窗口保留当前大小。
Desktop Tobii eye tracker|桌面 Tobii 眼动仪
Off. A desktop Tobii tracker keeps running.|已关闭，桌面 Tobii 眼动仪继续运行。
No desktop Tobii eye tracker is installed on this PC: nothing would be paused.|此电脑未安装桌面 Tobii 眼动仪，无需暂停。
Diagnostic report|诊断报告
Pimax Play focus values|Pimax Play 注视区域参数
DLSS 5 not applied|DLSS 5 未生效
Turn Engine Optimizations, CPU Boost, Quad Views, DLSS 5 and frame generation on or off in the right panel.|在右侧面板开启或关闭引擎优化、CPU 加速、Quad Views、DLSS 5 和帧生成。
DLSS 5 model corrections: tone, structure, masks, color, depth and motion guides.|DLSS 5 模型修正：色调、结构、遮罩、色彩、深度与运动引导。
Pimax Play's Quad View settings as Pimax Play shows them, and how bundled Quad Views reproduces them. Re-read them.|查看与 Pimax Play 显示一致的 Quad View 参数，以及内置版本的复现方式。可重新读取。
Cores, processes, VRAM to free, the monitor mode and the DCS window the CPU Boost page would change on this PC.|预览 CPU 加速页将调整的核心、进程、待释放显存、显示器模式和 DCS 窗口。
Review files: every file and DCS setting Launch DCS writes for these settings.|预览此配置启动时写入的全部文件和 DCS 设置。
Must fix, check yourself and OK: what stands between these settings and a flight.|按“必须解决”“请手动检查”和“正常”查看启动前的检查结果。
Headset FPS, frame generation 2×/3×, DCS frame time, DLSS 5, CPU Boost and the terrain prefetch fix (Engine Optimizations) from the last flight.|上次飞行的头显帧率、2×/3× 帧生成、DCS 帧时间、DLSS 5、CPU 加速和地形预取修复情况。
Export report: what was detected on this PC, the checks and the backups, as a file.|导出此电脑的检测结果、检查结果和备份信息。
One ZIP with the logs and settings needed to understand a problem, for a report.|将排查问题所需的日志和设置保存为 ZIP，用于报告问题。
Why DLSS 5 did not reach the focus area in the last session.|查看上次会话中 DLSS 5 未作用于注视区域的原因。
Back to stock DCS: put back every file and setting DCS Control changed.|恢复原版 DCS：还原 DCS Control 修改过的所有文件和设置。
What each feature does, what to expect from it and what it costs.|了解各项功能的作用、预期效果和性能开销。
`.trim().split('\n').map(line => { const at = line.indexOf('|'); return [line.slice(0, at), line.slice(at + 1)]; })));
