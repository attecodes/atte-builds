'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface FormState {
  success: boolean
  error: string | null
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get('name')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const phone = formData.get('phone')?.toString().trim() ?? ''
  const projectType = formData.get('projectType')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const { error } = await resend.emails.send({
    from: 'SD Finish <onboarding@resend.dev>',
    to: 'atte.myllykoski@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      projectType ? `Project type: ${projectType}` : null,
      `\nMessage:\n${message}`,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return { success: false, error: 'Failed to send message. Please try again or call us directly.' }
  }

  return { success: true, error: null }
}
