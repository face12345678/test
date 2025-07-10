function checkPassword() {
  const correctPassword = "1234"; // 🔐 ตั้งรหัสผ่านตรงนี้
  const input = prompt("กรุณาใส่รหัสผ่านเพื่อเข้าสู่เว็บไซต์:");

  if (input !== correctPassword) {
    alert("รหัสผิดนะจ๊ะ 🛑");
    window.location.href = "https://google.com"; // หรือ redirect ไปหน้าอื่น
  }
}
