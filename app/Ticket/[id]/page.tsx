const page = ({ params }: { params: { id: string } }) => {
  return <div>ticket page {params.id}</div>;
};

export default page;
