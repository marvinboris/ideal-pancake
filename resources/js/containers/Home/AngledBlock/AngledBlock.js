import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const angledBlock = ({ children, iconColor, stackColor, color, bgColor, className, inverse, title, number }) => (
    <Col md={6} className={"d-flex justify-content-center align-items-center p-4 embed-responsive embed-responsive-1by1 position-relative " + className} style={{ overflow: 'visible' }}>
        <div className={"embed-responsive w-100 embed-responsive-1by1 position-absolute rounded-lg shadow-lg bg-" + bgColor} style={{ top: 0, overflow: 'visible', transformOrigin: "center", transform: "scale(.7)" }}>
            <div className={"embed-responsive w-100 embed-responsive-1by1 position-absolute d-flex justify-content-center align-items-center rounded-lg shadow-lg bg-" + bgColor} style={{ transformOrigin: "center", transform: "rotate(" + (inverse ? '-' : '') + "15deg", top: 0 }}>
                <div className="position-absolute px-5 w-100" style={{ transformOrigin: "center", transform: "rotate(" + (inverse ? '' : '-') + "15deg)" }}>
                    <div className={"mb-4 text-" + iconColor}>
                        <div className={"embed-responsive embed-responsive-1by1 rounded-circle border border-8 mr-2 border-" + iconColor + " bg-" + stackColor + " d-flex justify-content-center align-items-center"} style={{ width: 60 }}>
                            <FontAwesomeIcon icon="desktop" />
                        </div>
                    </div>
                    <span className="position-absolute" style={{ top: 0, right: 0 }}>
                        {number}
                    </span>
                    <div className={"text-700 text-" + color}>
                        <h4 className="text-700">
                            {title}
                        </h4>
                        <div className="text-small text-300">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Col>
);

export default angledBlock;
