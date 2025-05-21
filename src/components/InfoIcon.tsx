import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./TeachingStrategiesModal.css";

interface InfoIconProps {
  onClick: () => void;
}

const InfoIcon: React.FC<InfoIconProps> = ({ onClick }) => {
  return (
    <OverlayTrigger
      placement="left"
      overlay={<Tooltip id="info-tooltip">View teaching strategies</Tooltip>}
    >
      <div
        className="info-icon"
        onClick={onClick}
        role="button"
        aria-label="Information about teaching strategies"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          <circle
            cx="8"
            cy="8"
            r="7.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </OverlayTrigger>
  );
};

export default InfoIcon;
