const express = require('express');
const nodemailer = require('nodemailer');
const bodyPraser = require('body-parser');

//Tranaspoter
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'akhlesh.6985@gmail.com',
    pass: 'fkosqafuebyozypz',
  },
});

const app = express();
app.use(bodyPraser.json());

app.get('/', async (req, res) => {
  res.send('Heyy !!');
});

app.get('/sendmail', async (req, res) => {
  let mailInfo = await transporter.sendMail({
    from: 'akhlesh.6985@gmail.com',
    to: 'adi.2002.gwl@gmail.com',
    subject: 'NODE MCU check',
    html: `<p><b>What If...?</b> ka trailer dekha tune?</p>`,
  });
  console.log('Message Sent: %s', mailInfo.messageId);
  res.send('Mail Sent!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`);
});
