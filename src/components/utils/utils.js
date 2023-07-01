import React, { useEffect, useState } from "react";

export const TypewriterEffect = ({ text, speed, startDelay }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const startTyping = () => {
      const typewriterInterval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setDisplayText(currentText);
          currentIndex++;
        } else {
          clearInterval(typewriterInterval);
        }
      }, speed);
    };

    const typingTimeout = setTimeout(() => {
      startTyping();
    }, startDelay);

    return () => {
      clearInterval(typingTimeout);
    };
  }, [text, speed, startDelay]);

  return displayText;
};

export const DelayedContent = ({ delay, content }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delayToShowContent = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => {
      clearTimeout(delayToShowContent);
    };
  }, [delay]);

  return <>{showContent ? content : null}</>;
};

export const TypewriterEffect_Replacement = ({ texts, speed, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentText = texts[currentIndex];

  useEffect(() => {
    let isTyping = true;
    let currentDisplayedText = "";
    let typingInterval;

    const typeText = () => {
      if (isTyping) {
        currentDisplayedText += currentText[currentDisplayedText.length];
      } else {
        currentDisplayedText = currentText.slice(
          0,
          currentDisplayedText.length - 1
        );
      }
      setDisplayText(currentDisplayedText);

      if (isTyping && currentDisplayedText.length === currentText.length) {
        isTyping = false;
        setTimeout(() => {
          isTyping = true;
        }, delay);
      }

      if (!isTyping && currentDisplayedText.length === 0) {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % texts.length);
      }
    };

    typingInterval = setInterval(typeText, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, texts, speed, delay]);

  return <h2 className="myname">{displayText}</h2>;
};
