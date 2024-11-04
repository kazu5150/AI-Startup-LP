'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'こんにちは！AIを使ってどのようにお手伝いできますか？' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Error:', error);
    }
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
        <Button onClick={handleSend} className="rounded-r-lg">
          送信
        </Button>
      </div>
    </div>
  );
} 