import React, { useState } from 'react';
import { X, Globe, Server, ShieldCheck, Search, BarChart3, Terminal, Check, Copy } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'build' | 'hosting' | 'domain' | 'gsc'>('build');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#EAF3FF] text-[#164B8C] rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0B1F3A]">Deployment & Custom Domain Guide</h3>
              <p className="text-xs text-slate-500">Step-by-step instructions for launching Hazel Digital live</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-white rounded-lg border border-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-100 px-5 gap-2 bg-white pt-2">
          <button
            onClick={() => setActiveTab('build')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'build'
                ? 'border-[#164B8C] text-[#164B8C]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>1. Build & Run</span>
          </button>

          <button
            onClick={() => setActiveTab('hosting')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'hosting'
                ? 'border-[#164B8C] text-[#164B8C]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>2. Free Hosting</span>
          </button>

          <button
            onClick={() => setActiveTab('domain')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'domain'
                ? 'border-[#164B8C] text-[#164B8C]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>3. Domain & SSL</span>
          </button>

          <button
            onClick={() => setActiveTab('gsc')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'gsc'
                ? 'border-[#164B8C] text-[#164B8C]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>4. Google SEO & Analytics</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          {activeTab === 'build' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#0B1F3A]">How to Run & Build Locally</h4>
              <p>
                Hazel Digital is built on standard Vite + React + TypeScript with zero complicated server dependencies.
              </p>

              <div className="space-y-2">
                <span className="font-semibold text-slate-900 block">1. Run local development preview:</span>
                <div className="flex items-center justify-between p-3 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px]">
                  <span>npm run dev</span>
                  <button
                    onClick={() => handleCopy('npm run dev', 'dev')}
                    className="text-slate-400 hover:text-white"
                  >
                    {copiedText === 'dev' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-slate-900 block">2. Compile production bundle:</span>
                <div className="flex items-center justify-between p-3 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px]">
                  <span>npm run build</span>
                  <button
                    onClick={() => handleCopy('npm run build', 'build')}
                    className="text-slate-400 hover:text-white"
                  >
                    {copiedText === 'build' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-slate-500 text-[11px]">
                  This outputs optimized HTML, JS, CSS, and assets into the <code className="bg-slate-100 px-1 py-0.5 rounded">dist/</code> folder ready for static hosting.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'hosting' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#0B1F3A]">Recommended Free or Low-Cost Hosting</h4>
              <p>
                Because this website compiles to static assets, you can host it for free with high performance and global CDN coverage:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-slate-900 block mb-1">Vercel (Recommended)</span>
                  <p className="text-slate-600 text-[11px] mb-2">Connect your GitHub repository. Vercel automatically detects Vite and deploys on every commit.</p>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Free Tier Available</span>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-slate-900 block mb-1">Netlify</span>
                  <p className="text-slate-600 text-[11px] mb-2">Drag and drop the `dist/` directory or link your Git repo with automatic SSL.</p>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Free Tier Available</span>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-slate-900 block mb-1">Cloudflare Pages</span>
                  <p className="text-slate-600 text-[11px] mb-2">Zero-cost unlimited bandwidth with Cloudflare edge caching and DDoS protection.</p>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Free Tier Available</span>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                  <span className="font-bold text-slate-900 block mb-1">Hostinger / Bluehost</span>
                  <p className="text-slate-600 text-[11px] mb-2">If you purchase your domain with shared hosting, upload the contents of `dist/` to `public_html/`.</p>
                  <span className="text-[10px] text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded">Standard cPanel</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'domain' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#0B1F3A]">Connecting a Custom Domain & Free SSL</h4>
              <p>
                When you purchase your domain (e.g., from Namecheap, GoDaddy, or Google Domains):
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <span className="font-semibold text-slate-900">Step 1: Add DNS Records</span>
                  <p className="text-[11px] text-slate-600">
                    In your domain registrar's DNS management panel:
                  </p>
                  <ul className="list-disc pl-4 text-[11px] space-y-1 text-slate-600">
                    <li><strong>A Record:</strong> Name <code>@</code> → Value provided by your host (e.g. <code>76.76.21.21</code> for Vercel)</li>
                    <li><strong>CNAME Record:</strong> Name <code>www</code> → Points to your host's alias (e.g. <code>cname.vercel-dns.com</code>)</li>
                  </ul>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <span className="font-semibold text-slate-900">Step 2: Automated HTTPS / SSL</span>
                  <p className="text-[11px] text-slate-600">
                    Vercel, Netlify, and Cloudflare Pages issue a free Let's Encrypt SSL certificate automatically within 10–30 minutes of DNS verification. No manual SSL purchase needed.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gsc' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#0B1F3A]">Connecting Google Search Console & Analytics</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-[#164B8C]" />
                    <span>Google Search Console Setup</span>
                  </span>
                  <ol className="list-decimal pl-4 text-[11px] space-y-1 text-slate-600">
                    <li>Go to <code>search.google.com/search-console</code> and sign in with <code>hazeldigital01@gmail.com</code>.</li>
                    <li>Add your domain as a property (DNS TXT record verification is easiest).</li>
                    <li>Once verified, click on <strong>Sitemaps</strong> in the left sidebar.</li>
                    <li>Submit: <code>https://yourdomain.com/sitemap.xml</code> (already included in this project!).</li>
                  </ol>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#164B8C]" />
                    <span>Adding Google Analytics (GA4)</span>
                  </span>
                  <p className="text-[11px] text-slate-600">
                    Create a free GA4 property at <code>analytics.google.com</code>, copy your Measurement ID (e.g. <code>G-XXXXXXXXXX</code>), and paste the snippet inside <code>index.html</code> within the <code>&lt;head&gt;</code> tag.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500">Domain-independent architecture ready for production</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#164B8C] hover:bg-[#0B1F3A] text-white font-medium rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
