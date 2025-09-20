import { TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const projectionsData = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 22 },
  { month: 'Mar', value: 28 },
  { month: 'Apr', value: 25 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 27 },
]

const revenueData = [
  { month: 'Jan', current: 24, previous: 22 },
  { month: 'Feb', current: 28, previous: 25 },
  { month: 'Mar', current: 22, previous: 28 },
  { month: 'Apr', current: 30, previous: 27 },
  { month: 'May', current: 26, previous: 30 },
  { month: 'Jun', current: 32, previous: 29 },
  { month: 'Jul', current: 29, previous: 33 },
  { month: 'Aug', current: 35, previous: 30 },
  { month: 'Sep', current: 31, previous: 36 },
  { month: 'Oct', current: 38, previous: 32 },
  { month: 'Nov', current: 34, previous: 40 },
  { month: 'Dec', current: 40, previous: 35 },
]

const productsData = [
  { id: 1, name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { id: 2, name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { id: 3, name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { id: 4, name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { id: 5, name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
]

const salesData = [
  { name: 'Online', value: 400, color: '#0ea5e9' },
  { name: 'Store', value: 300, color: '#8b5cf6' },
  { name: 'Referral', value: 300, color: '#f43f5e' },
]

const locations = [
  { city: 'New York', value: '72K' },
  { city: 'San Francisco', value: '39K' },
  { city: 'Sydney', value: '25K' },
  { city: 'Singapore', value: '61K' },
]

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">eCommerce</h1>

      {/* First Layer - KPI Cards + Projections Chart (50-50% split, 252px height) */}
      <div className="grid grid-cols-1 xl:grid-cols-2" style={{ gap: '28px', height: '252px' }}>
        {/* Left Side - 2x2 KPI Grid (50% width) */}
        <div className="grid grid-cols-2 h-full" style={{ gap: '28px' }}>
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-xl flex flex-col justify-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Customers</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">3,781</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp size={12} className="mr-1" />
                +11.01%
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 flex flex-col justify-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Orders</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">1,219</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingUp size={12} className="mr-1 rotate-180" />
                -0.03%
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl flex flex-col justify-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Revenue</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">$695</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp size={12} className="mr-1" />
                +15.03%
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl flex flex-col justify-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Growth</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">30.1%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp size={12} className="mr-1" />
                +6.08%
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projections vs Actuals Chart (50% width) */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 h-full">
          <div className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Projections vs Actuals</div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
                <Tooltip />
                <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Second Layer - Revenue Chart and Revenue by Location (70-30% split, 318px height) */}
      <div className="grid grid-cols-1 xl:grid-cols-10" style={{ gap: '28px', height: '318px' }}>
        {/* Revenue Chart (70% width) */}
        <div className="xl:col-span-7 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50 h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-slate-900">Revenue</div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                <span className="text-slate-600">Current Week $58,211</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-slate-400 rounded-full"></div>
                <span className="text-slate-600">Previous Week $68,768</span>
              </div>
            </div>
          </div>
          <div className="flex-1" style={{ height: 'calc(100% - 60px)' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#1f2937" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="previous" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by Location (30% width) */}
        <div className="xl:col-span-3 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50 h-full">
          <div className="font-semibold text-slate-900 mb-4">Revenue by Location</div>
          
          {/* World Map SVG */}
          <div className="h-40 mb-4 relative bg-slate-50 rounded-lg overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Simple world map outlines */}
              <path d="M 80 60 L 120 55 L 140 70 L 130 90 L 90 85 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 160 80 L 200 75 L 220 90 L 210 110 L 170 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 240 70 L 280 65 L 300 80 L 290 100 L 250 95 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 60 120 L 100 115 L 120 130 L 110 150 L 70 145 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 140 110 L 180 105 L 200 120 L 190 140 L 150 135 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 220 100 L 260 95 L 280 110 L 270 130 L 230 125 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 300 90 L 340 85 L 360 100 L 350 120 L 310 115 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
              
              {/* Location dots */}
              <circle cx="100" cy="70" r="3" fill="#3b82f6" />
              <circle cx="180" cy="90" r="3" fill="#3b82f6" />
              <circle cx="260" cy="80" r="3" fill="#3b82f6" />
              <circle cx="320" cy="100" r="3" fill="#3b82f6" />
            </svg>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {locations.map((location, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-slate-600">{location.city}</span>
                <span className="text-slate-900 font-medium">{location.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Layer - Products Table and Sales Chart (70-30% split) */}
      <div className="grid grid-cols-1 xl:grid-cols-10" style={{ gap: '28px' }}>
        {/* Top Selling Products (70% width) */}
        <div className="xl:col-span-7 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50">
          <div className="font-semibold text-slate-900 mb-4">Top Selling Products</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-left">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Quantity</th>
                  <th className="pb-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="py-3 text-slate-900">{product.name}</td>
                    <td className="py-3 text-slate-600">{product.price}</td>
                    <td className="py-3 text-slate-600">{product.quantity}</td>
                    <td className="py-3 text-slate-900 font-medium">{product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Sales Pie Chart (30% width) */}
        <div className="xl:col-span-3 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-200/50">
          <div className="font-semibold text-slate-900 mb-4">Total Sales</div>
          <div className="h-40 flex items-center justify-center relative">
            <PieChart width={160} height={160}>
              <Pie
                data={salesData}
                cx={80}
                cy={80}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900">38.6%</div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {salesData.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="text-slate-900 font-medium">${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
