require("dotenv").config();
const nodemailer = require("nodemailer");

// Function to generate a random number
const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com", // Correct host
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const sendMail = async (transporter) => {
  const randomNumber = generateRandomNumber(); // Generate the random number
  const mailOptions = {
    from: {
      name: "AMINE",
      address: process.env.USER,
    }, // sender address
    to: "saddedineaminetahar@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Hello world? Your random number is: ${randomNumber}`, // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
        <h1 style="color: #4CAF50;">Here is your Random Number!</h1>
        <p style="font-size: 18px; color: #333;">Your generated number is:</p>
        <div style="font-size: 24px; font-weight: bold; color: #ff5722;">
          ${randomNumber}
        </div>
        <p style="font-size: 14px; color: #888;">
          Thank you for using our service!
        </p>
      </div>
    `, // html body
  };

  try {
    const info = await transporter.sendMail(mailOptions); // Capture the result in `info`
    console.log("Email sent: " + info.response); // Now `info.response` is defined
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

sendMail(transporter);
