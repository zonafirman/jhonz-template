import RightSidebar from '@/components/docs/RightSideBar';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Installation', slug: 'installation', level: 1 },
  { title: 'Prerequisites', slug: 'prerequisites', level: 2 },
  { title: '1. Install Project Dependencies', slug: 'install-dependencies', level: 2 },
  { title: '2. Run Development Server', slug: 'run-dev-server', level: 2 },
];

export default function InstallationPage() {
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
          <span className="font-semibold text-slate-700">Installation</span>
        </nav>

        <h1 id="installation" className="scroll-mt-20 text-4xl font-bold">
          Installation
        </h1>

        <p className="mt-4 text-slate-600">
          Welcome to the official documentation for the Jhonz template! This
          comprehensive guide is designed to provide you with a detailed,
          step-by-step walkthrough for getting the template successfully
          installed and running on your local development machine. We will cover
          all the essential prerequisites and procedures to ensure you can start
          building your project without any issues.
        </p>

        <h2 id="prerequisites" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Prerequisites
        </h2>
        <p className="mt-4 text-slate-600">
          Before you begin the installation process, it is crucial to ensure
          that your development environment meets the necessary requirements.
          The primary prerequisite for this template is having Node.js
          installed on your system. Node.js is an essential JavaScript runtime
          that powers both the package management (via npm or Yarn) and the
          local development server, making it a mandatory component for this
          project.
        </p>
        <p className="mt-3 text-slate-600">
          For optimal performance and stability, we highly recommend using the
          latest Long-Term Support (LTS) version of Node.js. The LTS version
          receives critical bug fixes and security updates for an extended
          period, making it the most stable choice for production and
          development. If you don&apos;t have it installed yet, you can download
          it directly from the{' '}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-600 hover:underline"
          >
            official Node.js website
          </a>
          .
        </p>

        <h3
          id="install-dependencies"
          className="mt-8 scroll-mt-20 text-2xl font-semibold"
        >
          1. Install Project Dependencies
        </h3>
        <p className="mt-3 text-slate-600">
          First, download the template files and extract the contents to your
          desired location on your computer. Once the files are extracted, open
          your preferred terminal (like Command Prompt, PowerShell, or a Linux
          terminal), navigate into the newly created project directory, and run
          one of the following commands. This will download and install all the
          necessary project dependencies defined in the `package.json` file.
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-slate-300 bg-white/30 p-4 text-sm text-slate-900 backdrop-blur-sm">
          <code className="block"># Using npm</code>
          <code className="block">npm install --legacy-peer-deps</code>
          <code className="block mt-2"># Or using yarn</code>
          <code className="block">yarn install</code>
        </pre>
        <p className="mt-3 text-slate-600">
          You might encounter peer dependency conflicts during the installation
          process, as some packages may require different versions of the same
          dependency. If you are using npm, adding the{' '}
          <code className="text-sm">--legacy-peer-deps</code> flag is a
          reliable workaround that tells npm to ignore these conflicts and
          proceed with the installation. Yarn typically handles these
          situations more gracefully by default and may not require an
          additional flag.
        </p>

        <h3
          id="run-dev-server"
          className="mt-8 scroll-mt-20 text-2xl font-semibold"
        >
          2. Run the Development Server
        </h3>
        <p className="mt-3 text-slate-600">
          Once all the dependencies have been successfully installed, you can
          start the local development server. This will launch the application
          in development mode, which includes features like hot-reloading.
          Hot-reloading automatically refreshes the page in your browser
          whenever you save a file, significantly speeding up the development
          workflow. Execute the appropriate command for your package manager:
        </p>
        <pre className="mt-2 overflow-x-auto rounded-lg border border-slate-300 bg-white/30 p-4 text-sm text-slate-900 backdrop-blur-sm">
          <code className="block"># Using npm</code>
          <code className="block">npm run dev</code>
          <code className="block mt-2"># Or using yarn</code>
          <code className="block">yarn dev</code>
        </pre>
        <p className="mt-3 text-slate-600">
          After running the command, the development server will become active
          and listen for requests. To view your application, open{' '}
          <a
            href="http://localhost:3000"
            className="font-semibold text-sky-600"
          >
            http://localhost:3000
          </a>{' '}
          in your web browser. You should now see the Jhonz template running.
          Congratulations, you are all set up and ready to start developing!
        </p>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}
