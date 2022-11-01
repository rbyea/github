import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <div className="app-user">
    <ContentLoader 
      speed={2}
      width={488}
      height={318}
      viewBox="0 0 488 318"
      backgroundColor="#3b518d"
      foregroundColor="#1b243a"
      {...props}
    >
      <circle cx="72" cy="73" r="71" /> 
      <rect x="152" y="5" rx="9" ry="9" width="332" height="15" /> 
      <rect x="153" y="62" rx="9" ry="9" width="330" height="78" /> 
      <rect x="153" y="31" rx="9" ry="9" width="332" height="15" /> 
      <rect x="3" y="171" rx="9" ry="9" width="479" height="78" /> 
      <rect x="-1" y="269" rx="9" ry="9" width="302" height="15" /> 
      <rect x="0" y="295" rx="9" ry="9" width="302" height="15" />
    </ContentLoader>
  </div>

)

export default Skeleton