import Image from 'next/image';
import img from './error.gif';

const ErrorRobot = () => {
  return (
    <Image
      alt="error"
      style={{
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto',
        backgroundColor: '#ecd5f5',
      }}
      src={img}
    />
  );
};

export default ErrorRobot;
