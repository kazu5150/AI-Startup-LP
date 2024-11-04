'use client'

import { useState } from 'react';
import { LandingPageComponent } from "@/components/landing-page";
import { ChatBot } from "@/components/ChatBot";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };

  return (
    <div className="relative">
      <LandingPageComponent />
      <div className="fixed top-20 right-4 z-50">
        <Button onClick={toggleChatBot} className="mb-2 bg-yellow-400 text-black hover:bg-yellow-500">
          {isChatBotVisible ? 'AIチャットを閉じる' : 'AIチャットと会話'}
        </Button>
        {isChatBotVisible && <ChatBot />}
      </div>
    </div>
  );
}