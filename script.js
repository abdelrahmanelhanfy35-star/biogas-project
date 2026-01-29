function showConsultants() {
    const category = document.getElementById("category").value;
    const method = document.getElementById("method").value;
    document.getElementById("result").innerHTML = `
        <div class="step">
            <h2>مستشارين مقترحين (${category})</h2>
            <p>👨‍💼 أحمد – ${category} – ⭐⭐⭐⭐☆</p>
            <p>👩‍💼 سارة – ${category} – ⭐⭐⭐⭐⭐</p>
            <p><strong>طريقة الاستشارة:</strong> ${method}</p>
            <button onclick="bookSession()">احجز جلسة</button>
        </div>
    `;
}
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const type = document.getElementById("type").value;

    if (name === "" || email === "" || password === "" || type === "") {
        document.getElementById("msg").innerText = "⚠️ من فضلك اكمل كل البيانات";
        return;
    }
    // Save user to localStorage (simple demo storage)
    try {
        const usersRaw = localStorage.getItem('consulto_users') || '[]';
        const users = JSON.parse(usersRaw);
        users.push({ name, email, type, created: new Date().toISOString() });
        localStorage.setItem('consulto_users', JSON.stringify(users));
    } catch (e) {
        // ignore storage errors for the demo
    }

    document.getElementById("msg").innerText = `✅ تم إنشاء حساب (${type}) بنجاح، مرحباً ${name}`;
    // Redirect to home after short delay
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
}

function bookSession() {
    const category = document.getElementById("category") ? document.getElementById("category").value : '';
    const method = document.getElementById("method") ? document.getElementById("method").value : '';
    alert(`✅ تم حجز جلسة: ${category} - ${method}\nسنتواصل معك لتأكيد الموعد.`);
}
