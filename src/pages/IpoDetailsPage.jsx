import { useNavigate, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import IPODetails from "../components/IPODetails";
import IPOTimeLine from "../components/IPOTimeLine";
import CompanyDetails from "../components/CompanyDetails";
import { ipoData } from "../utils/data.js";

const IpoDetailsPage = () => {
  const { companyId } = useParams();
  const companyData = ipoData.find((item) => item.id === Number(companyId))
  const navigate = useNavigate();
    const timelineItems = [
    { title: "Bidding starts", date: "12 Dec 2023", completed: true },
    { title: "Bidding ends", date: "15 Dec 2023", completed: true },
    { title: "Allotment finalization", date: "18 Dec 2023", completed: false },
    { title: "Refund initiation", date: "18 Dec 2023", completed: false },
    { title: "Demat transfer", date: "18 Dec 2023", completed: false },
    { title: "Listing date", date: "21 Dec 2023", completed: false },
  ];
  return (
    <>
    {/* header */}
    <div className="p-3">

        <h5 className="text-muted mt-2 px-3" style={{fontSize:'0.8rem'}}>Home <span className="mx-2">{">"}</span> Market Watch</h5>
      {/* header section */}
      <div className="header d-flex justify-content-between align-items-center px-3 py-4">
        {/* left section */}
        <div className="left-sec d-flex gap-3">
          <button className="btn back-button" onClick={() => navigate(`/`)}><FaAngleLeft /></button>
          <div className="branch-det d-flex gap-2 align-items-center">
            <div className="logo">
              <img
                src={companyData.companyLogo}
                style={{
                  border: "1px solid #C8C8C8",
                  borderRadius: "50%",
                }}
                alt="Company image"
                height={39}
                width={39}
              />
            </div>
            <div className="meta d-flex flex-column">
              <span className="name fw-bold">{companyData.companyName}</span>
              <span className="date text-muted" style={{ fontSize: "0.8rem" }}>
                {companyData.companyFullName}
              </span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="right-sec d-flex gap-3 align-items-center">
            <button className=" btn donwload-btn">
                <img src="../../public/download-icon.png" height={39} width={39} alt="download" />
            </button >
            <button className="btn apply-button  rounded-3 text-white " style={{background:"#000066"}}>Applynow</button>
        </div>
      </div>

      {/* IPO details */}
    <div className="box-container">

    <IPODetails data={{}} />
    </div>

    <div className="box-container">

    <IPOTimeLine items={timelineItems} />
    </div>
    </div>

    <div className="box-container">
                
        <CompanyDetails companyName={companyData.companyFullName} about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem cumque laboriosam non autem corrupti numquam repudiandae error excepturi magnam ullam cum nemo culpa, natus tempore! Aliquam unde nesciunt distinctio."/>
    </div>

    
    
    </>
  );
};

export default IpoDetailsPage;
