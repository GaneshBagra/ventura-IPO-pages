export default function IPODetails({ data }) {
  const {
    issueSize = '100- 300 crore',
    priceRange = "₹50-60",
    minAmount = "₹5000",
    minQty = "100 Shares / 5 Lots",
    issueDates ='4th - 7th Oct 2022',
    listedOn = '10th Oct 2022',
    listedPrice = '₹60',
    listingGains = '₹10',
    listingGainErrorPostive = false,  
    listingGainsError = "20.0%"
  } = data;


  const Item = ({ label, value, mutedLabel }) => (
    <div className="ipo-item">
      <div className="ipo-label small text-muted">{label}</div>
      <div className="ipo-value fw-semibold">{value}</div>
      {mutedLabel && <div className="ipo-sub small text-muted">{mutedLabel}</div>}
    </div>
  );

  return (
    <div className="ipo-card card border-0 p-3">
      <div className="card-body p-0">
        <h6 className="ipo-title mb-3">IPO details</h6>

        {/* Inner rounded container */}
        <div className="ipo-inner  rounded-3 p-3">
          {/* Desktop layout: visible md and up */}
          <div className="d-none d-md-block">
            <div className="row gx-4">
              <div className="col-md-3">
                <Item label="Issue size" value={issueSize} />
                {/* small gap */}
              </div>
              <div className="col-md-3">
                <Item label="Price range" value={priceRange} />
              </div>
              <div className="col-md-3">
                <Item label="Minimum amount" value={minAmount} />
              </div>
              <div className="col-md-3">
                <Item label="Lot size" value={minQty} />
              </div>
            </div>

            {/* optional second row with dates/listed info */}
            {(issueDates || listedOn || listedPrice || listingGains) && (
              <div className="row gx-4 mt-3 small">
                <div className="col-md-3">
                  <div className="text-muted">Issue dates</div>
                  <div className="fw-semibold">{issueDates}</div>
                </div>
                <div className="col-md-3">
                  <div className="text-muted">Listed on</div>
                  <div className="fw-semibold">{listedOn}</div>
                </div>
                <div className="col-md-3">
                  <div className="text-muted">Listed price</div>
                  <div className="fw-semibold">{listedPrice}</div>
                </div>
                <div className="col-md-3">
                  <div className="text-muted">Listing gains</div>
                  <div className="fw-semibold">{listingGains} {" "}
                    (<span className={`${listingGainErrorPostive ? 'text-success' : 'text-danger'}`}>{listingGainsError}</span>)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile layout: visible below md — grouped two-column layout as in image 2 */}
          <div className="d-block d-md-none">
            <div className="row">
              <div className="col-6">
                <Item label="Issue size" value={issueSize} />
                <div className="mt-3">
                  <Item label="Min. Amount" value={minAmount} />
                </div>
                <div className="mt-3">
                  <div className="ipo-label small text-muted">Issue dates</div>
                  <div className="ipo-value fw-semibold">{issueDates}</div>
                </div>
              </div>

              <div className="col-6">
                <Item label="Price range" value={priceRange} />
                <div className="mt-3">
                  <Item label="Min. Quantity" value={minQty.split('/')[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}