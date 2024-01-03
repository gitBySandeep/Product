function getProducts() {
    var productList = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }];
    return productList;
}

function getDataFromStorage() {
    var data = localStorage.getItem("productsList");
    data = JSON.parse(data);
    return data;
}

function createHeader() {
    var mainDiv = document.querySelector("#mainDiv");
    var header = document.createElement("header")
    // Header Create
    header.setAttribute("style", "width:100%; height:70px;position: fixed;top:0;")
    header.setAttribute("class", "bg-dark d-flex justify-content-around");
    // Header End

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("style", "width:100px; height:70px;");

    // Logo Image Start
    var img = document.createElement("img");
    img.setAttribute("src", "Image/amazon-logo-s3f.png");
    img.setAttribute("style", "width:14vw;height:12vh;filter: brightness(0) invert(1)");
    //
    //search Div
    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style", "width:30%; height:70px;");
    searchDiv.setAttribute("class", "d-flex justify-content-center  align-items-center");

    //input 
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search Product");
    input.setAttribute("style", "width:100%;height:40px; border-radius:10px; outline:none; border:none;");
    input.setAttribute("id", "searchKeyword");
    input.addEventListener("keyup", () => {
        SearchProduct();
    });

    //menu div
    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("style", "width:20%;height:70px;display:flex; justify-content:space-around;align-items:center; ");


    if (isLoggedIn()) {
        // alert("Ritesh");
        var viewCart = document.createElement("span");
        viewCart.innerHTML = "View Cart";
        viewCart.setAttribute("style", "color:white; font-size:25px; cursor:pointer;");
        viewCart.addEventListener("click", () => {
            viewProducts();
        });

        var signOut = document.createElement("span");
        signOut.innerHTML = "Sign Out";
        signOut.setAttribute("style", "color:white; font-size:25px; cursor:pointer;");
        signOut.addEventListener("click", () => {
            SignOut(menuDiv);
        });

        menuDiv.appendChild(viewCart);
        menuDiv.appendChild(signOut);

    } else {
        // alert("patil")
        //sign up sign in
        var signIn = document.createElement("span");
        signIn.innerHTML = "Sign in";
        signIn.setAttribute("style", "color:white; font-size:25px;cursor:pointer;");
        signIn.setAttribute("id", "myLink");

        signIn.addEventListener("click", () => {
            signInForm();
        });
        //     signIn.addEventListener("click", () => {
        //         document.getElementById("myLink").href = "P2.html";
        //   });
        var signUp = document.createElement("span");
        signUp.innerHTML = "Sign up";
        signUp.setAttribute("style", "color:white; font-size:25px;cursor:pointer;");

        //Add Event Listener
        signUp.addEventListener("click", () => {
            signUpForm();
        })

        menuDiv.appendChild(signUp);
        menuDiv.appendChild(signIn);
    }


    searchDiv.appendChild(input);
    logoDiv.appendChild(img);
    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);


}

function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");

    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "container-fluid  p-2 d-flex flex-wrap justify-content-around");

    cartContainer.setAttribute("style", "row-gap:10px;margin-top:100px;");
    cartContainer.setAttribute("id", "cartContainer");

    for (let product of data) {
        var cartDiv = document.createElement("div");
        cartDiv.setAttribute("style", "width:32%; height:600px; box-shadow: 4px 4px 10px 10px gray; ");
        var productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%; height:400px; ");

        var title = document.createElement("h2");
        title.innerHTML = product.title;
        title.setAttribute("style", "color:black;text-align: center;");

        var price = document.createElement("span");
        price.innerHTML = product.price;
        price.setAttribute("style", "color:red; text-deco;text-decoration: line-through;margin-left:130px;font-size:30px;font-weight:bolder;");

        var disPrice = document.createElement("span");
        disPrice.innerHTML = "Rs." + (product.price - (product.price * (product.discountPercentage / 100))).toFixed(2);
        disPrice.setAttribute("style", "margin-left:30px;font-size:30px;font-size:30px;color:green;font-weight:bolder;");

        var viewMore = document.createElement("h3");
        viewMore.innerHTML = "veiwMore";
        viewMore.setAttribute("style", "text-align: center; cursor:pointer;")

        viewMore.addEventListener("click", () => {
            productDetail(product);
        });

        var button = document.createElement("button");
        button.setAttribute("style", "color:black;margin-left:130px; width:200px;height:35px;margin-top:10px;background-color:yellow;border:none;");
        button.innerHTML = "Add Cart";

        button.addEventListener("click", () => {
            if (isLoggedIn())
                saveProductInToCart(product);
            else
                window.alert("Sign in first");
        });

        cartDiv.appendChild(productImg);
        cartDiv.appendChild(title);
        cartDiv.appendChild(price);
        cartDiv.appendChild(disPrice);
        cartDiv.appendChild(viewMore);
        cartDiv.appendChild(button);
        //       cartDiv.appendChild(qButton);
        cartContainer.appendChild(cartDiv);
    }

    mainDiv.appendChild(cartContainer);
}
function signInForm() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    // document.getElementById("myLink").href = "P2.html";

    var container = document.createElement("div");
    container.setAttribute("style", "width:30%;height:40%;position:absolute; top:50%;left:50%;transform:translate(-50%,-50%);box-shadow: 4px 4px 10px 10px gray;");

    var h2 = document.createElement("h3");
    h2.innerHTML = "Sign in";
    h2.setAttribute("style", "text-align:center")

    container.appendChild(h2);
    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    divFormGroupFirst.setAttribute("style", "margin-top:50px");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter Your Email");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);


    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter Your Password");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);



    var submitButton = document.createElement("button");
    submitButton.setAttribute("class", "btn ");
    submitButton.setAttribute("style", "width:100px;background-color: yellowgreen;margin-left:10px;margin-top:5px")
    submitButton.innerHTML = "Sign in";
    submitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        signIn(email, password);
    })

    var signUpLable = document.createElement("span");
    signUpLable.innerHTML = "Create Account";
    signUpLable.setAttribute("class", "text-danger ml-5");
    signUpLable.setAttribute("role", "button");

    signUpLable.addEventListener("click", () => {
        signUpForm();
    })

    container.appendChild(submitButton);
    container.appendChild(signUpLable)

    mainDiv.appendChild(container);



}

function signUpForm() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    var container = document.createElement("div");
    container.setAttribute("style", "width:30%;height:40%;position:absolute; top:50%;left:50%;transform:translate(-50%,-50%);   box-shadow: 4px 4px 10px 10px gray;");

    var h2 = document.createElement("h3");
    h2.innerHTML = "Sign up";
    h2.setAttribute("style", "text-align:center")

    container.appendChild(h2);

    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    divFormGroupFirst.setAttribute("style", "margin-top:40px;")
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter Your Email");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);


    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter Your Password");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);

    var submitButton = document.createElement("button");
    submitButton.setAttribute("class", "btn ");
    submitButton.setAttribute("style", "width:100px;background-color: yellowgreen;margin-left:10px;margin-top:5px")
    submitButton.innerHTML = "Sign up";

    // Add Event Listener
    submitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        if (isUserExist(email, password)) {
            window.alert("User is Exist");
        }
        else {
            var user = { email: email, password: password };

            var userList = localStorage.getItem("userList");
            userList = JSON.parse(userList);
            userList.push(user);

            localStorage.setItem("userList", JSON.stringify(userList));
            alert("User Registered");
            signInForm();
        }
    });

    var signInLable = document.createElement("span");
    signInLable.innerHTML = "Sign in";
    signInLable.setAttribute("class", "text-danger ml-5");
    signInLable.setAttribute("role", "button");

    signInLable.addEventListener("click", () => {
        signInForm();
    })

    container.appendChild(submitButton);
    container.appendChild(signInLable);

    mainDiv.appendChild(container);
}
function isUserExist(email, password) {
    alert(email + "  " + password);
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email });

    return !!user;
}

function signIn(email, password) {
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((obj) => { return obj.email == email && obj.password == password });

    if (user) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("currentUser", user.email);
        document.querySelector("#mainDiv").innerHTML = "";
        createHeader();
        createCart(JSON.parse(localStorage.getItem("ProductList")))
    } else {
        alert("Sign in Failed...");
    }
}
function isLoggedIn() {
    return !!sessionStorage.getItem("isLoggedIn");
}
function SignOut(menuDiv) {
    alert("signOut");
    sessionStorage.clear();
    menuDiv.innerHTML = "";
    var signInOptions = document.createElement("span");
    signInOptions.innerText = "Sign in";
    signInOptions.setAttribute("style", "color:white; cursor:pointer;font-size:25px;");

    signInOptions.addEventListener("click", () => {
        signInForm();
    })
    var signUpOptions = document.createElement("span");
    signUpOptions.innerText = "Sign up";
    signUpOptions.setAttribute("style", "color:white;cursor:pointer;font-size:25px;");

    signUpOptions.addEventListener("click", () => {
        signUpForm();
    });

    menuDiv.appendChild(signInOptions);
    menuDiv.appendChild(signUpOptions);
}

function saveProductInToCart(product) {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    let currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    if (currentUserCartItems) {
        var currentUserItemList = currentUserCartItems.cartItems;
        var productObj = currentUserItemList.find((obj) => { return obj.id == product.id });
       alert(productObj);
        if (productObj)
            window.alert("Product is already added into cart");
        else {
            var index = cartList.findIndex((obj) => { return obj.email == currentUser });
            product.qty = 1;
            currentUserCartItems.cartItems.push(product);
            cartList.splice(index, 1);
            cartList.push(currentUserCartItems);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            window.alert("Product added successfully...");
        }
    }
    else {
        var obj = { email: currentUser, cartItems: [] };
        product.qty = 1;
        obj.cartItems.push(product);
        cartList.push(obj);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        window.alert("Prduct successfully added");
    }
}

//rrrrrr
function productDetail(product) {
    let mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";

    let container = document.createElement("section");
    container.setAttribute("class", "container-fluid mt-5");
    // container.setAttribute("style", "border: 1px solid;");

    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row justify-content-center align-item-center");
    rowDiv.setAttribute("style", "gap: 10px;")

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "col-sm-12 col-md-6 d-flex justify-content-center flex-column align-items-center");
    imageDiv.setAttribute("style", "height: 30rem;box-shadow: 4px 4px 10px 10px gray;");

    let detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "d-flex flex-column jutify-content-between col-sm-12 col-md-4  text-dark offset-1 ");
    detailDiv.setAttribute("style", "height: 30rem; padding: 20px; box-sizing: border-box; position: relative;box-shadow: 4px 4px 10px 10px gray;   ");

    let currentImage = document.createElement("img");
    currentImage.setAttribute("style", "height: 18rem; width: 25rem; box-shadow: 4px 4px 10px 10px gray;");
    currentImage.setAttribute("src", product.thumbnail);

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    imageDiv.appendChild(currentImage);
    // imageDiv.appendChild(br2);
    // imageDiv.appendChild(br1);

    let lowerDiv = document.createElement("div");
    lowerDiv.setAttribute("class", " mt-4");
    imageDiv.appendChild(lowerDiv);

    for (let productImg of product.images) {

        let img = document.createElement("img");
        img.setAttribute("src", productImg);
        img.setAttribute("class", "ml-4");
        img.setAttribute("style", "height: 5rem; width: 5rem;");

        img.addEventListener("click", () => {
            let temp = currentImage.src;
            currentImage.src = img.src;
            img.src = temp;
        });
        lowerDiv.appendChild(img);
    }

    let title = document.createElement("h3");
    title.innerHTML = product.title;

    let description = document.createElement("p");
    description.innerHTML = "<b> Description : </b> <br>" + product.description;

    let rating = document.createElement("h5");
    rating.innerHTML = "Rating : " + product.rating;

    let price = document.createElement("h4");
    price.innerHTML = "M.R.P. : " + product.price;

    let stock = document.createElement("p");
    stock.innerHTML = "<b>In Stock</b> : " + product.stock;

    let brand = document.createElement("p");
    brand.innerHTML = "<b> Brand <b/>: " + product.brand;

    let category = document.createElement("p");
    category.innerHTML = "<b> Category <b/>: " + product.category;

    var cartButton = document.createElement("button");
    cartButton.setAttribute("style", "border: none; width: 90%; height: 40px; background-color: #ffc107; border-radius: 5px; bottom: 20px; position: absolute;");
    cartButton.innerHTML = "Add To Cart";

    cartButton.addEventListener("click", () => {
        if (isLoggedIn()) {
            saveProductInToCart(product);
        } else {
            alert("Sign In first...");
        }
    });
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("style", "width:300px; height:60px;margin-top:20px;margin-left:40px;");
    button.innerHTML = "Back";
    button.addEventListener("click", () => {
        var cartContainer = document.querySelector("#mainDiv");
        cartContainer.innerHTML = "";
        createHeader();
        createCart(data);
    })
  

    detailDiv.appendChild(title);
    detailDiv.appendChild(description);
    detailDiv.appendChild(rating);
    detailDiv.appendChild(price);
    detailDiv.appendChild(stock);
    detailDiv.appendChild(brand);
    detailDiv.appendChild(category);
    detailDiv.appendChild(cartButton);

    rowDiv.appendChild(imageDiv);
    rowDiv.appendChild(detailDiv);

    container.appendChild(rowDiv);
    container.appendChild(button);
    mainDiv.appendChild(container);
}


function viewProducts() {
    var cartContainer = document.querySelector("#cartContainer");
    cartContainer.innerHTML = "";

    var currentUser = sessionStorage.getItem("currentUser");

    var cartList = JSON.parse(localStorage.getItem("cartList"));


    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    if (!currentUserCartList) {
        alert("Please Add Product");
        // createHeader();
        createCart(data)
    }
    else {
        var cartItems = currentUserCartList.cartItems;

        var viewDiv = document.createElement("div");
        viewDiv.setAttribute("id", "viewDiv");
        viewDiv.setAttribute("style", "width:100vw; height:90%;display:flex;justify-content:space-around; ");

        var leftDiv = document.createElement("div");
        leftDiv.setAttribute("style", "width:60%; height:60%;");

        var table = document.createElement("table");
        table.setAttribute("class", "table table-border ")
        table.setAttribute("style", " box-shadow: 4px 4px 10px 10px gray;")

        var thead = document.createElement("thead");

        var tr = document.createElement("tr");
        tr.setAttribute("class", "bg-primary");


        var th = document.createElement("th");
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");
        var th5 = document.createElement("th");

        th1.innerHTML = "sNo."
        th2.innerHTML = "Name"
        th3.innerHTML = "Price"
        th4.innerHTML = "Qty"
        th5.innerHTML = "Total"

        var tbody = document.createElement("tbody");

        for (let index in cartItems) {
            let tr = document.createElement("tr");

            if (index % 2 == 1) {
                tr.setAttribute("style", "background-color:#dae2f4");
            }
            else {
                tr.setAttribute("style", "background-color:white;");
            }
            let sNo = document.createElement("td");
            sNo.innerHTML = "" + (index * 1 + 1);
            tr.appendChild(sNo);

            let name = document.createElement("td");
            name.innerHTML = cartItems[index].title;
            tr.appendChild(name);

            let price = document.createElement("td");
            price.innerHTML = cartItems[index].price;
            tr.appendChild(price);

            let qty = document.createElement("td");
            qty.innerHTML = "<input onchange='updateQty(" + cartItems[index].id + "," + index + ")' style='width:50px' id='qtyChange" + index + "' type='number' min='1' value='" + cartItems[index].qty + "'/>";
            tr.appendChild(qty);

            let total = document.createElement("td");
            total.setAttribute("id", "total" + index);
            total.innerText = cartItems[index].price;
            tr.appendChild(total);
            tbody.appendChild(tr);
        }

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        leftDiv.appendChild(table);



        var rightDiv = document.createElement("div");
        rightDiv.setAttribute("style", "width:30%; height:50%;box-shadow: 4px 4px 10px 10px gray;");

        var h2 = document.createElement("h2");
        h2.setAttribute("class", "text-center");
        h2.setAttribute("style", "font-weight: bolder;font-size: 3rem;");
        h2.innerHTML = "Order Detail";
        var hr = document.createElement("hr");


        var totalItems = document.createElement("p")
        totalItems.innerHTML = "Total Item : " + cartItems.length;
        totalItems.setAttribute("style", " font-family: sans-serif;font-size: 1.5rem;margin-left:20px;")

        var totalAmount = document.createElement("p");
        totalAmount.setAttribute("id", "totalBillLabel");
        totalAmount.innerHTML = "Total Amount: " + getBillAmount(cartItems)
        totalAmount.setAttribute("style", "font-family: sans-serif;font-size: 1.5rem;margin-left:20px;");

        var checkoutButton = document.createElement("button");
        checkoutButton.innerText = "Checkout";
        checkoutButton.setAttribute("class", "btn btn-warning ");
        checkoutButton.setAttribute("style", "width:40%; margin-left:50px;margin-top:10px;  margin-bottom: 10px;");

        checkoutButton.addEventListener("click", () => {
            contactUs();
        })

        rightDiv.appendChild(h2);
        rightDiv.appendChild(hr)
        rightDiv.appendChild(totalItems);
        rightDiv.appendChild(totalAmount);
        rightDiv.appendChild(checkoutButton)
        viewDiv.appendChild(leftDiv);
        viewDiv.appendChild(rightDiv);
        cartContainer.appendChild(viewDiv);

        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("style", "width:300px; height:60px;");
        button.innerHTML = "Back";
        button.addEventListener("click", () => {
            var cartContainer = document.querySelector("#mainDiv");
            cartContainer.innerHTML = "";
            createHeader();
            createCart(data);
        })
        cartContainer.appendChild(button);
    }

}
function getBillAmount() {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for (var product of cartItems) {
        totalBill = totalBill + product.price * 1 * product.qty * 1;
    }
    return totalBill;
}

function updateQty(productId, index) {
    var qty = document.querySelector("#qtyChange" + index).value;
    var total = document.querySelector("#total" + index);

    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;

    var productIndex = cartItems.findIndex((obj) => { return obj.id == productId });
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex, 1);
    cartItems.splice(productIndex, 0, product);

    currentUserCartList.cartItems = cartItems;

    var currentUserCartListIndex = cartList.findIndex((obj) => { return obj.email == currentUser });
    cartList.splice(currentUserCartListIndex, 1);
    cartList.splice(currentUserCartListIndex, 0, currentUserCartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));

    total.innerText = "" + (product.price * 1 * qty);

    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : " + getBillAmount() + "</p>";
}
function SearchProduct() {
    // alert("rrp")
    var keywords = document.querySelector("#searchKeyword").value;
    var productList = JSON.parse(localStorage.getItem("ProductList"));
    var filterData = productList.filter((product) => { return product.title.toUpperCase().includes(keywords.toUpperCase()) });

    document.querySelector("#cartContainer").remove();
    if (filterData.length == 0)
        createCart(productList);
    else
        createCart(filterData);
}

function contactUs() {
   
    var mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";
    mainDiv.setAttribute("class", "d-flex justify-content-center align-items-center")

    var formDiv = document.createElement("div");
    formDiv.setAttribute("style", "width: 40%; height:100%;margin-top:80px;box-shadow: 4px 4px 10px 10px grey; ");

    var h1 = document.createElement("h1");
    h1.innerHTML = "Delivery Details";
    h1.setAttribute("style", "font-weight: bolder; font-size: 3rem;margin-left:148px;");
    formDiv.appendChild(h1);


    var form = document.createElement("form");
    // form.setAttribute("class","form form-group");
    form.setAttribute("style", "display:flex;justify-content:center;flex-direction: column;align-items:center;margin-top:50px;border-radius:25px;")

   
    var name = document.createElement("input");
    // name.setAttribute("");
    name.setAttribute("style", "width:70%;height:40px;margin-top:20px;border-radius:25px;");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Enter Your Name");
    form.appendChild(name);

    var lname = document.createElement("input");
    // lname.setAttribute("class","form-control");
    lname.setAttribute("style", "width:70%;height:40px;margin-top:20px;border-radius:25px;");
    lname.setAttribute("type", "text");
    lname.setAttribute("placeholder", "Enter Your Last Name");
    form.appendChild(lname);

    var mobile = document.createElement("input");
    // mobile.setAttribute("class", "form-control");
    mobile.setAttribute("style", "width:70%;height:40px;margin-top:20px;border-radius:25px;");
    mobile.setAttribute("type", "text");
    mobile.setAttribute("placeholder", "Enter Your Mobile Number");
    form.appendChild(mobile);

    var email = document.createElement("input");
    // email.setAttribute("class", "form-control");
    email.setAttribute("style", "width:70%;height:40px;margin-top:20px;border-radius:25px;");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Enter Your Email");
    form.appendChild(email);

    var textarea = document.createElement("textarea");
    textarea.setAttribute("style", "width:70%;height:110px;margin-top:20px;border-radius:25px;");
    textarea.setAttribute("type", "email");
    textarea.setAttribute("placeholder", "Address");
    form.appendChild(textarea);

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("style", "width:120px; height:40px;margin-left:110px;margin-top:10px;");
    button.innerHTML = "Submit";

    button.addEventListener("click", () => {
        alert("Succesfully Submit");
        var mainDiv = document.querySelector("#mainDiv");
        mainDiv.innerHTML = "";
        createHeader();
        createCart(JSON.parse(localStorage.getItem("ProductList")));
    })
    
    var button1 = document.createElement("button");
    button1.setAttribute("class", "btn btn-primary");
    button1.setAttribute("style", "width:100px; height:40px;margin-top:10px;margin-left:50px;");
    button1.innerHTML = "Back";
    button1.addEventListener("click", () => {
        var cartContainer = document.querySelector("#mainDiv");
        cartContainer.innerHTML = "";
        createHeader();
        createCart(data);
    })
    formDiv.appendChild(form);
    formDiv.appendChild(button);
    formDiv.appendChild(button1);
    // formDiv.appendChild(a);
    mainDiv.appendChild(formDiv);

}