"use client";

import CopyIcon from "@/assets/icons/copy.svg";
import grainImage from "@/assets/images/grain.jpg";
import Confetti from "react-confetti";
import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "abidhasan.bh@outlook.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-10">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Confetti
                      width={900}
                      height={300}
                      numberOfPieces={500}
                      recycle={false}
                    />
                    <span className="font-semibold">Copied!!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="size-4 fill-white" />
                    <span className="font-semibold">Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
