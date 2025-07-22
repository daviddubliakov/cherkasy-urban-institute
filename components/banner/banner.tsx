"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "@/components/button";
import { checkElementVisibility, cn } from "@/utils";

export type BannerType = "default";

export type BannerProps = {
  type?: BannerType;
  background: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export type BannerElement =
  | "wrapper"
  | "wrapperAnimation"
  | "image"
  | "title"
  | "description"
  | "content"
  | "children";

const bannerVariants: Record<BannerType, Record<BannerElement, string>> = {
  default: {
    wrapper:
      "flex flex-col w-full h-[90vh] items-center justify-center text-white",
    wrapperAnimation:
      "animate-fade animate-once animate-duration-1000 animate-delay-200 animate-ease-in",
    image: "absolute w-[100vw] z-[-10] h-[90vh] object-cover",
    content: "w-full flex flex-col justify-center items-center",
    title:
      "max-w-[70%] animate-fade-up animate-duration-1000 animate-delay-500 h2-shadow",
    description:
      "animate-fade animate-once animate-duration-500 animate-delay-[1500ms] animate-ease-in",
    children:
      "animate-fade animate-once animate-duration-500 animate-delay-[2000ms] animate-ease-in",
  },
};

export const Banner = ({
  children,
  type = "default",
  background,
  title,
  description,
}: BannerProps) => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visibilityTracker = () => {
      const isVisible = checkElementVisibility(wrapperRef.current, 500);
      if (isVisible && !bannerVisible) {
        setBannerVisible(true);
      }
      if (!isVisible && bannerVisible) {
        setBannerVisible(false);
      }
    };

    document.addEventListener("scroll", visibilityTracker);

    visibilityTracker();

    return () => {
      document.removeEventListener("scroll", visibilityTracker);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        `${bannerVariants[type].wrapper} relative w-full`,
        bannerVisible ? bannerVariants[type].wrapperAnimation : "opacity-0"
      )}
    >
      <img
        src={background}
        alt="banner image"
        className={bannerVariants[type].image}
      />
      <div className={bannerVariants[type].content}>
        <h2
          className={cn(
            bannerVisible ? bannerVariants[type].title : "opacity-0"
          )}
        >
          {" "}
          {title}
        </h2>
        <p
          className={
            bannerVisible ? bannerVariants[type].description : "opacity-0"
          }
        >
          {description}
        </p>
        <div
          className={
            bannerVisible ? bannerVariants[type].children : "opacity-0"
          }
        >
          {children && children}
        </div>
      </div>
    </div>
  );
};
