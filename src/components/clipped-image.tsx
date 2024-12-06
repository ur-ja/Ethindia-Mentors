import React from "react";
import Mandala from "../../public/mandala.svg";

export default function ClippedImage({ url }: { url: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%", // Full width of the parent container
        paddingBottom: "100%", // Maintain aspect ratio (1:1 for square shape)
        clipPath:
          "polygon(18.3% 23.1%, 4.6% 28.7%, 9.3% 42.5%, 0% 54.1%, 11% 63.9%, 8.7% 78.5%, 23.3% 81.6%, 28.7% 95.4%, 42.6% 90.8%, 54.1% 100%, 64.1% 89%, 78.7% 91%, 81.6% 76.7%, 95.4% 71.3%, 90.7% 57.4%, 100% 45.8%, 88.9% 35.9%, 91% 21.4%, 76.8% 18.4%, 71.3% 4.6%, 57.4% 9.3%, 45.8% 0%, 36% 11%, 21.4% 8.8%, 18.3% 23.1%)",
        WebkitClipPath:
          "polygon(18.3% 23.1%, 4.6% 28.7%, 9.3% 42.5%, 0% 54.1%, 11% 63.9%, 8.7% 78.5%, 23.3% 81.6%, 28.7% 95.4%, 42.6% 90.8%, 54.1% 100%, 64.1% 89%, 78.7% 91%, 81.6% 76.7%, 95.4% 71.3%, 90.7% 57.4%, 100% 45.8%, 88.9% 35.9%, 91% 21.4%, 76.8% 18.4%, 71.3% 4.6%, 57.4% 9.3%, 45.8% 0%, 36% 11%, 21.4% 8.8%, 18.3% 23.1%)",
        overflow: "hidden", // Ensures content outside the clip is hidden
      }}
    >
      <img
        src={Mandala.src}
        alt="Mandala background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <img
        src={url}
        alt="Clipped"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
