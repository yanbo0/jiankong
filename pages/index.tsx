import Head from 'next/head';
import { pageConfig, workerConfig } from '../config';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{pageConfig.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>{pageConfig.title}</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
          系统正在后台监控 {workerConfig.monitors.length} 个政策网站的可用性
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {pageConfig.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                padding: '0.8rem 1.5rem', 
                backgroundColor: '#f0f4ff', 
                color: '#1a73e8', 
                textDecoration: 'none', 
                borderRadius: '8px',
                border: '1px solid #d0d7de'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
