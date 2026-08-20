

window.MUMWA_CONFIG = {

 
  business: {
    name: "MUMWA PHARMACY",
    tagline: "Your Trusted Pharmacy & Healthcare Partner in Iringa",
    description:
      "Quality medicines, medical supplies, cosmetics and healthcare equipment — serving the community with professionalism, care and trust.",
    logo: "assets/logo.png",
    logoMark: "assets/logo-mark.png",
    email: "amirirurimbiye@gmail.com",
    phones: [
      { display: "0672 122 531", href: "tel:+255672122531" },
     
    ],
    // First phone number is used for the WhatsApp quick-contact button.
    whatsapp: "https://wa.me/255672122531",
    address: {
      line1: "Iringa Town, Mshindo Ward",
      line2: "P.O. Box 524, Iringa, Tanzania"
    },
    // Set a real Google Maps embed / share URL when available.
    // Leave as-is and the map section will show an editable-placeholder state.
    mapEmbedUrl: "",
    mapDirectionsUrl: "",
    year: new Date().getFullYear()
  },

  // ---------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" }
  ],

  // ---------------------------------------------------------------
  // TRUST / QUICK HIGHLIGHTS
  // ---------------------------------------------------------------
  highlights: [
    {
      icon: "capsule",
      title: "Quality Healthcare Products",
      text: "Access a broad range of pharmaceutical and healthcare products."
    },
    {
      icon: "handshake",
      title: "Professional Service",
      text: "Friendly and professional assistance for our customers."
    },
    {
      icon: "pin",
      title: "Convenient Location",
      text: "Serving customers in Iringa Town."
    },
    {
      icon: "cross",
      title: "Healthcare Essentials",
      text: "Medicines, medical supplies, cosmetics and hospital equipment."
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT CATEGORIES
  // ---------------------------------------------------------------
  categories: [
    {
      icon: "capsule",
      name: "Human Medicines",
      image: "https://images.unsplash.com/photo-1696861286643-341a8d7a79e9?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Pharmacy shelf lined with organized medicine boxes and bottles",
      items: [
        "Prescription medicines",
        "Over-the-counter medicines",
        "Pain relief medicines",
        "Cold and flu medicines",
        "Gastrointestinal medicines",
        "Antihypertensive medicines",
        "Antidiabetic medicines",
        "Antibiotics",
        "Vitamins and supplements",
        "Dermatological medicines",
        "Pediatric medicines",
        "Women's health products"
      ]
    },
    {
      icon: "monitor",
      name: "Medical Supplies & Devices",
      image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Digital blood pressure monitor, a common medical device",
      items: [
        "Blood pressure monitors",
        "Thermometers",
        "Glucose meters",
        "Syringes",
        "Bandages",
        "Gauze",
        "Gloves",
        "First-aid supplies",
        "Diagnostic accessories",
        "Mobility / assistive products"
      ]
    },
    {
      icon: "sparkle",
      name: "Cosmetics & Personal Care",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Skincare and personal care product bottles",
      items: [
        "Skincare",
        "Haircare",
        "Body care",
        "Baby care",
        "Personal hygiene products",
        "Beauty and wellness products"
      ]
    },
    {
      icon: "hospital",
      name: "Hospital Equipment",
      image: "https://images.unsplash.com/photo-1611587266737-cc128ffe2946?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Hospital bed in a clean patient room",
      items: [
        "Clinical equipment",
        "Patient-care equipment",
        "Examination equipment",
        "Medical furniture",
        "Healthcare accessories"
      ]
    }
  ],

  // ---------------------------------------------------------------
  // PRODUCT SHOWCASE (example items — not a live inventory)
  // ---------------------------------------------------------------
  showcase: [
    { icon: "capsule", name: "Medicine Bottle", category: "Human Medicines", desc: "Examples of packaged medicines available through our pharmacy.", image: "https://images.unsplash.com/photo-1588802060188-ee08afc87823?q=80&w=800&auto=format&fit=crop", imageAlt: "Prescription medicine bottle" },
    { icon: "pill", name: "Tablets & Capsules", category: "Human Medicines", desc: "A wide range of tablet and capsule medicines for everyday needs.", image: "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?q=80&w=800&auto=format&fit=crop", imageAlt: "Blister packs of colorful medicine tablets" },
    { icon: "monitor", name: "Blood Pressure Monitor", category: "Medical Devices", desc: "Devices to help monitor everyday health at home or in clinic.", image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop", imageAlt: "Digital blood pressure monitor" },
    { icon: "thermometer", name: "Thermometer", category: "Medical Devices", desc: "Reliable thermometers for accurate temperature readings.", image: "https://images.unsplash.com/photo-1700832082200-af7deeb63d9b?q=80&w=800&auto=format&fit=crop", imageAlt: "Stethoscope and thermometer, medical devices" },
    { icon: "droplet", name: "Glucose Meter", category: "Medical Devices", desc: "Blood glucose monitoring supplies for everyday health management.", image: "https://images.unsplash.com/photo-1684157007022-846d2fe6d5ef?q=80&w=800&auto=format&fit=crop", imageAlt: "Glucose meter device" },
    { icon: "glove", name: "Medical Gloves", category: "Medical Supplies", desc: "Protective gloves and everyday medical consumables.", image: "https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?q=80&w=800&auto=format&fit=crop", imageAlt: "Surgical medical gloves" },
    { icon: "sparkle", name: "Skincare Product", category: "Cosmetics", desc: "Personal care and skincare products for daily wellness.", image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800&auto=format&fit=crop", imageAlt: "Skincare product bottle" },
    { icon: "hospital", name: "Hospital Equipment", category: "Hospital Equipment", desc: "Equipment and accessories for healthcare environments.", image: "https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=800&auto=format&fit=crop", imageAlt: "Medical stethoscope on light blue background" }
  ],

  // ---------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------
  services: [
    {
      icon: "capsule",
      title: "Pharmacy Services",
      text: "Professional assistance in accessing medicines and healthcare products."
    },
    {
      icon: "monitor",
      title: "Medical Supplies",
      text: "Provision of healthcare consumables and medical supplies."
    },
    {
      icon: "hospital",
      title: "Hospital Equipment",
      text: "Healthcare and hospital equipment solutions."
    },
    {
      icon: "sparkle",
      title: "Cosmetics & Personal Care",
      text: "Personal-care, skincare and wellness products."
    },
    {
      icon: "chat",
      title: "Product Enquiries",
      text: "Contact the pharmacy to ask about product availability."
    }
  ],

  
  whyChooseUs: [
    {
      icon: "grid",
      title: "Wide Product Range",
      text: "Medicines, medical supplies, cosmetics and healthcare equipment in one place."
    },
    {
      icon: "handshake",
      title: "Customer-Centered Service",
      text: "We aim to make every customer interaction professional, respectful and helpful."
    },
    {
      icon: "cross",
      title: "Healthcare Focused",
      text: "Our business is dedicated to supporting everyday healthcare needs."
    },
    {
      icon: "pin",
      title: "Convenient Access",
      text: "Located in Iringa Town for convenient access to healthcare products."
    },
    {
      icon: "shield",
      title: "Professional Environment",
      text: "A clean, organized and trustworthy pharmacy environment."
    }
  ],

  
  team: [
    {
      name: "AMIRI MUSSA RULIMBIYE",
      role: "Chief Executive Officer (CEO)",
      image: "assets/amiri-rulimbiye.jpg",
      imageAlt: "CEO",
      bio: "Leads MUMWA PHARMACY with a focus on strong business management and dependable healthcare access for the Iringa community. Committed to professional customer service and to growing the pharmacy's role as a trusted local healthcare partner."
    },
    {
      name: "MARKDONALD WILLIAM NDAMBWE",
      role: "Pharmacy Assistant",
      image: "assets/markdonald-ndambwe.jpg",
      imageAlt: "Assistant",
      bio: "Supports day-to-day pharmacy operations, helping customers find and understand the healthcare products available and keeping the shop floor organized, professional and welcoming."
    }
  ],

  
  branches: [
    {
      name: "MUMWA PHARMACY — Iringa Town",
      address: "Mshindo Ward, Iringa Town, P.O. Box 524, Iringa, Tanzania",
      phone: { display: "0672 122 531", href: "tel:+255672122531" },
      mapDirectionsUrl: ""
    },
    {
      name: "MUMWA PHARMACY — Iringa",
      address: "MAKORONGONI,STENDI YA ZAMANI STREET",
      phone: { display: "0764 122 531", href: "tel:+255764122531" },
      mapDirectionsUrl: ""
    }
  ],

  
  social: {
    facebook: "",
    instagram: "",
    twitter: ""
  }
};