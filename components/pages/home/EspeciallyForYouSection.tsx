import PromoCard from "@/components/shareCompo/PromoCard"


function EspeciallyForYouSection() {
  return (
    <section className="space-y-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center">
        Especially For You
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PromoCard
          bg="bg-green-200"
          icon="📞"
          title="Order"
          highlight="Via WhatsApp"
          subtitle="01810117100"
          buttonText="Call Now"
          buttonColor="text-green-600"
        />

        <PromoCard
          bg="bg-teal-200"
          icon="📋"
          title="UPTO"
          highlight="10% OFF"
          subtitle="+ Cashback"
          buttonText="Upload Prescription"
          buttonColor="text-teal-600"
        />

        <PromoCard
          bg="bg-lime-200"
          icon="🏪"
          title="UPTO"
          highlight="14% OFF"
          subtitle="+ Cashback"
          buttonText="Register Pharmacy"
          buttonColor="text-lime-700"
        />

        <PromoCard
          bg="bg-purple-200"
          icon="💊"
          title="UPTO"
          highlight="60% OFF"
          subtitle="+ Cashback"
          buttonText="HealthCare"
          buttonColor="text-purple-600"
          showArrow
        />
      </div>
    </section>
  )
}

export default EspeciallyForYouSection
