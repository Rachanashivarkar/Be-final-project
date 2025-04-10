import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SingleShop from './SingleShop';

export default function MedicalShops() {
  const theme = useTheme();

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


  return (
    <Box>
    <Typography variant="h4">Medical Shops near me</Typography>

    {medical_shops.map((shop, index) => (
    <SingleShop
        key={index}
        id={shop.id}
        name={shop.name}
        image={shop.image}
        description={shop.description}
        address={shop.address}
    />
))}


    </Box>
  );
}