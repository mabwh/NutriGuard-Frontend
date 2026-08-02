export default function HeroSection({
  title,
  description,
  image,
}) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center items-center overflow-hidden bg-primary p-10 text-white lg:p-16">
      {/* Background Image */}
      <img
        src={image}
        alt="Healthy food"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10  max-w-5xl ">
        <h2 className="mb-4 text-4xl font-bold">
          {title}
        </h2>

        <p className="text-lg leading-8 text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}