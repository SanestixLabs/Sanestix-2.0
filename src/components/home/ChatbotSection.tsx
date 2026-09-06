import { useState, useRef, useEffect } from "react";
import { Bot, MessageSquare, Briefcase, Send, RefreshCw, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatbotSection() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Sanestix AI.<br/>How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => "session_" + Math.random().toString(36).substring(2, 9));
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend?: string) => {
    const text = typeof textToSend === 'string' ? textToSend : input;
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://n8n.sanestix.cloud/webhook/Chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          action: "sendMessage",
          chatInput: text,
          message: text,
          query: text
        }),
      });

      const data = await response.json();
      
      // Parse the n8n response which can come in various formats
      let botText = "Sorry, I couldn't process that response.";
      if (typeof data === "string") {
        botText = data;
      } else if (Array.isArray(data) && data.length > 0) {
        botText = data[0].output || data[0].text || data[0].message || JSON.stringify(data[0]);
      } else if (typeof data === "object") {
        botText = data.output || data.response || data.text || data.message || data.answer || JSON.stringify(data);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hi! I'm Sanestix AI.<br/>How can I help you today?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  return (
    <div className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
              Try It Yourself
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Chat with <br /> our AI Assistant
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md">
            Experience how our AI agent can answer questions, qualify leads, and book meetings — just like it would for your business.
          </p>

          <div className="flex flex-col gap-3 max-w-sm">
            <Button 
              variant="outline" 
              onClick={() => handleSend("Ask about our services")}
              className="justify-between h-12 text-[#00bfff] border-[#00bfff]/30 hover:bg-[#00bfff]/5 dark:hover:bg-[#00bfff]/20 font-medium rounded-xl"
            >
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Ask about our services</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleSend("Get a pricing estimate")}
              className="justify-between h-12 text-[#00bfff] border-[#00bfff]/30 hover:bg-[#00bfff]/5 dark:hover:bg-[#00bfff]/20 font-medium rounded-xl"
            >
              <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Get a pricing estimate</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleSend("Book a strategy call")}
              className="justify-between h-12 text-[#00bfff] border-[#00bfff]/30 hover:bg-[#00bfff]/5 dark:hover:bg-[#00bfff]/20 font-medium rounded-xl"
            >
              <span className="flex items-center gap-2"><Bot className="w-4 h-4" /> Book a strategy call</span>
            </Button>
          </div>
        </div>

        {/* Right Chatbot UI */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="h-16 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 bg-white dark:bg-slate-900 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-[#00bfff] flex items-center justify-center text-white font-bold text-xs">S</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Sanestix AI</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                <button onClick={resetChat} title="Reset Chat">
                  <RefreshCw className="w-4 h-4 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
                </button>
                <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300" />
              </div>
            </div>

            {/* Chat Body */}
            <div ref={chatBodyRef} className="flex-1 bg-slate-50/50 dark:bg-slate-950/50 p-6 overflow-y-auto flex flex-col gap-6 scroll-smooth">
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}>
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-[#00bfff] shrink-0 flex items-center justify-center text-white font-bold text-xs mt-1">S</div>
                  )}
                  
                  <div className={
                    msg.sender === "user" 
                      ? "bg-[#00bfff]/10 dark:bg-[#00bfff]/20 text-[#0088cc] dark:text-[#33c3ff] rounded-2xl rounded-tr-sm p-4 text-sm shadow-sm max-w-[80%]"
                      : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-600 dark:text-slate-300 shadow-sm max-w-[85%]"
                  }>
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                    <div className={`text-[10px] mt-2 ${msg.sender === "user" ? "text-[#0088cc]/60 dark:text-[#33c3ff]/60 text-right" : "text-slate-400 dark:text-slate-500"}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-[#00bfff] shrink-0 flex items-center justify-center text-white font-bold text-xs mt-1">S</div>
                  <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-600 shadow-sm flex items-center gap-1.5 h-12">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..." 
                  disabled={isLoading}
                  className="w-full h-12 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full pl-6 pr-14 text-sm outline-none focus:border-[#00bfff]/50 focus:bg-white dark:focus:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 bottom-2 w-8 bg-[#00bfff] hover:bg-[#0099cc] disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
