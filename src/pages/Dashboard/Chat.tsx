"use client";
import {
  IoChevronBack,
  IoEllipsisHorizontal,
  IoAdd,
  IoSend,
  IoPlay,
} from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import user from "../../assets/useri.png";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "other", text: "Can You Redesign this logo?", time: "16:49" },
    { from: "you", text: "Hi, are you available?" },
    { from: "other", text: "Hello, Yes. How can I help you?", time: "16:49" },
    { from: "you", text: "I can redesign your logo.", time: "16:50", read: true },
    { from: "you", type: "audio", duration: "0:20", time: "09:13", read: true },
    { from: "other", text: "Yes, I can build your website. I am proposing you a swap", time: "09:56" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { from: "you", text: input }]);
      setInput("");
    }
  };

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <h1 className="text-xl font-semibold text-gray-900">Inbox</h1>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-blue-500 text-sm font-medium">You have 12 message requests</span>
            <IoChevronBack className="w-4 h-4 text-gray-400 rotate-180" />
          </div>
        </div>

        {/* Contact list */}
        <div className="overflow-y-auto">
          {/* Contact Example */}
          <div className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer">
            <div className="relative">
              <img src={user} alt="Athalia Putri" className="w-12 h-12 rounded-full object-cover" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">Athalia Putri</p>
                <span className="text-xs text-gray-500">TODAY</span>
              </div>
              <p className="text-sm text-gray-500 truncate">Good morning, did you sleep well?</p>
            </div>
            <span className="ml-2 w-5 h-5 text-xs font-medium text-white bg-blue-500 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <IoChevronBack className="w-5 h-5 text-gray-600 mr-3 cursor-pointer" />
            <img src={user} alt="Athalia Putri" className="w-10 h-10 rounded-full object-cover mr-3" />
            <span className="font-medium text-gray-900">Athalia Putri</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
              Swap
            </button>
            <IoEllipsisHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: "smooth" }}>
          {messages.map((msg, idx) => (
            <div key={idx}>
              <div className={`flex ${msg.from === "you" ? "justify-end" : "justify-start"}`}>
                {msg.type === "audio" ? (
                  <div className={`bg-blue-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs`}>
                    <div className="flex items-center space-x-3">
                      <IoPlay className="w-4 h-4 text-white" />
                      <div className="flex-1 flex items-center space-x-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-0.5 bg-white rounded-full"
                            style={{ height: `${Math.random() * 16 + 8}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-white">{msg.duration}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      msg.from === "you" ? "bg-blue-500 text-white rounded-tr-md" : "bg-gray-100 text-gray-900 rounded-tl-md"
                    } rounded-2xl px-4 py-2 max-w-xs`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                )}
              </div>
              {msg.time && (
                <div
                  className={`text-xs text-gray-500 ${msg.from === "you" ? "text-right mr-1" : "ml-1"}`}
                >
                  {msg.time} {msg.read ? "· Read" : ""}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <IoAdd className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button className="p-2 text-blue-500 hover:text-blue-600" onClick={handleSend}>
              <IoSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
