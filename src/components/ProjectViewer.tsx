import { useState } from 'react';
import { SoftwareProject } from '../types';
import { 
  Github, 
  ExternalLink, 
  Globe, 
  RefreshCw, 
  Lock, 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Sliders,
  ChevronRight,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Activity,
  Award
} from 'lucide-react';

interface ProjectViewerProps {
  project: SoftwareProject;
}

export default function ProjectViewer({ project }: ProjectViewerProps) {
  const [viewMode, setViewMode] = useState<'iframe' | 'simulator'>('iframe');
  const [iframeKey, setIframeKey] = useState(0);

  // LinkMind Simulator State
  const [selectedLink, setSelectedLink] = useState<string>('');
  const [isParsing, setIsParsing] = useState(false);
  const [parsedData, setParsedData] = useState<any | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{q: string, a: string}[]>([]);

  const mockLinks = [
    {
      url: 'https://zhuanlan.zhihu.com/p/698255',
      title: 'AI Agents 在企业财务流程中的破局之路',
      type: '知乎专栏',
      summary: '本文深入探讨了自主智能体 (AI Agents) 在传统财务内控与业财一体化中的应用。传统的财务软件多是静态的表单提交，而 AI Agent 可以主动进行跨平台的凭证调取、合规风控比对及多级自动审核，使平均审核时效缩短了 95% 以上。',
      outline: ['1. 传统财务内控痛点分析', '2. 什么是业财一体化 Agent', '3. 核心大模型算法与 Prompt 编排', '4. 德勤、安永等咨询机构的落地成果'],
      keywords: ['AI Agent', '业财融合', '财务合规', '流程自动化'],
      answers: {
        '核心痛点': '传统财务内控的两大核心痛点：一是“信息孤岛”，采购、物流与开票数据不互通，极易出现费用跨期；二是“纯人工复核”，高频重复，对暂估合同等审核不及时。',
        '怎么应用大模型': '利用大模型的 Multimodal 视觉 API 处理复杂的纸质报销发票，并通过结构化 RAG (检索增强生成) 将报销细则与企业采购合同进行精准语义比对，实现全自动化初审。'
      }
    },
    {
      url: 'https://mp.weixin.qq.com/s/feishu-n8n',
      title: '零成本搭建个人 AI 每日新闻飞书推送工作流',
      type: '微信公众号',
      summary: '本教程详细介绍如何使用开源自动化引擎 n8n 结合大语言模型 API，构建一套全自动的科技新闻筛选、中文翻译、大纲提炼并推送至飞书工作群的完整方案。实现无服务器、零成本部署，解决“收藏从未停止，阅读从未开始”的痛点。',
      outline: ['1. 自动化情报收集的价值', '2. n8n 引擎的节点规划与变量传递', '3. 豆包大模型 API 的 Prompt 编写技巧', '4. 飞书卡片 Webhook 排版渲染'],
      keywords: ['n8n', '飞书自动化', '大模型翻译', '信息降噪'],
      answers: {
        '核心痛点': '核心解决的是“信息噪音极高”和“跨语言时效滞后”问题。每日技术更新成千上万，人工阅读翻译耗时费力，工作流实现全自动分钟级降噪。',
        '怎么应用大模型': '主要是两步：一是调用大模型进行英文专业词汇的无损中文翻译，二是采用“大纲化+重点突出”的卡片格式精炼内容，以便于在移动端飞书进行30秒速读。'
      }
    }
  ];

  // Ops-Refiner Simulator State
  const [opsCategory, setOpsCategory] = useState<'shower' | 'toilet' | 'heater'>('shower');
  const [opsTier, setOpsTier] = useState<'eco' | 'mid' | 'premium'>('eco');
  const [isGeneratingOps, setIsGeneratingOps] = useState(false);
  const [opsOutput, setOpsOutput] = useState<any | null>(null);

  const handleGenerateOps = () => {
    setIsGeneratingOps(true);
    setTimeout(() => {
      let title = '';
      let copy = '';
      let origCtr = 1.2;
      let optCtr = 2.4;
      let conversion = 1.1;
      let optConversion = 3.2;

      if (opsCategory === 'shower') {
        title = opsTier === 'eco' ? '【经济特惠】家用恒温增压三档手持花洒' : opsTier === 'mid' ? '【爆款推荐】德系防烫多功能淋浴花洒套装' : '【顶奢尊享】美标空气注入式智能数显恒温淋浴系统';
        copy = opsTier === 'eco' ? '超强增压，老旧小区高层首选！自带止水阀，限时领券立减20元。' : opsTier === 'mid' ? '德系精密恒温，一键锁温38℃，防结垢硅胶出水孔，给全家婴儿级沐浴体验。' : '航天级空气混合增压，巨幕雨淋。智能数显温度，无需接电，感温光影变色，尊显不凡品味。';
        origCtr = opsTier === 'eco' ? 1.5 : opsTier === 'mid' ? 2.1 : 0.8;
        optCtr = opsTier === 'eco' ? 2.8 : opsTier === 'mid' ? 3.9 : 1.9;
        optConversion = opsTier === 'eco' ? 1.9 : opsTier === 'mid' ? 4.1 : 2.5;
      } else if (opsCategory === 'toilet') {
        title = opsTier === 'eco' ? '【房东力荐】智能即热无水压限制全自动马桶' : opsTier === 'mid' ? '【口碑神作】静音脚感自动翻盖抑菌智能马桶' : '【奢华御用】超泡防溅超静音雷达感应超薄全功能马桶';
        copy = opsTier === 'eco' ? '特惠即热烘干，强力双旋虹吸暴冲，停电也能冲水。' : opsTier === 'mid' ? '智能防雾化温水冲洗，活性炭除臭净味，离座自动关盖冲水，呵护女性健康。' : '纳米纳米防黏壁技术，声控自动冲水，微波雷达靠近自动翻盖，泡沫盾防溅防臭，高端豪宅甄选。';
        origCtr = opsTier === 'eco' ? 1.1 : opsTier === 'mid' ? 1.8 : 0.6;
        optCtr = opsTier === 'eco' ? 2.2 : opsTier === 'mid' ? 3.2 : 1.4;
        optConversion = opsTier === 'eco' ? 1.4 : opsTier === 'mid' ? 3.5 : 2.2;
      } else {
        title = opsTier === 'eco' ? '【冬日取暖】智能数显黄金管防爆壁挂浴霸' : opsTier === 'mid' ? '【大风量】双核大功率360°循环风暖集成吊顶浴霸' : '【健康卫士】等离子除菌除霉自动恒温极简超薄风暖浴霸';
        copy = opsTier === 'eco' ? '开机秒热，防水防爆防触电，极简壁挂无需吊顶。' : opsTier === 'mid' ? '2800W 双核智暖，15分钟带走整屋湿气，自带柔光LED照明，温暖不干燥。' : '等离子动态杀菌率 99.9%，智能联动除潮除霉，极窄全面屏设计，极客家居典范。';
        origCtr = opsTier === 'eco' ? 1.3 : opsTier === 'mid' ? 2.3 : 0.7;
        optCtr = opsTier === 'eco' ? 2.3 : opsTier === 'mid' ? 4.5 : 1.6;
        optConversion = opsTier === 'eco' ? 1.8 : opsTier === 'mid' ? 4.8 : 2.7;
      }

      setOpsOutput({
        title,
        copy,
        ctr: { original: origCtr, optimized: optCtr, lift: Math.round(((optCtr - origCtr) / origCtr) * 100) },
        conv: { original: conversion, optimized: optConversion, lift: Math.round(((optConversion - conversion) / conversion) * 100) },
        skuBundles: '【跨品牌组套推荐】九牧恒温花洒 + 箭牌智能马桶（跨级绑定购买，客单价提升 180%，立减500元红包）'
      });
      setIsGeneratingOps(false);
    }, 700);
  };

  // Parking Predictor State
  const [parkingTime, setParkingTime] = useState<'peak' | 'offpeak'>('peak');
  const [parkingWeather, setParkingWeather] = useState<'sunny' | 'rain'>('sunny');
  const [parkingHoliday, setParkingHoliday] = useState<boolean>(false);
  const [qTableSteps, setQTableSteps] = useState(120);

  const calculateParkingPrediction = () => {
    let baseChance = 35; // % free slots
    if (parkingTime === 'peak') baseChance -= 25;
    if (parkingWeather === 'rain') baseChance -= 10;
    if (parkingHoliday) baseChance -= 15;

    const finalPercent = Math.max(2, Math.min(98, baseChance + Math.floor(Math.random() * 8)));
    const lossAverted = (parkingTime === 'peak' ? 45.2 : 12.5) * (parkingWeather === 'rain' ? 1.8 : 1.0);
    const convergenceRate = qTableSteps > 150 ? '99.8%' : qTableSteps > 80 ? '94.2%' : '78.5%';

    return {
      availableSlots: Math.round(500 * (finalPercent / 100)),
      occupancy: 100 - finalPercent,
      downtimeLossSaved: lossAverted.toFixed(1),
      convergence: convergenceRate
    };
  };

  const parkingResult = calculateParkingPrediction();

  // Deloitte Diagram Generator State
  const [diagramPreset, setDiagramPreset] = useState<string>('procurement');
  const [diagramSteps, setDiagramSteps] = useState<string[]>([
    '采购需求申请 (业务部门)',
    '多级预算核实 (财务部)',
    '供应商寻源比价 (采购部)',
    '数字化ROI审批 (技术部)',
    '合同网签归档 (法务部)',
    '出纳付款核销 (业财合并)'
  ]);

  const handleDiagramPresetChange = (preset: string) => {
    setDiagramPreset(preset);
    if (preset === 'procurement') {
      setDiagramSteps([
        '采购需求申请 (业务部门)',
        '多级预算核实 (财务部)',
        '供应商寻源比价 (采购部)',
        '数字化ROI审批 (技术部)',
        '合同网签归档 (法务部)',
        '出纳付款核销 (业财合并)'
      ]);
    } else if (preset === 'export') {
      setDiagramSteps([
        '出海产品立项 (海外事业部)',
        '目标国CAC/LTV测算 (出海咨询部)',
        '整装科技选品采购 (跨国供应链)',
        '本地化运营验证 (美团Keemart协作)',
        '海关出口锁汇合规审查 (财务内控)'
      ]);
    } else {
      setDiagramSteps([
        'AI智能体抓取主图 (商品优化智能体)',
        '自动合成跨品类套组 (Ops-Refiner)',
        '场景化标题与卖点撰写 (AI LLM)',
        '自动关联A/B测试线上配置 (运营后台)',
        '效果数据自动分析沉淀 (闭环优化算法)'
      ]);
    }
  };

  const handleLinkClick = (linkObj: any) => {
    setIsParsing(true);
    setTimeout(() => {
      setParsedData(linkObj);
      setChatHistory([]);
      setIsParsing(false);
    }, 800);
  };

  const handleSendChatInput = () => {
    if (!chatInput.trim() || !parsedData) return;
    const q = chatInput.trim();
    let a = '抱歉，我只精通分析这篇文章的“核心痛点”和“大模型在其中的具体应用”。您可以点击下方快捷键向我提问哦！';

    if (q.includes('核心痛点') || q.includes('痛点')) {
      a = parsedData.answers['核心痛点'];
    } else if (q.includes('大模型') || q.includes('模型') || q.includes('AI') || q.includes('应用')) {
      a = parsedData.answers['怎么应用大模型'];
    }

    setChatHistory(prev => [...prev, { q, a }]);
    setChatInput('');
  };

  const handleRefreshIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div id={`project-viewer-${project.id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* LEFT COLUMN: THE LIVE WEB PREVIEW / SIMULATOR */}
      <div className="lg:col-span-7 flex flex-col">
        {/* Browser Mockup Wrapper */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 flex-1 flex flex-col overflow-hidden min-h-[500px]">
          {/* Browser Header Mac OS style */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 bg-rose-500 h-3 rounded-full inline-block"></span>
              <span className="w-3 bg-amber-400 h-3 rounded-full inline-block"></span>
              <span className="w-3 bg-emerald-400 h-3 rounded-full inline-block"></span>
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-sm sm:max-w-md mx-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-lg text-xs text-slate-400 border border-slate-800 font-mono select-none">
                <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate flex-1 text-slate-300">
                  {viewMode === 'iframe' ? project.vercelUrl : `simulator://lzllzl.${project.id}.ai`}
                </span>
                {viewMode === 'iframe' && (
                  <button 
                    onClick={handleRefreshIframe}
                    className="hover:text-white transition duration-150 cursor-pointer"
                    title="刷新网页"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* View Tab Switcher */}
            {project.id !== 'ai-n8n' ? (
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px] font-medium text-slate-400">
                <button
                  onClick={() => setViewMode('iframe')}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                    viewMode === 'iframe'
                      ? 'bg-slate-800 text-white shadow-sm font-semibold'
                      : 'hover:text-slate-200'
                  }`}
                >
                  在线实网
                </button>
                <button
                  onClick={() => setViewMode('simulator')}
                  className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                    viewMode === 'simulator'
                      ? 'bg-slate-800 text-white shadow-sm font-semibold'
                      : 'hover:text-slate-200'
                  }`}
                >
                  高仿真沙盒
                </button>
              </div>
            ) : (
              <div className="bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-[11px] font-medium text-emerald-400 font-mono">
                Workflow Map
              </div>
            )}
          </div>

          {/* Browser Body View */}
          <div className="flex-1 bg-slate-950 relative min-h-[420px] flex flex-col justify-center items-stretch">
            {project.id === 'ai-n8n' ? (
              <div className="w-full h-full flex-1 flex flex-col p-4">
                {/* Visual Image View of the n8n diagram */}
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>n8n 自动化采集 & 飞书推送工作流拓扑图</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Active Workflow</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center overflow-hidden bg-slate-950 rounded-lg p-2 border border-slate-900/60 relative group">
                    <img 
                      src="https://raw.githubusercontent.com/lzllzllzllzllzl/my-images/main/image_522561197078825.png" 
                      alt="n8n News Push Workflow Diagram" 
                      className="max-w-full max-h-[300px] object-contain rounded transition duration-300 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="mt-3 text-[11px] text-slate-400 leading-normal flex items-center justify-between">
                    <span>定时触发器 → RSS新闻源拉取 → 豆包 AI 大模型翻译提炼 → 飞书富文本卡片群组自动推送</span>
                    <a 
                      href="https://raw.githubusercontent.com/lzllzllzllzllzl/my-images/main/image_522561197078825.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline shrink-0 ml-2"
                    >
                      查看原图
                    </a>
                  </div>
                </div>
              </div>
            ) : viewMode === 'iframe' ? (
              <div className="w-full h-full flex-1 relative bg-slate-950">
                {/* Real Iframe */}
                <iframe
                  key={iframeKey}
                  src={project.vercelUrl}
                  title={`${project.name} Actual Web Preview`}
                  className="w-full h-full min-h-[440px] border-none bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                
                {/* Ambient banner in case the iframe fails to render or is blocked */}
                <div className="absolute bottom-3 right-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-2.5 rounded-xl flex items-center justify-between text-[11px] text-slate-300 pointer-events-none sm:pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>正通过 Vercel 实时载入实际网页...</span>
                  </div>
                  <a 
                    href={project.vercelUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold pointer-events-auto"
                  >
                    在新窗口中打开 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              /* HAND-CRAFTED INTELLIGENT SIMULATOR */
              <div className="flex-1 p-5 text-white flex flex-col overflow-y-auto">
                {/* Simulator Intro Header */}
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800/60 pb-3">
                  <span className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <Cpu className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">{project.chineseName} · 演示沙盒</h4>
                    <p className="text-[10px] text-slate-400">基于其真实的业务逻辑设计的离线模拟器，支持即时动态计算与演示</p>
                  </div>
                </div>

                {/* 1. LINKMIND SIMULATOR */}
                {project.id === 'linkmind' && (
                  <div className="flex-1 flex flex-col gap-4 text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Left Link Picker */}
                      <div className="md:col-span-5 space-y-2">
                        <p className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                          <Upload className="w-3.5 h-3.5 text-emerald-400" /> 选择模拟导入链接
                        </p>
                        <div className="space-y-2">
                          {mockLinks.map((l, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleLinkClick(l)}
                              className={`w-full p-2.5 rounded-xl border text-left transition duration-200 cursor-pointer flex flex-col gap-1 ${
                                selectedLink === l.url || (parsedData && parsedData.url === l.url)
                                  ? 'bg-slate-800 border-emerald-500 text-white shadow-lg shadow-emerald-500/5'
                                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 text-slate-300'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full text-[10px]">
                                <span className="text-emerald-400 bg-emerald-950 border border-emerald-900 px-1.5 py-0.2 rounded font-mono">{l.type}</span>
                                <span className="text-slate-500">点此模拟解析</span>
                              </div>
                              <span className="text-xs font-semibold text-slate-200 leading-snug line-clamp-2">{l.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right Detail Analysis Display */}
                      <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between min-h-[250px]">
                        {isParsing ? (
                          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-2">
                            <RefreshCw className="w-8 h-8 animate-spin text-emerald-400" />
                            <p className="text-xs font-mono">LinkMind AI 引擎拉取网页并进行正文提取、摘要、大纲提炼中...</p>
                          </div>
                        ) : parsedData ? (
                          <div className="space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                                <span className="text-xs font-bold text-emerald-400">AI 知识萃取大纲成果</span>
                                <span className="text-[10px] text-slate-500 font-mono">Time elapsed: 480ms</span>
                              </div>
                              
                              <p className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800 leading-relaxed">
                                <span className="font-bold text-slate-400 block mb-1">【30秒AI极简摘要】</span>
                                {parsedData.summary}
                              </p>

                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                                  <span className="font-bold text-slate-400 block mb-1">【层级化大纲】</span>
                                  <ul className="space-y-1 text-[10px] text-slate-300">
                                    {parsedData.outline.map((item: string, i: number) => (
                                      <li key={i} className="truncate">{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex flex-col justify-between">
                                  <div>
                                    <span className="font-bold text-slate-400 block mb-1">【核心关键词】</span>
                                    <div className="flex flex-wrap gap-1">
                                      {parsedData.keywords.map((kw: string, i: number) => (
                                        <span key={i} className="bg-slate-900 border border-slate-800 text-[9px] text-slate-300 px-1.5 py-0.5 rounded">{kw}</span>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="border-t border-slate-800 pt-1.5 mt-2">
                                    <span className="text-[9px] text-emerald-500 font-semibold block">【技术栈支撑】</span>
                                    <span className="text-[9px] text-slate-500 block">Supabase + 豆包 LLM</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Inside Article Q&A Panel */}
                            <div className="border-t border-slate-800 pt-3 mt-2 space-y-2">
                              <span className="text-xs font-bold text-slate-300 block">基于文章正文向 AI 追问细节：</span>
                              
                              {/* Small Chat Log */}
                              {chatHistory.length > 0 && (
                                <div className="space-y-1.5 max-h-[80px] overflow-y-auto bg-slate-950 p-2 rounded-lg border border-slate-800 text-[11px]">
                                  {chatHistory.map((ch, i) => (
                                    <div key={i} className="space-y-0.5">
                                      <p className="text-slate-400 font-semibold">问：{ch.q}</p>
                                      <p className="text-emerald-400">答：{ch.a}</p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              <div className="flex gap-1.5">
                                <button 
                                  onClick={() => { setChatInput('核心痛点是什么？'); }}
                                  className="text-[9px] bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:text-white text-slate-400 px-2 py-1 rounded"
                                >
                                  点问：核心痛点
                                </button>
                                <button 
                                  onClick={() => { setChatInput('怎么应用大模型的？'); }}
                                  className="text-[9px] bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:text-white text-slate-400 px-2 py-1 rounded"
                                >
                                  点问：大模型落地
                                </button>
                                <input 
                                  type="text"
                                  value={chatInput}
                                  onChange={(e) => setChatInput(e.target.value)}
                                  placeholder="输入问题..."
                                  className="flex-1 bg-slate-950 border border-slate-800 rounded px-2 text-[10px] text-slate-200 outline-none focus:border-emerald-500"
                                />
                                <button 
                                  onClick={handleSendChatInput}
                                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 text-[10px] rounded font-semibold cursor-pointer"
                                >
                                  追问
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-2 py-8 text-center">
                            <FileText className="w-8 h-8 stroke-[1.5]" />
                            <p className="text-xs">点击左侧模拟网页，查看 LinkMind 核心摘要提炼、分级大纲及上下文追问交互功能</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. OPS-REFINER SIMULATOR */}
                {project.id === 'ops-refiner' && (
                  <div className="flex-1 flex flex-col gap-4 text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Left inputs */}
                      <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-4">
                        <p className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 border-b border-slate-800 pb-1.5">
                          <Sliders className="w-3.5 h-3.5 text-emerald-400" /> 选择 A/B 测试商品配置
                        </p>

                        <div className="space-y-3 text-xs">
                          {/* Choose Category */}
                          <div className="space-y-1.5">
                            <span className="text-slate-400 text-[10px] block font-mono">1. 京东卫浴核心品类</span>
                            <div className="grid grid-cols-3 gap-1">
                              {[
                                { id: 'shower', name: '恒温花洒' },
                                { id: 'toilet', name: '智能马桶' },
                                { id: 'heater', name: '风暖浴霸' }
                              ].map((cat) => (
                                <button
                                  key={cat.id}
                                  onClick={() => setOpsCategory(cat.id as any)}
                                  className={`py-1 text-[10px] rounded border font-medium cursor-pointer transition ${
                                    opsCategory === cat.id
                                      ? 'bg-emerald-950 text-emerald-400 border-emerald-500 font-bold'
                                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                                  }`}
                                >
                                  {cat.name}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Choose Tier */}
                          <div className="space-y-1.5">
                            <span className="text-slate-400 text-[10px] block font-mono">2. 目标消费者定位价格带</span>
                            <div className="grid grid-cols-3 gap-1">
                              {[
                                { id: 'eco', name: '性价比特惠' },
                                { id: 'mid', name: '品质中产' },
                                { id: 'premium', name: '顶奢高端' }
                              ].map((tier) => (
                                <button
                                  key={tier.id}
                                  onClick={() => setOpsTier(tier.id as any)}
                                  className={`py-1 text-[10px] rounded border font-medium cursor-pointer transition ${
                                    opsTier === tier.id
                                      ? 'bg-emerald-950 text-emerald-400 border-emerald-500 font-bold'
                                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                                  }`}
                                >
                                  {tier.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleGenerateOps}
                          disabled={isGeneratingOps}
                          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white hover:text-emerald-400 border border-slate-700 hover:border-emerald-500 rounded-xl text-xs font-bold transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Activity className="w-3.5 h-3.5 animate-pulse" />
                          <span>一键生成 AI 主图与组套方案</span>
                        </button>
                      </div>

                      {/* Right outputs */}
                      <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between min-h-[250px]">
                        {isGeneratingOps ? (
                          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-2">
                            <RefreshCw className="w-8 h-8 animate-spin text-emerald-400" />
                            <p className="text-xs font-mono">Ops-Refiner 自动扣图、场景合成与卖点推算中...</p>
                          </div>
                        ) : opsOutput ? (
                          <div className="space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-xs">
                                <span className="font-bold text-slate-200">AI 智能体 A/B 测试预测指标</span>
                                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                                  <Award className="w-3.5 h-3.5" /> 京东大赛提效成果
                                </span>
                              </div>

                              {/* Title and SPU copy */}
                              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs leading-normal">
                                <p className="font-bold text-emerald-400 mb-1">{opsOutput.title}</p>
                                <p className="text-slate-400">{opsOutput.copy}</p>
                              </div>

                              {/* Stats comparison */}
                              <div className="grid grid-cols-2 gap-2 text-center">
                                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                                  <span className="text-[9px] text-slate-500 block font-mono">点击率 CTR 对比</span>
                                  <div className="flex items-baseline justify-center gap-1.5 mt-1 font-mono">
                                    <span className="text-slate-400 text-xs">原 {opsOutput.ctr.original}%</span>
                                    <span className="text-emerald-400 text-sm font-bold">新 {opsOutput.ctr.optimized}%</span>
                                  </div>
                                  <span className="text-[10px] text-emerald-500 font-bold mt-0.5 block">提升 +{opsOutput.ctr.lift}%</span>
                                </div>
                                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                                  <span className="text-[9px] text-slate-500 block font-mono">转化率 CVR 对比</span>
                                  <div className="flex items-baseline justify-center gap-1.5 mt-1 font-mono">
                                    <span className="text-slate-400 text-xs">原 1.1%</span>
                                    <span className="text-emerald-400 text-sm font-bold">新 {opsOutput.conv.optimized}%</span>
                                  </div>
                                  <span className="text-[10px] text-emerald-500 font-bold mt-0.5 block">提升 +{opsOutput.conv.lift}%</span>
                                </div>
                              </div>
                            </div>

                            {/* Bundle proposal */}
                            <div className="p-2 bg-emerald-950/20 border border-emerald-900/40 rounded-lg text-[10px] text-emerald-400 leading-normal">
                              {opsOutput.skuBundles}
                            </div>
                          </div>
                        ) : (
                          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-2 py-8">
                            <Activity className="w-8 h-8 stroke-[1.5]" />
                            <p className="text-xs text-center">选择左侧品类并点击生成，查看点击率与客单价提升预测</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PARKING PREDICTOR SIMULATOR */}
                {project.id === 'parking' && (
                  <div className="flex-1 flex flex-col gap-4 text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Left Inputs */}
                      <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-4 text-xs">
                        <p className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 border-b border-slate-800 pb-1.5">
                          <Sliders className="w-3.5 h-3.5 text-emerald-400" /> 输入吉隆坡 KLCC 环境状态
                        </p>

                        <div className="space-y-3">
                          {/* Peak or Off-Peak */}
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">时间节点</span>
                            <div className="flex gap-1 bg-slate-950 p-0.5 rounded border border-slate-800">
                              <button
                                onClick={() => setParkingTime('peak')}
                                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${parkingTime === 'peak' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                              >
                                高峰时段
                              </button>
                              <button
                                onClick={() => setParkingTime('offpeak')}
                                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${parkingTime === 'offpeak' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                              >
                                闲时段
                              </button>
                            </div>
                          </div>

                          {/* Weather Condition */}
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">天气环境</span>
                            <div className="flex gap-1 bg-slate-950 p-0.5 rounded border border-slate-800">
                              <button
                                onClick={() => setParkingWeather('sunny')}
                                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${parkingWeather === 'sunny' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                              >
                                晴天
                              </button>
                              <button
                                onClick={() => setParkingWeather('rain')}
                                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${parkingWeather === 'rain' ? 'bg-slate-800 text-white font-bold' : 'text-slate-500'}`}
                              >
                                强降雨/积水
                              </button>
                            </div>
                          </div>

                          {/* Holiday Status */}
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">是否节假日</span>
                            <button
                              onClick={() => setParkingHoliday(!parkingHoliday)}
                              className={`px-3 py-0.5 rounded text-[10px] font-bold cursor-pointer border ${
                                parkingHoliday
                                  ? 'bg-rose-950/40 text-rose-400 border-rose-900'
                                  : 'bg-slate-950 text-slate-500 border-slate-800'
                              }`}
                            >
                              {parkingHoliday ? '节假日 / 峰值' : '普通工作日'}
                            </button>
                          </div>

                          {/* Q-Learning steps */}
                          <div className="space-y-1.5 border-t border-slate-800/80 pt-2.5">
                            <div className="flex justify-between text-[10px] font-mono">
                              <span className="text-slate-400">强化学习 Q-Table 学习步数</span>
                              <span className="text-emerald-400 font-bold">{qTableSteps} 轮</span>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="300"
                              step="20"
                              value={qTableSteps}
                              onChange={(e) => setQTableSteps(Number(e.target.value))}
                              className="w-full h-1 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Output */}
                      <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between min-h-[250px]">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-xs">
                            <span className="font-bold text-slate-200">Q-Learning 模型预测车位数量</span>
                            <span className="text-[10px] text-emerald-400 font-mono">EI一作检索: AIDML 2024</span>
                          </div>

                          {/* Predict grid */}
                          <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                              <span className="text-[9px] text-slate-500 block">预计空余泊车位</span>
                              <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">{parkingResult.availableSlots} / 500 个</span>
                            </div>
                            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                              <span className="text-[9px] text-slate-500 block">停车场饱和度</span>
                              <span className="text-lg font-bold font-mono text-slate-300 mt-1 block">{parkingResult.occupancy}%</span>
                            </div>
                          </div>

                          {/* Extra info */}
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[10px] leading-relaxed text-slate-400 space-y-1">
                            <p>● <span className="text-slate-200">Q-Table 收敛判定率</span>: <span className="text-emerald-500 font-bold">{parkingResult.convergence}</span></p>
                            <p>● <span className="text-slate-200">规避潜在寻位损失成本</span>: <span className="text-amber-500 font-bold">年约 {parkingResult.downtimeLossSaved} 万元</span></p>
                            <p>● <span className="text-slate-200">地图 API 融合</span>: 已通过节点预测提前 15 分钟为前往 KLCC 的车主优化路线。</p>
                          </div>
                        </div>

                        <div className="border-t border-slate-800/80 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>Q-Learning Predictor Box V1.0</span>
                          <span>First Author Published</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. DELOITTE DIAGRAM GENERATOR SIMULATOR */}
                {project.id === 'deloitte-diagram' && (
                  <div className="flex-1 flex flex-col gap-4 text-slate-300">
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="text-slate-400 flex items-center mr-1">选择德勤标准业务流程模板：</span>
                      {[
                        { id: 'procurement', name: '采购合规内审流' },
                        { id: 'export', name: '出海咨询市场分析流' },
                        { id: 'ai-ops', name: 'AI商品优化闭环流' }
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => handleDiagramPresetChange(preset.id)}
                          className={`px-3 py-1 rounded-lg border cursor-pointer transition ${
                            diagramPreset === preset.id
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-500 font-bold'
                              : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {preset.name}
                        </button>
                      ))}
                    </div>

                    {/* Flowchart Render Panel */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex-1 flex flex-col justify-between min-h-[220px]">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1 text-xs">
                          <span className="font-bold text-slate-200">Text-to-Flow Standard Diagram (SVG样式)</span>
                          <span className="text-emerald-500 text-[10px] font-bold">德勤交付规格 A++</span>
                        </div>

                        {/* Beautiful Flow Box layout */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-3 bg-slate-950 rounded-lg border border-slate-800 overflow-x-auto min-h-[140px]">
                          {diagramSteps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-1 shrink-0">
                              <div className="p-2 bg-slate-900 border border-emerald-500/40 rounded-lg text-center max-w-[120px] shadow-md shadow-emerald-500/2">
                                <span className="text-[10px] font-mono text-slate-500 block">Step {index + 1}</span>
                                <span className="text-[10px] font-medium text-slate-200 leading-normal line-clamp-2">{step}</span>
                              </div>
                              {index < diagramSteps.length - 1 && (
                                <div className="text-emerald-400 font-bold flex items-center justify-center h-4 md:h-auto font-mono text-sm leading-none">
                                  <span className="hidden md:inline"><ChevronRight className="w-4 h-4 text-emerald-500" /></span>
                                  <span className="inline md:hidden">↓</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-800/80 pt-2 mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span>Deloitte Automation Studio V2.0</span>
                        <span>Modeling efficiency: +82.5%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. MOCKUP PREVIEWS FOR OTHER PROJECTS */}
                {project.id !== 'linkmind' && project.id !== 'ops-refiner' && project.id !== 'parking' && project.id !== 'deloitte-diagram' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <Activity className="w-12 h-12 text-emerald-400 stroke-[1.5] mb-3 animate-pulse" />
                    <h4 className="text-sm font-semibold text-slate-200">{project.chineseName} · 即时仿真面板</h4>
                    <p className="text-xs text-slate-400 max-w-sm mt-1 leading-normal">
                      本小项目已通过 Vercel 自动化部署，提供完整的、全功能的生产网络在线服务。请点击上方的【在线实网】进行体验，或点击【GitHub源码仓库】获取细节。
                    </p>
                    <a
                      href={project.vercelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 hover:border-emerald-500 rounded-xl text-xs font-semibold transition inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>直接在新窗口打开实网预览</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: THE PROJECT DETAILS */}
      <div className="lg:col-span-5 flex flex-col justify-between py-2">
        <div className="space-y-6">
          {/* Project Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                PROD
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2">
              {project.name}
              <span className="text-sm font-medium text-gray-400 font-sans">({project.chineseName})</span>
            </h3>
            
            <p className="text-sm font-semibold text-gray-700 leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights bullet points */}
            <div className="space-y-2 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-2">
                <Workflow className="w-3.5 h-3.5 text-emerald-500" /> 核心功能与商业价值：
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((high, index) => (
                  <li key={index} className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons with requested links and small icons */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <p className="text-xs text-gray-400 flex items-center gap-1.5 font-medium">
            <span>在线发布版本 & 开源物理仓库超链接</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Github Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-950 transition duration-200 shadow-sm shadow-gray-100"
            >
              <Github className="w-4 h-4 text-gray-900" />
              <span>GitHub 源码仓库</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 ml-auto sm:ml-0" />
            </a>

            {/* Vercel Link */}
            {project.id !== 'ai-n8n' && (
              <a
                href={project.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition duration-200 shadow-sm"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Vercel 实际地址</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto sm:ml-0" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
