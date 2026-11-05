import './globals.css';
import Header from '../components/Header';
import {footerMarkup} from '../lib/markup';
export const metadata={title:{default:'Rohini Funeral Directors — Dignity, care & compassion',template:'%s — Rohini Funeral Directors'},description:'Compassionate funeral arrangements, burial and cremation services in Maharagama. Serving families since 1980.'};
export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<footer dangerouslySetInnerHTML={{__html:footerMarkup.replace('<span id="year"></span>','<span id="year">2026</span>')}}/><a className="mobile-call" href="tel:+94112840555">Call for assistance ↗</a></body></html>}
