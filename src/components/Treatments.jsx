import { useState } from 'react';
import '../css/Treatments.css';

const treatmentsList = [
  {
    topic: "Respiratory Complaints",
    subs: [
      "Cough",
      "Asthma",
      "Sinusitis",
      "Allergies",
      "Bronchitis",
      "etc."
    ],
  },
  {
    topic: "Digestive Complaints",
    subs: [
      "Piles",
      "Fissures",
      "IBS",
      "Constipation",
      "Acidity",
      "etc."
    ],
  },
  {
    topic: "Migraine & Headache",
  },
  {
    topic: "Anxiety & Depression",
  },
  {
    topic: "Kidney Stones",
  },
  {
    topic: "Gall Bladder Stones",
  },
  {
    topic: "Skin Diseases",
    subs: [
      "Eczema",
      "Psoriasis",
      "Corns",
      "Acne",
      "Fungal Infections",
      "etc."
    ],
  },
  {
    topic: "Sciatica",
  },
  {
    topic: "Joint Pain & Back Pain",
  },
  {
    topic: "Menstrual Disorders",
    subs: [
      "PCOD",
      "Irregular Periods",
      "Menstrual Pains",
      "etc."
    ]
  },
  {
    topic: "Sleep Disorders",
    subs: [
      "Insomnia",
      "Sleep Apnea",
      "Snoring",
      "etc."
    ]
  },
  {
    topic: "Children Care",
    subs: [
      "Behavioural problems",
      "Learning issues",
      "Growth Concerns",
      "etc."
    ]
  }
];

export default function Treatments() {
  const [expanded, setExpanded] = useState(false);
  const mobileInitial = 4; 


  function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  // Render each topic+subs
  const renderTopic = ({ topic, subs }, key) => (
    <div className="treatment-topic" key={topic + key}>
      <div className="treat-topic-title">{topic}</div>
      {Array.isArray(subs) && subs.length > 0 && (
        <ul>
          {subs.map((s, i) => (
            <li key={s + i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="treatments-section">
      <h2 className="treatments-heading">Conditions We Treat</h2>

      {/* --- Mobile Drawer --- */}
      <div className="treatments-card mobile-only">
        {!expanded ? (
          <>
            {treatmentsList.slice(0, mobileInitial).map(renderTopic)}
            <button className="expand-btn" onClick={() => setExpanded(true)}>
              Show all <span className="chevron">&#9660;</span>
            </button>
          </>
        ) : (
          <>
            <div className="treatments-columns">
              {/* Spliting the list into two columns for mobile expanded */}
              {[0, 1].map(col =>
                <div className="treatments-col" key={col}>
                  {treatmentsList.filter((_, i) => i % 2 === col).map(renderTopic)}
                </div>
              )}
              <div className="col-divider" />
            </div>
            <button className="expand-btn" onClick={() => setExpanded(false)}>
              Show less <span className="chevron">&#9650;</span>
            </button>
          </>
        )}
      </div>

      {/* --- Desktop Grid --- */}
      <div className="treatments-desktop-card desktop-only">
        <div className="treatments-grid">
          {chunk(treatmentsList, 4).map((row, rowIdx) => (
            <div className="treatments-row" key={rowIdx}>
              {row.map(renderTopic)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
