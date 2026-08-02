export default function AuthLayout({
  children,
  hero,
  reverse = false,
}) {
  return (
    <main className="min-h-screen bg-background ">
      <div
        className={`mx-auto min-h-screen flex max-w-360  bg-surface  ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {/* Form Side */}
        <section className="flex w-full items-center justify-center px-6 py-12 md:w-1/2 lg:px-10">
          <div className="w-full max-w-3xl">
            {children}
          </div>
        </section>

        {/* Hero Side */}
        <section className="hidden md:flex md:w-1/2 overflow-hidden">
          {hero}
        </section>
      </div>
    </main>
  );
}