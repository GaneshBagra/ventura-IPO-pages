import { useState } from "react";

export default function CompanyDetails({
  companyName = "OYO Private Limited",
}) {
  const [expanded, setExpanded] = useState(false);

  const about = `Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.

Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.`;

  // number of chars to show in mobile preview (tweak as needed)
  const previewLength = 170;
  const isLong = about && about.length > previewLength;
  const previewText = isLong
    ? about.slice(0, previewLength).trim() + "…"
    : about;

  // helper to render paragraphs (keeps markup sane if about contains newlines)
  const renderParagraphs = (text) =>
    text.split("\n\n").map((p, i) => (
      <p key={i} className="mb-3 company-paragraph">
        {p}
      </p>
    ));

  return (
    <div className="company-details-wrapper px-3">
      <div className="card border-0 rounded-3 company-card p-3 p-md-4">
        {/* Desktop heading */}
        <h6 className="company-heading d-none d-md-block fw-bold">About the company</h6>

        {/* Mobile heading (replaces "About the company" with the company name) */}
        <h6 className="company-heading d-md-none">{companyName}</h6>

        <div className="company-content mt-2">
          {/* Desktop: always show full paragraphs */}
          <div className="d-none d-md-block company-about-desktop">
            {renderParagraphs(about)}
          </div>

          {/* Mobile: preview + read more toggle */}
          <div className="d-md-none company-about-mobile">
            {!isLong && <div>{renderParagraphs(about)}
                
                
                </div>}

            {isLong && !expanded && (
              <div>
                <p className="mb-2 company-paragraph">{previewText}</p>
                <button
                  type="button"
                  className="btn text-danger btn-link p-0 read-more"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </button>
              </div>
            )}

            {isLong && expanded && (
              <div>
                {renderParagraphs(about)}
                <button
                  type="button"
                  className="btn btn-link text-danger p-0 read-more"
                  onClick={() => setExpanded(false)}
                >
                  Read less
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
