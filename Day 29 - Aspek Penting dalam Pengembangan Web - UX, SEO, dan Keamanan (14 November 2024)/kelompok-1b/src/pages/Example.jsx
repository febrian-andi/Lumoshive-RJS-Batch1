import React from "react";
import Typography from "../components/Typography";

const Example = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title / Header 1 (H1) */}
      <Typography variant="h1" color="text-dark-blue-100">
        Title / Header 1 - H1
      </Typography>

      {/* Title / Header 2 (H2) */}
      <Typography variant="h2" color="text-peach-red-100" className="mt-4">
        Title / Header 2 - H2
      </Typography>

      {/* Title / Header 3 (H3) */}
      <Typography variant="h3" color="text-black-shade" className="mt-4">
        Title / Header 3 - H3
      </Typography>

      {/* Subtitle / Header 3 / Bigcopy */}
      <Typography
        variant="subtitle"
        color="text-off-white"
        className="mt-4 bg-peach-red-100"
      >
        Subtitle / Header 3 / Bigcopy
      </Typography>

      {/* Strong / Bold */}
      <Typography variant="strong" color="text-dark-blue-100" className="mt-4">
        Strong / Bold Text
      </Typography>

      {/* Bodycopy (Regular Text) */}
      <Typography variant="bodycopy" color="text-black-shade" className="mt-4">
        This is some body text. You can adjust its style and color.
      </Typography>

      {/* Small Copy */}
      <Typography variant="small" color="text-peach-red-100" className="mt-4">
        Small Copy
      </Typography>

      {/* Button Text */}
      <Typography
        variant="button"
        color="text-off-white"
        className="mt-4 bg-peach-red-100"
      >
        Button Text
      </Typography>

      {/* Pretext */}
      <Typography variant="pretext" color="text-black-shade" className="mt-4">
        Pretext (Small Text)
      </Typography>

      {/* Label */}
      <Typography
        variant="label"
        color="text-off-white"
        className="mt-4 bg-peach-red-100"
      >
        Label Text
      </Typography>
    </div>
  );
};

export default Example;
