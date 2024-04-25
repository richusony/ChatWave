import crypto from "crypto";

// Function to encrypt messages
export const encryptMessage = (message, key) => {
  const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encryptedMessage = cipher.update(message, "utf8", "hex");
  encryptedMessage += cipher.final("hex");
  return {
    iv: iv.toString("hex"), // Convert IV to hexadecimal string for storage
    encryptedMessage,
  };
};


export const decryptMessage = (encryptedMessage, ivHex) => {
const algorithm = "aes-256-cbc"; // Using AES-256 in CBC mode as an example
const secretKey = Buffer.from(process.env.MESSAGE_ENCRYPTION_KEY, "base64"); // Replace this with your actual secret key
  try {
    // const key = crypto
    //   .createHash("sha256")
    //   .update(secretKey)
    //   .digest("base64")
    //   .substring(0, 32); // Derive a key of appropriate length
    const iv = Buffer.from(ivHex, "hex"); // Convert IV from hexadecimal string to Buffer
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
    let decrypted = decipher.update(encryptedMessage, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
