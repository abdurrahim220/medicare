type PromoCardProps = {
  bg: string
  icon: string
  title: string
  highlight: string
  subtitle: string
  buttonText: string
  buttonColor: string
  showArrow?: boolean
}

function PromoCard({
  bg,
  icon,
  title,
  highlight,
  subtitle,
  buttonText,
  buttonColor,
  showArrow,
}: PromoCardProps) {
  return (
    <div
      className={`relative ${bg} rounded-3xl p-6 flex flex-col justify-between min-h-[280px]`}
    >
      {/* Icon */}
      <div className="absolute -top-6 right-6 bg-white rounded-full p-3 shadow">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="text-lg font-medium">{title}</p>

        <h3 className="text-3xl font-bold">
          {highlight}
        </h3>

        <p className="text-lg font-medium">{subtitle}</p>
      </div>

      {/* Button */}
      <div className="flex items-center justify-between">
        <button
          className={`bg-white px-6 py-3 rounded-xl font-semibold ${buttonColor}`}
        >
          {buttonText}
        </button>

        {showArrow && (
          <div className="bg-white rounded-full p-2 shadow">
            ➜
          </div>
        )}
      </div>
    </div>
  )
}

export default PromoCard
