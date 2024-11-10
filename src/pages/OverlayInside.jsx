/* eslint-disable react/prop-types */
import  { forwardRef } from "react";

const OverlayInside = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll text-white"
  >
    <div style={{ height: "150vh" }}>
      <div className="dot">
        <h1>headset</h1>
        Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
      </div>
    </div>
    <div style={{ height: "150vh" }}>
      <div className="dot">
        <h1>headphone</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a users ears.
      </div>
    </div>
    <div style={{ height: "110vh" }}>
      <div className="dot">
        <h1>rocket</h1>
        A rocket (from Italian: rocchetto, lit bobbin/spool) is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a rocket engine.
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1>turbine</h1>
        A turbine (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex) is a rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.
      </div>
    </div>
  
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
));

OverlayInside.displayName = "OverlayInside";  // Add display name for the component

export default OverlayInside;
