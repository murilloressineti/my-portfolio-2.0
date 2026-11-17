import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx resolve condicionais; twMerge faz as classes posteriores substituírem utilitários conflitantes.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
