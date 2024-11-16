import { GetServerSideProps } from 'next';

const urlDatabase: { [key: string]: string } = {}; // Replace with a real database

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shortCode } = context.params as { shortCode: string };

  const originalUrl = urlDatabase[shortCode];
  if (originalUrl) {
    return {
      redirect: {
        destination: originalUrl,
        permanent: false,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default function RedirectPage() {
  return <p>Redirecting...</p>;
}
