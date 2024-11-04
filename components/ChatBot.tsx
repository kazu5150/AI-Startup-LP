'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'こんにちは！ お手伝いできることはありますか？' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-l-lg bg-gray-700 text-white"
          placeholder="メッセージを入力..."
        />
        <Button onClick={handleSend} className="rounded-r-lg bg-yellow-400 text-black hover:bg-yellow-500">
          送信
        </Button>
      </div>
    </div>
  );
} 