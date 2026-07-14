import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Sparkles, 
  CheckCircle, 
  ArrowUpRight, 
  Download,
  Flame,
  MessageSquare,
  Building,
  Target,
  BookmarkCheck,
  Globe,
  Github
} from 'lucide-react';
import { educationData, internshipData, businessProjects, softwareProjects, skillGroups } from './data';
import ProjectViewer from './components/ProjectViewer';
import ResumeChatbot from './components/ResumeChatbot';

export default function App() {
  const coreProjects = softwareProjects.filter(p => ['linkmind', 'ops-refiner', 'parking'].includes(p.id));
  const workflowProjects = softwareProjects.filter(p => ['deloitte-diagram', 'ai-n8n'].includes(p.id));

  const [selectedCoreId, setSelectedCoreId] = useState<string>('linkmind');
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('deloitte-diagram');

  const currentCoreProject = coreProjects.find(p => p.id === selectedCoreId) || coreProjects[0];
  const currentWorkflowProject = workflowProjects.find(p => p.id === selectedWorkflowId) || workflowProjects[0];

  const handleDownloadResume = () => {
    // Elegant trick to trigger native printing / PDF export, perfectly standard
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-900 selection:bg-emerald-500 selection:text-white antialiased flex flex-col">
      
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm tracking-wide shadow-md">
              LZL
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-gray-900">林至立</span>
              <span className="text-xs text-emerald-600 font-medium ml-2 font-mono bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                数字化 & AI 创新先锋
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#hero" className="hover:text-slate-950 transition duration-150">个人简介</a>
            <a href="#products" className="hover:text-slate-950 transition duration-150">自研 AI 作品</a>
            <a href="#internships" className="hover:text-slate-950 transition duration-150">名企实习</a>
            <a href="#competitions" className="hover:text-slate-950 transition duration-150">双创大赛</a>
            <a href="#skills" className="hover:text-slate-950 transition duration-150">专业技能</a>
            <a href="#ai-assistant" className="hover:text-slate-950 transition duration-150 flex items-center gap-1.5 text-emerald-600 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>AI 简历助理</span>
            </a>
          </nav>

          <button 
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition duration-200 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>打印/导出简历</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 space-y-24">

        {/* 2. Hero Section */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          {/* Hero details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-slate-900/5 px-3 py-1.5 rounded-full border border-slate-900/10 text-xs font-semibold text-slate-800">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>港大硕士在读 · 寻求数字化/出海咨询/策略运营实践</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                跨越 <span className="text-emerald-600 underline decoration-wavy decoration-emerald-500/30">商业增长</span> 与<br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">前沿 AI 系统</span> 的数字化先锋
              </h1>
              
              <p className="text-base text-gray-600 max-w-xl leading-relaxed">
                我是林至立，香港大学电子商务与互联网计算硕士在读（天津工大信管本科，GPA 91/100，前5%）。我专注于利用 AI 工具链、低代码自动化与数据科学驱动核心商业增长及流程提效，在 <b>德勤（出海数字化咨询）</b>、<b>美团（策略运营）</b>、<b>京东（采销增长）</b>、<b>好未来（策略分析）</b>均拥有深度的落地经验。
              </p>
            </div>

            {/* Quick Contact & Bio Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shadow-gray-100/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-50 text-gray-500 rounded-xl">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">联系电话</p>
                  <a href="tel:13859825223" className="text-xs font-semibold text-gray-800 hover:text-emerald-600">138 5982 5223</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-50 text-gray-500 rounded-xl">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">电子邮箱</p>
                  <a href="mailto:zhillin0220@163.com" className="text-xs font-semibold text-gray-800 hover:text-emerald-600">zhillin0220@163.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gray-50 text-gray-500 rounded-xl">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">工作意向地</p>
                  <p className="text-xs font-semibold text-gray-800">深圳/上海/香港 (常驻/出差)</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="#products" 
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition duration-150 inline-flex items-center gap-1.5 shadow-md shadow-slate-900/5 cursor-pointer"
              >
                <span>浏览全栈自研 AI 项目</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#ai-assistant" 
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-xl text-sm font-semibold border border-gray-200 transition duration-150 inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>与 AI 助手在线聊聊</span>
                <MessageSquare className="w-4 h-4 text-emerald-500" />
              </a>
            </div>
          </div>

          {/* Portrait and Education Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Portrait Container */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl min-h-[350px] flex flex-col justify-between">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                    Academic Background
                  </span>
                  <GraduationCap className="w-6 h-6 text-slate-400" />
                </div>
                
                {/* Graduate school */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-semibold">硕士</span>
                    <h4 className="text-lg font-display font-bold text-slate-100">{educationData.school}</h4>
                  </div>
                  <p className="text-xs text-slate-300">{educationData.college} · {educationData.major}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{educationData.period} | 香港</p>
                </div>

                {/* Undergraduate school */}
                <div className="space-y-1 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] bg-slate-700 text-slate-300 border border-slate-600 px-1.5 py-0.2 rounded font-semibold">本科 (双一流)</span>
                    <h4 className="text-base font-display font-bold text-slate-100">天津工业大学</h4>
                  </div>
                  <p className="text-xs text-slate-300">计算机科学与技术学院 · 信息管理与信息系统</p>
                  <p className="text-[10px] text-slate-400 font-mono">GPA: 91 / 100 (专业前 5%) | 2022.09 - 2026.06</p>
                </div>
              </div>

              <div className="space-y-2 mt-6 pt-4 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 uppercase font-mono flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" /> 学术及双创荣誉指标
                </p>
                <div className="space-y-1">
                  {educationData.awards.map((award, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Resume Bullet Tags */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-sm">
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">复合型硬实力指标</h5>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>国家版权局软件著作权 (3项)</span>
                </span>
                <span className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>英语工作语言 (雅思6.5/GRE315)</span>
                </span>
                <span className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>第一作者发表 EI 检索期刊论文</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Selected Software Projects Section (Main Core Request) */}
        <section id="products" className="space-y-16 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              全栈数字化与 AI 创新作品集
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              根据我在德勤出海咨询、美团大促、京东增长中的痛点洞察，我全栈设计并开发了以下作品。支持<b>在线实际预览</b>和<b>高仿真交互沙盒演示</b>。
            </p>
          </div>

          {/* Block 1: 核心 AI 产品 (Above, 3 projects) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                  <span>核心 AI 产品 (3款)</span>
                </h3>
                <p className="text-xs text-gray-500">
                  全栈自研高含金量 AI 应用，涵盖大模型检索、电商增长、强化学习等领域。
                </p>
              </div>

              {/* Tabs */}
              <div className="p-1 bg-gray-100/80 rounded-xl border border-gray-200/50 flex flex-wrap gap-1">
                {coreProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedCoreId(proj.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 cursor-pointer ${
                      selectedCoreId === proj.id
                        ? 'bg-white text-slate-900 shadow-sm border border-gray-200/10'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {proj.name}
                    <span className="hidden md:inline text-[11px] font-normal text-gray-400 ml-1">
                      ({proj.chineseName.split('(')[0].split('（')[0]})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <ProjectViewer project={currentCoreProject} />
            </div>
          </div>

          {/* Block 2: AI 工具流 (Below, 2 projects) */}
          <div className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-gray-900 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-500" />
                  <span>AI 工具流与自动化 (2款)</span>
                </h3>
                <p className="text-xs text-gray-500">
                  咨询团队建模工具与全自动自动化工作流，专注流程效率革命。
                </p>
              </div>

              {/* Tabs */}
              <div className="p-1 bg-gray-100/80 rounded-xl border border-gray-200/50 flex flex-wrap gap-1">
                {workflowProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedWorkflowId(proj.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 cursor-pointer ${
                      selectedWorkflowId === proj.id
                        ? 'bg-white text-slate-900 shadow-sm border border-gray-200/10'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {proj.name}
                    <span className="hidden md:inline text-[11px] font-normal text-gray-400 ml-1">
                      ({proj.chineseName.split('(')[0].split('（')[0]})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <ProjectViewer project={currentWorkflowProject} />
            </div>
          </div>
        </section>

        {/* 4. Professional Experiences Timeline Section */}
        <section id="internships" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-5">
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                名企战略与运营核心实习
              </h2>
              <p className="text-sm text-gray-500">
                深入顶级数字化咨询公司、海外业务头部互联网平台及国内电商巨头，用技术驱动业务价值。
              </p>
            </div>
            <div className="flex items-center gap-1 bg-slate-900 text-white font-mono text-[11px] px-3 py-1.5 rounded-full font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>5 段商业与增长策略岗位背书</span>
            </div>
          </div>

          {/* Timeline list */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:md:left-1/2 before:-translate-x-px before:bg-gray-100 before:pointer-events-none">
            {internshipData.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full z-10 top-1.5 shadow-sm"></div>

                  {/* Date Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex md:justify-end text-left md:text-right">
                    <div className={`space-y-1 ${isEven ? 'md:text-left md:mr-auto' : 'md:text-right md:ml-auto'}`}>
                      <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        {job.period}
                      </span>
                      <h4 className="text-lg font-display font-bold text-gray-900 mt-2">{job.company}</h4>
                      <p className="text-sm font-semibold text-slate-500">{job.title}</p>
                    </div>
                  </div>

                  {/* Space / Content Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200 space-y-4">
                      {job.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="space-y-1 text-xs text-gray-600 leading-relaxed">
                          {/* Parse bold titles in resume bullets if any */}
                          {high.includes('：') ? (
                            <p>
                              <b className="text-slate-800">{high.split('：')[0]}：</b>
                              <span>{high.split('：')[1]}</span>
                            </p>
                          ) : (
                            <p>{high}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Competitions & Achievements Section */}
        <section id="competitions" className="space-y-8 scroll-mt-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {businessProjects.map((proj, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full uppercase">
                    National High-Level Award
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-white leading-snug">
                    {proj.title}
                  </h3>

                  <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-lg border-y border-slate-800/60 py-3 my-2">
                    <Award className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>国家级铜奖 (2024.07)</span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-400">
                    <p className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" /> 角色：<b>{proj.role}</b>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> 参赛时间：<b>{proj.period}</b>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    《“纤”路黑马——固态锂电池行业颠覆者》项目成果
                  </h4>
                  <div className="space-y-4">
                    {proj.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="bg-white/5 border border-white/5 rounded-2xl p-5 text-xs text-slate-300 leading-relaxed space-y-1">
                        {item.includes('：') ? (
                          <p>
                            <span className="font-semibold text-white text-sm block mb-1.5">{item.split('：')[0]}</span>
                            <span>{item.split('：')[1]}</span>
                          </p>
                        ) : (
                          <p>{item}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technical & Professional Skills Section */}
        <section id="skills" className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-20">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                专业技能与心智模型
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                完美的“出海咨询-技术自研-数据驱动”铁三角。不仅精通商业策略，更有出色的 AI 开发技能与高标准英文工作语言。
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase text-gray-400">核心能力配比面板</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-600">数字化转型与商业策略</span>
                  <span className="text-emerald-600 font-bold font-mono">Expert</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-600">技术栈与 AI 工具链</span>
                  <span className="text-emerald-600 font-bold font-mono">Proficient</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-600">低代码与流式工作流自动化</span>
                  <span className="text-emerald-600 font-bold font-mono">Advanced</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-600">英语工作沟通 (雅思6.5 / GRE315)</span>
                  <span className="text-emerald-600 font-bold font-mono">Fluent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-1.5 border-b border-gray-100 pb-3 mb-4">
                    <Code className="w-4 h-4 text-emerald-500" />
                    {group.category}
                  </h4>
                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-gray-700 truncate max-w-[150px]">{skill.name}</span>
                          <span className="text-gray-400 font-mono text-[10px]">{skill.level}%</span>
                        </div>
                        {/* Custom progress bar */}
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-slate-900 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. AI Resume Assistant (Chatbot Panel) */}
        <section id="ai-assistant" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Interact with AI</span>
              </div>
              <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                林至立的 AI 简历助理
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                想快速了解更多他没有在纸面简历展开的业务实力？我作为他的 AI 助理，能够实时回答关于他的<b>德勤咨询细节、美团出海运营、京东智能体开发、好未来绩效公式</b>以及核心优势，欢迎与我对话！
              </p>
            </div>

            <div className="space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-xs text-gray-600">
              <h5 className="font-bold text-slate-800">📌 您可以试着问我：</h5>
              <ul className="space-y-1.5 list-disc pl-4 text-gray-600">
                <li>“他在德勤咨询写了什么工具？”</li>
                <li>“他在美团海外 Keemart 的大促 A/B 实验数据如何？”</li>
                <li>“他在京东开发的“商品优化智能体”提效了多少？”</li>
                <li>“他是怎么利用 n8n 推送 AI 新闻至飞书的？”</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ResumeChatbot />
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center text-white font-display font-bold text-xs">
                LZL
              </div>
              <span className="font-display font-bold text-slate-900">林至立</span>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Zhili Lin. Designed & Programmed with 💻 and AI. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a href="#hero" className="hover:text-slate-900 transition duration-150">个人简介</a>
            <a href="#products" className="hover:text-slate-900 transition duration-150">自研 AI 作品</a>
            <a href="#internships" className="hover:text-slate-900 transition duration-150">名企实习</a>
            <a href="#competitions" className="hover:text-slate-900 transition duration-150">双创大赛</a>
            <a href="#skills" className="hover:text-slate-900 transition duration-150">专业能力</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 font-mono">
              IP: Shenzhen / Hong Kong
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
