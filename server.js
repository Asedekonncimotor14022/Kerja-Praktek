const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); 

// Koneksi ke database sql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'percetakan_db' 
});

// Koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Database connected!');
});

// Rute chatbot
app.post('/chatbot', (req, res) => {
  console.log('Pesan diterima:', req.body.message); 

  // percakapan
  if (userMessage.includes('pesan') || userMessage.includes('order') || userMessage.includes('mau beli')) {
      botReply = 'Produk apa yang ingin Anda pesan?';
  } else if (userMessage.includes('status') || userMessage.includes('cek pesanan')) {
      botReply = 'Silakan masukkan nomor pesanan Anda untuk melacak status.';
  } else if (userMessage.includes('harga') || userMessage.includes('berapa')) {
      botReply = 'Harga tergantung jenis produk. Silakan hubungi kami untuk info lebih lanjut.';
  } else if (userMessage.includes('alamat') || userMessage.includes('lokasi')) {
      botReply = 'Kami berada di Jl. Mawar No.5, Jakarta. Apakah ada yang bisa kami bantu?';
  } else {
      botReply = 'Maaf, saya tidak mengerti. Coba pertanyaan lain atau tanyakan tentang pemesanan, harga, atau status.';
  }
  
  // Simpan percakapan ke database
  const query = 'INSERT INTO chatbot_conversations (user_message, bot_reply) VALUES (?, ?)';
  db.query(query, [userMessage, botReply], (err, result) => {
      if (err) throw err;
      res.json({ reply: botReply });
  });
});




// Menjalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
