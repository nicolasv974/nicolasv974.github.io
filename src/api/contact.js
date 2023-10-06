// api/contact.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configuration de nodemailer pour l'envoi d'e-mails
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ninivyvy7@gmail.com',
                pass: 'Azerty1*'
            }
        });

        // Contenu de l'e-mail
        const mailOptions = {
            from: ` ${email}`,
            to: 'ninivyvy7@gmail.com',
            subject:  `Nouveau message de formulaire de contact de : ${name} `,
            text: `${message}`
        };

        // Envoi de l'e-mail
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Formulaire soumis avec succès' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
