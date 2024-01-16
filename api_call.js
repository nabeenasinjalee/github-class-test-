fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))


//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//     images: [
//       'https://cdn.dummyjson.com/product-images/1/1.jpg',
//       'https://cdn.dummyjson.com/product-images/1/2.jpg',
//       'https://cdn.dummyjson.com/product-images/1/3.jpg',
//       'https://cdn.dummyjson.com/product-images/1/4.jpg',
//       'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
//     ]
//   }


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))


//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//     images: [
//       'https://cdn.dummyjson.com/product-images/1/1.jpg',
//       'https://cdn.dummyjson.com/product-images/1/2.jpg',
//       'https://cdn.dummyjson.com/product-images/1/3.jpg',
//       'https://cdn.dummyjson.com/product-images/1/4.jpg',
//       'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
//     ]
//   }

// fetch('https://cdn.dummyjson.com/product-images/1/thumbnail.jpg')
// .then(res => res.json())
// .then(json => console.log(json))

// console.log('https://cdn.dummyjson.com/product-images/1/thumbnail.jpg')

            // fetch('https://cdn.dummyjson.com/product-images/1/thumbnail.jpg')
            // .then(response => response.json())
            // .then(data => console.log(jpg))
            // .catch(error => console.error('Error:', error));


                    // fetch('https://dummyjson.com/products/1')
                    // .then(res => res.json())
                    // .then(json => console.log(json))


// new Array()   
//     {'https://cdn.dummyjson.com/product-images/1/1.jpg'}
//     {'https://cdn.dummyjson.com/product-images/1/2.jpg'}
//     {'https://cdn.dummyjson.com/product-images/1/3.jpg'}
//     {'https://cdn.dummyjson.com/product-images/1/4.jpg'}
//     {'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'}
// };

// console.log()
// console.log('https://cdn.dummyjson.com/product-images/1/1.jpg')


// let img = 'https://cdn.dummyjson.com/product-images/1/1.jpg';
// fetch('https://cdn.dummyjson.com/product-images/1/1.jpg')
// .then(response => response.json()).then(current => let img =  current.images ;
//     console.log(image[0]
// ))

// .then(imagess => 
//     let image = imagess.images;
//     console.log(image[0];
//         ))
// // .then(img => img.json())
// .then(json => console.log(images))




// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

let images = img[
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
];

fetch('https://cdn.dummyjson.com/product-images/1/1.jpg')
.then(response => response.json()).then(( images => 
    let firstImg = img.images;
    console.log(images[0]);
));
