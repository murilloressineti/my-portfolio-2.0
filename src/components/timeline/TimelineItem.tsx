import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn, fadeUp } from "@/lib";
import { Icon, Text } from "../ui";

export const timelineItemVariants = cva(
  "grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-4 md:gap-12 w-full",
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
  extends HTMLMotionProps<"div">, VariantProps<typeof timelineItemVariants> {
  title: string;
  description: string;
  date: string;
  badgeText: string;
  badgeIcon: React.ElementType;
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
  const isLeft = side === "left"; // Determina se o conteúdo deve estar à esquerda ou à direita

  return (
    <motion.div
      {...fadeUp}
      {...props}
      className={cn(
        timelineItemVariants({ side, className }),
        "items-center mb-6 md:mb-13 last:mb-0",
      )}
    >
      {/* COLUNA 1: Esquerda */}
      <div
        className={cn("flex w-full self-stretch", isLeft ? "justify-end" : "justify-start")}
      >
        {isLeft ? (
          <TimelineContent
            title={title}
            description={description}
            date={date}
            align="right" // Alinha o conteúdo à direita para itens do lado esquerdo
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
          className="relative z-10 rounded-full shrink-0 h-2 w-2 bg-neutral-black"
          style={{
            boxShadow: `0 0 0 4px #FFFFFF, 0px 2px 4px rgba(0, 0, 0, 1)`,
          }}
        />
      </div>

      {/* COLUNA 3: Direita */}
      <div
        className={cn("flex w-full self-stretch", isLeft ? "justify-start" : "justify-end")}
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
            align="left" // Alinha o conteúdo à esquerda para itens do lado direito
          />
        )}
      </div>
    </motion.div>
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
        "flex flex-col w-full h-full bg-bg-default rounded-lg p-3 md:p-6 transition-all duration-300 ease-in-out border border-transparent hover:border-neutral-200 hover:shadow-md hover:-translate-y-1",
        align === "right" ? "items-end text-right" : "items-start text-left",
      )}
    >
      <Text variant="h4" className="text-sm uppercase mb-2 font-semibold md:font-normal">
        {parts.map((part, index) => (
          <span
            key={index}
            className={title.includes(`*${part}*`) ? "font-semibold" : ""}
          >
            {part}
          </span>
        ))}
      </Text>
      <Text variant="body-base" className="text-sm md:text-base text-text-secondary mb-6 md:mb-8">
        {description}
      </Text>
      <Text variant="ui-headline" className="mt-2 text-neutral-400 uppercase">
        {date}
      </Text>
    </div>
  );
}

function TimelineBadge({ text, icon }: { text: string; icon: any }) {
  return (
    <div
      className={cn(
        "group flex flex-col md:flex-row items-center justify-center gap-4 p-3 bg-neutral-300 rounded-lg w-full h-full md:w-fit md:h-fit transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1",
      )}
    >
      <Icon
        svg={icon}
        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
      ></Icon>
      <Text
        variant="body-base"
        className="text-sm md:text-base text-neutral-black font-bold text-center"
      >
        {text}
      </Text>
    </div>
  );
}
