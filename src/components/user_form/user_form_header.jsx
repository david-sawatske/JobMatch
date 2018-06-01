import React from 'react';

const UserFormHeader = ({ activeIdx, setIdx }) => {
  const componentHeadings = [ "Personal Info", "CV & Photo",
                              "Locations", "Skills",
                              "Benefits", "Salary" ]

  const handleClick = idx => {
    if (activeIdx != idx) {
      setIdx(idx)
    }
  }

  return (
    <div>
      { componentHeadings.map((heading, idx) => {
        const compClass = (idx === activeIdx) ? "current-heading" : "heading";

        return (
          <h2 key={idx}
              className={compClass}
              onClick={() => handleClick(idx)}>
            {heading}
          </h2>
        )
      })}
    </div>
  )
};

export default UserFormHeader;
