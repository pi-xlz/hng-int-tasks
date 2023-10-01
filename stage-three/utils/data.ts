import { ImgArray } from './types';

// Heh 😛
export const Gallarray: ImgArray = [
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/spotted-deer.jpg',
    name: 'SPOTTED DEER',
    location: 'Amazon',
    tags: ['deer', 'horned', 'domestic'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/fennec-fox.jpg',
    name: 'FENNEC FOX',
    location: 'Sahara',
    tags: ['wild', 'fox', 'small'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/tiger.jpg',
    name: 'AFRICAN TIGER',
    location: 'Africa',
    tags: ['big', 'wild', 'cat'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/humpback-whale.jpg',
    name: 'HUMPBACK WHALE',
    location: 'Japan',
    tags: ['fish', 'aquatic', 'water', 'big'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/giraffe.jpg',
    name: 'WILD GIRAFFE',
    location: 'West Indies',
    tags: ['big', 'tall', 'domestic'],
  },
  {
    id: crypto.randomUUID(),
    imageUrl: 'images/flamingo.jpg',
    name: 'LOVELY FLAMINGO',
    location: 'Paris',
    tags: ['domestic', 'bird', 'small'],
  },
];
