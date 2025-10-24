import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '120px', fontWeight: 900, color: 'white', letterSpacing: '-4px', lineHeight: 1 }}>A</div>
          <div style={{ width: '90px', height: '10px', background: 'white', marginTop: '8px', borderRadius: '5px' }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
