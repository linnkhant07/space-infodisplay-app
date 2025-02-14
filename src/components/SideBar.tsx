type DataType = {
  title: string;
  [key: string]: any; // Add this if the object has other properties
};

interface sidebarProps {
  handleToggleModal: () => void;
  data: DataType | null;
}

export default function SideBar({ handleToggleModal, data }: sidebarProps) {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <p id="descriptionText">Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button>
          <i className="fa-solid fa-right-long" onClick={handleToggleModal}></i>
        </button>
      </div>
    </div>
  );
}
