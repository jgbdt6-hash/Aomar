// مصفوفة لتخزين المنتجات في السلة
let cart = [];

// دالة إضافة منتج للسلة
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
    alert(`✅ تم إضافة ${productName} إلى السلة`);
}

// دالة تحديث عرض السلة
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    
    // تفريغ القائمة الحالية
    cartList.innerHTML = '';
    
    let total = 0;
    
    // إضافة كل منتج كعنصر في القائمة
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price}$ <button onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
        total += item.price;
    });
    
    totalSpan.textContent = total;
}

// دالة حذف منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// دالة تفريغ السلة بالكامل
function clearCart() {
    cart = [];
    updateCartDisplay();
    alert('🗑️ تم تفريغ السلة');
}

// دالة إتمام الشراء
function checkout() {
    if (cart.length === 0) {
        alert('⚠️ السلة فارغة! أضف بعض المنتجات أولاً.');
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`🎉 تم إتمام عملية الشراء بنجاح!\nالمجموع: ${total}$\nشكراً لتسوقك معنا 💖`);
    
    // تفريغ السلة بعد الشراء
    clearCart();
}
