import clsx from 'clsx'

export type Status = 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected'

export default function StatusBadge({ status }: { status: Status }) {
  const color = getStatusColor(status)
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ring-1',
        color.bg,
        color.text,
        color.ring,
      )}
    >
      <span className={clsx('h-1.5 w-1.5 rounded-full', color.dot)} />
      {status}
    </span>
  )
}

function getStatusColor(status: Status) {
  switch (status) {
    case 'In Progress':
      return { bg: 'bg-sky-50', text: 'text-sky-700', ring: 'ring-sky-200/60', dot: 'bg-sky-500' }
    case 'Complete':
      return { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200/60', dot: 'bg-emerald-500' }
    case 'Pending':
      return { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200/60', dot: 'bg-blue-500' }
    case 'Approved':
      return { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200/60', dot: 'bg-amber-500' }
    case 'Rejected':
      return { bg: 'bg-slate-100', text: 'text-slate-700', ring: 'ring-slate-200/60', dot: 'bg-slate-400' }
  }
}
