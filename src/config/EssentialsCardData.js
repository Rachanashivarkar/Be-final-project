import chill from "../../src/images/card/chill.png"
import ginger from "../../src/images/card/ginger.png"
import potato from "../../src/images/card/potato.png"
import onion from "../../src/images/card/onion.png"
import cucumber from "../../src/images/card/cucumber.png"
import garlic from "../../src/images/card/garlic.png"
import lemon from "../../src/images/card/lemon.png"
import rice from "../../src/images/card/rice.png"
import pasta from "../../src/images/card/pasta.png"
import salt from "../../src/images/card/salt.png"
import vinegar from "../../src/images/card/vinegar.png"
import spice from "../../src/images/card/spice.png"


const EssentialsCardData = [

    {
        id: "100",
        title: " Bandages",
        description: "Versatile and hearty potatoes, perfect for a wide range of dishes from fries to mash.",
        image: "https://i5.walmartimages.com/asr/0fa1df47-4674-4692-bbe5-8c31c2bfc5b7_2.5900a08e3da80bc99f77a1ecc56e64ee.jpeg",
        price: "₹160",
        oldPrice: "₹195",
        quantity: "60 Units",
        material: "Cotton, Elastic, Adhesive",
        size: "7.5cm x 2.5cm",
        usageInstructions: "Apply to clean, dry skin. Change daily or as needed.",
        warranty: "Not applicable",
        certifications: "ISO 13485, CE Certified",
        sterility: "Sterile",
        elasticity: "Flexible and stretchable",
        hypoallergenic: "Yes",
        waterproof: "Yes",
        category: "Essentials",
        
        
    },
    
    {
        "id": "101",
        "title": "Dettol",
        "description": "Powerful antiseptic solution for wound cleaning and hygiene protection.",
        "image": "https://th.bing.com/th/id/OIP.EZPpK1azW-OTk2l_sqFdLQHaHa?rs=1&pid=ImgDetMain",
        "price": "₹120",
        "oldPrice": "₹150",
        "quantity": "500ml",
        "material": "Chloroxylenol, Terpineol, Alcohol",
        "size": "500ml Bottle",
        "usageInstructions": "Dilute with water for first-aid use or apply directly to minor cuts and wounds.",
        "warranty": "Not applicable",
        "certifications": "ISO 13485, WHO-GMP Certified",
        "sterility": "Antiseptic",
        "elasticity": "Not applicable",
        "hypoallergenic": "Yes",
        "waterproof": "Not applicable",
        "category": "Essentials"
    },
   
    {
        "id": "102",
        "title": "Cotton, Gauze & Tape",
        "description": "Medical-grade cotton, gauze pads, and adhesive tape for wound dressing and first aid.",
        "image": "https://th.bing.com/th/id/OIP.I2unLoPaiLRafIL5L3MRagHaGj?w=223&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": "₹80",
        "oldPrice": "₹100",
        "quantity": "1 Pack (100g Cotton, 10 Gauze Pads, 1 Tape)",
        "material": "100% Cotton, Non-woven Fabric",
        "size": "Varies",
        "usageInstructions": "Use cotton or gauze to clean and cover wounds, secure with tape.",
        "warranty": "Not applicable",
        "certifications": "ISO 13485, CE Certified",
        "sterility": "Sterile (Gauze)",
        "elasticity": "Not applicable",
        "hypoallergenic": "Yes",
        "waterproof": "No",
        "category": "Essentials"
    },
    
    {
        "id": "103",
        "title": "Thermometer",
        "description": "Digital thermometer for accurate body temperature measurement.",
        "image": "https://th.bing.com/th/id/OIP.L1lApAI6ODMQ_CNdeRspJgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": "₹250",
        "oldPrice": "₹300",
        "quantity": "1 Unit",
        "material": "Plastic, Electronic Sensor",
        "size": "Standard",
        "usageInstructions": "Place under the tongue or armpit for accurate readings.",
        "warranty": "1 Year Manufacturer Warranty",
        "certifications": "ISO 80601-2-56, CE Certified",
        "sterility": "Not applicable",
        "elasticity": "Not applicable",
        "hypoallergenic": "Yes",
        "waterproof": "Yes (Limited)",
        "category": "Essentials"
    },
    {
        "id": "104",
        "title": "Move",
        "description": "Effective pain relief spray and ointment for muscle and joint pain.",
        "image": "https://th.bing.com/th/id/OIP.bOXrDGv3qDWwE3KpHMqxLQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": "₹180",
        "oldPrice": "₹220",
        "quantity": "50g / 50ml",
        "material": "Diclofenac, Methyl Salicylate, Menthol",
        "size": "50ml Spray / 50g Tube",
        "usageInstructions": "Spray or apply to affected areas. Avoid contact with eyes and open wounds.",
        "warranty": "Not applicable",
        "certifications": "FDA Approved, GMP Certified",
        "sterility": "Not applicable",
        "elasticity": "Not applicable",
        "hypoallergenic": "Yes",
        "waterproof": "Not applicable",
        "category": "Essentials"
    },
    {
        "id": "105",
        "title": "First Aid Kit",
        "description": "Comprehensive first aid kit for home, office, or travel emergencies.",
        "image": "https://th.bing.com/th/id/OIP.F4V6yRLRsxP6vkk5KmQo7AHaHa?w=162&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": "₹500",
        "oldPrice": "₹600",
        "quantity": "1 Kit",
        "material": "Plastic Case, Medical Supplies",
        "size": "Compact",
        "usageInstructions": "Use contents as per medical requirements in case of injuries.",
        "warranty": "Not applicable",
        "certifications": "ISO 13485, CE Certified",
        "sterility": "Varies (Sterile for Bandages & Gauze)",
        "elasticity": "Not applicable",
        "hypoallergenic": "Yes",
        "waterproof": "Yes (Case is Waterproof)",
        "category": "Essentials"
    },
    {
        "id": "110",
        "title": "Hand Sanitizer",
        "description": "Alcohol-based hand sanitizer that kills 99.9% of germs without the need for water. Ideal for maintaining hand hygiene on the go.",
        "image": "https://i5.walmartimages.com/asr/084af50f-7de5-4630-aa61-1f9b66d3e66f_1.7dcdf6b9ef997321a9f968489f380051.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        "price": "₹120",
        "oldPrice": "₹150",
        "quantity": "500 ml",
        "alcoholContent": "70% Ethanol",
        "fragrance": "Aloe Vera",
        "usageInstructions": "Apply a small amount on the palm and rub hands together until dry. No rinsing required.",
        "warranty": "Not applicable",
        "certifications": "FDA Approved, WHO Recommended",
        "antibacterial": "Yes",
        "moisturizing": "Contains Aloe Vera & Vitamin E for skin hydration",
        "category": "Essentials"
    },
    {
        "id": "111",
        "title": "Eye Drops",
        "description": "Sterile, soothing eye drops that provide relief from dryness, irritation, and redness. Suitable for daily use and contact lens wearers.",
        "image": "https://i5.walmartimages.com/asr/1399f19a-e285-4013-9658-21b44b52c4da.efdf6d3d113ff89a43337a3b7172357a.jpeg",
        "price": "₹180",
        "oldPrice": "₹220",
        "quantity": "10 ml",
        "activeIngredients": "Carboxymethylcellulose Sodium, Glycerin",
        "usageInstructions": "Tilt head back, apply 1-2 drops in each eye, and blink gently. Use as needed.",
        "warranty": "Not applicable",
        "certifications": "FDA Approved, ISO Certified",
        "preservativeFree": "Yes",
        "suitableFor": "Dry eyes, allergies, redness relief",
        "category": "Essentials"
    },
    {
        "id": "112",
        "title": "ORS",
        "description": "WHO-recommended Oral Rehydration Salts (ORS) that help restore electrolyte balance and prevent dehydration due to diarrhea, vomiting, or heat exhaustion.",
        "image": "https://5.imimg.com/data5/RG/QE/MY-6805272/oral-rehydration-salt-ors-500x500.jpg",
        "price": "₹35",
        "oldPrice": "₹50",
        "quantity": "Pack of 5 sachets (21.8g each)",
        "composition": "Sodium Chloride, Potassium Chloride, Glucose, Citrate",
        "usageInstructions": "Dissolve one sachet in 1 liter of clean water and consume within 24 hours. Do not exceed recommended dosage.",
        "warranty": "Not applicable",
        "certifications": "WHO Approved, FSSAI Certified",
        "flavor": "Lemon / Orange / Plain",
        "suitableFor": "Dehydration due to diarrhea, vomiting, fever, or excessive sweating",
        "category": "Essentials"
    }
   
];
export default EssentialsCardData