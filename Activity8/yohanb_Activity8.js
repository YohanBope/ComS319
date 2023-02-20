/*Author: Yohan Bopearatchy
    ISU Netid : yohanb@iaste.edu
    Date : Febuary 9th, 2023*/

const products = [
    ['product001_1', 'Ceiling Fan', '65 inches', 'Minka', 'Aire Xtreme H2O Coal Wet', 'Remote Control', 489.95],
    ['product001_2', 'Ceiling Fan', '65 inches', 'Minka', 'Aire Windmolen Textured Coal LED Wet', 'Smart', 569.95],
    ['product001_3', 'Ceiling Fan', '60 inches', 'Minka', 'Aire Dream Star Graphite Steel LED', 'Remote Control', 799.95],
    ['product002_1', 'Ceiling Fan', '56 inches', 'Mach 5', 'Oil-Rubbed Bronze and Koa LED Damp', 'Remote Control', 379.95],
    ['product003_1', 'Ceiling Fan', '60 inches', 'Monte Carlo Maverick', 'Matte Black', 'Remote Control', 659.99],
    ['product003_2', 'Ceiling Fan', '70 inches', 'Monte Carlo Maverick', 'Matte Black', 'Remote Control', 743.99],
    ['product003_3', 'Ceiling Fan', '70 inches', 'Monte Carlo Maverick', 'Walnut Wood', 'Remote Control', 743.99],
    ['product003_4', 'Ceiling Fan', '70 inches', 'Monte Carlo Maverick', 'Aged Pewter', 'Remote Control', 743.99],
    ['product004_1', 'Ceiling Fan', '52 inches', 'Casa', 'Delta-Wing Bronze Damp Outdoor LED', 'Remote Control', 249.95],
    ['product004_2', 'Ceiling Fan', '56 inches', 'Casa', 'Vieja Rally Bronze Damp Rated LED', 'Remote Control', 299.99],
    ['product011_1', 'Wall Light', '11 inches', 'Hinkley Sawyer', 'High Sequoia Wood Finish Rustic', 'Wall Sconce', 127.2],
    ['product012_1', 'Wall Light', '17 inches', 'Feiss Loras', 'High Dark Weathered Iron', 'Wall Sconce', 115.98],
    ['product013_1', 'Wall Light', '14 inches', 'Menlo Park', 'High Old Silver by Troy Lighting', 'Wall Sconce', 265.6],
    ['product014_1', 'Wall Light', '11 1/4 inches', 'Hinkley Congress', 'High Clear Glass Chrome', 'Wall Sconce', 175.2],
    ['product015_1', 'Wall Light', '8 1/4 inches', 'Hudson Valley Barron', 'H Polished Nickel Sconce', 'Wall Sconce', 315.2],
    ['product030_1', 'Jacket', 'Sizes S (34 to 36) M (38 to 40) L (42 to 44) XL (46 to 48) XXL (50 to 52)', 'Spyfire', 'Spyfire Jacket',
        'Kuhl sleek warm jacket boasts a baffled water-repellent nylon/spandex shell with 800-fill-power goose down. Reinforced shoulders zipper closures. Machine wash', 249],
    ['product031_1', 'Jacket', 'Sizes XS (0 to 2) S (4 to 6) M (8 to 10) L (12 to 14) XL (16 to 18) XXL (20 to 22). Approx. 46-1/2 L inches', 'Hotchkiss',
        'Hotchkiss Quilted Jacket', 'Quilted longline jacket with shirt tail hem matching corduroy collar and patch pockets. Polyester. Dry clean.', 198],
    ['product032_1', 'Jacket', 'Sizes S M L XL XXL.', 'Tribal Stripe', 'Tribal Stripe Two-Pocket Jacket', 'Yarn-dyed indigenous-inspired pattern will catch your attention in this chambray-lined button front shirt with two pockets corduroy-lined neckline and side gussets. Cotton. Machine wash.', 178]
]

let minProduct_Array = ["", "", "", 0];
function minPrince_usingArray(minProduct_Array, products){
    let x = 0;
    for(let i = 0; i < products.length; i++){
        if(products[i][6] > products[i+1][6]){
            x = i;
        }
    }
    minProduct_Array = [products[x][0], products[x][1], products[x][4], products[x][6]];
    return minProduct_Array;
}

console.log(`Report product with minimum price :
Product Id : ${minProduct_Array[0]}
Product Name : ${minProduct_Array[1]}
Description  : ${minProduct_Array[2]}
Price : ${minProduct_Array[3]}`);

let minProduct_Object = { "minProductId":"", "minProductName":"", "shortDescription":"", "price":0};
function minPrince_usingObject(minProduct_Object, products){
    let x = 0;
    for(let i = 0; i < products.length; i++){
        if(products[i][7] > products[i+1][7]){
            x = i;
        }
    }
}

console.log(`Report product with minimum price Again:
Product Id : ${minProduct_Object["minProductId"]}
Product Name : ${minProduct_Object["minProductName"]}
Description  : ${minProduct_Object["shortDescription"]}
Price : ${minProduct_Object["price"]}`);

let sales_per_product_name = {};
function per_product(sales_per_product_name,products){

}

console.log(`Report Sales per Product Name :`);
for (let name in sales_per_product_name){
    console.log(`Product Name : ${name} Sales : ${sales_per_product_name[name]}`);
}
