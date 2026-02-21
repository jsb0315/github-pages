import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-center xl:grid xl:grid-cols-[1fr_minmax(auto,48rem)_1fr] gap-8 xl:gap-12">
          
          {/* Sidebar / Table of Contents */}
          <div className="hidden lg:block xl:flex xl:justify-end">
            <aside className="w-56 xl:w-64 shrink-0">
              <div className="sticky top-16 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">목차</h3>
                <nav className="space-y-3 text-sm text-slate-600">
                  <a href="#intro" className="block hover:text-indigo-600 transition-colors">소개 및 목적</a>
                  <a href="#section-1" className="block hover:text-indigo-600 transition-colors">1. Github Pages 확인</a>
                  <a href="#section-2" className="block hover:text-indigo-600 transition-colors">2. 프로젝트 생성 및 세팅</a>
                  <a href="#section-3" className="block hover:text-indigo-600 transition-colors">3. 배포</a>
                  <a href="#section-4" className="block hover:text-indigo-600 transition-colors">4. TailwindCSS 설치</a>
                </nav>
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <main className="w-full max-w-3xl mx-auto lg:mx-0">
            {/* Header */}
          <header id="intro" className="mb-16 scroll-mt-16">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Tutorial
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Github Page 배포하기
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-slate-600 mb-6">
              React + TypeScript + Vite + TailwindCSS
            </h2>
            <p className="text-lg text-slate-500 border-l-4 border-indigo-500 pl-4 italic">
              까먹을때 대비
            </p>
          </header>

          {/* Callout: 목적 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-800">
              <span className="text-2xl">🎯</span> 목적: 간단한 정적 웹사이트 배포
            </h3>
            <ul className="space-y-3 text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span><strong className="text-slate-800">정적 웹사이트</strong> ➔ 브라우저가 혼자 다 해라</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>보안 싹 빼고 HTML/CSS/JS만 올리는거임 (프론트엔드 프로토타입용)</span>
              </li>
              <li className="flex items-start gap-2 mt-4 bg-red-50 p-3 rounded-lg text-red-800 border border-red-100">
                <span className="mt-0.5">❌</span>
                <span><strong>안되는거:</strong> Node.js 서버, Express API, DB 직접연결, SSR, 세션기반 인증 등 내 컴퓨터가 일해야하는거</span>
              </li>
              <li className="flex items-start gap-2 mt-2 bg-emerald-50 p-3 rounded-lg text-emerald-800 border border-emerald-100">
                <span className="mt-0.5">✅</span>
                <span><strong>되는거:</strong> localStorage, 외부 API, Firebase 등 다른 컴퓨터가 실행중인 자원</span>
              </li>
            </ul>
          </div>

          {/* Callout: 추천 용도 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-8 mb-16 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 mb-5 flex items-center gap-3">
              <span className="text-2xl">💡</span> 추천 용도
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {['UI 프로젝트', '포트폴리오', '문서 사이트', '블로그', '외부 API fetch', '클라이언트 상태관리', 'Tailwind', 'React 다 됨', '프론트 연습용'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white text-indigo-700 rounded-full text-sm font-medium border border-indigo-200 shadow-sm hover:bg-indigo-50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="mb-16 scroll-mt-16">
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-bold text-slate-800">🚀 [1~3] Github Pages 확인</h2>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md border border-slate-200">where: github 페이지</span>
            </div>

            <div className="space-y-10">
              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  1. 레포지토리 생성
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  깃허브에서 New 레포지토리, public, Add README on<br/>
                  <span className="text-sm text-slate-500 mt-2 inline-block bg-slate-100 px-3 py-1 rounded-md">
                    기존 레포지토리 배포만 하고싶다 ➔ <a href="#step-5" className="text-indigo-600 hover:underline font-medium">5~8번으로 이동</a>
                  </span>
                </p>
              </div>

              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  2. 레포지토리 Page Settings
                </h3>
                <p className="text-slate-600 mb-3">Settings - Pages - Build and deployment</p>
                <ul className="space-y-2 text-slate-600 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    Source: Deploy from a branch (기본값임)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    Branch: <code className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded text-sm font-mono border border-rose-100">main</code>, <code className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded text-sm font-mono border border-rose-100">/(root)</code> 바꾸고 save
                  </li>
                </ul>
              </div>

              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  3. Actions workflows 확인
                </h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl text-amber-800 text-sm leading-relaxed">
                  잠시 대기 후 누르면 확인가능<br/>
                  새로고침 자동으로 안돼서 마냥 기다리진 마셈<br/>
                  들어가면 deploy에 URL 뜸 (5번에서 사용)<br/>
                  웹에 README 내용 뜰거임
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-16 scroll-mt-16">
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-bold text-slate-800">💻 [4~6] 프로젝트 생성, 세팅</h2>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md border border-slate-200">where: VScode/터미널</span>
            </div>

            <div className="space-y-10">
              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  4. 현재 폴더에 프로젝트 생성
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
                    <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                    </div>
                    <pre className="p-5 text-sm font-mono text-slate-300 overflow-x-auto">
                      <code><span className="text-pink-400">npm</span> create vite@latest . -- --template react-ts{'\n'}<span className="text-pink-400">npm</span> install</code>
                    </pre>
                  </div>
                  <p className="text-slate-500 text-sm italic">템플릿 안써도 됨. CRA는 추억으로 남겨두자.</p>
                </div>
              </div>

              <div id="step-5" className="group relative pl-8 scroll-mt-24">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  5. gh-pages 설치
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
                    <pre className="p-5 text-sm font-mono text-slate-300 overflow-x-auto">
                      <code><span className="text-pink-400">npm</span> install gh-pages --save-dev</code>
                    </pre>
                  </div>
                  <p className="text-slate-500 text-sm">github Pages 배포 도와주는 패키지임</p>
                </div>
              </div>

              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  6. package.json 수정
                </h3>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <p className="text-slate-600 flex items-center gap-2">
                    <span className="text-indigo-500">1.</span>
                    <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono">"scripts"</code> 안에 <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-sm font-mono border border-indigo-100">"deploy": "gh-pages -d dist"</code> 추가
                  </p>
                  <p className="text-slate-600 flex items-center gap-2">
                    <span className="text-indigo-500">2.</span>
                    <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-sm font-mono border border-indigo-100">"homepage": "https://깃허브아이디.github.io/레포이름"</code> 추가
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-16 scroll-mt-16">
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-bold text-slate-800">🚀 [7~8] 배포</h2>
            </div>

            <div className="space-y-10">
              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">7. 배포</h3>
                  <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">VScode/터미널</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
                    <pre className="p-5 text-sm font-mono text-slate-300 overflow-x-auto">
                      <code><span className="text-pink-400">npm</span> run deploy</code>
                    </pre>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-600 text-sm">
                    실행시 빌드 + github pages 배포 순서대로 함<br/>
                    그럼 로컬 폴더에 <code className="bg-white text-slate-800 px-1.5 py-0.5 rounded border border-slate-200">dist</code> 폴더 생김 (레포지토리엔 안올라감)
                  </div>
                </div>
              </div>

              <div className="group relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">8. 레포지토리 Page Settings 수정</h3>
                  <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">github 페이지</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-slate-600">
                  아까 Settings - Pages - Build and deployment - Branch<br/>
                  <code className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded text-sm font-mono border border-rose-100 mt-2 inline-block">main</code>이었던걸 <code className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-sm font-mono border border-emerald-100">gh-pages</code>로 바꾸고 save
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <div className="group relative pl-8 mb-16">
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">9. TailwindCSS 설치</h3>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">github 페이지</span>
            </div>
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-5 rounded-xl border border-slate-200 shadow-sm text-slate-600">
              <div className="space-y-4 relative z-10">
                <a 
                  href="https://tailwindcss.com/docs/installation/using-vite" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg text-indigo-200 hover:text-white transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  TailwindCSS 공식 문서 (Vite)
                </a>
                <p className="text-slate-300 text-sm mt-4">문서 따라하고 푸쉬하면 끝</p>
              </div>
            </div>
          </div>

        </main>

        {/* Right spacer for centering on xl screens */}
        <div className="hidden xl:block"></div>

      </div>
    </div>
  </div>
  );
}

export default App;
