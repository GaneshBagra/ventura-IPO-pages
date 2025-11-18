const CheckIcon = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M1 5.1L4.2 8.3L11 1"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function IPOTimeLine(props) {
  const items =
    props.items && props.items.length ? props.items : props.data || [];

  return (
    <div className="ipo-timeline-wrapper">
      <div className="card border-0 rounded-3 timeline-card p-3 p-md-4">
        <h6 className="mb-5 timeline-title">IPO timeline</h6>

        {/* Horizontal timeline for md+; vertical on small screens */}
        <div className="timeline d-none d-md-flex align-items-center">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <div
                key={idx}
                className={`timeline-item d-flex flex-column gap-3 align-items-center text-center ${
                  it.completed ? "completed" : "incomplete"
                } ${isLast ? "last" : ""}`}
              >
                <div
                  className="timeline-dot d-flex align-items-center justify-content-center"
                  aria-hidden
                >
                  {it.completed && <CheckIcon />}
                </div>
                <div className="mt-3 timeline-text">
                  <div className="fw-bold timeline-title-item">{it.title}</div>
                  <div className="timeline-date text-muted small" style={{fontSize:"0.8rem"}}>
                    {it.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vertical timeline for small screens */}
        <div className="timeline-vertical  mt-2">
          {items.map((it, idx) => {
            const last = idx === items.length - 1;
            return (
              <div className={`timeline-vertical-item d-flex  ${
                    it.completed ? "completed" : "incomplete"
                  } ${last ? "last" : ""}`} key={idx}>
                <div
                  className={`timeline-vertical-left me-3 ${
                    it.completed ? "completed" : "incomplete"
                  } ${last ? "last" : ""}`}
                >
                  <div
                    className={`timeline-dot-vertical ${
                      it.completed ? "completed" : "incomplete"
                    }`}
                  >
                    {it.completed && <CheckIcon />}
                  </div>
                </div>
                <div className="timeline-vertical-body">
                  <div className="fw-bold timeline-title-item">{it.title}</div>
                  <div className="timeline-date text-muted small">
                    {it.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
