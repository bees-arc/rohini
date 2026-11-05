import {notFound} from 'next/navigation';
import {originalServices} from '../../lib/services';
export function generateStaticParams(){return originalServices.map(s=>({service:s.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}){const {service}=await params;const s=originalServices.find(s=>s.slug===service);return {title:s?.title,description:s?.description}}
export default async function ServicePage({params}){const {service}=await params;const s=originalServices.find(s=>s.slug===service);if(!s)notFound();return <main><section className="section service-detail"><a className="textlink" href="/#services">← All services</a><div className="story"><div><p className="eyebrow">OUR SERVICES</p><h1>{s.title}</h1><p>{s.description}</p><p>For more information on our services or to discuss how we can assist you, please contact us.</p><a className="button" href="tel:+94112840555">Call for assistance ↗</a></div><img src={s.image} alt={s.title}/></div></section></main>}
