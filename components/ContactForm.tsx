"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/contact/actions";

interface FormState {
  success: boolean;
  error: string | null;
}

const initialState: FormState = { success: false, error: null };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.success) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-medium text-lg">
          Message received — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-800 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-stone-800 mb-1"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="(619) 555-0100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-800 mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-stone-800 mb-1"
        >
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        >
          <option value="">Select one&hellip;</option>
          <option value="siding">Siding</option>
          <option value="cabinet">Cabinets</option>
          <option value="door">Doors</option>
          <option value="window">Windows</option>
          <option value="stairs">Stairs</option>
          <option value="handrails">Handrails</option>
          <option value="trim">Trim</option>
          <option value="other">Other / Multiple</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-800 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green resize-y"
          placeholder="Tell us about your project — scope, location, timeline, and any specifics."
        />
      </div>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto px-8 py-3 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
