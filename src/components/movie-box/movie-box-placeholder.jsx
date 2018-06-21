import * as React from "react";
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';

export function MovieBoxPlaceholder() {
  return (
    <div className="movie-box">
      <RectShape className="movie-image" style={{ width: null, height: null, marginRight: null }} />
      <div className="movie-info">
        <TextBlock color="#8c8c8c" rows={2} />
      </div>
    </div>
  );
}
