import React from "react";
import "./Button.scss";
import classes from './Button.scss';

const button = (props) => (
    // <div className={props.className}>
      <a className={props.className} href={props.href} target={props.newTab && "_blank"} onClick={props.clicked}>
      {props.children}
      </a>
    // </div>

);

export default button;


/* <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} /> */
{/* <Button btnType="Danger" clicked={props.purchaseCancelled}>
CANCEL
</Button> */}

{/* <button
disabled={props.disabled}
className={[classes.Button, classes[props.btnType]].join(' ')}
onClick={props.clicked}>{props.children}</button> */}