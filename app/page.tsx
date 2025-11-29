import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <span className="mb-2 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Modern Solutions</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Where Creativity Meets Technology</h1>
              <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">An asymmetric layout that breaks the grid for a dynamic and engaging user experience. Perfect for showcasing a product or app with a strong visual identity.</p>
              <div className="mt-8">
                <Link href="/docs" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700">
                  Explore Features
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative -mx-4 lg:mx-0">
                <img className="w-full rounded-2xl lg:absolute lg:left-1/2 lg:w-auto lg:max-w-none lg:-translate-x-1/4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="Dashboard mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}