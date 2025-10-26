import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          borderRadius: '6px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '20px' }}>
          <div style={{ width: '20px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '1px', opacity: 0.9 }} />
          <div style={{ width: '20px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '1px', opacity: 0.7 }} />
          <div style={{ width: '20px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '1px', opacity: 0.5 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
