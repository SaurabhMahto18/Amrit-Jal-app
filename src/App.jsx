
import { useState } from 'react';
import { Droplets, LayoutDashboard, Users, Truck, Wallet, Receipt, Languages } from 'lucide-react';

const modules = [
  { name: 'Dashboard', hindi: 'डैशबोर्ड', icon: LayoutDashboard },
  { name: 'Customers', hindi: 'ग्राहक', icon: Users },
  { name: 'Deliveries', hindi: 'डिलीवरी', icon: Truck },
  { name: 'Payments', hindi: 'भुगतान', icon: Wallet },
  { name: 'Expenses', hindi: 'खर्चे', icon: Receipt },
];

export default function App() {
  const [hindi, setHindi] = useState(false);
  const [active, setActive] = useState('Dashboard');
  const selected = modules.find((item) => item.name === active);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <Droplets size={30} />
          <div><strong>Amrit Jal</strong><small>Water Supply Manager</small></div>
        </div>
        <nav>
          {modules.map(({ name, hindi: hi, icon: Icon }) => (
            <button key={name} className={active === name ? 'nav-item active' : 'nav-item'}
              onClick={() => setActive(name)}>
              <Icon size={19} /> {hindi ? hi : name}
            </button>
          ))}
        </nav>
        <button className="language" onClick={() => setHindi(!hindi)}>
          <Languages size={18} /> {hindi ? 'Switch to English' : 'हिंदी में देखें'}
        </button>
      </aside>

      <main className="main">
        <header className="topbar">
          <div><small>{hindi ? 'अमृत जल प्रबंधन' : 'AMRIT JAL MANAGEMENT'}</small>
            <h1>{hindi ? selected.hindi : selected.name}</h1></div>
          <span className="status">● {hindi ? 'सेटअप चरण' : 'Setup phase'}</span>
        </header>

        {active === 'Dashboard' ? (
          <>
            <section className="welcome">
              <Droplets size={34} />
              <div><h2>{hindi ? 'अमृत जल में आपका स्वागत है' : 'Welcome to Amrit Jal'}</h2>
                <p>{hindi ? 'अपने पानी सप्लाई व्यवसाय को एक जगह से मैनेज करें।' : 'Manage your water supply business from one place.'}</p></div>
            </section>
            <section className="stats">
              {[
                ['Total Customers', 'ग्राहक', '—'],
                ['Today Deliveries', 'आज की डिलीवरी', '—'],
                ['Payments Received', 'प्राप्त भुगतान', '₹ —'],
                ['Outstanding Balance', 'बाकी राशि', '₹ —'],
              ].map(([label, hi, value]) => (
                <article className="stat" key={label}>
                  <span>{hindi ? hi : label}</span><strong>{value}</strong>
                  <small>{hindi ? 'डेटाबेस कनेक्शन बाकी' : 'Database connection pending'}</small>
                </article>
              ))}
            </section>
          </>
        ) : (
          <section className="placeholder">
            <selected.icon size={38} />
            <h2>{hindi ? selected.hindi : selected.name}</h2>
            <p>{hindi ? 'इस मॉड्यूल का काम अगले चरण में शुरू होगा।' : 'Implementation for this module will be added in the next phase.'}</p>
          </section>
        )}

        <p className="notice">
          {hindi ? 'यह शुरुआती एप्लिकेशन ढांचा है। अभी कोई वास्तविक ग्राहक या वित्तीय डेटा सेव नहीं होता।' :
            'Foundation preview: no real customer or financial data is saved yet.'}
        </p>
      </main>
    </div>
  );
}
