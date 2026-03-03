import nodemailer from 'nodemailer'
import { z } from 'zod'

// Define the schema for the contact form
const ContactSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email().min(5).max(255),
    phone: z.string().optional().or(z.literal('')),
    interest: z.string().optional().or(z.literal('')),
    budget: z.string().optional().or(z.literal('')),
    timeline: z.string().optional().or(z.literal('')),
    message: z.string().min(10).max(10_000),
})

export default defineEventHandler(async (event) => {
    // Validate request body with Zod (throws 400 automatically if it fails)
    const body = await readValidatedBody(event, (b) => ContactSchema.parse(b))

    const config = useRuntimeConfig()

    // Create transporter (Gmail example)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.mailUser,
            pass: config.mailPass,
        },
    })

    // Build a clean email
    const subject = `New message from ${body.name}`
    const text = [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        body.phone ? `Phone: ${body.phone}` : null,
        body.interest ? `Interest: ${body.interest}` : null,
        body.budget ? `Budget: ${body.budget}` : null,
        body.timeline ? `Timeline: ${body.timeline}` : null,
        '',
        body.message,
    ]
        .filter(Boolean)
        .join('\n')

    await transporter.sendMail({
        from: config.mailUser,          // your authenticated sender
        to: config.mailTo,              // your contact inbox
        replyTo: body.email,            // reply goes to the user
        subject,
        text,
        html: text.replace(/\n/g, '<br/>'),
    })

    return { ok: true }
})
