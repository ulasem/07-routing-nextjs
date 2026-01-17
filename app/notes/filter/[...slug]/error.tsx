'use client';

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return <p>Not found! {error.message}</p>;
};

export default Error;
