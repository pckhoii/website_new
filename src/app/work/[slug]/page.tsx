import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { LocalizedText } from "@/components/localized-text";
import { GraphicArtifact } from "@/components/graphic-artifacts";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Investigation — Universe of Signals" };
  return {
    title: project.title.en,
    description: project.description.en,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="top" className="project-page">
      <SiteHeader activeSection="work" />
      <article>
        <header className="project-hero">
          <Link className="project-back focus-ring" href="/work">
            <ArrowLeft size={16} strokeWidth={1.4} aria-hidden="true" />
            <span className="lang-en">Investigations</span><span className="lang-vi" lang="vi">Các nghiên cứu</span>
          </Link>
          <div className="project-hero-copy">
            <p className="mono-label"><span className="project-demo-dot" /> System investigation / {project.index}</p>
            <h1><LocalizedText text={project.title} /></h1>
            <p><LocalizedText text={project.description} /></p>
          </div>
          <div className="project-hero-meta">
            <div><span className="mono-label"><span className="lang-en">Field</span><span className="lang-vi" lang="vi">Lĩnh vực</span></span><strong><LocalizedText text={project.discipline} /></strong></div>
            <div><span className="mono-label"><span className="lang-en">Contribution</span><span className="lang-vi" lang="vi">Đóng góp</span></span><strong><LocalizedText text={project.contribution} /></strong></div>
            <div><span className="mono-label"><span className="lang-en">Period</span><span className="lang-vi" lang="vi">Thời gian</span></span><strong><LocalizedText text={project.year} /></strong></div>
          </div>
          <figure className="project-hero-visual">
            <Image src={project.asset.src} alt={project.asset.alt.en} fill priority sizes="100vw" />
            <figcaption className="mono-label">
              <span className="lang-en">Illustrative system study</span><span className="lang-vi" lang="vi">Nghiên cứu hệ thống minh họa</span>
              <span className="lang-en">A visual model of the underlying question</span><span className="lang-vi" lang="vi">Mô hình trực quan của câu hỏi nền tảng</span>
            </figcaption>
          </figure>
          <a className="project-scroll-cue focus-ring" href="#question">
            <span className="lang-en">Follow the signal</span><span className="lang-vi" lang="vi">Theo dấu tín hiệu</span>
            <ArrowDown size={16} strokeWidth={1.4} aria-hidden="true" />
          </a>
        </header>

        <section className="project-question" id="question">
          <Reveal className="project-question-inner">
            <p className="mono-label"><span className="lang-en">The working question</span><span className="lang-vi" lang="vi">Câu hỏi dẫn đường</span></p>
            <h2><LocalizedText text={project.question} /></h2>
            <GraphicArtifact variant="lineage" tone="amber" className="artifact-project-lineage" caption="Question / structure / decision" />
          </Reveal>
        </section>

        <section className="project-context archive-section">
          <Reveal className="project-section-label">
            <p className="mono-label">01 / Context</p>
            <h2><span className="lang-en">Start with the uncertainty, not the dashboard.</span><span className="lang-vi" lang="vi">Bắt đầu từ điều chưa rõ, không phải dashboard.</span></h2>
          </Reveal>
          <div className="project-context-copy">
            {project.context.map((paragraph, index) => <Reveal delay={index * .06} key={paragraph.en}><p><LocalizedText text={paragraph} /></p></Reveal>)}
          </div>
        </section>

        <section className="project-system archive-section">
          <Reveal className="project-section-label project-section-label-light">
            <p className="mono-label">02 / Approach</p>
            <h2><span className="lang-en">A decision layer built in three moves.</span><span className="lang-vi" lang="vi">Một lớp quyết định được xây qua ba bước.</span></h2>
          </Reveal>
          <div className="project-stage-list">
            {project.stages.map((stage, index) => (
              <Reveal className="project-stage" delay={index * .05} key={stage.index}>
                <span className="mono-label">{stage.index}</span>
                <h3><LocalizedText text={stage.title} /></h3>
                <p><LocalizedText text={stage.body} /></p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="project-outcomes archive-section">
          <Reveal className="project-section-label">
            <p className="mono-label">03 / What this enables</p>
            <h2><span className="lang-en">Clarity that can survive the next question.</span><span className="lang-vi" lang="vi">Sự rõ ràng vẫn đứng vững trước câu hỏi tiếp theo.</span></h2>
          </Reveal>
          <ol>
            {project.outcomes.map((outcome, index) => (
              <Reveal delay={index * .05} key={outcome.en}>
                <li><span className="mono-label">0{index + 1}</span><strong><LocalizedText text={outcome} /></strong></li>
              </Reveal>
            ))}
          </ol>
          <p className="project-disclaimer mono-label">
            <span className="lang-en">Concept study. The systems thinking is real; visuals and outcomes are illustrative and intentionally avoid invented metrics.</span>
            <span className="lang-vi" lang="vi">Nghiên cứu ý tưởng. Tư duy hệ thống là thật; hình ảnh và kết quả mang tính minh họa, không sử dụng số liệu tự tạo.</span>
          </p>
        </section>

        <Link className="project-next focus-ring" href={`/work/${nextProject.slug}`}>
          <span className="mono-label"><span className="lang-en">Next signal</span><span className="lang-vi" lang="vi">Tín hiệu tiếp theo</span> / {nextProject.index}</span>
          <strong><LocalizedText text={nextProject.title} /></strong>
          <ArrowUpRight size={28} strokeWidth={1.2} aria-hidden="true" />
        </Link>
      </article>
    </main>
  );
}
