const Breadcrumb = ({ pageName }: { pageName: string }) => {
  return (
    <section
      className="relative z-10 overflow-hidden lg:py-[60px] bg-cover bg-center"
      style={{ backgroundImage: `url('/header.jpeg')` }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="md:mb-0">
              <h1 className="my-5 text-3xl text-white sm:text-3xl">
                {pageName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;