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

// 🔴 الدالة الجديدة: إرسال الطلب إلى واتساب
function checkout() {
    if (cart.length === 0) {
        alert('⚠️ السلة فارغة! أضف بعض المنتجات أولاً.');
        return;
    }
    
    // حساب المجموع
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // تحضير رسالة الواتساب
    let message = "🛍️ *طلب شراء جديد* 🛍️%0A%0A";
    message += "*المنتجات المطلوبة:*%0A";
    
    // إضافة كل منتج في الرسالة
    cart.forEach((item, index) => {
        message += `${index + 1}- ${item.name} : ${item.price}$%0A`;
    });
    
    message += `%0A*المجموع الكلي:* ${total}$%0A`;
    message += `%0Aشكراً لتسوقكم معنا 💖`;
    
    // 🔴 استبدل هذا الرقم برقم هاتفك (بدون علامات + أو مسافات)
    // مثال: 966512345678 للسعودية، 971501234567 للإمارات
    let phoneNumber = "905367893256"; // ⚠️ غير هذا الرقم إلى رقمك الحقيقي
    
    // رابط واتساب المباشر
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // فتح الواتساب
    window.open(whatsappUrl, '_blank');
    
    // رسالة تأكيد للمستخدم
    alert(`🎉 سيتم تحويلك إلى واتساب لإتمام الطلب\nالمجموع: ${total}$`);
}
