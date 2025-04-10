import React, {useState} from 'react'
import Header from '../../components/navbar/nav'
import { Box, Grid, Typography } from '@mui/material'
import SingleMedicine from './SingleMedicine'
import { useParams } from 'react-router-dom'

const ShopMedicines = () => {
    const {shop_id} = useParams();
    const medical_shops = [
        {
            id: 1,
            name: "Royal Chemist",
            image: "https://medlineplus.gov/images/Medicines_share.jpg",
            description: "Royal Chemist is a chemist from last 100 years. It has all medicines.",
            address: "Nagardas Road, Andheri East, Mumbai, Maharashtra 400069"
        },
        {
            id: 2,
            name: "Noble Chemist",
            image: "https://safety4sea.com/wp-content/uploads/2023/10/shutterstock_1061962874.jpg",
            description: "Noble chemist is a chemist from last 50 years in Andheri. It is very reliable and has many branches.",
            address: "SV Road, Near Andheri Station, Mumbai, Maharashtra 400058"
        },
        {
            id: 3,
            name: "CareWell Pharmacy",
            image: "https://content.api.news/v3/images/bin/374510204de9c33d43d3393d6f8f135c",
            description: "CareWell Pharmacy offers 24/7 delivery of allopathic and ayurvedic medicines.",
            address: "Link Road, Malad West, Mumbai, Maharashtra 400064"
        },
        {
            id: 4,
            name: "Healthy Life Chemist",
            image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg",
            description: "Known for top-class service and rare medicines, located in Bandra.",
            address: "Turner Road, Bandra West, Mumbai, Maharashtra 400050"
        },
        {
            id: 5,
            name: "LifeLine Medical Store",
            image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/07/medications_fever_GettyImages155141637_Header-1024x575.jpg?w=1155&h=1528",
            description: "LifeLine Medical Store provides high-quality generics and baby care products.",
            address: "Hill Road, Bandra West, Mumbai, Maharashtra 400050"
        },
        {
            id: 6,
            name: "Apollo Pharmacy",
            image: "https://c.ndtvimg.com/2024-06/tib0u67o_medicine-generic_625x300_25_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=545,height=307",
            description: "Apollo Pharmacy is part of Apollo Hospitals. Trusted name in the medical industry.",
            address: "LBS Marg, Mulund West, Mumbai, Maharashtra 400080"
        },
        {
            id: 7,
            name: "GreenLeaf Medicos",
            image: "https://www.nps.org.au/assets/_750x468_crop_center-center_75_none/GettyImages-862433964.jpg",
            description: "A modern chemist shop focused on herbal, ayurvedic, and natural products.",
            address: "Gandhi Market, Sion, Mumbai, Maharashtra 400022"
        }
];
    const medicines = [
        {
            id: 1,
            name: "Paracetamol",
            description: "Used to treat fever and mild pain. Common over-the-counter medicine.",
            image:"https://assets.sayacare.in/api/images/product_image/large_image/23/74/paracetamol-500-mg-10-tablet-23_1.webp"
        },
        {
            id: 2,
            name: "Amoxicillin",
            description: "Antibiotic used to treat bacterial infections like chest infections, dental abscesses, etc.",
            image:"https://5.imimg.com/data5/SELLER/Default/2024/8/439866482/DZ/ED/HV/216502075/amoxycillin-moxanute-500-mg.jpg"
        },
        {
            id: 3,
            name: "Cetirizine",
            description: "Antihistamine used for allergy relief, sneezing, and runny nose.",
            image:"https://tiimg.tistatic.com/fp/1/007/645/cetirizine-tablets-317.jpg"
        },
        {
            id: 4,
            name: "Ibuprofen",
            description: "Painkiller used for inflammation, fever, and pain like headaches or body aches.",
            image:"https://5.imimg.com/data5/SELLER/Default/2023/7/325863554/WI/JM/SY/135658020/ibuprofen-tablets-ip-200-mg-.jpg"
        },
        {
            id: 5,
            name: "Aspirin",
            description: "Used to reduce pain, fever, or inflammation. Also used in heart health.",
            image:"https://www.nahdionline.com/_next/image?url=https%3A%2F%2Fecombe.nahdionline.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F0%2F101177956_smallimage_9_small_.png%3Fwidth%3D500%26height%3D500%26canvas%3D500%2C500%26optimize%3Dhigh%26bg-color%3D255%2C255%2C255%26fit%3Dbounds&w=256&q=75"
        },
        {
            id: 6,
            name: "Metformin",
            description: "Used to control blood sugar levels in people with type 2 diabetes.",
            image:"https://www.poison.org/-/media/images/shared/articles/metformin.jpg"
    }]
 console.log("shop_id",shop_id)

//  const title = medical_shops.find(shop => shop.id === shop_id)?.name || "Royal Chemist";
const title = medical_shops.find(shop => String(shop.id) === String(shop_id))?.name || "Royal Chemist";


console.log("title", title)
  return (
    <>
    <Header />
    <Box>
        <Typography variant="h3" align="center" mt={5} mb={5}>
                {title}
            </Typography>
        <Box>
        <Grid container spacing={5} justifyContent="center">
       {medicines.map(m=>{
         return <>
         <SingleMedicine
         key={m.id}
         name={m.name}
         description={m.description}
         image={m.image}
         />
         </>
       })}
        </Grid>
        </Box>
    </Box>
    </>
  )
}

export default ShopMedicines