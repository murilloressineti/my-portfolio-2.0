import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import Text from "../ui/text";

export const timelineItemVariants = cva(
  "grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 w-full",
  {
    variants: {
      side: {
        left: "",
        right: "",
      },
    },
    defaultVariants: {
      side: "left",
    },
  },
);

interface TimelineItemProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof timelineItemVariants> {
  title: string;
  description: string;
  date: string;
  badgeText: string;
  badgeIcon: React.ReactNode;
}

export default function TimelineItem({
  side,
  title,
  description,
  date,
  badgeText,
  badgeIcon,
  className,
  ...props
}: TimelineItemProps) {
  const isLeft = side === "left";
  return (
    <div
      className={cn(
        timelineItemVariants({ side, className }),
        "md:items-center items-stretch mb-6 md:mb-13 last:mb-0",
      )}
      {...props}
    >
      {/* COLUNA 1: Esquerda */}
      <div
        className={cn("flex w-full ", isLeft ? "justify-end" : "justify-start")}
      >
        {isLeft ? (
          <TimelineContent
            title={title}
            description={description}
            date={date}
            align="right"
          />
        ) : (
          <div className="flex w-full justify-end">
            <TimelineBadge text={badgeText} icon={badgeIcon} />
          </div>
        )}
      </div>

      {/* COLUNA 2: Centro (Bolinha) */}
      <div className="relative flex justify-center items-center h-full">
        <span
          className="relative z-10 rounded-full shrink-0 h-2 w-2"
          style={{
            backgroundColor: "black",
            boxShadow: `0 0 0 4px #FFFFFF, 0px 2px 4px rgba(0, 0, 0, 1)`,
          }}
        />
      </div>

      {/* COLUNA 3: Direita */}
      <div
        className={cn("flex w-full", isLeft ? "justify-start" : "justify-end")}
      >
        {isLeft ? (
          <div className="flex w-full justify-start">
            <TimelineBadge text={badgeText} icon={badgeIcon} />
          </div>
        ) : (
          <TimelineContent
            title={title}
            description={description}
            date={date}
            align="left"
          />
        )}
      </div>
    </div>
  );
}

function TimelineContent({
  title,
  description,
  date,
  align,
}: {
  title: string;
  description: string;
  date: string;
  align: "left" | "right";
}) {
  const parts = title.split("*");
  return (
    <div
      className={cn(
        "flex flex-col w-full bg-bg-default rounded-lg p-6 transition-all duration-300 ease-in-out border border-transparent hover:border-neutral-200 hover:shadow-md hover:-translate-y-1",
        align === "right" ? "items-end text-right" : "items-start text-left",
      )}
    >
      <Text variant="h4" className="uppercase mb-2 font-normal">
        {parts.map((part, index) => (
          <span
            key={index}
            className={title.includes(`*${part}*`) ? "font-semibold" : ""}
          >
            {part}
          </span>
        ))}
      </Text>
      <Text variant="body-base" className="text-text-secondary mb-8">
        {description}
      </Text>
      <Text
        variant="headline-small"
        className="mt-2 text-neutral-gray-400 uppercase"
      >
        {date}
      </Text>
    </div>
  );
}

function TimelineBadge({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col md:flex-row items-center justify-center gap-4 p-3 bg-neutral-gray-300 rounded-lg w-full md:w-fit h-full md:h-fit transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1",
      )}
    >
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <Text
        variant="body-base"
        className="text-neutral-black font-bold text-center"
      >
        {text}
      </Text>
    </div>
  );
}
