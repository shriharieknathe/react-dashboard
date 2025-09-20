import { Bug, UserPlus } from 'lucide-react'

const notifications = [
  { id: 1, icon: Bug, text: 'You have a bug that needs...', time: 'Just now' },
  { id: 2, icon: UserPlus, text: 'New user registered', time: '59 minutes ago' },
  { id: 3, icon: Bug, text: 'You have a bug that needs...', time: '12 hours ago' },
  { id: 4, icon: UserPlus, text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' },
]

const activities = [
  { id: 1, avatar: 'https://i.pravatar.cc/40?img=1', text: 'You have a bug that needs...', time: 'Just now' },
  { id: 2, avatar: 'https://i.pravatar.cc/40?img=2', text: 'Released a new version', time: '59 minutes ago' },
  { id: 3, avatar: 'https://i.pravatar.cc/40?img=3', text: 'Submitted a bug', time: '12 hours ago' },
  { id: 4, avatar: 'https://i.pravatar.cc/40?img=4', text: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
  { id: 5, avatar: 'https://i.pravatar.cc/40?img=5', text: 'Deleted a page in Project X', time: 'Feb 2, 2023' },
]

const contacts = [
  { id: 1, name: 'Natali Craig', avatar: 'https://i.pravatar.cc/40?img=11' },
  { id: 2, name: 'Drew Cano', avatar: 'https://i.pravatar.cc/40?img=12' },
  { id: 3, name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/40?img=13' },
  { id: 4, name: 'Andi Lane', avatar: 'https://i.pravatar.cc/40?img=14' },
  { id: 5, name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/40?img=15' },
  { id: 6, name: 'Koray Okumus', avatar: 'https://i.pravatar.cc/40?img=16' },
]

export default function Rightbar() {
  return (
    <aside className="hidden xl:block w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sticky top-0 h-svh overflow-auto">
      <div className="space-y-6">
        {/* Notifications Section */}
        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Notifications</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3">
                <div className="mt-1 p-1.5 rounded-lg bg-slate-100">
                  <notification.icon size={14} className="text-slate-600" />
                </div>
                <div className="flex-1 text-sm">
                  <div className="text-slate-700">{notification.text}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{notification.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Activities</h3>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <img 
                  src={activity.avatar} 
                  alt="User" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 text-sm">
                  <div className="text-slate-700">{activity.text}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="font-semibold mb-3 text-slate-900">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer">
                <img 
                  src={contact.avatar} 
                  alt={contact.name} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm font-medium text-slate-700">
                  {contact.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
