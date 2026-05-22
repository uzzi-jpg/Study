export default function ThreadplugWebsite() { return ( <div className="bg-black text-white overflow-x-hidden font-sans"> {/* HERO */} <section className="relative h-screen w-full overflow-hidden"> <video
autoPlay
muted
loop
playsInline
className="absolute inset-0 h-full w-full object-cover"
src="https://cdn.coverr.co/videos/coverr-man-walking-through-city-1560906185308?download=1080p"
/>

{/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

    <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
      <p className="mb-4 text-sm uppercase tracking-[0.5em] text-zinc-300">
        THREADPLUG STREETWEAR
      </p>

      {/* blend-mode text */}
      <h1
        className="max-w-6xl font-black uppercase leading-none mix-blend-screen"
        style={{
          fontSize: "clamp(4rem, 12vw, 12rem)",
        }}
      >
        ELEVATE
        <br />
        THE FIT
      </h1>

      <p
        className="mt-8 max-w-2xl text-zinc-300"
        style={{
          fontSize: "clamp(1rem, 2vw, 1.4rem)",
        }}
      >
        Premium thriftwear, curated fashion drops, and cinematic street
        style built for the next generation.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:scale-105">
          Shop Collection
        </button>

        <button className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-white/10">
          Order On WhatsApp
        </button>
      </div>
    </div>
  </section>

  {/* SCROLL CONTENT */}
  <section className="relative z-20 bg-black px-6 py-32 md:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
            New Drop
          </p>

          <h2
            className="font-black uppercase leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
            }}
          >
            STREET
            <br />
            ENERGY
          </h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Inspired by Lagos and Ibadan street culture, Threadplug blends
            premium thrift fashion with bold silhouettes, oversized fits,
            and statement aesthetics designed for creators and trendsetters.
          </p>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.${item}`}
                alt="fashion"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase">
                    Urban Drop {item}
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Limited edition oversized streetwear.
                  </p>
                </div>

                <span className="text-xl font-black">₦25K</span>
              </div>

              <button className="mt-6 w-full rounded-full bg-white py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:scale-[1.02]">
                Reserve Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section className="border-t border-white/10 px-6 py-32 md:px-16">
    <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
          About The Brand
        </p>

        <h2
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          BUILT FOR
          <br />
          CULTURE
        </h2>
      </div>

      <div className="space-y-8 text-zinc-400">
        <p className="text-lg leading-relaxed">
          Threadplug is more than fashion. It is expression, movement, and
          confidence inspired by modern African streetwear culture.
        </p>

        <p className="text-lg leading-relaxed">
          Every collection is curated to help customers stand out online,
          on campus, and everywhere culture exists.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-black">
            Instagram
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-white/10 px-6 py-10 md:px-16">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
      <h3 className="text-2xl font-black uppercase">Threadplug</h3>

      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Ibadan • Streetwear • Fashion Culture
      </p>
    </div>
  </footer>
</div>

); }
