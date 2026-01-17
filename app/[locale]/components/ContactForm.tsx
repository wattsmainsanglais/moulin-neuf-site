'use client'

import { useRef, useState } from "react"
import { submitContactForm } from "../submitContactForm"
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useTranslations('Contact')

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus(null)

    const result = await submitContactForm(formData)

    if (result.error) {
      setStatus({ message: result.error, isError: true })
    } else {
      setStatus({ message: result.message || t('SuccessMessage'), isError: false })
      formRef.current?.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 px-6 md:px-10 lg:px-36 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-forest tracking-tight">
          {t('Title')}
        </h2>
        <p className="text-center text-gray-800/70 mb-12 max-w-2xl mx-auto tracking-tight">
          {t('Description')}
        </p>

        <div className="bg-cream p-8 rounded-lg">
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2 tracking-tight">
                {t('Name')} <span className="text-sage">{t('Required')}</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-all text-gray-800"
                placeholder={t('NamePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2 tracking-tight">
                {t('Email')} <span className="text-sage">{t('Required')}</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-all text-gray-800"
                placeholder={t('EmailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-800 mb-2 tracking-tight">
                {t('Phone')}
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                className="w-full px-4 py-3 bg-white border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-all text-gray-800"
                placeholder={t('PhonePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2 tracking-tight">
                {t('Message')} <span className="text-sage">{t('Required')}</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-all resize-none text-gray-800"
                placeholder={t('MessagePlaceholder')}
              />
            </div>

            {status && (
              <div
                className={`p-4 rounded-lg ${
                  status.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t('Sending')}
                </>
              ) : (
                t('SendMessage')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
