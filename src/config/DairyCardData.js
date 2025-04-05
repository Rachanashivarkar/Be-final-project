import Milk from "./../images/dairycard/milk.png";
import paneer from "../../src/images/card/paneer.png"
import butter from "../../src/images/card/butter.png"
import shikhnda from "../../src/images/card/shrikhad.png"
import cream from "../../src/images/card/cream.png"
import ghee from "../../src/images/card/ghee.png"
import cheese from "../../src/images/card/cheese.png"
import ricotta from "../../src/images/card/ricotta.png"
import kefir from "../../src/images/card/kefir.png"
import whey from "../../src/images/card/whey.png"
import mascarpone from "../../src/images/card/mascarpone.png"
import buttermilk from "../../src/images/card/Buttermilk.png"
import milk_powder from "../../src/images/card/milk_powder.png"
import sour_cream from "../../src/images/card/sour_cream.png"

const cardData = [

    
        {
            id: "501",
            title: "Paracetamol",
            description: "Commonly used to reduce fever and relieve mild to moderate pain such as headaches, muscle aches, and toothaches.",
            image: "https://th.bing.com/th/id/R.496b6159be56f6dd97dacd5167e7a531?rik=LMtsTor5Ny27sw&riu=http%3a%2f%2fimages-its.chemistdirect.co.uk%2fParacetamol-500mg-caplets-10456.jpg%3fo%3dwrwi2k9dA2Xo58Fh8cBcF%24swYG8j%26V%3dxCFy&ehk=0mMum8k8RtzYrsYL5gNaodlmEkw0MFoXtiry%2baMGIeI%3d&risl=&pid=ImgRaw&r=0",
            price: "₹25",
            oldPrice: "₹30",
            quantity: "10 Tablets",
            usageInstructions: "Take 1 tablet every 4-6 hours as needed. Do not exceed 4 tablets in 24 hours.",
            storageAdvice: "Store in a cool, dry place away from sunlight.",
            expiry: "24 months from manufacturing date",
            manufacturer: "MediHealth Pharma Ltd.",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "502",
            title: "Crocin",
            description: "Effective for relieving pain, fever, and cold-related symptoms. Trusted by millions.",
            image: "https://newassets.apollo247.com/pub/media/catalog/product/c/r/cro0023.jpg",
            price: "₹28",
            oldPrice: "₹35",
            quantity: "10 Tablets",
            usageInstructions: "Take 1 tablet with water after meals. Max 3 times a day.",
            storageAdvice: "Keep away from heat and moisture.",
            expiry: "2 years from manufacturing",
            manufacturer: "GlaxoSmithKline",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "503",
            title: "Cetirizine",
            description: "Used to treat allergies like sneezing, runny nose, watery eyes, and itching.",
            image: "https://th.bing.com/th/id/OIP.94GgyBzHNsqqIWHTOKelagHaHa?rs=1&pid=ImgDetMain",
            price: "₹15",
            oldPrice: "₹20",
            quantity: "10 Tablets",
            usageInstructions: "Take 1 tablet once daily or as directed by a physician.",
            storageAdvice: "Store at room temperature. Protect from light.",
            expiry: "18 months from manufacture",
            manufacturer: "AllerCure Pharmaceuticals",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "504",
            title: "Antacid Syrup",
            description: "Fast relief from acidity, heartburn, and indigestion. Gentle on the stomach.",
            image: "https://www.pharmahopers.com/assets/images/products/25c64-Untitled-49.jpg",
            price: "₹75",
            oldPrice: "₹85",
            quantity: "200 ml",
            usageInstructions: "2 teaspoons after meals or as prescribed.",
            storageAdvice: "Keep bottle tightly closed. Store below 25°C.",
            expiry: "24 months from manufacture",
            manufacturer: "Abbott India",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "505",
            title: "ORS Sachet",
            description: "Quickly restores fluids and electrolytes lost due to dehydration and diarrhea.",
            image: "https://cdn01.pharmeasy.in/dam/products/I03023/ors-orange-sachet-420gm-back-7-1597365605.jpg",
            price: "₹8",
            oldPrice: "₹10",
            quantity: "1 Sachet",
            usageInstructions: "Dissolve in 1L of clean water. Drink in small sips.",
            storageAdvice: "Store unopened sachets in a dry place.",
            expiry: "12 months",
            manufacturer: "HydraCare Pharma",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "506",
            title: "Pain Balm",
            description: "Topical analgesic balm for quick relief from headaches, joint pain, and muscle stiffness.",
            image: "https://m.media-amazon.com/images/I/71tEddbYGyS._SL1500_.jpg",
            price: "₹40",
            oldPrice: "₹50",
            quantity: "10 ml",
            usageInstructions: "Apply a small amount on the affected area. Do not use on broken skin.",
            storageAdvice: "Keep in a cool, dry place.",
            expiry: "36 months",
            manufacturer: "Wellness Remedies",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "507",
            title: "Loperamide",
            description: "Used to treat sudden diarrhea (including traveler’s diarrhea). Works by slowing the movement of the gut.",
            image: "https://i5.walmartimages.com/asr/b93746e0-a96d-4257-848a-472c78d0090e.0bb8b5e23c12e74cd9b769e8ad11dd9c.jpeg",
            price: "₹22",
            oldPrice: "₹27",
            quantity: "10 Tablets",
            usageInstructions: "Take 1 tablet after the first loose stool, then 1 after each subsequent loose stool (max 4/day).",
            storageAdvice: "Keep in original pack. Avoid heat.",
            expiry: "24 months",
            manufacturer: "DiaRelief Medics",
            prescriptionRequired: "No",
            category: "General Medicines"
          },
          {
            id: "508",
            title: "Antiseptic Cream",
            description: "For cuts, wounds, insect bites and skin infections. Promotes faster healing.",
            image: "https://th.bing.com/th/id/OIP.cvysVEZlo6FHDHPRJ8ZORwHaHa?rs=1&pid=ImgDetMain",
            price: "₹55",
            oldPrice: "₹65",
            quantity: "20 gm",
            usageInstructions: "Apply a thin layer to the affected area. Use 2-3 times daily.",
            storageAdvice: "Store in a dry place at room temperature.",
            expiry: "36 months",
            manufacturer: "DermaCure Labs",
            prescriptionRequired: "No",
            category: "General Medicines"
          }

];

export default cardData;
