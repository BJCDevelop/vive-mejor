import { NextApiRequest, NextApiResponse } from "next";
// Import nodemailer
import nodemailer from 'nodemailer';


export default function contact(req: NextApiRequest, res: NextApiResponse) {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        port: 587,
        host: process.env.HOST,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
        secure: false,
    });

    const mailData = {
        from: 'telemarketing@cajasullana.pe',
        to: 'telemarketing@cajasullana.pe',
        subject: `Nueva solicitud: Consulta de crédito`,
        text: req.body.dni,
        html: `
            <div>
                <h2>Nueva solicitud de consulta de crédito</h2>
                <ul>
                    <li>Nombre: ${req.body.fullname}</li>
                    <li>DNI: ${req.body.dni}</li>
                    <li>Teléfono: ${req.body.phone}</li>
                    <li>Monto: ${req.body.amount}</li>
                    <li>Cuotas: ${req.body.cuotas}</li>
                </ul>
            </div>
        `
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })

    res.status(200)
}