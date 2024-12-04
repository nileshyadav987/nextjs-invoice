import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a aria-label="Home" href="#">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 109 40"
                  className="h-10 w-auto"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
                    fill="#2563EB"
                  />
                  <path
                    d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
                    fill="#2563EB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
                    fill="#2563EB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
                    fill="#0F172A"
                  />
                </svg>
              </a>
              <div className="hidden md:flex md:gap-x-6">
                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  href="#testimonials"
                >
                  Testimonials
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  href="#pricing"
                >
                  Pricing
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <Link
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  href="/login"
                >
                  Sign in
                </Link>
              </div>
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                href="/register"
              >
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              </a>
              <div className="-mr-1 md:hidden">
                <div data-headlessui-state="">
                  <button
                    className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                    aria-label="Toggle Navigation"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:Rbplla:"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                    >
                      <path
                        d="M0 1H14M0 7H14M0 13H14"
                        className="origin-center transition"
                      />
                      <path
                        d="M2 2L12 12M12 2L2 12"
                        className="origin-center transition scale-90 opacity-0"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: 0,
                    display: "none",
                  }}
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Your Business. Your Clients.{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">One Free,</span>
            </span>{" "}
            Powerful Invoicing Platform.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-600">
            Most bookkeeping software is accurate, but hard to use. We make the
            opposite trade-off, and hope you don’t get audited.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
              href="/register"
            >
              Get 6 months free
            </a>
            <a
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-600 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Watch video</span>
            </a>
          </div>
          <div className="mt-36 lg:mt-44">
            <p className="font-display text-base text-slate-900">
              Trusted by these six companies so far
            </p>
            <ul
              role="list"
              className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
              <li>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  <li className="flex">
                    
                  </li>
                  <li className="flex">
                    
                  </li>
                  <li className="flex">
                    
                  </li>
                </ul>
              </li>
              <li>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  <li className="flex">
                    
                  </li>
                  <li className="flex">
                    
                  </li>
                  <li className="flex">
                    
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <section
          id="features"
          aria-label="Features for running your books"
          className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
        >
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                Everything you need to run your books.
              </h2>
              <p className="mt-6 text-lg tracking-tight text-blue-100">
                Well everything you need if you aren’t that picky about minor
                details like tax compliance.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <div
                  className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10">
                    <h3>
                      <button
                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-600 lg:text-white"
                        id="headlessui-tabs-tab-:r2:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabIndex={0}
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:r6:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        Payroll
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-white">
                      Keep track of everyone&apos;s salaries and whether or not
                      they&apos;ve been paid. Direct deposit not supported.
                    </p>
                  </div>
                  <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                    <h3>
                      <button
                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:text-white lg:text-white"
                        id="headlessui-tabs-tab-:r3:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={-1}
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:r7:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        Claim expenses
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                      All of your receipts organized into one place, as long as
                      you don&apos;t mind typing in the data by hand.
                    </p>
                  </div>
                  <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                    <h3>
                      <button
                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:text-white lg:text-white"
                        id="headlessui-tabs-tab-:r4:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={-1}
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:r8:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        VAT handling
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                      We only sell our software to companies who don&apos;t deal with
                      VAT at all, so technically we do all the VAT stuff they
                      need.
                    </p>
                  </div>
                  <div className="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                    <h3>
                      <button
                        className="font-display text-lg ui-not-focus-visible:outline-none text-blue-100 hover:text-white lg:text-white"
                        id="headlessui-tabs-tab-:r5:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={-1}
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:r9:"
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        Reporting
                      </button>
                    </h3>
                    <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                      Easily export your data into an Excel spreadsheet where
                      you can do whatever the hell you want with it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div
                  id="headlessui-tabs-panel-:r6:"
                  role="tabpanel"
                  tabIndex={0}
                  data-headlessui-state="selected"
                  aria-labelledby="headlessui-tabs-tab-:r2:"
                >
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      Keep track of everyone&apos;s salaries and whether or not
                      they&apos;ve been paid. Direct deposit not supported.
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    
                  </div>
                </div>
                <div
                  id="headlessui-tabs-panel-:r7:"
                  role="tabpanel"
                  tabIndex={-1}
                  data-headlessui-state=""
                  aria-labelledby="headlessui-tabs-tab-:r3:"
                  style={{ display: "none" }}
                >
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      All of your receipts organized into one place, as long as
                      you don&apos;t mind typing in the data by hand.
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    
                  </div>
                </div>
                <div
                  id="headlessui-tabs-panel-:r8:"
                  role="tabpanel"
                  tabIndex={-1}
                  data-headlessui-state=""
                  aria-labelledby="headlessui-tabs-tab-:r4:"
                  style={{ display: "none" }}
                >
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      We only sell our software to companies who don&apos;t deal with
                      VAT at all, so technically we do all the VAT stuff they
                      need.
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    
                  </div>
                </div>
                <div
                  id="headlessui-tabs-panel-:r9:"
                  role="tabpanel"
                  tabIndex={-1}
                  data-headlessui-state=""
                  aria-labelledby="headlessui-tabs-tab-:r5:"
                  style={{ display: "none" }}
                >
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      Easily export your data into an Excel spreadsheet where
                      you can do whatever the hell you want with it.
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="secondary-features"
          aria-label="Features for simplifying everyday business tasks"
          className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Simplify everyday business tasks.
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-600">
                Because you’d probably be a little confused if we suggested you
                complicate your everyday business tasks instead.
              </p>
            </div>
            <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="w-9 rounded-lg bg-blue-600">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <defs>
                        <linearGradient
                          id=":ra:"
                          x1="11.5"
                          y1={18}
                          x2={36}
                          y2="15.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".194" stopColor="#fff" />
                          <stop offset={1} stopColor="#6692F1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                        stroke="url(#:ra:)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">
                    Reporting
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Stay on top of things with always up-to-date reporting
                    features.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    We talked about reporting in the section above but we needed
                    three items here, so mentioning it one more time for
                    posterity.
                  </p>
                </div>
                <div className="relative mt-10 pb-10">
                  <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                  <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="w-9 rounded-lg bg-blue-600">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <path
                        opacity=".5"
                        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                      <path
                        opacity=".3"
                        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                      <path
                        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">
                    Inventory
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Never lose track of what’s in stock with accurate inventory
                    tracking.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    We don’t offer this as part of our software but that
                    statement is inarguably true. Accurate inventory tracking
                    would help you for sure.
                  </p>
                </div>
                <div className="relative mt-10 pb-10">
                  <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                  <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="w-9 rounded-lg bg-blue-600">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <path
                        opacity=".5"
                        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                        fill="#fff"
                      />
                      <path
                        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">
                    Contacts
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Organize all of your contacts, service providers, and
                    invoices in one place.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    This also isn’t actually a feature, it’s just some friendly
                    advice. We definitely recommend that you do this, you’ll
                    feel really organized and professional.
                  </p>
                </div>
                <div className="relative mt-10 pb-10">
                  <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                  <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:mt-20 lg:block">
              <div
                className="grid grid-cols-3 gap-x-8"
                role="tablist"
                aria-orientation="horizontal"
              >
                <div className="relative">
                  <div className="w-9 rounded-lg bg-blue-600">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <defs>
                        <linearGradient
                          id=":rb:"
                          x1="11.5"
                          y1={18}
                          x2={36}
                          y2="15.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".194" stopColor="#fff" />
                          <stop offset={1} stopColor="#6692F1" />
                        </linearGradient>
                      </defs>
                      <path
                        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                        stroke="url(#:rb:)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">
                    <button
                      className="ui-not-focus-visible:outline-none"
                      id="headlessui-tabs-tab-:rc:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-controls="headlessui-tabs-panel-:rf:"
                    >
                      <span className="absolute inset-0" />
                      Reporting
                    </button>
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Stay on top of things with always up-to-date reporting
                    features.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    We talked about reporting in the section above but we needed
                    three items here, so mentioning it one more time for
                    posterity.
                  </p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="w-9 rounded-lg bg-slate-500">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <path
                        opacity=".5"
                        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                      <path
                        opacity=".3"
                        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                      <path
                        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-slate-600">
                    <button
                      className="ui-not-focus-visible:outline-none"
                      id="headlessui-tabs-tab-:rd:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-controls="headlessui-tabs-panel-:rg:"
                    >
                      <span className="absolute inset-0" />
                      Inventory
                    </button>
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Never lose track of what’s in stock with accurate inventory
                    tracking.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    We don’t offer this as part of our software but that
                    statement is inarguably true. Accurate inventory tracking
                    would help you for sure.
                  </p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="w-9 rounded-lg bg-slate-500">
                    <svg aria-hidden="true" className="h-9 w-9" fill="none">
                      <path
                        opacity=".5"
                        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                        fill="#fff"
                      />
                      <path
                        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-slate-600">
                    <button
                      className="ui-not-focus-visible:outline-none"
                      id="headlessui-tabs-tab-:re:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex={-1}
                      data-headlessui-state=""
                      aria-controls="headlessui-tabs-panel-:rh:"
                    >
                      <span className="absolute inset-0" />
                      Contacts
                    </button>
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    Organize all of your contacts, service providers, and
                    invoices in one place.
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    This also isn’t actually a feature, it’s just some friendly
                    advice. We definitely recommend that you do this, you’ll
                    feel really organized and professional.
                  </p>
                </div>
              </div>
              <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
                <div className="-mx-5 flex">
                  <div
                    className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none"
                    aria-hidden="false"
                    id="headlessui-tabs-panel-:rf:"
                    role="tabpanel"
                    tabIndex={0}
                    data-headlessui-state="selected"
                    aria-labelledby="headlessui-tabs-tab-:rc:"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                      
                    </div>
                  </div>
                  <div
                    className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none opacity-60"
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:rg:"
                    role="tabpanel"
                    tabIndex={-1}
                    data-headlessui-state=""
                    aria-labelledby="headlessui-tabs-tab-:rd:"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                      
                    </div>
                  </div>
                  <div
                    className="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none opacity-60"
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:rh:"
                    role="tabpanel"
                    tabIndex={-1}
                    data-headlessui-state=""
                    aria-labelledby="headlessui-tabs-tab-:re:"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                      
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-started-today"
          className="relative overflow-hidden bg-blue-600 py-32"
        >
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Get started today
              </h2>
              <p className="mt-4 text-lg tracking-tight text-white">
                It’s time to take control of your books. Buy our software so you
                can feel like you’re doing something productive.
              </p>
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                href="/register"
              >
                Get 6 months free
              </a>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          aria-label="What our customers are saying"
          className="bg-slate-50 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Loved by businesses worldwide.
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-600">
                Our software is so simple that people can’t help but fall in
                love with it. Simplicity is easy when you just skip tons of
                mission-critical features.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          TaxPal is so easy to use I can’t help but wonder if
                          it’s really doing the things the government expects me
                          to do.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Sheryl Berge
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            CEO at Lynch LLC
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I’m trying to get a hold of someone in support, I’m in
                          a lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Amy Hahn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Director at Velocity Industries
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          The best part about TaxPal is every time I pay my
                          employees, my bank balance doesn’t go down like it
                          used to. Looking forward to spending this extra cash
                          when I figure out why my card is being declined.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Leland Kiehn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Founder of Kiehn and Sons
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">

                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          There are so many things I had to do with my old
                          software that I just don’t do at all with TaxPal.
                          Suspicious but I can’t say I don’t love it.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Erin Powlowski
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            COO at Armstrong Inc
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I used to have to remit tax to the EU and with TaxPal
                          I somehow don’t have to do that anymore. Nervous to
                          travel there now though.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Peter Renolds
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Founder of West Inc
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">

                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          This is the fourth email I’ve sent to your support
                          team. I am literally being held in jail for tax fraud.
                          Please answer your damn emails, this is important.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Amy Hahn
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            Director at Velocity Industries
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="pricing"
          aria-label="Pricing"
          className="bg-slate-900 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 281 40"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                    />
                  </svg>
                  <span className="relative">Simple pricing,</span>
                </span>{" "}
                for everyone.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                It doesn’t matter what size your business is, our software won’t
                work well for you.
              </p>
            </div>
            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-5 font-display text-lg text-white">
                  Starter
                </h3>
                <p className="mt-2 text-base text-slate-400">
                  Good for anyone who is self-employed and just getting started.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $9
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Send 10 quotes and invoices</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 2 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Track up to 15 expenses per month
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Manual payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Export up to 3 reports</span>
                  </li>
                </ul>
                <a
                  className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                  aria-label="Get started with the Starter plan for $9"
                  href="/register"
                >
                  Get started
                </a>
              </section>
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none">
                <h3 className="mt-5 font-display text-lg text-white">
                  Small business
                </h3>
                <p className="mt-2 text-base text-white">
                  Perfect for small / medium sized businesses.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $15
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Send 25 quotes and invoices</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 5 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Track up to 50 expenses per month
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Automated payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Export up to 12 reports</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Bulk reconcile transactions</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Track in multiple currencies</span>
                  </li>
                </ul>
                <a
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
                  aria-label="Get started with the Small business plan for $15"
                  href="/register"
                >
                  Get started
                </a>
              </section>
              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-5 font-display text-lg text-white">
                  Enterprise
                </h3>
                <p className="mt-2 text-base text-slate-400">
                  For even the biggest enterprise companies.
                </p>
                <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                  $39
                </p>
                <ul
                  role="list"
                  className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
                >
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Send unlimited quotes and invoices
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Connect up to 15 bank accounts</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Track up to 200 expenses per month
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">Automated payroll support</span>
                  </li>
                  <li className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth={0}
                      />
                      <circle
                        cx={12}
                        cy={12}
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4">
                      Export up to 25 reports, including TPS
                    </span>
                  </li>
                </ul>
                <a
                  className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                  aria-label="Get started with the Enterprise plan for $39"
                  href="/register"
                >
                  Get started
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="faq-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-600">
                If you can’t find what you’re looking for, email our support
                team and if you’re lucky someone will get back to you.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Does TaxPal handle VAT?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      Well no, but if you move your company offshore you can
                      probably ignore it.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can I pay for my subscription via purchase order?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      Absolutely, we are happy to take your money in all forms.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do I apply for a job at TaxPal?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      We only hire our customers, so subscribe for a minimum of
                      6 months and then let’s talk.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      What was that testimonial about tax fraud all about?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      TaxPal is just a software application, ultimately your
                      books are your responsibility.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      TaxPal sounds horrible but why do I still feel compelled
                      to purchase?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      This is the power of excellent visual design. You just
                      can’t resist it, no matter how poorly it actually
                      functions.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I found other companies called TaxPal, are you sure you
                      can use this name?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      Honestly not sure at all. We haven’t actually incorporated
                      or anything, we just thought it sounded cool and made this
                      website.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      How do you generate reports?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      You just tell us what data you need a report for, and we
                      get our kids to create beautiful charts for you using only
                      the finest crayons.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      Can we expect more inventory features?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      In life it’s really better to never expect anything at
                      all.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      I lost my password, how do I get into my account?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      Send us an email and we will send you a copy of our latest
                      password spreadsheet so you can find your information.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
