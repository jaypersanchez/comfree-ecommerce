
import React, {useEffect, useState, useMemo} from 'react';
import Web3 from 'web3';

  
    export const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
        },
        {
          img: 'https://images.adsttc.com/media/images/596e/dc16/b22e/3854/ce00/0070/slideshow/04.jpg?1500437517'
        },
        {
          img: "https://media.gettyimages.com/id/521293550/photo/india-gujarat-kutch-hodka-village.jpg?s=612x612&w=0&k=20&c=3WCGphWqRLfOJc_U7uNLcj8HU_DD_xwPWbQrNtTKB3c="
        },
        {
          img: "https://2.bp.blogspot.com/-7fDorXHTy5g/Vnf88kKF4II/AAAAAAAA06Y/PKa5ri8YB5A/s1600/neat-simple-home-design.jpg"
        },
        {
          img: "https://1.bp.blogspot.com/-Ya0EB-e2l-Q/W817jH4qhaI/AAAAAAABPeo/fGdnPdDzVSUr96b1i40-Tj_5DQbNMM_OgCLcBGAs/s1600/finished-home-elevation.jpg"
        }
      ];


