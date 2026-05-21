const mongoose = require('mongoose');
const Course = require('../models/Course');
const Category = require('../models/Category');
const dotenv = require('dotenv');

dotenv.config();

const courses = [
  {
    title: 'Angular for Beginners',
    instructor: 'John Doe',
    price: 99.99,
    seats: 3,
    image: '/angular.webp',
    catId: '6a0dd620f1f8578b7130f22b',
  },
  {
    title: 'Design Principles',
    instructor: 'Jane Smith',
    price: 79.99,
    seats: 25,
    image: '/design-principles.png',
    catId: '6a0dd620f1f8578b7130f22c',
  },
  {
    title: 'Digital Marketing 101',
    instructor: 'Emily Johnson',
    price: 89.99,
    seats: 20,
    image: '/digital-marketing-101.jpg',
    catId: '6a0dd620f1f8578b7130f22d',
  },
  {
    title: 'Business Strategy',
    instructor: 'Michael Brown',
    price: 109.99,
    seats: 15,
    image: '/business-strategy.jfif',
    catId: '6a0dd620f1f8578b7130f22e',
  },
  {
    title: 'Advanced Angular',
    instructor: 'John Doe',
    price: 129.99,
    seats: 10,
    image: '/advanced-angular.png',
    catId: '6a0dd620f1f8578b7130f22b',
  },
  {
    title: 'UX Design Fundamentals',
    instructor: 'Jane Smith',
    price: 89.99,
    seats: 20,
    image: '/UX-design-fundamentals.jpeg',
    catId: '6a0dd620f1f8578b7130f22c',
  },
  {
    title: 'Social Media Marketing',
    instructor: 'Emily Johnson',
    price: 79.99,
    seats: 25,
    image: '/social-media-marketing.jpg',
    catId: '6a0dd620f1f8578b7130f22d',
  },
  {
    title: 'Entrepreneurship Basics',
    instructor: 'Michael Brown',
    price: 99.99,
    seats: 30,
    image: '/basics-entrepreneurship.webp',
    catId: '6a0dd620f1f8578b7130f22e',
  },
  {
    title: 'React for Beginners',
    instructor: 'John Doe',
    price: 99.99,
    seats: 30,
    image: '/react-for-beginners.jfif',
    catId: '6a0dd620f1f8578b7130f22b',
  },
  {
    title: 'Graphic Design Basics',
    instructor: 'Jane Smith',
    price: 79.99,
    seats: 25,
    image: '/graphic-design-basics.webp',
    catId: '6a0dd620f1f8578b7130f22c',
  },
];

const categories = [
  { name: 'Programming' },
  { name: 'Design' },
  { name: 'Marketing' },
  { name: 'Business' },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Course.deleteMany();
  await Course.insertMany(courses);
  // await Category.deleteMany();
  // await Category.insertMany(categories);

  console.log('DB Seeded');
  process.exit();
};

seedDB();
