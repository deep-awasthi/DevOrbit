import { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicPage from "@/components/TopicPage";
import { pageData as java } from "@/data/java";
import { pageData as kubernetes } from "@/data/kubernetes";
import { pageData as ai } from "@/data/ai";
import { pageData as docker } from "@/data/docker";
import { pageData as dsa } from "@/data/dsa";
import { pageData as go } from "@/data/go";
import { pageData as hld } from "@/data/hld";
import { pageData as lld } from "@/data/lld";
import { pageData as python } from "@/data/python";
import { pageData as springBoot } from "@/data/spring-boot";
import { TopicPageData } from "@/components/TopicPage";

const dataMap: Record<string, TopicPageData> = {
  java,
  kubernetes,
  ai,
  docker,
  dsa,
  go,
  hld,
  lld,
  python,
  "spring-boot": springBoot,
};

interface PageProps {
  params: Promise<{
    topic: string;
  }>;
}

export const unstable_instant = { prefetch: "static", unstable_disableValidation: true };

export async function generateStaticParams() {
  return Object.keys(dataMap).map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const currentData = dataMap[topic];
  if (!currentData) {
    return {};
  }
  return {
    title: currentData.title + " Roadmap",
    description: currentData.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { topic } = await params;
  const currentData = dataMap[topic];
  if (!currentData) {
    notFound();
  }
  return <TopicPage data={currentData} />;
}
