'use server'

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
  const message = formData.get('message')?.toString().trim() ?? ''

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  // TODO: wire up email delivery (Resend, SendGrid, etc.)
  // For now, log to server console
  console.log('Contact form submission:', { name, email, message })

  return { success: true, error: null }
}
