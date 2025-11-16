import RightSidebar from '@/components/docs/RightSideBar';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Introduction', slug: 'introduction', level: 1 },
  { title: 'Our Mission', slug: 'our-mission', level: 2 },
  { title: 'Core Principles', slug: 'core-principles', level: 2 },
  { title: 'Free & Open Source', slug: 'free-and-open-source', level: 3 },
  { title: 'Developer-First', slug: 'developer-first', level: 3 },
  { title: 'Feature-Rich by Default', slug: 'feature-rich', level: 3 },
  { title: 'Performance & Scalability', slug: 'performance-and-scalability', level: 2 },
];

export default function IntroductionPage() {
  return (
    <div className="relative flex">
      <article className="grow pr-30">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center space-x-2 text-sm text-slate-500"
        >
          <Link
            href="/docs"
            className="block transition hover:text-slate-700"
          >
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Introduction</span>
        </nav>
        <h1 id="introduction" className="scroll-mt-20 text-4xl font-bold">
          Introduction
        </h1>

        <p className="mt-4  text-slate-600">
          Welcome to the official documentation for Jhonz! This comprehensive
          SaaS template is meticulously engineered to significantly accelerate
          your application development lifecycle. Jhonz offers a robust and
          scalable foundation, built upon a modern technology stack, which
          empowers you to bypass foundational setup and concentrate your efforts
          on innovation and launching your product to market faster than ever.
        </p>
        <p className="mt-4  text-slate-600">
          Jhonz transcends the limitations of a typical theme or UI kit. It is a
          complete, full-stack starter kit that provides an end-to-end
          solution, featuring an elegant, production-ready user interface and a
          fully functional administrative dashboard. By leveraging Jhonz, you
          can effortlessly sidestep the complex and time-consuming initial setup
          phase, allowing you to dive directly into building the core,
          value-driven features that are critical for your business and its customers.
        </p>

        <h2 id="our-mission" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Our Mission
        </h2>
        <p className="mt-4 text-slate-600">
          Our mission is straightforward yet ambitious: to empower developers
          and businesses by providing a flexible, high-performance, and
          visually captivating foundation for their SaaS projects. We are
          committed to this being entirely free and open source, as we firmly
          believe in the democratization of high-quality software development for
          everyone.
        </p>

        <h2
          id="core-principles"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Core Principles
        </h2>
        <p className="mt-4 text-slate-600">
          To successfully achieve our mission, the Jhonz project adheres to a
          set of core principles that guide every single aspect of its design,
          development, and maintenance. These principles ensure we stay true to
          our goals.
        </p>

        <h3
          id="free-and-open-source"
          className="mt-8 scroll-mt-20 text-2xl font-semibold"
        >
          Free & Open Source
        </h3>
        <p className="mt-3 text-slate-600">
          You own your code, period. Jhonz is distributed under the permissive
          MIT license, which makes it completely free for both personal and
          commercial projects. This grants you the absolute freedom to use,
          copy, modify, merge, publish, distribute, and sublicense the software
          as you see fit, without any restrictive limitations.
        </p>

        <h3
          id="developer-first"
          className="mt-8 scroll-mt-20 text-2xl font-semibold"
        >
          Developer-First
        </h3>
        <p className="mt-3 text-slate-600">
          Crafted by developers, for developers. We place the highest priority
          on the developer experience because we believe that happy developers
          are productive developers. The Jhonz codebase is intentionally kept
          clean, well-organized, and written following the best modern
          practices and conventions. We have taken care of the tedious setup so
          you can focus on what truly matters.
        </p>
        <p className="mt-3 text-slate-600">
          We ensure that working with Jhonz is a delightful experience. With a{' '}
          <span className="font-semibold text-sky-600">
            clear component-based architecture and comprehensive documentation
          </span>
          , you will find it easy to extend or customize this template to suit
          your project&apos;s unique requirements.
        </p>

        <h3 id="feature-rich" className="mt-8 scroll-mt-20 text-2xl font-semibold">
          Feature-Rich by Default
        </h3>
        <p className="mt-3 text-slate-600">
          Jhonz is not an empty boilerplate. This template comes with a
          comprehensive suite of essential features out of the box, enabling you
          to be productive from day one. We have included everything you need
          to kickstart your SaaS project.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>
            <span className="font-semibold">Authentication & User Management:</span>{' '}
            Secure login, registration, password reset, and social login
            systems.
          </li>
          <li>
            <span className="font-semibold">Pricing & Subscription Page:</span>{' '}
            Ready-to-use integration with Stripe to manage subscription plans.
          </li>
          <li>
            <span className="font-semibold">Administrative Dashboard:</span> A
            panel to manage users, content, and your application settings.
          </li>
          <li>
            <span className="font-semibold">Ready-to-Use Blog:</span> Built with
            MDX to easily create rich and engaging content.
          </li>
          <li>
            <span className="font-semibold">Light & Dark Mode:</span> A theme
            that can be switched automatically or manually for user comfort.
          </li>
        </ul>
        <p className="mt-4 text-slate-600">
          With all these features, you can{' '}
          <span className="font-semibold text-sky-600">
            save hundreds of development hours
          </span>{' '}
          and focus directly on innovating your core business features.
        </p>

        <h2
          id="performance-and-scalability"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Performance & Scalability
        </h2>
        <p className="mt-4 text-slate-600">
          Built with Next.js and a cutting-edge technology stack, Jhonz is
          highly optimized for lightning-fast performance and an outstanding
          user experience. We understand that speed is a feature, and we have
          engineered Jhonz to be at the forefront.
        </p>
        <p className="mt-3 text-slate-600">
          By leveraging advanced features like Server-Side Rendering (SSR),
          Static Site Generation (SSG), and{' '}
          <span className="font-semibold text-sky-600">
            React Server Components
          </span>
          , your application will be incredibly fast, SEO-friendly, and ready to
          scale seamlessly as your business grows. Some of our performance
          pillars include:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>
            <span className="font-semibold">Fast Loading:</span> Automatic image
            optimization and code-splitting for minimal page load times.
          </li>
          <li>
            <span className="font-semibold">High Scalability:</span> An
            architecture designed to run on modern serverless platforms like
            Vercel or AWS, ensuring high availability.
          </li>
          <li>
            <span className="font-semibold">SEO-Friendly:</span> Server-side
            prerendering ensures that search engines can efficiently index your
            content.
          </li>
        </ul>
        <p className="mt-4 text-slate-600">
          Whether you are serving a hundred or a million users, Jhonz provides
          a solid and reliable foundation.
        </p>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}