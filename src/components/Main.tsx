type DataType = {
  title: string;
  [key: string]: any; // Add this if the object has other properties
};

interface MainProps {
  data: DataType | null;
}

export default function Main({ data }: MainProps) {
  return (
    <div className="imgContainer">
      <img src={data?.url} alt="mars-demo-pic" className="bgImage" />
    </div>
  );
}
