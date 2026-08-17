"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Facebook, CheckCircle2, Code2, Workflow, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow ">
        {/* Article Header */}
        <section className="bg-black py-16 md:py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
            <img
              src="/agentic_ai_cover.png"
              alt="Agentic AI Cover"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-20">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors text-sm font-light">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 bg-[#8e2157]/20 border border-[#8e2157]/40 text-pink-200 text-xs font-medium rounded-full backdrop-blur-sm">
                Enterprise AI
              </span>
              <div className="flex items-center gap-4 text-white/60 text-xs font-light">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> August 15, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Agentic AI and Enterprise Automation: <br className="hidden md:block" />
              The Shift from Chat to Autonomous Workflows
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden">
                <img src="/logo.png" alt="ByteSpire" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">ByteSpire Insights Team</p>
                <p className="text-white/50 text-xs">Research & Development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24 px-6 bg-white relative">
          <div className="max-w-3xl mx-auto">

            {/* Social Share (Floating on large screens) */}
            <div className="hidden lg:flex flex-col gap-4 absolute top-24 left-[calc(50%-450px)] text-gray-400">
              <p className="text-xs uppercase tracking-widest font-medium text-gray-400 mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</p>
              <button className="p-2 hover:text-[#8e2157] transition-colors"><Twitter className="w-5 h-5" /></button>
              <button className="p-2 hover:text-[#8e2157] transition-colors"><Linkedin className="w-5 h-5" /></button>
              <button className="p-2 hover:text-[#8e2157] transition-colors"><Facebook className="w-5 h-5" /></button>
            </div>

            <article className="prose prose-lg prose-gray max-w-none font-light leading-relaxed">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                The most discussed topic in IT strategy right now is <strong>Agentic AI</strong>. We are rapidly moving past the era where AI was simply a conversational tool—a chatbot that waits for your prompt. Today, we are entering the era of autonomous software agents that actively execute complex business workflows.
              </p>

              <h2 className="text-3xl font-light text-gray-900 mt-12 mb-6">What is Agentic AI?</h2>
              <p className="mb-6">
                Agentic AI refers to artificial intelligence systems that possess a degree of <em>agency</em>. Unlike standard Large Language Models (LLMs) that merely predict the next word in a sequence based on a user's prompt, Agentic AI systems can plan, reason, make decisions, use external tools, and execute multi-step workflows without constant human intervention.
              </p>
              <p className="mb-8">
                If a traditional LLM is a highly intelligent intern that can draft an email for you, an Agentic AI is an autonomous employee. It can read a customer complaint, check your CRM to understand their history, query the inventory database to check for a replacement product, draft the response, and generate the shipping label—all triggered by a single incoming email.
              </p>

              <div className="my-12 p-8 bg-gray-50 border-l-4 border-[#8e2157] rounded-r-2xl shadow-sm">
                <p className="text-xl italic text-gray-700 m-0 leading-relaxed">
                  "We are shifting from AI as a tool we manually operate, to AI as an autonomous agent that works alongside us."
                </p>
              </div>

              <h2 className="text-3xl font-light text-gray-900 mt-16 mb-6">RPA vs. Agentic Automation</h2>
              <p className="mb-8">
                For the last decade, enterprise automation was dominated by Robotic Process Automation (RPA). RPA is excellent for highly repetitive, rigid tasks. However, business is rarely rigid. When exceptions occur, RPA breaks. Agentic AI bridges this gap through semantic understanding.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-12 rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 font-medium text-gray-900 w-1/3">Feature</th>
                      <th className="p-4 font-medium text-gray-900 w-1/3">Traditional RPA</th>
                      <th className="p-4 font-medium text-[#8e2157] w-1/3">Agentic AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 text-gray-600">Decision Making</td>
                      <td className="p-4 text-gray-500">Rigid, rules-based (If-This-Then-That)</td>
                      <td className="p-4 text-gray-900 font-medium">Dynamic, semantic reasoning</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 text-gray-600">Exception Handling</td>
                      <td className="p-4 text-gray-500">Fails when UI or data format changes</td>
                      <td className="p-4 text-gray-900 font-medium">Adapts and figures out alternatives</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-600">Data Input</td>
                      <td className="p-4 text-gray-500">Structured data only (CSV, JSON, precise coordinates)</td>
                      <td className="p-4 text-gray-900 font-medium">Unstructured data (Emails, PDFs, Images)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-light text-gray-900 mt-16 mb-6">How It Works: Tool Calling</h2>
              <p className="mb-6">
                The secret sauce behind Agentic AI is <strong>Tool Calling</strong> (or Function Calling). Instead of the AI just returning text, you provide the AI with a JSON schema of tools it can use (e.g., <code>check_inventory()</code> or <code>create_ticket()</code>). When the AI determines it needs data it doesn't have, it pauses its generation and outputs a command to run that tool.
              </p>

              {/* Code Snippet */}
              <div className="bg-[#1e1e1e] rounded-2xl p-6 mb-10 overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                  <Code2 className="w-4 h-4 text-pink-400" />
                  <span className="text-white/70 text-xs font-mono">agent_tools.json</span>
                </div>
                <pre className="text-sm font-mono text-green-400 overflow-x-auto whitespace-pre-wrap">
                  {`{
  "name": "refund_customer",
  "description": "Issues a refund to a customer given their order ID.",
  "parameters": {
    "type": "object",
    "properties": {
      "orderId": {
        "type": "string",
        "description": "The UUID of the customer's order"
      },
      "amount": {
        "type": "number",
        "description": "The amount to refund in USD"
      }
    },
    "required": ["orderId", "amount"]
  }
}`}
                </pre>
              </div>

              <p className="mb-10">
                The agent reads this schema, understands what the tool does, and automatically generates the exact JSON payload required to trigger your backend API when a customer asks for a refund.
              </p>

              <h2 className="text-3xl font-light text-gray-900 mt-16 mb-6">The Future: Multi-Agent Orchestration</h2>
              <p className="mb-6">
                As workflows get more complex, a single agent becomes prone to hallucinations. The industry standard is rapidly moving toward <strong>Multi-Agent Swarms</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <Workflow className="w-8 h-8 text-[#8e2157] mb-4" />
                  <h4 className="text-gray-900 font-medium mb-2">1. Researcher</h4>
                  <p className="text-sm text-gray-500">Gathers unstructured data from the web, PDFs, and internal databases.</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <Zap className="w-8 h-8 text-[#8e2157] mb-4" />
                  <h4 className="text-gray-900 font-medium mb-2">2. Analyst</h4>
                  <p className="text-sm text-gray-500">Takes the research and applies business logic, math, and reasoning.</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <CheckCircle2 className="w-8 h-8 text-[#8e2157] mb-4" />
                  <h4 className="text-gray-900 font-medium mb-2">3. Executor</h4>
                  <p className="text-sm text-gray-500">Takes the final decision and uses tools to update the CRM or send emails.</p>
                </div>
              </div>

              <h2 className="text-3xl font-light text-gray-900 mt-16 mb-6">Real-World Business Impact</h2>
              <p className="mb-6">
                The shift towards Agentic AI is already yielding massive ROI for early adopters. In software development, agents are actively reviewing PRs, identifying security vulnerabilities, and even writing boilerplate code autonomously. In customer support, agents aren't just answering FAQs; they are processing refunds and updating account details securely.
              </p>

              <p className="mb-10">
                As an IT consulting and development agency, <strong>ByteSpire</strong> is at the forefront of this shift. We are helping businesses transition their rigid legacy automations into dynamic, AI-driven workflows that adapt to the speed of modern business.
              </p>

              <hr className="my-10 border-gray-200" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm">
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Ready to automate your enterprise?</h4>
                  <p className="text-sm text-gray-500">Discover how our Agentic AI solutions can transform your workflows.</p>
                </div>
                <Link href="/contact" className="bg-[#8e2157] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-[#6b1842] transition-colors whitespace-nowrap shadow-md">
                  Talk to our Experts
                </Link>
              </div>

            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
