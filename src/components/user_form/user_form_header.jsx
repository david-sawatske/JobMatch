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
    <div className="user-header">
      { componentHeadings.map((heading, idx) => {
        const compClass = (idx === activeIdx) ? "current-heading" : "heading";

        return (
          <ul>
            <li key={idx}
                className={compClass}
                onClick={() => handleClick(idx)}>
              <h3>{ heading }</h3>
            </li>
          </ul>
        )
      })}
    </div>
  )
};

export default UserFormHeader;
