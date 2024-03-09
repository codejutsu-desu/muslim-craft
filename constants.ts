import {
  ImageIcon,
  MessageSquare,
  HelpCircle,
  VideoIcon,
  BellRing,
  History,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Casual Deeni Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Learn Islamic History",
    icon: History,
    href: "/history",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Ask Fiqh Questions",
    icon: HelpCircle,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/questions-fiqh",
  },
  {
    label: "Get Naseehah",
    icon: BellRing,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/naseehah",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/video",
  },
];
