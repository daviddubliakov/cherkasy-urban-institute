"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { checkElementVisibility, cn } from "@/utils";

export type SectionElementProps = {
  image: string;
  title: string;
  link: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  delay?: number;
};

export type SectionProps = {
  elements: SectionElementProps[];
};

const SectionElement = ({
  image,
  title,
  description,
  children,
  style,
  delay = 0,
}: SectionElementProps) => {
  const [elementVisible, setElementVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visibilityTracker = () => {
      const isVisible = checkElementVisibility(wrapperRef.current, 500);
      if (isVisible && !elementVisible) {
        setElementVisible(true);
      }
      if (!isVisible && elementVisible) {
        setElementVisible(false);
      }
    };

    document.addEventListener("scroll", visibilityTracker);

    visibilityTracker();

    return () => {
      document.removeEventListener("scroll", visibilityTracker);
    };
  }, []);

  useEffect(() => {
    if (elementVisible && !shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay * 500);
      return () => clearTimeout(timer);
    }
  }, [elementVisible]);

  return (
    <div ref={wrapperRef}>
      {shouldRender && (
        <div
          className={cn(
            "flex gap-6",
            shouldRender
              ? "animate-fade animate-once animate-duration-1000 animate-delay-100 animate-ease-in"
              : "opacity-0"
          )}
          style={style || {}}
        >
          <Image
            src={image}
            alt="section image"
            width={100}
            height={100}
            className="h-[100px] object-cover rounded-xl"
          ></Image>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>

            {children}
          </div>
        </div>
      )}
    </div>
  );
};
export const Section = ({ elements }: SectionProps) => {
  return (
    <div className="w-full px-5 flex flex-col gap-6 sm:px-20">
      {elements.map((props, index) => (
        <SectionElement
          key={index}
          delay={index}
          {...props}
          style={{ paddingLeft: `${(index % 3) * 3}0px` }}
        >
          <Link
            href={props.link}
            className="text-sm font-bold text-corp-30 hover:text-corp-20 opacity-70"
          >
            {` `}Більше...
          </Link>
        </SectionElement>
      ))}
    </div>
  );
};
