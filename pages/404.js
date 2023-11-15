import Link from 'next/link';
import ErrorRobot from '../components/404/ErrorRobot';

function Page404() {
  return (
    <div style={{ marginTop: '10%' }}>
      <ErrorRobot />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        href="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default Page404;
