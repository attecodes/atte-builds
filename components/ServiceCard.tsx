import type { Service } from '@/types'

interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-stone-900 mb-2">{service.title}</h3>
      <p className="text-stone-700 mb-4">{service.description}</p>
      <ul className="space-y-1">
        {service.details.map((detail) => (
          <li key={detail} className="flex gap-2 text-sm text-stone-700">
            <span className="text-brand-green shrink-0">&#8212;</span>
            {detail}
          </li>
        ))}
      </ul>
    </article>
  )
}
