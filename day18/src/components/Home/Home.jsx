export default function Home() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: 'clamp(40px, 8vw, 75px)',
        fontWeight: '900',
        color: '#111',
        margin: 0,
        lineHeight: '1.2'
      }}>
        نظم يومك صح.
      </h1>

      <p style={{
        color: '#6b7280',
        fontSize: '18px',
        marginTop: '20px',
        maxWidth: '400px'
      }}>
        ابدا بالممكن تجد نفسك - تصنع المستحيل
      </p>

      <a href="/tasks" style={{
        marginTop: '30px',
        background: '#111827',
        color: '#fff',
        padding: '14px 32px',
        borderRadius: '999px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '16px',
        display: 'inline-block'
      }}>
        شوف مهامك
      </a>
    </div>
  );
}