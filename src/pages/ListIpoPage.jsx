import { ipoData } from "../utils/data.js";

const ListIpoPage = () => {
  return (
    <main className=" p-2" role="main" aria-label="IPO list">
      <table
        className="ipo-table w-100"
        role="table"
        aria-label="Upcoming IPOs"
      >
        {/* <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup> */}

        <thead
          className="border"
          style={{ background: "#E8E8E8", color: "#7a7a7aff" }}
        >
          <tr role="row">
            <th role="columnheader">
              <div className="px-3 py-2 fw-normal" style={{ fontSize: "0.8rem" }}>
                Company / Issue date
              </div>
            </th>

            <th role="columnheader">
              <div className="px-3 py-2 fw-normal" style={{ fontSize: "0.8rem" }}>
                Issue size
              </div>
            </th>

            <th role="columnheader">
              <div className="px-3 py-2 fw-normal" style={{ fontSize: "0.8rem" }}>
                Price range
              </div>
            </th>

            {/* note: use className in JSX */}
            <th role="columnheader" className="text-right">
              <div className="px-3 py-2 fw-normal" style={{ fontSize: "0.8rem" }}>
                Min invest/qty
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {ipoData.map((item) => (
            <tr role="row" className="border" key={item.id}>
              <td
                role="cell"
                className="p-3 "
                data-label="Company / Issue date"
              >
                <div
                  className="company d-flex gap-2 align-items-center"
                  aria-hidden="false"
                >
                  <div className="logo">
                    <img
                      src={item.companyLogo}
                      style={{
                        border: "1px solid #C8C8C8",
                        borderRadius: "50%",
                      }}
                      alt="Company image"
                      height={30}
                      width={30}
                    />
                  </div>
                  <div className="meta d-flex flex-column">
                    <span className="name fw-bold">{item.companyName}</span>
                    <span
                      className="date text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {item.isIssued ? item.issueStartDate : "To be announced"}
                    </span>
                  </div>
                </div>
              </td>

              <td role="cell" className="p-3 " data-label="Issue size">
                <div className="amount fw-bold">{item.issueSize}</div>
              </td>

              <td role="cell" className="p-3 " data-label="Price range">
                <div className="amount fw-bold">₹{item.priceRange}</div>
              </td>

              <td
                role="cell"
                data-label="Min invest/qty"
                className="min-invest d-flex flex-column p-3"
              >
                <span className="amount fw-bold ms-4">
                  ₹{item.minimumInvestment}
                </span>
                <span className="sub text-muted" style={{ fontSize: "0.8rem" }}>
                  100 Shares / 5 Lots
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ListIpoPage;
