import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';



const cardsData = [
    {
        title: 'Essentials',
        imageUrl: 'https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg',
        path: '/essentials', 
    },

    {
        title: 'Baby Care',
        imageUrl: 'https://th.bing.com/th/id/OIP.5wdQcNKhCkBhPu4-wtr8pwHaHa?rs=1&pid=ImgDetMain',
        path: '/vegetables', 
    },

    {
        title: 'Health and nutrition',
        imageUrl: 'https://i5.walmartimages.com/asr/500cd6b2-39c2-431d-b76b-8924f82d3135_1.01f905d94d3796ffe61135758224b6b6.jpeg',
        path: '/exotics', 
    },

    {
        title: 'Personal care',
        imageUrl: 'https://th.bing.com/th/id/OIP.a4YJkAFE0kaztat1BTmL9QHaF8?rs=1&pid=ImgDetMain',
        path: '/fruits',
    },

    {
        title: 'Medicines',
        imageUrl: 'https://th.bing.com/th/id/R.496b6159be56f6dd97dacd5167e7a531?rik=LMtsTor5Ny27sw&riu=http%3a%2f%2fimages-its.chemistdirect.co.uk%2fParacetamol-500mg-caplets-10456.jpg%3fo%3dwrwi2k9dA2Xo58Fh8cBcF%24swYG8j%26V%3dxCFy&ehk=0mMum8k8RtzYrsYL5gNaodlmEkw0MFoXtiry%2baMGIeI%3d&risl=&pid=ImgRaw&r=0',
        path: '/dairy', 
    },

];

const ServiceCards = () => {
    return (
        <div className="cards-container">

            {cardsData.map((card, index) => (
                <Link to={card.path} className="card" key={index}>

                    <img src={card.imageUrl} alt={card.title} className="card-image" />
                    <div className="card-title-container">
                        <h2 className="card-title">{card.title}</h2>
                    </div>
                    
                </Link>
            ))}

        </div>
    );
};

export default ServiceCards;
